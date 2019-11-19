<template>
<div class="home">

<van-swipe :autoplay="3000">
  <van-swipe-item v-for="(image, index) in images" :key="index">
    <img :src="image" />
  </van-swipe-item>
</van-swipe>

<van-tabs type="card" color='#87CEFA'>
  <van-tab title="发布中">
      <div class="tab_content">
<div class="tab_name">满意度调查</div>
<div class="tab_progress">
<van-progress :percentage="0" stroke-width="26" color="#f2826a"/>

</div>
<div class="tab_time">
    <span class="">PAC</span>
    2019/10/22
</div>
      </div>
  </van-tab>
  <van-tab title="已结束"><van-progress :percentage="50" stroke-width="28" color="#f2826a"/>
</van-tab>
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
/deep/.van-tabs__nav--card{
    font-size: 50px
}
/deep/.van-progress__pivot{
    position: unset;
    font-size: 0.32rem;
    background: none;
}
.tab_progress{
    // flex: 3
    position: absolute;
    width: 40%;
    left: 30%;
// width: 30%;

}
.tab_content{
    margin: 0.24rem 0.12rem;
    padding: 0.22em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow:0 0 10px #D3D3D3;
    border:1px solid #dedede;
    border-radius: 0.12rem;
    &>div {
        // width: 33.3%;
    }
}
.tab_time{
// flex: 1;
width: 30%;
}
.tab_name{
// flex: 2
width: 30%;

}
</style>
