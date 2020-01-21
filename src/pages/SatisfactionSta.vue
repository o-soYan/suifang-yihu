<template>
  <div class="SatisfactionSta" :style="{height:windowHeight + 'px'}">
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
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in questionList" :key="index">
              <div class="questionStatistics">
                <div class="questionTitle">Q{{index + 1}}: {{item.question}}</div>
                <div :id="'sati' + index" class="satiBar"></div>
                <div class="content">
                  <template v-for="(aItem, aIndex) in item.answer">
                    <div class="contentItem" :key="aIndex">
                      <i :style="{background: colorArr[aIndex]}"></i>
                      <span class="choise">{{aItem.val}}</span>
                      <span class="peoples">{{aItem.peoples}}人</span>
                    </div>
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <div v-show="activeItem === 1">
        <div class="personnel_content">
         <div class="personnel_list" v-for="(item,index) in personnel" :key="index" @click="clickPerson">
          <div class="list_content">
            <div class="userInfo">
              <div class="user_logo">
                <img :src="item.logo" alt="">
              </div>
              <div class="answer_name">{{item.name}}</div>
            </div>
            <div class="answer_state" :class="item.isFinished === 1 ? '' : 'noDone'">
              <span>{{item.isFinished === 1 ? '已完成' : '未完成'}}</span>
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
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
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
      ],
      questionList: [],
      colorArr: ['#c23531', '#2f4554', '#6ab0b8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#00bbc1']
    }
  },
  created () {
    this.windowHeight = window.innerHeight
    this.getPatientList()
  },
  methods: {
    getEchartsa (index, datas) {
      this.$nextTick(() => {
        let peoples = 0
        for (let i in datas) {
          peoples = peoples + datas[i].value
        }
        let ele = document.getElementById('sati' + index)
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(ele)
        // 绘制图表
        myChart.setOption({
          color: this.colorArr,
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}：{c}人 ({d}%)'
          },
          graphic: {
            type: 'group',
            children: [
              {
                type: 'text',
                id: 'text1',
                top: '50px',
                style: {
                  text: '共' + peoples + '人',
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
              name: '',
              type: 'pie',
              radius: ['53%', '85%'],
              label: {
                show: false
              },
              data: datas
            }
          ]
        })
        setTimeout(function () {
          window.onresize = function () {
            myChart.resize()
          }
        }, 200)
      })
    },
    getDatas () {
      let self = this
      self.$get('StatisticsreportQuery', 'PACPatient').then(res => {
        if (res.result) {
          self.questionList = res.data
          let answer = []
          let answerObj = {}
          let allAnswer = []
          for (let i in res.data) {
            allAnswer.push(answer)
            answer = []
            answerObj = {}
            for (let k in res.data[i].answer) {
              let item = res.data[i].answer[k]
              answerObj = {
                value: item.peoples,
                name: item.val
              }
              answer.push(answerObj)
            }
          }
          allAnswer.push(answer)
          allAnswer.shift()
          for (let j in allAnswer) {
            this.getEchartsa(j, allAnswer[j])
          }
        }
      })
    },
    clickPerson () {
      this.$router.push({name: 'DoneQuesDetail'})
    },
    getPatientList () {
      let self = this
      self.$get('Answerdetails', 'PACPatient').then(res => {
        if (res.result) {
          self.personnel = res.row
        }
      })
    }
  },
  mounted () {
    this.getDatas()
    // eslint-disable-next-line no-new
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: false,
      autoplay: 5000,
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 10,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' +
            '/' +
            '<span class="' + totalClass + '"></span>'
        }
      }
    })
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteEnter (to, from, next) {
    from.meta.keepAlive = true
    next()
  }
}
</script>
<style lang="less" scoped>
.SatisfactionSta {
  overflow: hidden;
}
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
  .personnel_content {
    padding: 0 0.3rem;
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
  padding: 0 0;
  .swiper-container {
    width: 100%;
    height: 9.94rem;
    /*padding-bottom: 66px;*/
    /*overflow: visible!important;*/
  }
  .swiper-slide{
    width: 85%;
  }
  /deep/.swiper-pagination-total {
    color: #999999;
  }
  /deep/.swiper-pagination-current {
    color:rgba(11,185,191,1);
  }
  .questionStatistics {
    /*width: 5.9rem !important;*/
    height:9.94rem;
    margin: 0 auto;
    background:rgba(255,255,255,1);
    box-shadow:0px 4px 10px 0px rgba(231,231,231,1);
    border-radius:6px;
    text-align: center;
    padding: 0.46rem 0;
    box-sizing: border-box;
    border: 1px solid #d3d3d3;
    .questionTitle {
      font-size:0.32rem;
      font-weight:600;
      color:rgba(18,18,18,1);
      line-height:0.44rem;
      margin-top: 0.34rem;
      /*margin-bottom: 1.18rem;*/
      padding: 0 0.46rem;
    }
    .satiBar {
      min-width: 254px;
      min-height: 225px;
      max-width: 80%;
      max-height: 50%;
      margin: 0.6rem auto 0;
      div {
        height: 100% !important;
      }
    }
    .content {
      /*display: flex;*/
      /*justify-content: space-between;*/
      text-align: left;
      margin-top: 0.3rem;
      .contentItem {
        padding: 0.16rem 0;
        /*flex-basis: 50%;*/
        display: inline-block;
        width: 50%;
        text-align: center;
      }
      i {
        display: inline-block;
        width: 0.16rem;
        height: 0.16rem;
        border-radius: 50%;
      }
      .choise {
        color: #333333;
        font-size: 0.28rem;
      }
      .peoples {
        color: #999999;
        font-size: 0.28rem;
      }
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
