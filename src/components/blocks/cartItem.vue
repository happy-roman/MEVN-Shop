<template>
    <div>
        <a href="#"><img :src="img" alt="img" class="cart-img-small"></a>
        <div>
            <a href="#">{{cartItem.product_name}}</a>
            <p><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
            </p>
            <p class="pink">{{cartItem.quantity}}  x   $ {{cartItem.price}}</p>
        </div>
        <button class="cart-cancel" @click="remove">
            <i class="fas fa-times-circle"></i>
        </button>
    </div>
</template>

<script>
export default {
  name: 'cartItems',
  props: ['cartItem', 'img'],
  methods: {
    remove() {
      this.$store.dispatch('cart/removeFromCart', this.cartItem);
    },
  },
};
</script>
<style lang="css">
.cart-img-small{
  width: 72px;
  height: 85px;
}
</style>
