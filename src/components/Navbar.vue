<template>
    <div class="navbar">
        <div class="brand">
            <router-link :to="'/'">
                <h3>GithubViewer</h3>
            </router-link>
        </div>
        <div class="searchbar">
            <SearchBar/>
        </div>
    </div>
</template>

<script>
import SearchBar from './SearchBar'
export default {
    components: {SearchBar}
}
</script>

<style lang="scss">
    .navbar {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #24292e;
        color: white;
        padding: 16px;
        display: flex;
        align-items: center;

        .brand  {
            margin-right: 16px;
            a {
                color: white;
                text-decoration: none;
                padding: 0;

                h3 {
                    margin: 0;
                }
            }
        }
    }
</style>