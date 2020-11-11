import {debounce} from "common/utils";

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