<template>
  <div class="cart">
    KURWA
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
  width: 100px;
  height: 100px;
  background-color: red;
}
.shipWrapper {
  border: 1px solid white;
}
</style>
