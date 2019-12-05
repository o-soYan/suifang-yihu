<template>
  <div class="detailContainer">
    <div class="content">
      <div class="item">
        <div class="quesTitle">
          Q1: 您的性别？
        </div>
        <div class="quesAns">
          男
        </div>
      </div>
      <div class="item">
        <div class="quesTitle">
          Q1: 您的性别？
        </div>
        <div class="quesAns">
          男
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detail'
}
</script>

<style lang="less" scoped>
.detailContainer {
  .content {
    margin: 0.3rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
  }
  .item {
    padding: 0.4rem;
    font-size: 0.32rem;
    text-align: left;
    height:2rem;
    background:rgba(255,255,255,1);
    border-bottom: 1px solid #f9f9f9;
    box-sizing: border-box;
    .quesTitle {
      font-size:0.32rem;
      font-weight:600;
      color:rgba(18,18,18,1);
      line-height:0.44rem;
    }
    .quesAns {
      font-size:0.28rem;
      color:rgba(11,185,191,1);
      line-height:0.4rem;
      margin-top: 0.36rem;
    }
  }
}
</style>
