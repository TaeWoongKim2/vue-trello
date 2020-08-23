const getters = {
  // Component의 computed와 유사! isAuth라는 변수처럼 사용이 가능!
  isAuth (state) {
    return !!state.token;
  }
}

export default getters