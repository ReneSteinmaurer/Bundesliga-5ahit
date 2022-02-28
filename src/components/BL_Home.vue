<template>
  <div class="hello">
    <h1 class="text-center">{{ msg }}</h1>
    <div class="row justify-content-center">
      <div class="col-auto">
        <table class="table table-responsive">
          <thead>
            <tr>
              <td>Platz</td>
              <td></td>
              <td>Verein</td>
              <td>Sp</td>
              <td>S</td>
              <td>U</td>
              <td>N</td>
              <td>T</td>
              <td>GT</td>
              <td>Pkte</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in teams" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <img :src="item.TeamIconUrl" height="30" />
              </td>
              <td>{{ item.ShortName }}</td>
              <td>{{ item.Matches }}</td>
              <td>{{ item.Won }}</td>
              <td>{{ item.Draw }}</td>
              <td>{{ item.Lost }}</td>
              <td>{{ item.Goals }}</td>
              <td>{{ item.OpponentGoals }}</td>
              <td>{{ item.Points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Deutsche Bundesliga',
  props: {
    msg: String,
    teams: Object,
  },
  setup() {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
