
<!-- 首页 -->
<template>
  <div class="main-home">
    <!-- 标题栏 -->
     <router-view></router-view>
    <!-- 顶部tab -->
    <Tab></Tab>
  </div>
</template>

<script>
import Tab from '@/components/tab'

export default {
  name: 'Home',
  components: {
    Tab
  },
  props: {},
  data () {
    return {
      tabarActive: 0
    }
  },
  computed: {},
  watch: {},
  created () {},
  methods: {
    redirects (url) {
      this.$router.push(url)
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
