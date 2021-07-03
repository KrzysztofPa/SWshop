<template>
  <div>
    <button @click="showCart" class="cartButton">
      <img src="../assets/shopping-cart.svg" alt="shopCart" />
      <div v-if="itemsInCart > 0" class="itemsInCart">{{ itemsInCart }}</div>
    </button>
  </div>
</template>

<script>
export default {
  name: "shopCartButton",
  data() {
    return {
      itemsInCart: 0,
    };
  },
  methods: {
    showCart() {
      this.$emit("toogleShopShopCart");
    },
  },
};
</script>

<style scoped>
.cartButton {
  background-color: #424242;
  position: fixed;
  right: 1em;
  top: 1em;
  width: 6em;
  height: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  z-index: 5;
}
.cartButton img {
  width: 60%;
  height: 60%;
}
.itemsInCart {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 25%;
  width: 25%;
  border-radius: 100%;
  border: 1px solid white;
  left: 0;
  top: 0;
  background-color: #424242;
  color: white;
}
</style>
