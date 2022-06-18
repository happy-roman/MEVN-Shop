<template>
  <div>
    <div class="product-catalog">
      <form action="#" class="trending-check">
        <p>Trending now</p>
        <div>
          <ul>
            <li><input id="Bohemian" type="checkbox">
              <label for="Bohemian">Bohemian</label>
            </li>
            <li><input id="Floral" type="checkbox">
              <label for="Floral">Floral</label>
            </li>
            <li><input id="Lace" type="checkbox">
              <label for="Lace">Lace</label>
            </li>
          </ul>
          <ul>
            <li><input id="Floral-2" type="checkbox">
              <label for="Floral-2">Floral</label>
            </li>
            <li><input id="Lace-2" type="checkbox">
              <label for="Lace-2">Lace</label>
            </li>
            <li><input id="Bohemian-2" type="checkbox">
              <label for="Bohemian-2">Bohemian</label>
            </li>
          </ul>

        </div>
      </form>
    </div>
    <form>
      <div>
        <div>
          <label for="product_name">Product name</label>
          <input type="text" id="product_name">
        </div>
        <div>
          <label for="product_price">Product price</label>
          <input type="text" id="product_price">
        </div>
        <div>
          <label for="description">Description</label>
          <input type="text" id="description">
        </div>
        <div>
          <label for="small_img">Small img</label>
          <input type="text" id="small_img">
        </div>
        <div>
          <label for="full_img">Full img</label>
          <input type="text" id="full_img">
        </div>
        <div>
          <label for="product_img">Img</label>
          <input type="text" id="product_img">
        </div>
      </div>
      <div class="size-check">
        <p>Sizes</p>
        <div>
          <div><input id="xxs" type="checkbox">
            <label for="xxs">xxs</label></div>
          <div><input id="l" type="checkbox">
            <label for="l">l</label></div>
          <div><input id="xs" type="checkbox">
            <label for="xs">xs</label></div>
          <div><input id="xl" type="checkbox">
            <label for="xl">xl</label></div>
          <div><input id="s" type="checkbox">
            <label for="s">s</label></div>
          <div><input id="xxl" type="checkbox">
            <label for="xxl">xxl</label></div>
          <div><input id="m" type="checkbox">
            <label for="m">m</label></div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminProducts',
};
</script>

<style scoped>

</style>
