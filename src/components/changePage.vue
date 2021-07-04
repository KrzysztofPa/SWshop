<template>
  <div class="changePage">
    <button @click="changePage(data.previous)" :disabled="!data.previous">
      ←
    </button>
    <button @click="changePage(linkData[0])">1</button>
    <button @click="changePage(linkData[1])">2</button>
    <button @click="changePage(linkData[2])">3</button>
    <button @click="changePage(linkData[3])">4</button>
    <button @click="changePage(data.next)" :disabled="!data.next">
      →
    </button>
  </div>
</template>
<script>
export default {
  name: "changePage",
  props: ["data", "apiLink"],
  data() {
    return {
      linkData: [
        "https://swapi.dev/api/starships/?page=1",
        "https://swapi.dev/api/starships/?page=2",
        "https://swapi.dev/api/starships/?page=3",
        "https://swapi.dev/api/starships/?page=4",
      ],
    };
  },
  methods: {
    changePage(link) {
      this.$emit("changePage", link);
    },
  },
};
</script>
<style scoped>
.changePage {
  display: block;
}

button {
  width: 2.5rem;
  height: 2.5rem;
}
</style>
