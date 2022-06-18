<template>
  <div class="home">
    <promo/>
    <category/>
    <product-block/>
  </div>
</template>

<script>

import Promo from '@/components/blocks/Promo.vue';
import ProductBlock from '@/components/blocks/Product-block.vue';
import Category from '@/components/blocks/Category.vue';

export default {
  name: 'Home',
  components: {
    Category,
    ProductBlock,
    Promo,
  },
};
</script>
