<template>
  <div class="flexContainer">
    <div class="box">A</div>
    <div class="box">B</div>
  </div>
</template>

<script>
  export default {
    name: 'Demo',

  }
</script>

<style>
  .flexContainer {
    display: flex;
    height: 100vh;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
  }

  .box {
    width: 60px;
    height: 60px;
    background-color: #eee;
    color: #fff;
    line-height: 60px;
    text-align: center;
  }

  .box:nth-child(1) {
    background-color: #5ea732;
    flex: 1;
  }

  .box:nth-child(2) {
    background-color: #eb4868;
  }

</style>