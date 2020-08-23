<template>
  <div class="login">
    <h2>Login to EHOTO</h2>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="email">Email</label>
        <input class="form-control" type="text" name="email" v-model="email" placeholder="e.g., test@test.com" autofocus />
      </div>
      <div class="form-group">
        <label for="password">Passwrod</label>
        <input class="form-control" type="password" v-model="password" placeholder="123123" />
      </div>
      <button 
        type="submit" 
        class="btn" 
        :class="{'btn-success' : !invalidForm}" 
        :disabled="invalidForm"
      >Login</button>
    </form>
    <p class="error" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
// import {authorizer, setAuthInHeader} from '../api'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      returnPath: '',
      error: ''
    }
  },
  computed: {
    invalidForm() {
      return !this.email || !this.password
    }
  },
  created() {
    this.returnPath = this.$route.query.rPath || '/'
  },
  methods: {
    ...mapActions([
      'LOGIN'
    ]),
    onSubmit() {
      this.error = '';
      // console.log(this.email, this.password);

      this.LOGIN({email: this.email, password: this.password})
        .then(() => {
          this.$router.push(this.returnPath);
        })
        .catch(err => {
          this.error = err.data.error;
        });
      // authorizer.login(this.email, this.password)
      //   .then(data => {
      //     // console.log(data);
      //     localStorage.setItem('token', data.accessToken);
      //     setAuthInHeader(data.accessToken);
      //     this.$router.push(this.returnPath);
      //   })
      //   .catch(err => {
      //     // console.log(err.data.error);
      //     this.error = err.data.error;
      //   });
    }
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 400px;
  margin: 0 auto; 
}
.error {
  color: #f00;
}
form button {
  width: 100%;
  height: 32px;
  margin-top: 10px;
}
form button.btn-success {
  background-color: #e4e4e4;
}
form .form-group {
  text-align: left;
  margin-bottom: 5px;;
}
form .form-group input {
  width: -webkit-fill-available;
  height: 24px;
}
</style>
