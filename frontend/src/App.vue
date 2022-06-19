<template>
  <div id="app">
    <header-block/>
    <navigation/>
    <router-view/>
    <subscribe/>
    <footer-block/>
  </div>
</template>

<script>
import HeaderBlock from '@/components/blocks/Header-block.vue';
import Navigation from '@/components/blocks/Navigation.vue';
import Subscribe from '@/components/blocks/Subscribe.vue';
import FooterBlock from '@/components/blocks/Footer-block.vue';

export default {
  components: {
    HeaderBlock,
    Navigation,
    Subscribe,
    FooterBlock,
  },
};
</script>

<style lang="scss">
</style>
