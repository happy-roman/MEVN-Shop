export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },
  },
  actions: {
    async fetchUser(context, url = 'users') {
      await context.rootState.getFetch(url)
        .then((data) => {
          context.commit('setUser', data[0]);
        });
    },
  },
};
