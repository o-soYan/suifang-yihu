<template>
  <div :style="'min-height:' + windowHeight + 'px'" class="logDetailContainer">
    <div class="logTopBox">
      <p class="logTitle">用药提醒</p>
      <div class="logPublisher">人民医院温馨提醒您</div>
    </div>
    <div class="logcontent">
      <div class="logItem">
        <div class="cell">
          <div class="title">药品名称</div>
          <div class="name">阿莫西林</div>
        </div>
        <div class="cell">
          <div class="title">药品名称</div>
          <div class="name">阿莫西林</div>
        </div>
        <div class="cell">
          <div class="title">药品名称</div>
          <div class="name">阿莫西林</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: ''
    }
  },
  created () {
    this.windowHeight = document.documentElement.clientHeight
  }
}
</script>

<style lang="less" scoped>
.logDetailContainer {
  padding: 0.2rem;
  text-align: left;
  background:linear-gradient(180deg,rgba(11,185,191,1) 0%,rgba(11,185,191,0) 100%);
  .logTopBox {
    margin: 0.6rem  0.4rem 0.36rem;
  }
  .logTitle {
    font-size:0.44rem;
    font-weight:600;
    color:rgba(255,255,255,1);
    line-height:0.6rem;
    margin-bottom: 0.04rem;
  }
  .logPublisher {
    font-size:0.26rem;
    color:rgba(255,255,255,1);
    line-height:0.36rem;
  }
  .logcontent {
    padding: 0 0.3rem;
    .logItem {
      border-radius: 6px;
      background: #ffffff;
      height: 2.98rem;
      margin-bottom: 0.2rem;
      .cell {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #ededed;
        padding: 0.28rem 0.4rem;
        &:last-child {
          border-radius: 6px;
        }
        .title {
          flex: 3;
          font-size:0.3rem;
          color:rgba(51,51,51,1);
          line-height:0.42rem;
        }
        .name {
          flex: 4;
          font-size:0.3rem;
          color:rgba(151,151,151,1);
          line-height:0.42rem;
        }
      }
    }
  }
}
</style>
