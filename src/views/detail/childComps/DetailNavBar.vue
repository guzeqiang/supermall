<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg"/>
      </div>
      <div slot="center" class="detail">
        <div v-for="(item, index) in titles" class="detailItem" :class="{active:currentIndex===index}"
             @click="clickItem(index)">{{item}}
        </div>
      </div>
      <div slot="right"></div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "@/components/common/navbar/NavBar";

  export default {
    name: "DetailNavBar",
    components: {NavBar},
    data() {
      return {
        titles: ['商品', '参数', '评论', '推荐'],
        currentIndex: 0
      }
    },
    methods: {
      clickItem(index) {
        this.currentIndex = index;
        this.$emit('titleClick', index);
      },
      backClick(){
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .detail {
    display: flex;
  }

  .detailItem {
    flex: 1;
  }

  .active {
    color: var(--color-height-text)
  }
  .back img {
    margin-top: 12px;
  }
</style>