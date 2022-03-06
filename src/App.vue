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
import { provide } from 'vue';

export default {
  setup() {
    //https://vuejs.org/guide/components/provide-inject.html#provide
    provide('baseURL', 'https://www.openligadb.de/api/');
  },
  components: {
    'app-nav': AppNav,
  },
};
</script>


<style>
.app-header {
  margin-bottom: 40px;
}
</style>
