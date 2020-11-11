<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#d81e06",
      },
    },
    data() {
      return {
        msg: "ok",
      };
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      },
    },
    methods: {
      itemClick() {
        if (this.$route.path != this.path) {
          this.$router.push(this.path);
        } else {
          return false;
        }
      },
    },
  };
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 48px;
    font-size: 14px;
  }

  .tab-bar-item img {
    display: inline-block;
    margin-top: 3px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>