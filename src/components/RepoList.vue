<template>
    <ul class="respositories__list">
        <li v-for="repo in repos" :key="repo.id" class="repositories__item">
            <RepoItem :repo="repo"/>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .respositories__list {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>

<script>
export default {
    name: 'RepoList',

    props: {
        repos: {
            type: Array,
            required: true
        }
    },

    components: {
        RepoItem: () => import('./RepoItem')
    }
}
</script>