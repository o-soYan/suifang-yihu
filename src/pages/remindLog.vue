<template>
  <div>
    <van-search placeholder="请输入搜索关键词" v-model="value" />
    <logItem :logDatas="logoData"></logItem>
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
      }]
    }
  },
  components: {
    logItem
  }
}
</script>

<style lang="less" scoped>

</style>
