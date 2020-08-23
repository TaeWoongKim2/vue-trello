<template>
  <Modal>
    <div slot="header">
      <h2>
        Create new board
        <a 
          href="" 
          class="modal-default-button" 
          @click.prevent="SET_IS_ADD_BOARD(false)"
        >
          &times;
        </a>
      </h2>
    </div>
    <div slot="body">
      <form id="add-board-form" 
        @submit.prevent="addBoard">
        <input class="form-control" type="text" v-model="input" ref="input">
      </form>
    </div>
    <div slot="footer">
      <button 
        class="btn" 
        :class="{'btn-success': valid}" 
        type="submit" 
        form="add-board-form" 
        :disabled="!valid"
      >
        Create Board
      </button>
    </div>
  </Modal>
</template>

<script>
import Modal from './Modal.vue'
import { mapMutations, mapActions } from 'vuex';

export default {
  components: {
    Modal
  },
  data() {
    return {
      input: '',
      valid: false
    }
  },
  watch: {
    input(v) {
      this.valid = v.trim().length > 0;
    }
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    ...mapMutations([
      'SET_IS_ADD_BOARD'
    ]),
    // close() {
    //   this.$emit('close');
    // },
    ...mapActions([
      'ADD_BOARD'
    ]),
    addBoard() {
      this.$emit('submit');
      this.SET_IS_ADD_BOARD(false);
      this.ADD_BOARD({title: this.input});
      // this.$store.dispatch('ADD_BOARD', {title: this.input});
      // this.$emit('close');
      // this.$emit('submit', title);
    }
  }
}
</script>

<style scoped>
.modal-header h2 {
  text-align: left;
}
.modal-header .modal-default-button {
  float:right;
}
.modal-body .form-control {
  width: -webkit-fill-available;
  height: 24px;
}
.modal-footer .btn {
  width: -webkit-fill-available;
  height: 32px;
}
.modal-footer div {
  margin-bottom: 20px;
}
</style>
