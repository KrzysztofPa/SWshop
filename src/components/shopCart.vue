<template>
  <div>
    <div class="mainWrapper" v-for="ship in shipList" :key="ship.name">
      <div class="shipWrapper"></div>
    </div>
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
.mainWrapper {
  display: grid;
}
.shipWrapper {
  border: 1px solid white;
}
</style>
