
<!-- 首页 -->
<template>
  <div class="main-home">
    <!-- 标题栏 -->
    <!-- 顶部tab -->
    <Tab></Tab>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Tab from '@/components/Tab'

export default {
  name: 'Home',
  components: {
    Tab
  },
  props: {},
  data () {
    return {
      placeholder: '请输入内容' // 搜索框提示
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    // 右侧按钮
    handleIcon () {
      console.log('消息中心')
    }
  }
}
</script>

<style scoped lang='less'>
  .main-home {
    width: 100%;
    height: 100%;
  }
</style>
