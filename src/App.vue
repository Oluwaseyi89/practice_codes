<template>
  <div class="container">
    <HeaderView :tasks="this.tasks" title="Task Tracker"/>
    <p>{{ this.tasks.day }}</p>
  </div>
</template>

<script>

import HeaderView from './components/HeaderView'

export default {
  name: 'App',
  components: {
    HeaderView    
  },

  data () {
    return {
      tasks: []
    }
  },

  created () {
    this.tasks = [
      {
          "id": 1,
          "day": "Monday",
          "text": "Meeting with my Doctor"
        },
        {
          "id": 2,
          "day": "Tueday",
          "text": "Shopping in the Grocery Store"
        }
    ]
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
