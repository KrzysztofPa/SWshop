<template>
  <div id="app">
    <shopCartButton @toogleShopShopCart="showShopCart = !showShopCart" />
    <productList :data="data.results" @addOrderToCart="addOrderToCart" />
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
    },
  },
  mounted() {
    this.checkApi(this.apiLink);
  },
  updated() {
    this.checkApi(this.apiLink);
  },
};
</script>

<style></style>
