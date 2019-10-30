<template>
    <div class="readme">
        <h2><router-link :to="'/'+ routeParams.username">{{routeParams.username}}</router-link>/{{routeParams.repository}}'s README</h2>
        <ReadmeReader v-if="!fetching && !error" :data="rawReadme"/>
        <Loading v-if="fetching"/>
        <div v-if="!fetching && error"><b v-text="statusText"></b></div>
    </div>
</template>

<style lang="scss">
    .readme {
        > h2 {
            margin-bottom: 24px;

            a {
                color: #0366d6;
                text-decoration: none;
            }
        }
    }
</style>

<script>
import { getReadme } from '@/services/githubService.js'

export default {
    name: 'README',
    data() {
        return {
            routeParams: {},
            rawReadme: '',
            error: false,
            statusText: '',
            fetching: false
        }
    },

    methods: {
        async getRawReadme() {
            this.fetching = true;
            try {
                const response = await getReadme(this.routeParams.username, this.routeParams.repository);
                if (!response.ok) throw new Error(response.statusText);
                const readmeInfo = await response.json();
                const rawReadme = await fetch(readmeInfo.download_url);
                this.rawReadme = await rawReadme.text();
                this.fetching = false;
            } catch (error) {
                this.error = true;
                this.statusText = error;
                this.fetching = false;
            }
        }
    },

    created() {
        this.routeParams = this.$router.currentRoute.params
        this.getRawReadme();
    },

    components: {
        ReadmeReader: () => import('@/components/ReadmeReader.vue'),
        Loading: () => import('@/components/Loading.vue')
    }
}
</script>