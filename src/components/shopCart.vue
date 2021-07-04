<template>
  <div class="cart">
    <div class="topCart">
      <button class="hideCart" @click="hideCart">></button>
      <p class="menu">CART</p>
    </div>
    <ul>
      <li class="cartEl" v-for="item in data" :key="item.name">
        <p class="itemName">{{ item.name }}</p>
        <div class="itemCenter">
          <span class="productCost"> {{ item.price }}</span>
          <span>
            <button class="minusQuantity" @click="minusQuantity(item.name)">
              -
            </button>
            <input
              type="number"
              class="quantity"
              v-model.lazy="item.quantity"
              @change="checkValue(item.name)"
            />
            <button class="plusQuantity" @click="plusQuantity(item.name)">
              +
            </button>
          </span>
        </div>
      </li>
    </ul>
    <div class="bottomMenu">
      <p class="subtotal">Subtotal: {{ calcSubtotal() }}</p>
      <button>Submit order</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  props: ["data"],
  data() {
    return {};
  },
  methods: {
    findIndex(name) {
      return name == 18;
    },
    minusQuantity(e) {
      for (let i = 0; i < this.data.length; i++) {
        if (e === this.data[i].name) {
          this.data[i].quantity <= 1
            ? this.data.splice(i, 1)
            : this.data[i].quantity--;
        }
      }
    },
    checkValue(e) {
      for (let i = 0; i < this.data.length; i++) {
        if (e === this.data[i].name) {
          this.data[i].quantity <= 0
            ? this.data.splice(i, 1)
            : this.data[i].quantity;
        }
      }
    },
    plusQuantity(e) {
      for (let i = 0; i < this.data.length; i++) {
        if (e === this.data[i].name) {
          this.data[i].quantity++;
        }
      }
    },
    hideCart() {
      this.$emit("hideCart");
    },
    calcSubtotal() {
      let total = 0;
      for (let i of this.data) {
        total += i.price * i.quantity;
      }
      return total;
    },
  },
};
</script>

<style scoped>
.cart {
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #272727;
  border-left: 1px solid white;
  z-index: 10;
  opacity: 0.95;
  overflow: auto;
}
.productWrapper {
  border: 1px solid white;
}

.topCart {
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid white;
}
.menu {
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}

.hideCart {
  position: absolute;
  left: 0;
  background-color: #272727;
  color: white;
  font-size: 1.5rem;
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid white;
}

ul,
p {
  list-style: none;
  margin: 0;
  padding: 0;
}
.cartEl {
  margin: 0;
  border-bottom: 1px dotted white;
  padding: 0.5rem 0;
}

.quantity {
  max-width: 2.2rem;
  text-align: center;
  font-size: 1.2rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.plusQuantity,
.minusQuantity {
  font-size: 1.2rem;
}

.itemName {
  display: block;
  margin-left: 1rem;
  font-size: 1.5rem;
}

.itemCenter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 1rem;
}

.productCost::after,
.subtotal::after {
  margin-left: 0.2rem;
  background-image: url("../assets/coin.webp");
  background-size: 1rem 1rem;
  display: inline-block;
  width: 1rem;
  height: 1rem;
  content: "";
}

.bottomMenu {
  width: inherit;
  bottom: 0%;
  position: fixed;
  padding: 1rem 0;
  text-align: center;
  background-color: #272727;
  border-top: 6px solid white;
}

.bottomMenu button {
  width: 80%;
  background: #32b643;
  border-color: #2faa3f;
  color: #fff;
  appearance: none;
  height: 3em;
}

.subtotal {
  padding: 0.3rem;
}

@media (max-width: 760px) {
  .cart {
    width: 100%;
  }
}
</style>
