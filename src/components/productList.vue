<template>
  <div>
    <ul class="mainWrapper">
      <li class="shipWrapper" v-for="ship in shipList" :key="ship.name">
        <p class="shipName">{{ ship.name }}</p>
        <p class="shipManufacturer">{{ ship.manufacturer }}</p>
        <p class="shipCost" v-if="ship.cost_in_credits !== 'unknown'">
          {{ ship.cost_in_credits }}
        </p>
        <div class="addToCartWrapper" v-if="ship.cost_in_credits !== 'unknown'">
          <input type="number" min="0" value="1"/>
          <button
            @click="
              addToCart(
                ship.name,
                ship.cost_in_credits,
                parseInt($event.target.parentElement.children[0].value)
              )
            "
          >
            Add to cart
            <img src="../assets/shopping-cart.svg" alt="cart" />
          </button>
        </div>
        <div class="addToCartWrapper" v-else>
          <p class="unavailable">product unavailable</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "productList",
  props: ["shipList"],
  data() {
    return { orderList: [] };
  },
  methods: {
    addToCart(name, price, quantity) {
      function item(name, price, quantity) {
        (this.name = name), (this.price = price), (this.quantity = quantity);
      }
      if (quantity > 0) {
        let obj = this.orderList.find(o => o.name === name);
        obj? obj.quantity += quantity: this.orderList.push(new item(name, price, quantity));
        this.$emit("addOrderToCart", this.orderList);
      }
    },
  },
};
</script>

<style scoped>
.mainWrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  list-style: none;
  padding: 0;
  margin: 10% 2em;
}
.shipWrapper {
  border: 1px solid white;
  text-align: center;
  background-color: #272727;
}
.shipName {
  margin: 1em 0;
  font-weight: bold;
  font-size: 1.2rem;
}
.shipManufacturer {
  font-style: italic;
  font-size: 0.8rem;
}
.shipCost {
  font-size: 1.1em;
  color: blanchedalmond;
}
input {
  width: 3em;
  margin-right: 1em;
  font-size: 1.5em;
}

button {
  background: #32b643;
  border-color: #2faa3f;
  color: #fff;
  appearance: none;
  height: 3em;
}

button img {
  width: 1em;
  height: 1em;
}
.shipCost::after {
  background-image: url("../assets/coin.webp");
  background-size: 1em 1em;
  display: inline-block;
  width: 1em;
  height: 1em;
  content: "";
}
.addToCartWrapper {
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
}
.unavailable {
  color: red;
  font-size: 1.3em;
}
</style>
