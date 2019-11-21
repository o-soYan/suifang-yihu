<template>
  <div class="callLogContainer">
    <div class="logContent">
      <div class="item">
        <div class="itemTitle">2019-09-09 电话回访录音</div>
        <div class="itemIcon">
          <van-icon name="play-circle" />
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
  .item {
    padding: 0.2rem;
    display: flex;
    justify-content: space-between;
    text-align: left;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    .itemIcon {
      .van-icon {
        font-size: 0.36rem;
      }
    }
  }
}
</style>
