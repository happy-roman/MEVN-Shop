<template>
  <div class="cart-block">
    <a href="#"><img class="cart" src="/img/cart.svg" alt="cart"></a>
    <div class="cart-open">
      <div v-if="this.userCart.length === 0 || this.userCart.length === undefined">
        <p class="cart-open__empty">Your cart is empty</p>
      </div>
      <div v-else>
        <div class="cart-block">
          <div class="cart-product">
            <cartItems class="cart-item" v-for="item of this.userCart" :key="item.id_product"
              :cart-item="item" :img="item.img || imgCart">
            </cartItems>
            <div>
              <p>total</p>
              <p>$ {{ total }}</p>
            </div>
          </div>
        </div>
        <div class="cart-btn">
          <a href="checkout.html">Checkout</a>
          <a href="shopping-cart.html">Go to cart</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import cartItems from '@/components/blocks/cartItem.vue';

export default {
  name: 'header-cart',
  components: {
    cartItems,
  },
  data() {
    return {
      imgCart: 'https://placehold.it/72x85',
      showCart: false,
      user: this.$store.state.user,
    };
  },
  mounted() {
    /**
     * TODO получить id корзины пользователя пользователя для получения корзины
     */
    // const userCartId = this.user.cart;
    // this.getCart('637da7066cdf70aa8d620970');
    this.getCart('637e014345c82bcb3227a6b8');
  },
  computed: {
    ...mapGetters('cart', ['userCart']),
    total() {
      let total = 0;
      this.userCart.forEach((el) => {
        total += (+el.price * el.quantity);
      });
      return total.toFixed(2);
    },
  },
  methods: {
    ...mapActions('cart', ['getCart']),

  },
};
</script>
