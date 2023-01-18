export default {
  state: {
    token: null,
  },
  getters: {
    getLoginStatus: (state) => state.login,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
      console.log({ token: payload });
    },
  },
  actions: {
    SET_TOKEN({ commit }, payload) {
      commit("SET_TOKEN", payload);
    },
  },
};
