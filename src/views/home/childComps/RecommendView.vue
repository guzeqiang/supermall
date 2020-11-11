<template>
  <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
      <a :href="item.link" :alt="item.title">
        <img :src="item.image" />
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 15px 15px 20px;
    border-bottom: 8px solid #eeeeee;
  }
  .recommend-item{
    flex: 1;
    margin-right: 20px;
  }
  .recommend-item:last-child{
    margin-right: 0;
  }
  .recommend-item a{
    display: inline-block;
    width: 100%;
    height: auto;
  }
  .recommend-item img{
    width: 100%;
    height: auto;
  }
  .recommend-item p{
    margin-top: 5px;
    font-size: 14px;
  }
</style>