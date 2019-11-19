<template>
  <div class='logItemContainer'>
    <div class="item" v-for="(item, index) in logDatas" :key="index">
      <div class="itemContent">
        <p class="name">{{item.name}}<span>随访</span></p>
        <p class="time">随访日期：{{item.time}}</p>
      </div>
      <div class="itemStatus">
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
    padding: 0.2rem;
    line-height: 1.5;
    font-size: 0.32rem;
    border-bottom: 1px solid #e5e5e5;
    .itemContent {
      flex: 6;
      text-align: left;
      .name {
        font-weight: 900;
        font-size: 0.3rem;
        span {
          padding: 0.05rem 0.1rem;
          background: orange;
          color: #fff;
          font-size: 0.28rem;
          font-weight: normal;
          margin-left: 0.1rem;
        }
      }
      .time {
        font-size: 0.28rem;
        margin-top: 0.1rem;
      }
    }
    .itemStatus {
      flex: 1;
      padding: 0.05rem 0.1rem;
      background: skyblue;
      color: #fff;
      font-size: 0.28rem;
    }
  }
}
</style>
