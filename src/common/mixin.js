import {debounce} from "common/utils";
import BackTop from 'components/content/backTop/BackTop'

export const itemListenerMixin = {
  data() {
    return {
      itemImgListener: null,
      newRefresh: null,
      test: '1234'
    }
  },
  mounted() {
    this.newRefresh = debounce(this.$refs.scroll.refresh, 100);

    this.itemImgListener = () => {
      this.newRefresh();
    };
    this.$bus.$on('itemImageLoad', this.itemImgListener);
    // console.log("我是测试");
  }
}

export const backTopMixin = {
  data() {
    return {
      isShowBackTop: false,
    }
  },
  components: {
    BackTop
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    }
  }
}