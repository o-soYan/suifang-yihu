<template>
<div class="home">

<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>

<van-tabs type="card" color='#87CEFA'>
  <van-tab title="发布中">内容 1</van-tab>
  <van-tab title="已结束">内容 2</van-tab>
  <van-tab title="异常患者">内容 3</van-tab>
</van-tabs>
</div>

</template>
<script>
export default {
  data () {
    return {
      images: [
        'http://imgsa.baidu.com/exp/w=500/sign=b26e62947d1ed21b79c92ee59d6fddae/aec379310a55b319de3e711343a98226cefc1794.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2287440564,27896561&fm=26&gp=0.jpg',
        'http://imgsa.baidu.com/exp/w=500/sign=9e546a1dd11373f0f53f6f9f940f4b8b/8601a18b87d6277fd138c05e28381f30e924fcaa.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>

</style>
