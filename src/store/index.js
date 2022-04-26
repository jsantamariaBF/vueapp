import { createStore } from 'vuex'

export default createStore({
  state: {
    token: null
  },
  mutations: {
    setToken(state, payload){
      state.token = payload
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const requestedOption = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user)
        }
        const res = await fetch('https://backend-vueapp.herokuapp.com/api/user/login', requestedOption);
        console.log(res)
        // const userDB = await res.json();
        // commit('setToken', userDB.data.token);
        // localStorage.setItem('token2', userDB.data.token);
      } catch (error) {
        console.log('error: ', error);
      }
    },
    grabToken({ commit }) {
      if(localStorage.getItem('token')) {
        commit('setToken', localStorage.getItem('token'))
      } else {
        commit('setToken', null);
      }
    }
  },
  modules: {
  }
})
