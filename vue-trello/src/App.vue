<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      
      <a href="" v-if="isAuth" @click.prevent="logout">Logout</a>
      <router-link to="/login" v-else>Login</router-link>  |
      
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <!-- router-view는 라우팅된 화면이 출력되는 부분이다. -->
  </div>
</template>

<script>
import { setAuthInHeader } from './api';

export default {
  computed: {
    isAuth() {
      return !!localStorage.getItem('token');
    }
  },
  methods: {
    logout() {
      setAuthInHeader(null);
      delete localStorage.token;
      this.$router.push('/login');
    }
  }
}
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
