const users = {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  mutations: {
    getUser(state, data) {
      console.log(data[0]);
      state.user = data;
    },
  },
  actions: {
    getUser(context, url = 'http://localhost:5599/api/users') {
      context.rootState.getFetch(url)
        .then((data) => {
          context.commit('getUser', data);
        });
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
};

export default users;
