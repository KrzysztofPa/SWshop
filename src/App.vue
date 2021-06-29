<template>
  <div id="app">
    <shopCartButton @toogleShopShopCart="showShopCart = !showShopCart" />
    <productList
      :shipList="shipList.results"
      @addOrderToCart="addOrderToCart"
    />
    <transition name="fade">
    <shopCart v-if="showShopCart" :shipList="orderList" />
      </transition>
  </div>
</template>

<script>
import shopCartButton from "./components/shopCartButton.vue";
import shopCart from "./components/shopCart.vue";
import productList from "./components/productList.vue";

export default {
  name: "App",
  components: {
    shopCartButton,
    shopCart,
    productList,
  },

  data() {
    return {
      shipList: [],
      orderList: [],
      showShopCart: false,
    };
  },
  methods: {
    addOrderToCart(newOrderList) {
      this.orderList = newOrderList;
    },
  },
  mounted() {
    fetch("https://swapi.dev/api/starships/", {
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        this.shipList = response;
      });
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
