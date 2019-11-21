<template>
  <div>
    <sideTab :datas='tabDatas' @tabClick='tabClick'>
      <template v-for="(item, index) in tabDatas">
        <div class="tabItem" :key="index" v-if="slected === index">
          <patientItem :patientDatas='selectedDatas'></patientItem>
        </div>
      </template>
    </sideTab>
  </div>
</template>

<script>
import sideTab from '@/components/sideTab'
import patientItem from '@/components/patientItem'
export default {
  data () {
    return {
      tabDatas: ['感冒', '肿瘤'],
      slected: 0,
      patientDatas: [{
        name: '方宇',
        sex: '女',
        yearsold: '22',
        pics: '感冒',
        topic: '10'
      }, {
        name: '方宇',
        sex: '女',
        yearsold: '225',
        pics: '感冒le',
        topic: '2'
      }],
      selectedDatas: []
    }
  },
  components: {
    sideTab,
    patientItem
  },
  created () {
    this.selectedDatas.push(this.patientDatas[0])
  },
  methods: {
    tabClick (index) {
      this.slected = index
      let arr = []
      arr.push(this.patientDatas[index])
      this.selectedDatas = arr
    }
  }
}
</script>

<style lang="less" scoped>

</style>
