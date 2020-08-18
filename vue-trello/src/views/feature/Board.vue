<template>
  <div class="board">
    Board - (ID : {{ bid }})
    <div v-if="loading">Board Loading...</div>
    <div v-else>
      <ul>
        <li><router-link :to="`/b/${bid}/c/1`">Card Name#1</router-link></li>
        <li><router-link :to="`/b/${bid}/c/2`">Card Name#2</router-link></li>
        <li><router-link :to="`/b/${bid}/c/3`">Card Name#3</router-link></li>
      </ul>
    </div>
    <hr>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Board',
  components: {
    
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      bid: 0,
      loading: false,
    }
  },
  methods: {
    fetchData() {
      // API에서 데이터를 받아서 data()객체에 추가하는 역할을 담당하는 Method.
      this.loading = true;
      setTimeout(() => {
        this.bid = this.$route.params.bid;
        this.loading = false;
      }, 500);
    }
  },
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #3ca3f8;
}
</style>
