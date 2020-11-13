<template>
  <div id="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/tabbar/shouye.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shouye-active.svg"/>
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="~assets/img/tabbar/neirong.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/neirong-active.svg"/>
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/set">
        <img slot="item-icon" src="~assets/img/tabbar/shezhi.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/shezhi-active.svg"/>
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user">
        <img slot="item-icon" src="~assets/img/tabbar/geren.svg"/>
        <img slot="item-icon-active" src="~assets/img/tabbar/geren-active.svg"/>
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "components/common/tabbar/TabBar";
  import TabBarItem from "components/common/tabbar/TabBarItem";

  export default {
    name: "App",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
  #main-tab-bar {
    position: relative;
    z-index: 10;
  }
</style>
