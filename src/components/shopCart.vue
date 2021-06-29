<template>
  <div class="cart">
    <p>CART</p>
    <ul>
      <li v-for="item in shipList" :key="item.name">
        {{item.name}}
        {{item.price}}
        {{item.quantity}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  props: ["shipList"],
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped>
.cart {
  position: absolute;
  right:0;
  top:0;
  height: 100vh;
  min-width: 300px;
  background-color: #272727;
  border-left: 1px solid white;
}
.shipWrapper {
  border: 1px solid white;
}

ul{
  list-style: none;
}
</style>
