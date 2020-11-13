<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: '',
        isShow: false
      }
    },
    methods: {
      show(message, timer = 2000) {
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.isShow = false;
          this.message = '';
        }, timer)
      }
    }
  }
</script>

<style scoped>
  .toast {
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px;
    z-index: 12;

    color: #fff;
    background-color: rgba(0, 0, 0, .5);

  }
</style>