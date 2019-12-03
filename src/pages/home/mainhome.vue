<template>
  <div class="home">
      <div class="swipe">
 <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
      </div>

    <van-tabs type="card" color="#87CEFA">
      <van-tab title="发布中">
        <div class="tab_content">
          <div class="tab_name">满意度调查</div>
          <div class="tab_progress">
            <van-progress :percentage="100" stroke-width="26" color="#f2826a" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top">PAC</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">用药提醒</div>
          <div class="tab_progress">
            <van-progress :percentage="70" stroke-width="26" color="#008000" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top2 tab_time_top">流感</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">复诊提醒</div>
          <div class="tab_progress">
            <van-progress :percentage="90" stroke-width="26" color="#FF8C00" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top3 tab_time_top" >脂肪肝</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">满意度调查</div>
          <div class="tab_progress">
            <van-progress :percentage="20" stroke-width="26" color="#f2826a" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top4 tab_time_top">心脏病</span>
            2019/10/22
          </div>
        </div>
      </van-tab>
      <van-tab title="已结束"
        >  <div class="tab_content">
          <div class="tab_name">满意度调查</div>
          <div class="tab_progress">
            <van-progress :percentage="20" stroke-width="26" color="#f2826a" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top">PAC</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">用药提醒</div>
          <div class="tab_progress">
            <van-progress :percentage="100" stroke-width="26" color="#008000" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top2 tab_time_top">流感</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">复诊提醒</div>
          <div class="tab_progress">
            <van-progress :percentage="80" stroke-width="26" color="#FF8C00" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top3 tab_time_top" >脂肪肝</span>
            2019/10/22
          </div>
        </div>
        <div class="tab_content">
          <div class="tab_name">满意度调查</div>
          <div class="tab_progress">
            <van-progress :percentage="50" stroke-width="26" color="#f2826a" />
          </div>
          <div class="tab_time">
            <span class="tab_time_top4 tab_time_top">心脏病</span>
            2019/10/22
          </div>
        </div>
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
.swipe{
    margin-bottom: 0.36rem
}
/deep/.van-tabs__nav--card {
  font-size: 50px;
}
/deep/.van-progress__pivot {
  position: unset;
  font-size: 0.32rem;
  background: transparent !important;
}
.tab_progress {
  position: absolute;
  width: 40%;
  left: 30%;
}
.tab_content {
  margin: 0.24rem 0.12rem;
  padding: 0.22em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #d3d3d3;
  border: 1px solid #dedede;
  border-radius: 0.12rem;
}
.tab_time {
  width: 30%;
  font-size: 0.30rem;
}
.tab_name {
  // flex: 2
  width: 30%;
}
.tab_time_top {
  font-size: 0.3rem;
  width: 50%;
  text-align: center;
  margin: 0 auto;
  display: block;
  background: tomato;
  color: #ffffff;
  padding: 0.06rem 0.28rem;
  border-radius: 0.8em;
  margin-bottom: 0.08rem;
}
.tab_time_top2 {
  background: rgb(54, 172, 30);
}
.tab_time_top3 {
  background: rgb(64, 44, 121);
}
.tab_time_top4 {
  background: rgb(75, 124, 231);
}
</style>
