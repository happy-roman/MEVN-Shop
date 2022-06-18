<template>
    <div>
        <promo/>
        <category/>
        <product-block/>
    </div>
</template>

<script>
import Promo from '@/components/blocks/Promo.vue';
import Category from '@/components/blocks/Category.vue';
import ProductBlock from '@/components/blocks/Product-block.vue';

export default {
  name: 'Index',
  components: {
    Promo,
    Category,
    ProductBlock,
  },
};
</script>

<style scoped>

</style>
