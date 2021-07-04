<template>
  <div id="app">
    <shopCartButton @toogleShopShopCart="showShopCart = !showShopCart" />
    <productList :data="data.results" @addOrderToCart="addOrderToCart">
    </productList>
    <shopCart
      v-if="showShopCart"
      :data="orderList"
      @hideCart="showShopCart = false"
    />
    <changePage :data="data" :apiLink="apiLink" @changePage="changePage" />
  </div>
</template>

<script>
import shopCartButton from "./components/shopCartButton.vue";
import shopCart from "./components/shopCart.vue";
import productList from "./components/productList.vue";
import changePage from "./components/changePage.vue";
import apiQuery from "./components/apiQuery.js";

export default {
  name: "App",
  components: {
    shopCartButton,
    shopCart,
    productList,
    changePage,
  },

  data() {
    return {
      data: [],
      orderList: [],
      showShopCart: false,
      apiLink: "https://swapi.dev/api/starships/?page=1",
    };
  },
  methods: {
    addOrderToCart(newOrderList) {
      this.orderList = newOrderList;
    },
    async checkApi(apiLink) {
      this.data = await apiQuery(apiLink);
    },
    changePage(link) {
      this.apiLink = link;
      this.checkApi(this.apiLink);
    },
  },
  mounted() {
    this.checkApi(this.apiLink);
  },
};
</script>

<style>
#app {
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
