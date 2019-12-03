<template>
<div class="statistics">
    <div>未婚已婚统计</div>
<div id="main" :style="{width:windowWidth + 'px', height:windowWidth + 'px'}">
</div>
</div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts')
// 引入柱状图
require('echarts/lib/chart/pie')
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
    getEcharts () {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        color: ['#66CCFF', '#FF9900'],
        title: {
          text: ''
        },
        tooltip: {},
        // xAxis: {
        //   data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        // },
        // yAxis: {},
        series: [{
          name: '销量',
          type: 'pie',
          data: [ {value: 31.48, name: '药流'},
            {value: 68.52, name: '手术'}
          ]
        }]
      })
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize({width: window.innerWidth, height: window.innerHeight})
        }
      }, 200)
    }
  },
  mounted () {
    this.getEcharts()
  }
}
</script>
<style lang="less" scoped>

</style>
