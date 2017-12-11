<template>
  <div id="app">
    <img src="./assets/logo.png">
    <about-us></about-us>
    <router-view/>
  </div>
</template>

<script>
import AboutUs from '@/components/AboutUs';

export default {
  name: 'app',
  components: {
    AboutUs
  }
};
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
