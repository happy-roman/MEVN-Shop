<template>
  <ul class="products product-pic">
    <product
      v-for="item of this.products"
      :key="item.id_product"
      :product="item">
    </product>
  </ul>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import product from '@/components/blocks/Product.vue';

export default {
  name: 'ProductsBlock',
  components: {
    product,
  },
  data() {
    return {
      imgCatalog: 'https://placehold.it/260x280',
    };
  },
  mounted() {
    this.getProducts();
  },
  computed: {
    ...mapGetters('products', ['products']),
  },
  methods: {
    ...mapActions('products', ['getProducts']),
  },
};
</script>

<style scoped>

</style>
