<template>
  <div id="app">
    <div id="nav">
      <Home />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <!-- <router-view /> -->
  </div>
</template>
<script lang="ts">
import Vue from "vue"
import Home from '@/views/Home';
export default Vue.extend({
  components: {
    Home
  }
});
</script>
<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
}
html, 
body,
#app {
  width: 100%;
  height: 100%;
}
#nav {
  width: 100%;
  height: 100%;
}
</style>
