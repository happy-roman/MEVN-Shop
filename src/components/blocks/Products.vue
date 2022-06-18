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

import { mapGetters } from 'vuex';
import product from '@/components/blocks/Product.vue';

export default {
  name: 'Products',
  components: {
    product,
  },
  data() {
    return {
      imgCatalog: 'https://placehold.it/260x280',
    };
  },
  computed: {
    ...mapGetters('products', ['products']),
  },
};
</script>

<style scoped>

</style>
