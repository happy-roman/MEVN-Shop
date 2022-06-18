<template>
  <div>
    <div v-if="product">
      <section class="single-page-slider">
        <button class="slider-nav"><i class="fas fa-chevron-left"></i></button>
        <img :src="product.img" alt="img">
        <button class="slider-nav"><i class="fas fa-chevron-right"></i></button>
      </section>
      <section class="description-product container">
        <div class="decripsion">
          <p class="pink">{{ product.category_name }} COLLECTION</p>
          <p>{{ product.product_name }}</p>
          <p>Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services.
            Completely visualize parallel core competencies rather than exceptional&nbsp;portals.
          </p>
          <div class="specifications">
            <div>
              <p>MATERIAL: <span>{{ product.material }}</span></p>
            </div>
            <div>
              <p>DESIGNER: <span>{{ product.designer }}</span></p>
            </div>
          </div>
          <p class="pink price-product price">$ {{ product.price }}</p>
          <div class="select-product">
            <div>
              <p>CHOOSE COLOR</p>
              <select id="color" class="selector-product">
                <option v-for="val in product.colors" :key="val">{{ val }}</option>
              </select>
            </div>
            <div>
              <p>CHooSE SIZE</p>
              <select id="size" class="selector-product">
                <option v-for="size in product.sizes" :key="size">{{ size }}</option>
              </select>
            </div>
            <div>
              <p>QUANTITY</p>
              <select id="quantity" class="selector-product" name="quantity" v-model="quantity">
                <option v-for="i of 10" :key=i>{{ i }}</option>
              </select>
            </div>
          </div>
          <button name="add-to-cart" class="pink" @click="add">
            <img src="/img/pink-cart.svg" alt="img"> Add to cart
          </button>
        </div>
      </section>
    </div>
    <div v-else class="product-not-found">
      <h3>Product not found</h3>
      <router-link to="/" class="product-not-found-link">You can back to main page</router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'product-page',
  data() {
    return {
      product: '',
      quantity: '',
    };
  },
  methods: {
    ...mapActions('cart', ['addToCart']),
    add() {
      if (this.quantity) {
        this.product.quantity = parseInt(this.quantity, 10);
        this.addToCart(this.product);
      } else {
        throw Error('enter quantity');
      }
    },
  },
  computed: {
    ...mapGetters('products', ['products']),
  },
  mounted() {
    const find = this.products.find(
      el => el.id_product === Number(this.$route.params.id),
    );
    if (find) {
      this.product = find;
    } else {
      fetch(`http://localhost:5000/api/products/${this.$route.params.id}`)
        .then(res => res.json())
        .then((data) => {
          this.product = data;
        })
        .catch((err) => {
          throw Error(err || 'Поймали ошибку');
        });
    }
  },
  watch: {
    $route() {
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(this.$route.params.id) || typeof this.$route.params.id === 'string') this.$router.push('/');
    },
  },
};

</script>
<style lang="css">
.product-not-found{
  margin: 30px auto;
  text-align: center;
}
.product-not-found-link{
    display: block;
    text-decoration: none;
    color: #6f6e6e;
    margin-top: 50px;
}
.product-not-found-link:hover{
      color: #f16d7f;
}
</style>
