<template>
    <div class="home">
        <img
                alt="Vue logo"
                src="https://www.bundesliga.com/assets/logo/bundesliga_pos.svg"
        />
        <BL_Home msg="Die deutsche Bundesliga im Überblick..."
                 :teams="teams"/>
    </div>
</template>

<script>

    import BL_Home from '@/components/BL_Home.vue';
    import {onMounted, ref} from '@vue/runtime-core'

    export default {
        name: 'Deutsche Bundesliga',

        components: {
            BL_Home,
        },
        setup() {
            let teams = ref([{}]);
            let url = 'https://api.openligadb.de/getmatchdata/bl1/2020/8';
            onMounted(() => {
                console.log('Component Home ');
                fetch(url)
                    .then((res) => res.json()
                        .then((json) => {
                            teams.value = json;
                            console.log(json[0])
                        }))
            });
        }
    }
</script>
