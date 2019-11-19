<template>
  <div class="progressBar">
    <div class="progressItem" :style='{width: prowidth+"%"}'></div>
  </div>
</template>

<script>
export default {
  props: ['proheight', 'rest', 'prowidth'],
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.progressBar {
  position: relative;
  height: 10px;
  width: 100%;
  background: #aaa;
  .progressItem {
    position: absolute;
    height: 100%;
    width: 100%;
    background: orange;
  }
}
</style>
