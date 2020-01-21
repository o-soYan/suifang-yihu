<template>
<div class="statisticsItem">
  <div class="item" v-for="(item,index) in itemDatas" @click="clickItem(item.id)" :key="index">
    <div class="title">{{item.templateNickName}}</div>
    <div class="time">{{item.createDate | dateSlice}}</div>
  </div>
  <none v-if="itemDatas.length === 0"></none>
</div>
</template>
<script>
import none from '@/components/none'
export default {
  data () {
    return {
      windowWidth: '',
      itemDatas: [],
      parentId: '',
      departId: '',
      disId: ''
    }
  },
  created () {
    this.windowWidth = window.innerWidth
    this.parentId = this.$route.query.type
    this.departId = this.$route.query.deptid
    this.disId = this.$route.query.disId
    this.getItems()
  },
  components: {
    none
  },
  filters: {
    dateSlice (n) {
      return n.slice(0, 10)
    },
    timeSlice (n) {
      return n.slice(11, 19)
    }
  },
  methods: {
    getItems () {
      let self = this
      let params = {
        id: self.parentId,
        deptid: self.departId,
        disId: self.disId
      }
      self.$get('FuvPublishPlanQueryFive', 'PACPatient', params).then(res => {
        if (res.result) {
          self.itemDatas = res.data
        }
      })
    },
    clickItem (id) {
      this.$router.push({name: 'SatisfactionSta', query: {id: id}})
    }
  },
  mounted () {
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteLeave (to, from, next) {
    if (from.path === '/analyze') {
      from.meta.keepAlive = true
    } else {
      from.meta.keepAlive = false
    }
    next()
  }
}
</script>
<style lang="less" scoped>
  .statisticsItem {
    padding: 0.3rem;
    .item {
      height:1.52rem;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
      border-radius:6px;
      line-height: 1.52rem;
      padding: 0 0.4rem;
      box-sizing: border-box;
      text-align: left;
      margin-bottom: 0.2rem;
      display: flex;
      .title {
        font-size:0.32rem;
        font-weight:600;
        color:rgba(18,18,18,1);
        flex: 1;
        text-overflow: ellipsis;
        overflow: hidden;
        padding-right: 0.2rem;
      }
      .time {
        font-size:0.32rem;
      }
    }
  }
</style>
