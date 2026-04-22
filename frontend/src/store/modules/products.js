export default {
  namespaced: true,
  state() {
    return {
      products: [],
    };
  },
  getters: {
    products(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
  },
  actions: {
    // 'https://mevn-shop.vercel.app/api/products
    async getProducts(context, url = 'products') {
      await context.rootState.getFetch(url)
        .then((data) => {
          context.commit('setProducts', data);
        });
    },
  },
};
