<template>
  <div id="app">
    <button @click="incrementCount">Cliquer</button>
    {{count}}
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  computed: {
    count: function()
    {
      return this.$store.state.count;
    }
  },
  methods: {
    incrementCount: function()
    {
        this.$store.dispatch("itCount");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
