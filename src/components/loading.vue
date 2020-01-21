<template>
  <div class="loadingContainer" v-if="isShow">
    <div class="loadingMask"></div>
    <van-loading size="24px" color="#0bb9bf" vertical>{{msg}}</van-loading>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'loading',
  computed: {
    ...mapState({
      isShow: state => state.global.loading.isShow,
      msg: state => state.global.loading.msg
    })
  },
  created () {
    console.log(this.isShow)
  }
}
</script>

<style lang="less">
  .loadingContainer {
    .van-loading--vertical {
      position: absolute;
      left: 50%;
      margin-left: -26px;
      top: 50%;
      margin-top: -23px;
      .van-loading__text {
        color: #0bb9bf;
      }
    }
    .loadingMask {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(0,0,0,0.2);
      z-index: 10;
    }
  }
</style>
