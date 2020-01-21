<template>
  <div class="detailContainer">
    <div class="content">
      <div class="item" v-for="(item, index) in questionList" :key="index">
        <div class="quesTitle">
          Q{{index + 1}}: {{item.question}}
        </div>
        <div class="quesAns">
          <template v-for="(aItem, aIndex) in item.answer">
            <span :key="aIndex">{{aItem.val}}{{index === item.answer.length - 1 ? '' : '，'}}</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'detail',
  data () {
    return {
      quesId: '',
      questionList: []
    }
  },
  created () {
    this.quesId = this.$route.query.id
    this.getQuestionList()
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    getQuestionList () {
      let self = this
      self.showLoading({ msg: '加载中...', autoClose: false })
      self.$get('Viewdetails', 'PACPatient').then(res => {
        if (res.result) {
          self.questionList = res.data
        }
        self.hideLoading()
      })
    }
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteLeave (to, from, next) {
    from.meta.keepAlive = true
    next()
  }
}
</script>

<style lang="less" scoped>
.detailContainer {
  .content {
    margin: 0.3rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
  }
  .item {
    padding: 0.4rem;
    font-size: 0.32rem;
    text-align: left;
    height:2rem;
    background:rgba(255,255,255,1);
    border-bottom: 1px solid #f9f9f9;
    box-sizing: border-box;
    .quesTitle {
      font-size:0.32rem;
      font-weight:600;
      color:rgba(18,18,18,1);
      line-height:0.44rem;
    }
    .quesAns {
      font-size:0.28rem;
      color:rgba(11,185,191,1);
      line-height:0.4rem;
      margin-top: 0.36rem;
    }
  }
}
</style>
