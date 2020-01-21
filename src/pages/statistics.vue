<template>
<div class="statistics">
<div id="main" :style="{ height:windowWidth + 'px'}">
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
      windowWidth: '',
      showType: '',
      deptid: '',
      disId: ''
    }
  },
  created () {
    this.windowWidth = window.innerWidth
    this.showType = this.$route.query.type
    this.deptid = this.$route.query.deptid
    this.disId = this.$route.query.disId
  },
  methods: {
    getEcharts () {
      let self = this
      let text = ''
      if (self.showType === 'yl') {
        text = '手术药流统计'
      } else if (self.showType === 'hunyin') {
        text = '未婚已婚统计'
      } else if (self.showType === 'liuchan') {
        text = '流产次数统计'
      } else {
        text = '避孕方案统计'
      }
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main'))
      // 绘制图表
      myChart.setOption({
        color: ['#c23531', '#2f4554', '#6ab0b8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3', '#00bbc1'],
        // color: function (value) { return '#' + ('00000' + ((Math.random() * 16777215 + 0.5) >> 0).toString(16)).slice(-6) },
        title: {
          text: text,
          x: 'center'
        },
        tooltip: {},
        series: []
      })
      let params = {
        deptid: self.deptid,
        disId: self.disId
      }
      if (self.showType === 'yl') {
        self.$get('MedicineFlow', 'PACPatient', params).then(res => {
          if (res.result) {
            let dataArr = []
            for (let i in res.data) {
              let obj = {
                value: res.data[i].num,
                name: res.data[i].name.slice(0, res.data[i].name.length - 2)
              }
              dataArr.push(obj)
            }
            myChart.setOption({
              series: [{
                type: 'pie',
                data: dataArr,
                label: {
                  normal: {
                    position: 'inner',
                    formatter: '{b} {d}%'
                  }
                }
              }]
            })
          }
        })
      } else if (self.showType === 'hunyin') {
        self.$get('MaritalStatusQuery', 'PACPatient', params).then(res => {
          if (res.result) {
            let dataArr = []
            for (let i in res.data) {
              let obj = {
                value: res.data[i].num,
                name: res.data[i].name.slice(0, res.data[i].name.length - 2)
              }
              dataArr.push(obj)
            }
            myChart.setOption({
              series: [{
                type: 'pie',
                data: dataArr,
                label: {
                  normal: {
                    position: 'inner',
                    formatter: '{b} {d}%'
                  }
                }
              }]
            })
          }
        })
      } else if (self.showType === 'liuchan') {
        self.$get('PrewPregnancyWayQuery', 'PACPatient', params).then(res => {
          if (res.result) {
            let dataArr = []
            for (let i in res.data) {
              let obj = {
                value: res.data[i].num,
                name: res.data[i].name.slice(0, res.data[i].name.length - 2)
              }
              dataArr.push(obj)
            }
            myChart.setOption({
              series: [{
                type: 'pie',
                data: dataArr,
                label: {
                  normal: {
                    position: 'inner',
                    formatter: '{b} {d}%'
                  }
                }
              }]
            })
          }
        })
      } else {
        self.$get('ContraceptionQuery', 'PACPatient', params).then(res => {
          if (res.result) {
            let dataArr = []
            for (let i in res.data) {
              let obj = {
                value: res.data[i].num,
                name: res.data[i].name.slice(0, res.data[i].name.length - 2)
              }
              dataArr.push(obj)
            }
            myChart.setOption({
              series: [{
                type: 'pie',
                data: dataArr,
                label: {
                  normal: {
                    position: 'inner',
                    formatter: '{b} {d}%'
                  }
                }
              }]
            })
          }
        })
      }
      setTimeout(function () {
        window.onresize = function () {
          myChart.resize({width: window.innerWidth, height: window.innerHeight})
        }
      }, 200)
    }
  },
  mounted () {
    this.getEcharts()
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = true
    next()
  }
}
</script>
<style lang="less" scoped>
#main {
  width: 88%;
  margin: 1rem auto;
}
</style>
