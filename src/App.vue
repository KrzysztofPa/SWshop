<template>
  <div id="app">
    <shopCartButton @toogleShopShopCart="showShopCart = !showShopCart"/>
      <shopCart v-if="showShopCart"/>
  </div>
</template>

<script>
import shopCartButton from './components/shopCartButton.vue'
import shopCart from './components/shopCart.vue'

export default {
  name: 'App',
  components: {
    shopCartButton,
    shopCart
  },
  data () {
    return {
      info: null,
      showShopCart: false
    }
  },
  methods:{
    toogleShopShopCart(){
      this.showShopCart = !showShopCart;
    }
  },
  mounted () {

fetch("https://swapi.dev/api/starships/", {
    "method": "GET",
})
.then(response => { 
    if(response.ok){
        return response.json()    
    } else{
        alert("Server returned " + response.status + " : " + response.statusText);
    }                
})
.then(response => {
  console.log(response)
  console.log(response.body)
    this.info = response; 
})
.catch(err => {
    console.log(err);
});
  }
}

</script>

<style>
</style>
