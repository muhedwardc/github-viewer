<template>
    <div class="repositories__item-content">
        <h2><router-link :to="{name: 'README', params: {username: repo.owner.login, repository: repo.name}}" v-text="repo.name"></router-link></h2>
        <p v-text="repo.description"></p>
        <span>language: {{repo.language}}, Updated on {{convertedDate(repo.updated_at)}}</span>
    </div>
</template>

<style lang="scss" scoped>
    .repositories__item-content {
        padding: 24px 0px;
        border-bottom: 1px solid #e1e4e8;

        h2 {
            margin-bottom: 8px;
            
            a {
                color: #0366d6;
                text-decoration: none;
            }
        } 
    }
</style>

<script>
export default {
    name: 'RepoItem',
    
    props: {
        repo: {
            type: Object,
            required: true
        }
    },

    data() {
        return {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Des']
        }
    },

    methods: {
        convertedDate(timestamp) {
            const fullDate = new Date(timestamp);
            const date = fullDate.getDate();
            const month = this.months[fullDate.getMonth()];
            const year = fullDate.getFullYear();

            return month + ' ' + date + ', ' + year;
        }
    }
}
</script>