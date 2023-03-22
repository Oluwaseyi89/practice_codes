<template>
  <HeaderView/>
  <router-view></router-view>
</template>

<script>
// import HomeView from './views/HomeView.vue'
import HeaderView from './components/HeaderView.vue'

export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style>
#app {
  margin: 0;
}
</style>
