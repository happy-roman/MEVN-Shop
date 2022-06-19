const productsStore = {
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
    getProducts(state, data) {
      data.forEach((el) => {
        state.products.push(el);
      });
    },
  },
  actions: {
    getProducts(context, url = 'https://mevn-shop.vercel.app/api/products') {
      context.rootState.getFetch(url)
        .then((data) => {
          context.commit('getProducts', data);
        });
    },
  },
};
export default productsStore;
