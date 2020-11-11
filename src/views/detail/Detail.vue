<template>
  <div id="detail">
    <div class="detail-scroll">
      <detail-nav-bar class="detail-nav" @titleClick="titleClick" ref="nav"/>
      <scroll class="detail-content" :pull-up-load="true" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
        <detail-param-info ref="params" :param-info="paramInfo"/>
        <detail-comment-info ref="comment" :comment-info="commentInfo"/>
        <goods-list :goods="recommends" ref="recommends"/>
      </scroll>
      <detail-bottom-bar />
      <back-top @click.native="backClick" v-show="isShowBackTop"/>
    </div>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar"
  import DetailSwiper from "views/detail/childComps/DetailSwiper"
  import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo"
  import DetailShopInfo from "views/detail/childComps/DetailShopInfo"
  import DetailGoodsInfo from "views/detail/childComps/DetailGoodsInfo"
  import DetailParamInfo from "views/detail/childComps/DetailParamInfo"
  import DetailCommentInfo from "views/detail/childComps/DetailCommentInfo"

  import Scroll from "components/common/scroll/Scroll"
  import GoodsList from "components/content/goods/GoodsList"

  import {getDetail, Goods, Shop, GoodsParam, getRecommend} from "network/detail"
  import {debounce} from "common/utils"
  import {itemListenerMixin, backTopMixin} from "common/mixin"
  import DetailBottomBar from "views/detail/childComps/DetailBottomBar"


  export default {
    name: "Detail",
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        commentInfo: {},
        recommends: [],
        itemImgListener: [],
        themeTopYs: [],
        getThemeTopY: null,
        currentIndex: 0,

      }
    },
    mixins: [itemListenerMixin, backTopMixin],
    methods: {
      imageLoad() {
        this.newRefresh();
        this.getThemeTopY();
      },
      titleClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 200)
      },

      contentScroll(position) {
        const positionY = -position.y;
        let length = this.themeTopYs.length;
        for (let i = 0; i < length; i++) {
          if (this.currentIndex !== i && ((i < length - 1 && positionY > this.themeTopYs[i] && positionY < this.themeTopYs[i + 1]) || (i === length - 1 && positionY > this.themeTopYs[i]))) {
            this.currentIndex = i;
            this.$refs.nav.currentIndex = this.currentIndex;
          }
        }
        this.isShowBackTop = (-position.y) > 1000;
      }
    },
    components: {
      DetailBaseInfo,
      DetailNavBar,
      DetailSwiper,
      DetailShopInfo,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      GoodsList,
      DetailBottomBar
    },
    created() {
      this.iid = this.$route.params.iid;

      getDetail(this.iid).then(res => {
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services);
        this.shop = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo;
        this.paramInfo = new GoodsParam(res.result.itemParams.info, res.result.itemParams.rule);
        if (res.result.cRate !== 0) {
          this.commentInfo = res.result.rate.list[0];
          // console.log(this.commentInfo);
        }
      })

      getRecommend().then(res => {
        this.recommends = res.data.list;
        // console.log(this.recommends);
      })

      this.getThemeTopY = debounce(() => {
        this.themeTopYs = [];
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.params.$el.offsetTop);
        this.themeTopYs.push(this.$refs.comment.$el.offsetTop);
        this.themeTopYs.push(this.$refs.recommends.$el.offsetTop);
      }, 2000)
    },
    mounted() {
    },
    destroyed() {
      // console.log(123)
    }
  }
</script>

<style scoped>
  #detail {
    position: relative;
    height: 100vh;
    background-color: #ffffff;
    z-index: 999;
  }

  .detail-nav {
    position: relative;
    background-color: #ffffff;
    z-index: 9;
  }

  .detail-content {
    margin-top: 44px;
    height: calc(100% - 44px - 49px);
  }
</style>