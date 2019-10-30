<template>
  <div id="app">
    <template v-if="!isHome">
      <Navbar/>
      <div class="content">
        <router-view/>
      </div>
    </template>
    <router-view v-else></router-view>
  </div>
</template>

<style lang="scss">
  @import '@/sass/main.scss';
  .content {
    margin-top: 63px;
    padding: 20px;
  }
</style>

<script>
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'App',
  components: {Navbar},
  computed: {
    isHome() {
      return this.$route.path === '/';
    }
  }
}
</script>
