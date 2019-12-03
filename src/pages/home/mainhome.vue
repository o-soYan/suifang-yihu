<template>
  <div class="home">
    <div class="swipe">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <van-tabs color="#0BB9BF">
      <van-tab title="发布中">
        <div class="tab_content color_green">
          <div class="content_left">
            <div class="tab_name">满意度调查</div>
            <div class="tab_time_top color_one">PAC</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
        <div class="tab_content blue">
          <div class="content_left">
            <div class="tab_name">用药提醒</div>
            <div class="tab_time_top color_blue">流感</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
        <div class="tab_content orange">
          <div class="content_left">
            <div class="tab_name">复诊提醒</div>
            <div class="tab_time_top color_orange">脂肪肝</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="已结束">
        <div class="tab_content color_green">
          <div class="content_left">
            <div class="tab_name">满意度调查</div>
            <div class="tab_time_top color_one">PAC</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
        <div class="tab_content blue">
          <div class="content_left">
            <div class="tab_name">用药提醒</div>
            <div class="tab_time_top color_blue">流感</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
        <div class="tab_content orange">
          <div class="content_left">
            <div class="tab_name">复诊提醒</div>
            <div class="tab_time_top color_orange">脂肪肝</div>
            <div class="tab_time">
              2019/10/22
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">40%</p>
            <p class="progress">完成度</p>
          </div>
        </div>
      </van-tab>
      <van-tab title="异常患者">
        <div class="abnormal_content">
          <div class="content_top">
            <div class="userLogo">
              <img src="../../assets/home.png" alt="" />
            </div>
            <div class="userInfo">
              <div class="userNa">
                <span class="userName">张小光</span>
                <span>男</span>
                <span>24岁</span>
              </div>
              <div class="userRecord">
                <span>随访3</span>
                <span>提醒1</span>
                <span>电话回访5</span>
              </div>
            </div>

            <div class="content_right">
              40
            </div>
          </div>
          <div class="content_bottom">
            出院诊断: 病毒性高烧
          </div>
        </div>
      </van-tab>
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
.content_top {
  padding: 0.9em;
  display: flex;
//   justify-content: space-between;
  align-items: center
}
.content_top .userLogo {
  flex: 1;
}
.content_top .userInfo {
  flex: 4;
  color: #333333;
  font-size: 0.26rem
}
.content_top .userInfo .userName{
color: #121212;
font-size: 0.32rem;
font-weight: 600;
margin-right: 0.14rem
}
.content_top .userRecord {
    margin-top: 0.3rem;
    color: #979797;
    font-size: 0.24rem;
}
.content_top .content_right {
  color: #FF7D00;
  background: #FFF6EE;
  padding:0.09rem 0.2rem;
  border-radius: 36%
}
.content_bottom {
  border-top: #f6f6f6 0.02rem solid;
  padding: 0.9em;
  color: #979797;
  font-size: 0.26rem;
}
/deep/.van-tab {
  font-size: 0.3rem;
}
.swipe {
  margin-bottom: 0.36rem;
}
/deep/.van-tabs__nav--card {
  font-size: 50px;
}
/deep/.van-progress__pivot {
  position: unset;
  font-size: 0.32rem;
  background: transparent !important;
}
.abnormal_content {
  margin: 0.24rem 0.2rem;
  box-shadow: 0 0 10px #d3d3d3;
  border: 1px solid #dedede;
  border-radius: 0.12rem;
  text-align: left;
}
.tab_content {
  margin: 0.24rem 0.2rem;
  padding: 0.9em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px #d3d3d3;
  border: 1px solid #dedede;
  border-radius: 0.12rem;
}
.color_green {
  border-left: #0bb9bf 0.1rem solid;
}
.blue {
  border-left: #2eadff 0.1rem solid;
}
.color_blue {
  color: #2eadff !important;
  background: #e7f5ff !important;
}
.orange {
  border-left: #ffc92e 0.1rem solid;
}
.color_orange {
  color: #ffc92e !important;
  background: #fff7de !important;
}
.tab_content .content_left {
}
.tab_content .content_right {
  margin-right: 0.3rem;
}
.tab_content .content_right .percentum {
  color: #ff7d00;
  font-weight: 550;
  font-size: 0.54rem;
  padding-bottom: 0.16rem;
}
.tab_content .content_right .progress {
  color: #979797;
  font-size: 0.3rem;
}
/deep/.van-tab--active {
  color: #333333;
  font-size: 0.34rem;
  font-weight: 600;
}
.tab_time {
  text-align: left;
  font-size: 0.26rem;
  color: #c4c4c4;
}
.tab_name {
  color: #333333;
  font-size: 0.34rem;
  font-weight: 550;
  padding-bottom: 0.2rem;
}
.tab_time_top {
  font-size: 0.3rem;
  width: 68%;
  text-align: center;
  background: #e3f5f6;
  color: #0bb9bf;
  padding: 0.08rem 0.1rem;
  margin-bottom: 0.08rem;
}
.color_one {
  width: 46% !important;
}
</style>
