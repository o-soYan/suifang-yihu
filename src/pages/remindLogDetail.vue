<template>
  <div :style="'min-height:' + windowHeight + 'px'" class="logDetailContainer">
    <div class="logTopBox">
      <p class="logTitle">{{greetings.type}}</p>
      <div class="logPublisher">{{greetings.title}}</div>
    </div>
    <div class="logcontent">
      <template v-if="detailInfo.length > 0">
        <div class="logItem" v-for="(item, index) in detailInfo" :key="index">
          <div class="cell" v-for="(cItem, cIndex) in item.items" :key="cIndex">
            <div class="title">{{cItem.remindKey}}</div>
            <div class="name">{{cItem.remindValue}}</div>
          </div>
        </div>
      </template>
      <!--      {{detailInfo.greetings}}-->
      <!--      <none></none>-->
      <div class="greetingsContent" v-else>
        <div class="content">
          {{greetings.greetings}}
        </div>
        <div class="createTime">
          发布日期：{{greetings.updateDate | dateSlice}} {{greetings.updateDate | timeSlice}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      windowHeight: '',
      questionId: '',
      detailInfo: {},
      greetings: ''
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
  created () {
    this.windowHeight = document.documentElement.clientHeight
    this.questionId = this.$route.query.id
    this.getQuestionDetail()
  },
  methods: {
    getQuestionDetail () {
      let self = this
      let params = {
        id: 'A1908E32-1A6B-41E0-BDCE-10BA51A0368A'
      }
      self.$get('RemindMessageBaseDetail', 'PACPatient', params).then(res => {
        if (res.resultCode === 1) {
          self.greetings = res.data.templateBase
          self.detailInfo = res.data.remindTemplates
        }
      })
    }
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteLeave (to, from, next) {
    to.meta.keepAlive = true
    next()
  }
}
</script>

<style lang="less" scoped>
  .logDetailContainer {
    padding: 0.2rem;
    text-align: left;
    background:linear-gradient(180deg,rgba(11,185,191,1) 0%,rgba(11,185,191,0) 100%);
    box-sizing: border-box;
    .logTopBox {
      margin: 0.6rem  0.4rem 0.36rem;
    }
    .logTitle {
      font-size:0.44rem;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:0.6rem;
      margin-bottom: 0.04rem;
    }
    .logPublisher {
      font-size:0.26rem;
      color:rgba(255,255,255,1);
      line-height:0.36rem;
    }
    .logcontent {
      padding: 0 0.3rem;
      .logItem {
        border-radius: 6px;
        background: #ffffff;
        /*height: 2.98rem;*/
        margin-bottom: 0.2rem;
        .cell {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #ededed;
          padding: 0.28rem 0.4rem;
          &:last-child {
            border-radius: 6px;
          }
          .title {
            flex: 3;
            font-size:0.3rem;
            color:rgba(51,51,51,1);
            line-height:0.42rem;
          }
          .name {
            flex: 4;
            font-size:0.3rem;
            color:rgba(151,151,151,1);
            line-height:0.42rem;
          }
        }
      }
    }
    .greetingsContent {
      border-radius: 6px;
      background: #ffffff;
      /*margin: 0 0.3rem;*/
      font-size: 0.3rem;
      padding: 0.3rem;
      .content {
        text-indent: 2em;
        width: 100%;
        word-wrap: break-word;
        line-height: 0.34rem;
      }
      .createTime {
        margin-top: 1em;
        text-align: right;
      }
    }
  }
</style>
