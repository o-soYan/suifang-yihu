<template>
  <div class="container500">
    <i class="iconfont icon-icon-test1"></i>
    <p>抱歉！网络出了一点问题，请稍后再试</p>
    <span @click="toHome">返回首页</span>
  </div>
</template>

<script>
export default {
  name: 'page500',
  methods: {
    toHome () {
      this.$router.replace({name: 'mainHome'})
    }
  }
}
</script>

<style scoped>
  .container500 {
    position: fixed;
    top: 2rem;
    left: 50%;
    margin-left: -2.6rem;
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
