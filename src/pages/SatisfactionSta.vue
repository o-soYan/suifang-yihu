<template>
  <!-- <div class="SatisfactionSta">
        <van-tabs type="card" color="#87CEFA">
  <van-tab title="统计报表">
      <div>Q3: 您认为满意度调查重要吗?</div>
  </van-tab>
  <van-tab title="答题详情">内容 2</van-tab>
</van-tabs>
<div id="sati" :style="{width:windowWidth + 'px', height:windowWidth + 'px'}"></div>
    </div> -->
  <div class="SatisfactionSta">
    <div class="hd">
      <span :class="{ cur: now === '统计报表' }" @click="now = '统计报表'"
        >统计报表</span
      >
      <span :class="{ cur: now === '答题详情' }" @click="now = '答题详情'"
        >答题详情</span
      >
    </div>
    <div class="bd">
      <div v-show="now === '统计报表'">
        <div>Q3: 您认为满意度调查重要吗?</div>
        <div
          id="sati"
          :style="{ width: windowWidth + 'px', height: windowWidth + 'px' }"
        ></div>
        <div class="statistics_list">
          <div class="dot">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="statistics_name">
            <ul>
              <li>
                选项
              </li>

              <li>
                非常重要
              </li>

              <li>
                一般
              </li>

              <li>
                无关紧要
              </li>
            </ul>
          </div>
          <div class="statistics_result">
            <ul>
              <li>回复情况</li>
              <li>0</li>
              <li>2</li>
              <li>5</li>
            </ul>
          </div>
        </div>
        <div class="answerNum">
            <div class="answerNum_content">
            共1人回答

            </div>
        </div>
      </div>
      <div v-show="now === '答题详情'">
      <div class="personnel_content">
       <div class="personnel_list" v-for="(item,index) in personnel" :key="index">
        <div class="list_content">
            <div class="user_logo">
  <img :src="item.src" alt="">

            </div>

  <div class="answer_name">{{item.name}}</div>
  <div class="answer_state">
      <span>{{item.state}}</span></div>
  <div class="answer_details"><router-link to="/">查看详情</router-link></div>

        </div>
       </div>
      </div>
      </div>

    </div>
  </div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts')
// 引入柱状图
// require('echarts/lib/chart/pie')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  data () {
    return {
      now: '统计报表',
      windowWidth: '',
      personnel: [
        {src: 'http://img4.imgtn.bdimg.com/it/u=1076581556,1614991964&fm=15&gp=0.jpg',
          name: '张三女',
          state: '已完成'
        },
        {src: 'http://img4.imgtn.bdimg.com/it/u=2458315308,1891866290&fm=15&gp=0.jpg',
          name: '张444',
          state: '已完成'
        },
        {src: 'http://img3.imgtn.bdimg.com/it/u=1536694097,658034884&fm=15&gp=0.jpg',
          name: '张000',
          state: '未完成'
        }
      ]
    }
  },
  created () {
    this.windowWidth = window.innerWidth
    console.log(window.innerWidth)
  },
  methods: {
    getEchartsa () {
      console.log(document.getElementById('sati'))
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('sati'))
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        // legend: {
        // //   orient: 'vertical',
        // //   x: 'left',
        // //   data: ['直达', '营销广告', '搜索引擎', '邮件营销', '联盟广告', '视频广告', '百度', '谷歌', '必应', '其他']
        // },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
              normal: {
                position: 'inner'
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: []
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['33%', '55%'],
            label: {
              normal: {
                formatter: ' {abg|}{b|{b}: }{c}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur: 3,
                // shadowOffsetX: 2,
                // shadowOffsetY: 2,
                // shadowColor: '#999',
                // padding: [0, 7],
                rich: {
                  a: {
                    color: '#999',
                    lineHeight: 22,
                    align: 'center'
                  },
                  // abg: {
                  //     backgroundColor: '#333',
                  //     width: '100%',
                  //     align: 'right',
                  //     height: 22,
                  //     borderRadius: [4, 4, 0, 0]
                  // },
                  hr: {
                    borderColor: '#aaa',
                    width: '100%',
                    borderWidth: 0.5,
                    height: 0
                  },
                  b: {
                    fontSize: 12,
                    lineHeight: 33
                  },
                  per: {
                    color: '#eee',
                    backgroundColor: '#334455',
                    padding: [2, 4],
                    borderRadius: 2
                  }
                }
              }
            },
            data: [
              { value: 35, name: '一般' },
              { value: 48, name: '非常重要' },
              { value: 51, name: '无关紧要' }
              //   { value: 147, name: '必应' }
              //   {value: 102, name: '其他'}
            ]
          }
        ]
      })
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize({
            width: window.innerWidth,
            height: window.innerHeight
          })
        }
      }, 200)
    }
  },
  mounted () {
    this.getEchartsa()
  }
}
</script>
<style lang="less" scoped>
.list_content{
display: flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid #ccc;
padding:10px 0;
}
.personnel_content .personnel_list{
}
.personnel_content .personnel_list .user_logo{
flex: 3;
text-align: center;
}
.personnel_content .personnel_list .user_logo img{
width: 50%;
}
.personnel_content .personnel_list .answer_name{
flex: 3
}
.personnel_content .personnel_list .answer_state{
flex:3;
width: 10px;
}
.personnel_content .personnel_list .answer_state span{
    color: #fff;
    padding: 0.08rem;
    background: #009933;
    font-size: 0.26rem
}
.personnel_content .list_content .answer_details{
    flex: 3;
}

.personnel_content .list_content .answer_details a{
// text-decoration:none;
color: #2c3e50;
font-size: 0.32rem;
text-decoration: underline
}
.statistics_list {
  position: relative;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  // align-content: center;
}
.statistics_name {
  flex: 4;
  margin: 0 10px;
}
.dot {
  flex: 1;
  position: absolute;
  bottom: 10px;
  left: -30px;
}
.dot div {
  width: 10px;
  height: 10px;
  background: #3399ff;
  border-radius: 50%;
  margin-bottom: 25px;
  left: 20px;
}
.dot div:nth-child(2) {
  background: darkblue;
}
.dot div:last-child {
  margin-bottom: 0px;
  background: maroon;
}
.statistics_result {
  flex: 4;
  text-align: center;
}
* {
  margin: 0;
  padding: 0;
}
.SatisfactionSta {
  //   width: 360px;
  font-size: 0.34rem;
}
.hd {
  //   width: 5.2rem;
  height: 0.88rem;
  //   margin: 0.28rem auto;
  margin-left: 22%;
  background: #ffffff;
}
.hd span {
  width: 2.1rem;
  height: 0.88rem;
  border-top: 1px solid #ccc;
  border-left: 1px solid #ccc;
  display: block;
  float: left;
  line-height: 48px;
  cursor: pointer;
}
.hd span:last-child {
  border-right: 1px solid #ccc;
}
.hd span.cur {
  background: #3399ff;
  color: #fff;
}
.bd {
  border-top: 1px solid #ccc;
  text-align: left;
//   padding: 10px 20px;
}
.bd ul {
  list-style: none;
}
.bd ul li {
  line-height: 200%;
}
.answerNum{
    border-top: #ccc 1px solid
}
.answerNum .answerNum_content{
    padding-top: 0.50rem;
    color: #999
}
</style>
