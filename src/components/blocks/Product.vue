<template>
    <li class="product-list">
        <div class="product-pic-price">
            <div class="mask">
                <button class="shake-top buy-btn" @click="add">
                    <img src="img/Form_1_copy.svg" alt="cart">
                     Add to Cart
                </button>
            </div>
          <router-link :to="getProductLink()">
            <img :src="product.img" alt="prodImg" class="product-img">
          </router-link>
            <div class="product-price">
                <p class="product-name">{{ product.product_name }}</p>
                <p class="pink price">$<span>{{ product.price }}</span></p>
            </div>
        </div>
    </li>
</template>

<script>

export default {
  name: 'Product',
  props: ['product'],
  data() {
    return {
    };
  },
  methods: {
    getProductLink() {
      return { name: 'goods', params: { id: this.product.id_product } };
    },
    add() {
      this.$store.dispatch('cart/addToCart', this.product);
    },
  },
};
</script>

<style scoped>

</style>
