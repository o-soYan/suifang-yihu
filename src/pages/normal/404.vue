<template>
  <div class="container404">
    <i class="iconfont icon-icon-test"></i>
    <p>抱歉！您所访问的页面不存在，请重新加载</p>
    <span @click="toHome">返回首页</span>
  </div>
</template>

<script>
export default {
  name: 'page404',
  methods: {
    toHome () {
      this.$router.replace({name: 'mainHome'})
    }
  }
}
</script>

<style scoped>
  .container404 {
    position: fixed;
    top: 2rem;
    left: 50%;
    margin-left: -3.04rem;
  }
.iconfont {
  font-size: 2.4rem;
  color: #0bb9bf;
}
  p {
    line-height: 1rem;
    color: #0bb9bf;
  }
span {
  display: inline-block;
  background: #13a3de;
  width: 60%;
  line-height: 0.6rem;
  border-radius: 0.3rem;
  color: #fff
}
</style>
