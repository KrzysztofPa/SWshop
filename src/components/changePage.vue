<template>
  <div class="changePage">
    <button @click="changePage(data.previous)">←</button>
    <button @click="changePage(data.next)">→</button>
  </div>
</template>
<script>
export default {
  name: "changePage",
  props: ["data", "apiLink"],
  data() {
    return {};
  },
  methods: {
    changePage(link) {
      this.$emit("changePage", link);
    },
  },
};
</script>
<style scoped></style>
