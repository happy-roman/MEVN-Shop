export default {
  namespaced: true,
  state() {
    return {
      userCart: [],
      userCartId: '',
    };
  },
  getters: {
    userCart(state) {
      return state.userCart;
    },
  },
  mutations: {
    setCart(state, data) {
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
    // https://mevn-shop.vercel.app/api/cart
    async getCart(context, userId) {
      const url = `cart/${userId}`;
      await context.rootState.getFetch(url)
        .then((data) => {
          context.commit('setCart', data.cartItems);
        });
    },
    addToCart(context, product, userId = '637da7066cdf70aa8d620970') {
      const finded = context.state.userCart.find((el) => el.id_product === product.id_product);
      let methodForCall = '';
      let body = {};
      let action = () => { };
      // https://mevn-shop.vercel.app/api/cart
      let url = 'cart';
      if (finded) {
        methodForCall = 'PUT';
        body = { userId, quantity: product.quantity || 1 };
        action = () => { finded.quantity += product.quantity || 1; };
        url += `/${finded.id_product}`;
      } else {
        methodForCall = 'POST';
        body = { userId, quantity: 1, ...product };
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
    // https://mevn-shop.vercel.app/api/cart
    removeFromCart(context, product, url = 'cart') {
      const find = context.state.userCart.find((el) => el.id_product === product.id_product);
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
