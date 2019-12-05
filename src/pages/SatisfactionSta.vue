<template>
  <div class="SatisfactionSta">
    <div class="tabBox">
      <p @click="activeItem = 0" :class="activeItem === 0 ? 'active' : ''">
        <span>统计报表</span>
      </p>
      <p @click="activeItem = 1" :class="activeItem === 1 ? 'active' : ''">
        <span>答题详情</span>
      </p>
      <i :style="activeItem === 0 ? 'transform: translateX(-1.5rem) translateX(-50%)' : 'transform: translateX(1.9rem) translateX(-50%)'"></i>
    </div>
    <div class="bd">
      <div v-show="activeItem === 0">
<!--        题目统计-->
        <div class="questionStatistics">
          <div class="questionTitle">Q3: 您认为满意度调查重要吗?</div>
          <div id="sati" class="satiBar"></div>
        </div>
      </div>
      <div v-show="activeItem === 1">
        <div class="personnel_content">
         <div class="personnel_list" v-for="(item,index) in personnel" :key="index">
          <div class="list_content">
            <div class="userInfo">
              <div class="user_logo">
                <img :src="item.src" alt="">
              </div>
              <div class="answer_name">{{item.name}}</div>
            </div>
            <div class="answer_state" :class="item.state === 1 ? '' : 'noDone'">
              <span>{{item.state === 1 ? '已完成' : '未完成'}}</span>
            </div>
<!--            <div class="answer_details"><router-link to="/">查看详情</router-link></div>-->
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
      activeItem: 0,
      personnel: [
        {src: 'http://img4.imgtn.bdimg.com/it/u=1076581556,1614991964&fm=15&gp=0.jpg',
          name: '张三女',
          state: 1
        },
        {src: 'http://img4.imgtn.bdimg.com/it/u=2458315308,1891866290&fm=15&gp=0.jpg',
          name: '张444',
          state: 0
        },
        {src: 'http://img3.imgtn.bdimg.com/it/u=1536694097,658034884&fm=15&gp=0.jpg',
          name: '张000',
          state: 0
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
        grid: {
          top: '0',
          left: '0',
          right: '0',
          bottom: '0'
        },
        graphic: {
          type: 'group',
          children: [
            {
              type: 'text',
              id: 'text1',
              top: '50px',
              style: {
                text: '共一人',
                fill: '#333',
                font: 'normal 0.3rem Microsoft YaHei',
                textAlign: 'center'
              }
            }, {
              type: 'text',
              id: 'text2',
              top: '70px',
              style: {
                text: '回答',
                fill: '#999999',
                font: 'normal 0.3rem Microsoft YaHei',
                textAlign: 'center'
              }
            }
          ],
          left: 'center',
          top: 'center',
          z: 2,
          zlevel: 100
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            hoverAnimation: false, // 鼠标悬浮是否有区域弹出动画，false:无  true:有
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
              show: false
            },
            data: [
              { value: 35, name: '一般' },
              { value: 48, name: '非常重要' },
              { value: 19, name: '无关紧要' }
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

  .tabBox {
    width:6.9rem;
    margin: 0.3rem auto;
    height:1.18rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f9f9f9;
    position: relative;
    p {
      width: 50%;
      text-align: center;
      font-size:0.3rem;
      color:rgba(160,160,160,1);
      line-height:0.42rem;
      &.active {
        font-size:0.34rem;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
        span {
          font-weight:900;
        }
      }
    }
    i {
      display: inline-block;
      width:0.44rem;
      height:4px;
      background:rgba(11,185,191,1);
      border-radius:6px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -0.22rem;
      transition-duration: 0.3s;
    }
  }
.list_content{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.personnel_content .personnel_list{
  height:1.52rem;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
  border-radius:6px;
  padding: 0 0.4rem;
  margin-bottom: 0.2rem;
}
.personnel_content .personnel_list .userInfo{
  flex: 6;
  text-align: center;
  display: flex;
  align-items: center;
  .answer_name {
    font-size:0.32rem;
    font-weight:600;
    color:rgba(18,18,18,1);
    line-height:0.44rem;
  }
}
.personnel_content .personnel_list .user_logo {
  width: 0.92rem;
  height: 0.92rem;
  margin-right: 0.18rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.personnel_content .personnel_list .answer_state{
  flex:3;
  text-align: right;
}
.personnel_content .personnel_list .answer_state span{
  font-size:0.24rem;
  color:rgba(11,185,191,1);
  line-height:0.36rem;
  padding: 0 0.12rem;
  height:0.36rem;
  background:rgba(227,245,246,1);
  border-radius:2px;
  text-align: center;
  display: inline-block;
}
  .personnel_content .personnel_list .answer_state.noDone span {
    font-size:0.24rem;
    color:#FF7D00;
    line-height:0.36rem;
    padding: 0 0.12rem;
    height:0.36rem;
    background:#FFF6EE;
    border-radius:2px;
    text-align: center;
    display: inline-block;
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
/*.statistics_list {*/
/*  position: relative;*/
/*  margin: 20px;*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  // align-content: center;*/
/*}*/
/*.statistics_name {*/
/*  flex: 4;*/
/*  margin-left: 20px;*/
/*}*/
/*.dot {*/
/*  flex: 1;*/
/*  position: absolute;*/
/*  bottom: 10px;*/
/*  left: -0.12rem;*/
/*}*/
/*.dot div {*/
/*  width: 10px;*/
/*  height: 10px;*/
/*  background: #3399ff;*/
/*  border-radius: 50%;*/
/*  margin-bottom: 25px;*/
/*  left: 20px;*/
/*}*/
/*.dot div:nth-child(2) {*/
/*  background: darkblue;*/
/*}*/
/*.dot div:last-child {*/
/*  margin-bottom: 0px;*/
/*  background: maroon;*/
/*}*/
/*.statistics_result {*/
/*  flex: 4;*/
/*  text-align: center;*/
/*}*/
.SatisfactionSta {
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
  text-align: left;
  padding: 0 0.3rem 0.3rem;
  .questionStatistics {
    width: 5.9rem;
    height:9.94rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 20px 0px rgba(231,231,231,1);
    border-radius:6px;
    text-align: center;
    padding: 0.46rem 0;
    box-sizing: border-box;
    .questionTitle {
      font-size:0.32rem;
      font-weight:600;
      color:rgba(18,18,18,1);
      line-height:0.44rem;
      margin-top: 0.34rem;
      margin-bottom: 1.18rem;
      padding: 0 0.46rem;
    }
    .satiBar {
      width: 100%;
      height: 4.46rem;
      margin: 0 auto;
    }
  }
}
.answerNum{
    border-top: #ccc 1px solid
}
.answerNum .answerNum_content{
    padding-top: 0.50rem;
    color: #999
}
</style>
