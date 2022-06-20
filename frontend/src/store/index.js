import Vue from 'vue';
import Vuex from 'vuex';
import userCart from './modules/user-cart';
import productsStore from './modules/products';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    products: productsStore,
    cart: userCart,
  },
  state() {
    return {
      userAuth: false,
      isAdmin: false,
      async getFetch(url, init = null) {
        try {
          const result = await fetch(url, init);
          if (!result.ok) throw Error(result.statusText);
          return await result.json();
        } catch (error) {
          throw new Error(error || 'Поймали ошибку');
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

store.dispatch('products/getProducts');
store.dispatch('cart/getCart');

export default store;
