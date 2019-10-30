<template>
    <div class="searchbar">
        <form action="searchbar__form" @submit.prevent="search">
            <input class="searchbar__input" type="text" name="username" id="username" v-model="username" placeholder="username" autofocus>
            <button class="searchbar__button" type="submit">Search</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .searchbar__input {
        border: none;
        outline: unset;
        background-color: rgba(255, 255, 255, 0.125);
        color: rgba(255, 255, 255, 0.7);
        padding: 8px 12px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }

    .searchbar__button {
        padding: 8px;
        border: none;
        cursor: pointer;
        background-color: rgba(255, 255, 255, 0.125);
        color: rgba(255, 255, 255, 0.7);
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-left: 1px solid rgba(255, 255, 255, 0.225);
    }
</style>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            username: ''
        }
    },
    methods: {
        search() {
            this.$router.replace('/' + this.username);
            this.username = '';
        }
    }
}
</script>