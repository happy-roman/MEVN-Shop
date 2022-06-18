<template>
  <header class="header-block">
    <div class="container header-block__flex">
      <div class="header-block__left">
        <router-link to="/" class="logo">
          <img class="logo__img" src="/img/logo.png" alt="logo">
          <p>BRAN<span class="pink">D</span></p>
        </router-link>
        <details>
          <summary>Browse</summary>
          <div class="browse-menu">
            <div>
              <p>women</p>
              <hr>
              <ul>
                <li><a href="#">Dresses</a></li>
                <li><a href="#">Tops</a></li>
                <li><a href="#">Sweaters/Knits</a></li>
                <li><a href="#">Jackets/Coats</a></li>
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Denim</a></li>
                <li><a href="#">Leggings/Pants</a></li>
                <li><a href="#">Skirts/Shorts</a></li>
                <li><a href="#">Accessories </a></li>
              </ul>
            </div>
            <div>
              <p>men</p>
              <hr>
              <ul>
                <li><a href="#">Tees/Tank tops</a></li>
                <li><a href="#">Shirts/Polos</a></li>
                <li><a href="#">Sweaters</a></li>
                <li><a href="#">Sweatshirts/Hoodies</a></li>
                <li><a href="#">Blazers</a></li>
                <li><a href="#">Jackets/vests</a></li>
              </ul>
            </div>
          </div>
        </details>
        <form class="form" action="#">
          <!--suppress HtmlFormInputWithoutLabel -->
          <input type="text" placeholder="Search for Item...">
          <button><i class="fas fa-search"></i></button>
        </form>
      </div>
      <div class="header-block__right">
        <HeaderCart/>
        <details>
          <summary>My Account</summary>
          <div class="brows-account-menu">
            <div v-if="$store.state.userAuth">
              <div>
                <router-link :to=adminPageLink class="account-menu-link">Admin page</router-link>
              </div>
              <div>
                <router-link :to=adminUsersLink class="account-menu-link">Users</router-link>
              </div>
              <div>
                <router-link :to=adminProdLink class="account-menu-link">Products</router-link>
              </div>
              <button @click="accountShow" class="brows-account-menu-btn">Log Out</button>
            </div>
            <div v-else>
              <div>
                <button @click="accountShow" class="brows-account-menu-btn">Log in</button>
              </div>
              <div>
                <button class="brows-account-menu-btn">Register</button>
              </div>
            </div>
          </div>
        </details>
      </div>
    </div>
  </header>
</template>

<script>

import HeaderCart from '@/components/blocks/HeaderCart.vue';

export default {
  name: 'HeaderBlock',
  components: {
    HeaderCart,
  },
  data() {
    return {
      auth: this.$store.getters.getUserAuth,
    };
  },
  computed: {
    adminPageLink() {
      return { name: 'admin' };
    },
    adminProdLink() {
      return { name: 'adminProducts' };
    },
    adminUsersLink() {
      return { name: 'adminUsers' };
    },
  },
  methods: {
    accountShow() {
      this.$store.dispatch('toggleAuth');
    },
  },
};
</script>
<style lang="css">
.brows-account-menu {
  padding: 0 15px;
  border: #ececec 1px solid;
  border-radius: 3px;
  background: #fff;
  width: 130px;
  box-sizing: border-box;
  text-align: center;
}
.account-menu-link, .brows-account-menu-btn {
  display: block;
  margin: 10px auto;
  color: #222222;
  border: #ececec 1px solid;
  border-radius: 3px;
  padding: 5px;
  cursor: pointer;
}
.account-menu-link, .brows-account-menu-btn:hover {
    background: #f16d7f;
    color: #fff;
    box-shadow: #ffabf8 1px 1px;
}
</style>
