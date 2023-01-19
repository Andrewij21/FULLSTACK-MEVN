export default {
  state: {
    token: null,
    login: false,
  },
  getters: {
    getLoginStatus: (state) => state.login,
  },
  mutations: {
    SET_TOKEN(state, payload) {
      state.token = payload;
    },
    SET_LOGIN(state, payload) {
      state.login = payload;
    },
  },
  actions: {
    SET_TOKEN({ commit }, payload) {
      commit("SET_TOKEN", payload);
    },
    SET_LOGIN({ commit }, payload) {
      commit("SET_LOGIN", payload);
    },
  },
};
