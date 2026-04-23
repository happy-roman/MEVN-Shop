<template>
  <div class="admin-page">
    <div class="admin-links">
      <router-link :to="adminUsersLink" class="admin-link">Users</router-link>
      <router-link :to="adminProdLink" class="admin-link">Products</router-link>
    </div>
    <div class="admin-info">
      <h3>Admin info</h3>
      <p class="admin-text">On this page admin can look users and add products</p>
      <hr>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'AdminPage',
  computed: {
    adminProdLink() {
      return { name: 'adminProducts' };
    },
    adminUsersLink() {
      return { name: 'adminUsers' };
    },
  },
};
</script>

<style scoped lang="css">
/* .admin-page
  margin-top: 50px
  text-align: center
.admin-links
  margin: 0 auto
  text-decoration: none
  font-family: "Lato", sans-serif
  font-size: 24px
  width: 50%
  display: flex
  justify-content: space-between
.admin-link
  color: #222222
  border: #f16d7f 1px solid
  border-radius: 10px
  padding: 10px
  cursor: pointer
  &:hover
    background: #f16d7f
    color: #fff
    box-shadow: #ff7ff8 1px 2px
.admin-info
  margin: 50px
.admin-text
  margin: 20px
  font-size: 20px
  color: #4d4d4d */

</style>
