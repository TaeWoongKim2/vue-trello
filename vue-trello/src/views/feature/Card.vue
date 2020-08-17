<template>
  <div class="card">
    Card
    <p>Card Id: {{ cid }}</p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Card',
  components: {
    
  },
  watch: {
    // 와쳐(watcher)를 통해 라우터의 URL 변화를 감지하고, ID값을 변경시킬 수 있다!
    '$route'() {
      this.cid = this.$route.params.cid;
    }
  },  
  created() {
    this.cid = this.$route.params.cid;
  },
  data() {
    return {
      cid: 0
    }
  }
}
</script>
