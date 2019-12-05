<template>
  <div class="callLogContainer">
    <div class="logContent">
      <van-search placeholder="请输入搜索关键词" />
      <div class="item">
        <div class="itemTitle">
          <div class="title">电话回访录音</div>
          <div class="time">回访日期：2019-09-09</div>
        </div>
        <div class="itemIcon">
          <van-icon name="play-circle-o" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.callLogContainer {
  .logContent {
    padding: 0 0.3rem;
  }
  /deep/.van-search {
    padding: 0.2rem 0;
  }
  .item {
    padding: 0.36rem 0.4rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    height:1.52rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    margin-bottom: 0.2rem;
    .itemTitle {
      flex: 5;
      .title {
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
    .itemIcon {
      flex: 1;
      text-align: right;
      .van-icon {
        font-size: 0.52rem;
        color: #0BB9BF;
      }
    }
  }
}
</style>
