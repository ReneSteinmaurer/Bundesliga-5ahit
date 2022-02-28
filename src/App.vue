<template>
  <div>
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import AppNav from './views/AppNav';
export default {
  setup() {},
  components: {
    'app-nav': AppNav,
  },
};
</script>


<style>
.app-header {
  margin-bottom: 40px;
}
/* #app {
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
*/
</style>
