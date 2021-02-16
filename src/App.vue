<template>
  <!-- <Application>
    <template v-slot:content>
      <Home />
    </template>
  </Application> -->
  <LifeCycle v-bind:clickCounter="counter" v-on:clicked="increment"/>
</template>

<script>
// import Home from './components/Home.vue';
// import Application from './components/Application';
import LifeCycle from './components/LifeCycle';

export default {
  name: 'App',
  components: {
    // Home,
    // Application,
    LifeCycle
  },
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    increment(){
      this.counter++;
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
  margin-top: 60px;
}
</style>
