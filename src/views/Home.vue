<template>
  <div class="home">
    <img
      alt="Vue logo"
      src="https://www.bundesliga.com/assets/logo/bundesliga_pos.svg"
    />
    <BL_Home msg="Die deutsche Bundesliga - alle Fakten" />
  </div>
</template>

<script>
// @ is an alias to /src
import BL_Home from '@/components/BL_Home.vue';

export default {
  name: 'Home',
  components: {
    BL_Home,
  },
};
</script>
