<template>
  <div class='logItemContainer'>
    <div class="item" v-for="(item, index) in logDatas" :key="index">
      <div class="itemContent">
        <p class="name">{{item.name}}</p>
        <p class="time">随访日期：{{item.time}}</p>
      </div>
      <div class="itemStatus" v-if="showStatus">
        未完成
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logDatas: {
      type: Array
    },
    showStatus: {
      type: Boolean
    }
  },
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.logItemContainer {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.32rem 0.4rem;
    height:1.52rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .itemContent {
      flex: 6;
      text-align: left;
      .name {
        font-size:0.32rem;
        font-weight:600;
        color:rgba(18,18,18,1);
        line-height:0.44rem;
      }
      .time {
        font-size:0.24rem;
        color:rgba(151,151,151,1);
        line-height:0.34rem;
        margin-top: 0.08rem;
      }
    }
    .itemStatus {
      flex: 1;
      width:0.98rem;
      height:0.36rem;
      background:rgba(227,245,246,1);
      border-radius:2px;
      font-size:0.24rem;
      color:rgba(11,185,191,1);
      line-height:0.36rem;
    }
  }
}
</style>
