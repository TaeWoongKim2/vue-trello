<template>
  <div>
    <div class="home-title">EHOTO's Boards created by Vue.js</div>
    <div class="board-list" ref="boardList">

      <div 
        class="board-item" 
        v-for="b in boards" 
        :key="b.id" 
        :data-bgcolor="b.bgColor" 
        ref="boardItem"
      >
        <router-link :to="`/b/${b.id}`">
          <div class="board-item-title">{{ b.title }}</div>
        </router-link>
      </div>

      <div class="board-item board-item-new">
        <a class="new-board-btn" href="" @click.prevent="SET_IS_ADD_BOARD(true)">
          Create new board...
        </a>
      </div>

      <AddBoard v-if="isAddBoard" />

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
// import {board} from '../api'
import AddBoard from '@/components/modal/AddBoard'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    AddBoard
  },
  data() {
    return {
      loading: false,
      error: '',
      // boards: [],
    }
  },
  computed: {
    // ES6의 해체 문법 !!!
    ...mapState([
      'isAddBoard',
      'boards'
    ]),
    // 다른 속성 추가 가능 !!!
  },
  created() {
    this.fetchData()
  },
  updated() {
    // created() 가 실행될 때, data()의 변경이 있을 떄 실행된다.
    this.$refs.boardItem.forEach(el => {
      el.style.backgroundColor = el.dataset.bgcolor;
    })

  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    ...mapActions([
      'FETCH_BOARDS'
    ]),
    // addBoard() {
    //   // console.log('addBoard()');
    //   // this.isAddBoard = true;
    //   this.$store.commit('SET_IS_ADD_BOARD', true);
    // },
    fetchData() {
      this.loading = true;
      this.FETCH_BOARDS().finally(() => {
        this.loading = false;
      });

      // board.fetch()
      //   .then(data => {
      //     // console.log(data);
      //     this.boards = data.list;
      //   })
      //   .finally(() => {
      //     this.loading = false;
      //   });

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
    },
    onAddBoard() {
      // API
      this.fetchData();
      // board.create(title)
      //   .then(() => this.fetchData());
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-title {
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
}
.board-list {
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
.board-item {
  width: 18%;
  height: 100px;
  margin: 0 2% 20px 0;
  border-radius: 3px;
}
.board-item-new {
  background-color: #ddd;
}
.board-item a {
  text-decoration: none;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.board-item a:hover,
.board-item a:focus {
  background-color: rgba(0,0,0, .1);
  color: #666;
}
.board-item-title {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
}
.board-item a.new-board-btn {
  font-weight: 700;
  color: #888;
}
</style>
