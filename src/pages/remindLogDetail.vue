<template>
  <div class="logDetailContainer">
    <p class="logTitle">用药提醒</p>
    <div class="logPublisher">人民医院温馨提醒您</div>
    <div class="logcontent">
      <div class="logItem">
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
    return {}
  }
}
</script>

<style lang="less" scoped>
.logDetailContainer {
  padding: 0.2rem;
  text-align: left;
  .logTitle {
    font-size: 0.34rem;
    font-weight: 900;
    line-height: 3;
  }
  .logPublisher {
    margin-bottom: 0.4rem;
  }
  .logcontent {
    .logItem {
      border: 1px solid #e5e5e5;
      padding: 0.1rem;
      border-radius: 0.1rem;
      .cell {
        display: flex;
        justify-content: space-between;
        border-bottom: #ededed;
        padding: 0.2rem;
        .title {
          flex: 2;
          font-weight: 900;
        }
        .name {
          flex: 5;
          color: gray;
          text-align: center;
        }
      }
    }
  }
}
</style>
