<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>

    <br>
    <hr>
    <br>

    <div v-if="loading">Loading...</div>
    <div v-else>
      API Result: {{ boards }}
      <div v-for="board in boards" :key="board.id">
        {{ board }}
      </div>
      <div v-if="apiErr">
        <pre>
          {{ apiErr }}
        </pre>
      </div>
    </div>

    <h3>Boards</h3>
    <ul>
      <li><router-link to="/b/1">Name#1</router-link></li>
      <li><router-link to="/b/2">Name#2</router-link></li>
      <li><router-link to="/b/3">Name#3</router-link></li>
    </ul>

    <br>
    <hr>
    <br>

    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
import {board} from '../api'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      loading: false,
      boards: [],
      apiErr: ''
    }
  },
  created() {
    this.fetchData()
  },
  updated() {
    // created() 가 실행될 때, data()의 변경이 있을 떄 실행된다.
    
  },
  methods: {
    fetchData() {
      this.loading = true;

      board.fetch()
        .then(data => {
          this.boards = data
        })
        .finally(() => {
          this.loading = false;
        });

      // axios.get('http://localhost:3000/boards')
      //   .then(res => {
      //     this.boards = res.data;
      //   })
      //   .catch(() => {
      //     // this.apiErr = res.response.data;
      //     this.$router.replace('/login');
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });

      // const req = new XMLHttpRequest();
      // req.open('GET', 'http://localhost:3000/health');
      // req.send();
      // req.addEventListener('load', () => {
      //   this.loading = false;
      //   this.apiRes = {
      //     status: req.status,
      //     statusText: req.statusText,
      //     response: JSON.parse(req.response)
      //   }
      // });
    }
  }
}
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
