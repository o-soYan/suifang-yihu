<template>
  <div class="detailContainer">
    <Header
      :isTitle="true"
      title="答卷详情"
      :isScan="false"
      :isBack="true">
    </Header>
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
import Header from '@/components/header'
export default {
  name: 'detail',
  components: {
    Header
  }
}
</script>

<style lang="less" scoped>
.detailContainer {
  .content {
    background: #e5e5e5;
    border-top: 1px solid #e5e5e5;
  }
  .item {
    padding: 0.2rem;
    margin-top: 0.06rem;
    line-height: 2;
    font-size: 0.32rem;
    text-align: left;
    background: #fff;
  }
}
</style>
