<template>
<div>
    <li>kurde</li>
    <li>kurde</li>
    <li>kurde</li>
    <li>kurde</li>
</div>
  
</template>

<script>
export default {
  name: 'shopCart',
  data(){ 
      return{
        itemsInCart: 0,
        show: false
      }
    },
    methods:{
      showCart(){
        this.show = (!this.show);
      }
    }
}
</script>

<style scoped>

</style>