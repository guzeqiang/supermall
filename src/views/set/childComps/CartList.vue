<template>
  <div class="cart-list">
    <scroll class="content" :pullUpLoad="true" ref="scroll">
      <cart-list-item v-for="(item, index) in cartList" :itemInfo="item" :key="index" @ggload="test"/>
    </scroll>

  </div>
</template>

<script>
  import {mapGetters} from 'vuex'
  import Scroll from "components/common/scroll/Scroll"
  import CartListItem from "./CartListItem"

  export default {
    name: "CartList",
    components: {
      Scroll,
      CartListItem
    },
    methods: {
      test(){
        this.$refs.scroll.refresh();
      }
    },
    computed: {
      ...mapGetters(['cartList'])
    },
    activated() {
      this.$refs.scroll.refresh();

    }
  }
</script>

<style scoped>
  .content {
    width: 100%;
    height: calc(100% - 44px - 48px - 40px );
    overflow: hidden;
    margin-top: 44px;
  }
</style>