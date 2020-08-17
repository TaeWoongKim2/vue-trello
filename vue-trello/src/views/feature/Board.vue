<template>
  <div class="board">
    Board
    <p>Board Id: {{ bid }}</p>
    <ul>
      <li><router-link :to="`/b/${bid}/c/1`">Card Name#1</router-link></li>
      <li><router-link :to="`/b/${bid}/c/2`">Card Name#2</router-link></li>
      <li><router-link :to="`/b/${bid}/c/3`">Card Name#3</router-link></li>
    </ul>
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
    this.bid = this.$route.params.bid;
  },
  data() {
    return {
      bid: 0
    }
  }
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
