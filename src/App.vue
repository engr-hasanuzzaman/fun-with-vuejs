<template>
  <Application>
    <template v-slot:content>
      <Home />
    </template>
  </Application>
</template>

<script>
import Home from './components/Home.vue';
import Application from './components/Application';

export default {
  name: 'App',
  components: {
    Home,
    Application,
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
