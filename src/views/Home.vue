<template>
  <div class="home">
    <h1>Github Viewer</h1>
    <SearchBar/>
  </div>
</template>

<style lang="scss" scoped>
  .home {
    width: 100vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #24292e;
    flex-direction: column;
    
    h1 {
      margin-bottom: 20px;
      color: white;
    }
  }
</style>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'home',
  components: {
    SearchBar
  }
}
</script>
