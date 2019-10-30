<template>
    <div class="repositories">
        <h1>{{username}}'s Repositories</h1>
        <RepoList v-if="!fetching && !error" :repos="repos"/>
        <Loading v-if="fetching"/>
        <div v-if="!fetching && error"><b v-text="message"></b></div>
    </div>
</template>

<script>
import { getRepos } from '@/services/githubService.js';

export default {
    data() {
        return {
            username: '',
            fetching: false,
            message: '',
            error: false,
            repos: []
        }
    },

    watch: {
        $route: function() {
            this.username = this.$router.currentRoute.params.username;
            this.getUserRepositories();
        }
    },

    components: {
        RepoList: () => import('@/components/RepoList.vue'),
        Loading: () => import('@/components/Loading.vue')
    },

    methods: {
        async getUserRepositories() {
            this.fetching = true;
            this.error = false;
            try {
                const response = await getRepos(this.username);
                this.repos = await response.json();
                if (!response.ok) throw new Error(response.statusText);
                this.fetching = false;
            } catch (error) {
                this.message = error;
                this.fetching = false;
                this.error = true;
            }
        }
    },

    created() {
        this.username = this.$router.currentRoute.params.username;
        this.getUserRepositories();
    }
}
</script>