import Vue from 'vue';
import Vuex from 'vuex';
import cart from './modules/user-cart';
import products from './modules/products';
import user from './modules/user';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products,
    cart,
    user,
  },
  state() {
    return {
      userAuth: false,
      isAdmin: false,
      async getFetch(url, data = null) {
        try {
          const result = await fetch(`http://localhost:5599/api/${url}`, data);
          // if (!result.ok) throw Error(result.statusText);
          return result.json();
        } catch (error) {
          throw new Error(error || 'Поймали ошибку при обращении к серверу');
        }
      },
    };
  },
  mutations: {
    userAuth(state) {
      state.userAuth = !state.userAuth;
    },
  },
  actions: {
    toggleAuth(context) {
      context.commit('userAuth');
    },
  },
  getters: {
    getUserAuth(state) {
      return state.userAuth;
    },
  },
});

export default store;
