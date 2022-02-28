<template>
  <div class="home">
    <BL_Home msg="Die deutsche Bundesliga im Übeerblick ..." :teams="teams" />
  </div>
</template>

<script>
// @ is an alias to /src
import BL_Home from '@/components/BL_Home.vue';
import { onMounted, ref } from 'vue';

export default {
  name: 'Home',
  components: {
    BL_Home,
  },
  setup() {
    let teams = ref([{}]);

    onMounted(() => {
      console.log('====================================');
      fetch('https://www.openligadb.de/api/getbltable/bl1/2021')
        .then((res) => res.json())
        .then((json) => {
          teams.value = json;
          console.log('First user in the array:');
          console.log(json[1]);
        })
        .catch((err) => {
          console.log('Error occured ' + err);
        });
    });

    return {
      teams,
    };
  },
};
</script>
