<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购车车({{cartLength}})</div>
    </nav-bar>
    <cart-list class="cartList"/>
    <cart-bottom-bar class="cart-bottom-bar"/>
  </div>
</template>
<script>
  import CartList from "./childComps/CartList";
  import CartBottomBar from "./childComps/CartBottomBar"
  import NavBar from "components/common/navbar/NavBar";

  export default {
    name: "set",
    components: {NavBar, CartList, CartBottomBar},
    data() {
      return {}
    },
    methods: {},
    computed: {
      cartLength() {
        return this.$store.getters.cartLength;
      }
    }
  }
</script>
<style scoped>
  .cart {
    height: 100vh;
    overflow: hidden;
  }
  .cart-bottom-bar {
    width: 100%;
    position: absolute;
    bottom: 48px;
  }
</style>