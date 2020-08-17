<template>
  <div class="card">
    Card
    <div v-if="loading">Card Loading...</div>
    <div v-else>
      <p>Card Id: {{ cid }}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Card',
  components: {
    
  },
  watch: {
    // 감시자(watcher)를 통해 라우터의 URL 변화를 감지하고, ID값을 변경시킬 수 있다!
    '$route': {
      // this.fetchCard(); --> (Better Coding)
      // 객체 형태로 변경하면, created()와의 중복 코드를 피할 수 있다!
      handler: "fetchCard",
      immediate: true
    }
  },  
  created() {
    // this.fetchCard();
  },
  data() {
    return {
      cid: 0,
      loading: false,
    }
  },
  methods: {
    fetchCard() {
      this.loading = true;
      setTimeout(() => {
        this.cid = this.$route.params.cid;
        this.loading = false;
      }, 500);
    }
  },
}
</script>
