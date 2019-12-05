<template>
  <div class="remindContainer">
    <div class="tabBox">
      <p @click="activeItem = 0" :class="activeItem === 0 ? 'active' : ''">
        <span>已查阅</span>
      </p>
      <p @click="activeItem = 1" :class="activeItem === 1 ? 'active' : ''">
        <span>未查阅</span>
      </p>
      <i :style="activeItem === 0 ? 'transform: translateX(-0.8rem) translateX(-50%)' : 'transform: translateX(1.25rem) translateX(-50%)'"></i>
    </div>
    <div class="tabContent">
      <van-search placeholder="请输入搜索关键词" />
      <logItem :logDatas="logoData" :showStatus="false"></logItem>
    </div>
  </div>
</template>

<script>
import logItem from '@/components/logItem'
export default {
  data () {
    return {
      logoData: [{
        name: '用药提醒',
        time: '2019-02-03'
      }],
      activeItem: 1
    }
  },
  components: {
    logItem
  }
}
</script>

<style lang="less" scoped>
.remindContainer {
  .tabBox {
    height: 0.98rem;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f9f9f9;
    position: relative;
    p {
      width: 2rem;
      text-align: center;
      font-size:0.3rem;
      color:rgba(160,160,160,1);
      line-height:0.42rem;
      &.active {
        font-size:0.34rem;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
        span {
          font-weight:900;
        }
      }
    }
    i {
      display: inline-block;
      width:0.44rem;
      height:4px;
      background:rgba(11,185,191,1);
      border-radius:6px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -0.22rem;
      transition-duration: 0.3s;
    }
  }
  .tabContent {
    padding: 0 0.3rem;
    /deep/.van-search {
      padding: 0.2rem 0;
    }
  }
}
</style>
