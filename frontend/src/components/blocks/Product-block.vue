<template>
  <section class="product-block container">
    <h3>Fetured Items</h3>
    <p>Shop for items based on what we featured in this week</p>
    <products/>
    <button class="browse-all">Browse All Product ></button>
    <div class="feature">
      <div class="feature-banner">
        <div class="feature-banner-text">
          <p>30% <span class="pink">OFFER </span></p>
          <p>for women</p>
        </div>
      </div>
      <div class="feature-box">
        <div class="delivery">
          <img src="img/car.svg" alt="car">
          <div class="feature-box-text">
            <ul>
              <li>Free Delivery</li>
              <li>Worldwide delivery on all. Authorit tively morph next-generation
                  innov tion with extensive models.</li>
            </ul>
          </div>
        </div>
        <div class="sales">
          <img src="img/procent.svg" alt="procent">
          <div class="feature-box-text">
            <ul>
              <li>Sales & discounts</li>
              <li>Worldwide delivery on all. Authorit tively morph next-generation
                  innov tion with extensive models.</li>
            </ul>
          </div>
        </div>
        <div class="quality">
          <img src="img/qween.svg" alt="qween">
          <div class="feature-box-text">
            <ul>
              <li>Quality assurance</li>
              <li>Worldwide delivery on all. Authorit tively morph next-generation
                  innov tion with extensive models.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import products from '@/components/blocks/Products.vue';

export default {
  name: 'ProductBlock',
  components: {
    products,
  },
};
</script>

<style scoped>

</style>
