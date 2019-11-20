<template>
    <div class="SatisfactionSta">
        <van-tabs type="card" color="#87CEFA">
  <van-tab title="统计报表">
      <div>Q3: 您认为满意度调查重要吗?</div>
  </van-tab>
  <van-tab title="答题详情">内容 2</van-tab>
</van-tabs>
<div id="sati" :style="{width:windowWidth + 'px', height:windowWidth + 'px'}"></div>
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
      windowWidth: ''
    }
  },
  created () {
    this.windowWidth = window.innerWidth
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
            data: [

            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              normal: {
                formatter: ' {abg|}{b|{b}: }{c}  ',
                backgroundColor: '#eee',
                borderColor: '#aaa',
                borderWidth: 1,
                borderRadius: 4,
                // shadowBlur:3,
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
                    fontSize: 16,
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
              {value: 335, name: '直达'},
              //   {value: 310, name: '邮件营销'},
              //   {value: 234, name: '联盟广告'},
              //   {value: 135, name: '视频广告'},
              {value: 1048, name: '百度'},
              {value: 251, name: '谷歌'},
              {value: 147, name: '必应'}
            //   {value: 102, name: '其他'}
            ]
          }
        ]
      })
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize({width: window.innerWidth, height: window.innerHeight})
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
/deep/.van-tabs--card>.van-tabs__wrap{
    width: 5.20rem;
    height: 50px!important;
    margin: 0.28rem auto;
}
/deep/.van-tabs__nav--card{
     font-size: 36px !important;
     height: 50px;
     line-height: 40px;
}
/deep/.van-tabs__nav--card .van-tab{
    line-height: 48px;
}
/deep/.van-tab{
    font-size: 0.32rem;
}
</style>
