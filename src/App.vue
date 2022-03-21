<template>
    <AppNav></AppNav>
    <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
 <!--  <app-nav></app-nav> -->
  <router-view />
</template>
<script>
//import AppNav from './components/AppNav';
import AppNav from "./components/AppNav";
export default {
  setup() {},
  components: {
      AppNav
    // 'app-nav': AppNav,
  },
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
