<template>
  <div class="container">
    <HeaderView @toggle-add-task="toggleAddTask" :showAddTask="showAddTask" title="Task Tracker"/>
    
    <router-view :showAddTask="showAddTask"></router-view>
    <FooterView />
  </div>
</template>

<script>

import HeaderView from './components/HeaderView'
import FooterView from './components/FooterView'

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView    
  },

  data () {
    return {
      showAddTask: false
    }
  },

  methods: {

    toggleAddTask () {     
      this.showAddTask = !this.showAddTask;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.container {
  width: 80%;
  border: 3px solid gray;
  margin: auto;
}
</style>
