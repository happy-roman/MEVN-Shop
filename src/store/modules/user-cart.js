const cartStore = {
  namespaced: true,
  state() {
    return {
      userCart: [],
    };
  },
  getters: {
    userCart(state) {
      return state.userCart;
    },
  },
  mutations: {
    getCart(state, data) {
      state.userCart = data;
    },
    addToCart(state) {
      return state.userCart;
    },
    removeFromCart(state) {
      return state.userCart;
    },
  },
  actions: {
    getCart(context, url = `${process.env.BASE_URL}/api/cart`) {
      context.rootState.getFetch(url)
        .then((data) => {
          context.commit('getCart', data.content);
        });
    },
    addToCart(context, product) {
      const find = context.state.userCart.find(el => el.id_product === product.id_product);
      let methodForCall = '';
      let body = {};
      let action = () => {};
      let url = `${process.env.BASE_URL}/api/cart`;
      if (find) {
        methodForCall = 'PUT';
        body = { quantity: product.quantity || 1 };
        action = () => { find.quantity += product.quantity || 1; };
        url += `/${find.id_product}`;
      } else {
        methodForCall = 'POST';
        body = Object.assign({ quantity: 1 }, product);
        action = () => { context.state.userCart.push(body); };
      }
      context.rootState.getFetch(url, {
        method: methodForCall,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
        .then((data) => {
          if (data.result === 1) {
            action();
          }
        });
      context.commit('addToCart');
    },
    removeFromCart(context, product, url = `${process.env.BASE_URL}/api/cart`) {
      const find = context.state.userCart.find(el => el.id_product === product.id_product);
      if (find.quantity > 1) {
        context.rootState.getFetch(`${url}/${find.id_product}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: -1 }),
        })
          .then((data) => {
            if (data.result === 1) {
              find.quantity -= 1;
            }
          });
      } else {
        context.rootState.getFetch(`${url}/${product.id_product}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((data) => {
            if (data.result === 1) {
              context.state.userCart.splice(context.state.userCart.indexOf(product), 1);
            }
          });
      }
      context.commit('removeFromCart');
    },
  },
};
export default cartStore;
