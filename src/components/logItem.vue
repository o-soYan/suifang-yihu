<template>
  <div class='logItemContainer'>
    <div class="item" v-for="(item, index) in logDatas" :key="index" @click="clickLogItem(item.templateId, item.isFinished)">
      <div class="itemContent">
        <p class="name">{{item.templateTitle}}</p>
        <p class="time">{{showStatus ? '随访日期' : '提醒日期'}}：{{item.createDate | dateSlice}}</p>
      </div>
      <template v-if="showStatus">
        <div class="itemStatus" v-if="item.isFinished">
          已完成
        </div>
        <div class="itemStatus noDoneStatus" v-else>
          未完成
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    logDatas: {
      type: Array
    },
    showStatus: {
      type: Boolean
    },
    logType: {
      type: String
    }
  },
  filters: {
    dateSlice (n) {
      return n.slice(0, 10)
    },
    timeSlice (n) {
      return n.slice(11, 19)
    }
  },
  data () {
    return {}
  },
  methods: {
    clickLogItem (id, isDone) {
      if (this.logType === 'remind') {
        this.$router.push({name: 'remindLogDetail'})
      } else {
        if (isDone) {
          this.$router.push({name: 'DoneQuesDetail', query: {id: id}})
        } else {
          this.$router.push({name: 'noDoQuesDetail', query: {id: id}})
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.logItemContainer {
  .item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.32rem 0.4rem;
    height:1.52rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0.3rem;
    .itemContent {
      flex: 6;
      text-align: left;
      .name {
        font-size:0.32rem;
        font-weight:600;
        color:rgba(18,18,18,1);
        line-height:0.44rem;
      }
      .time {
        font-size:0.24rem;
        color:rgba(151,151,151,1);
        line-height:0.34rem;
        margin-top: 0.08rem;
      }
    }
    .itemStatus {
      flex: 1;
      width:0.98rem;
      height:0.36rem;
      background:rgba(227,245,246,1);
      border-radius:2px;
      font-size:0.24rem;
      color:rgba(11,185,191,1);
      line-height:0.36rem;
      &.noDoneStatus {
        color:rgba(255,125,0,1);
        background:rgba(255,246,238,1);
      }
    }
  }
}
</style>
