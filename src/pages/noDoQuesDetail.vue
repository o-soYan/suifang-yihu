<template>
  <div class="doQuestions container">
    <div class="allContent">
      <div class="topTitle">
        <div class="title">{{greetings.title}}</div>
        <div class="topic">{{greetings.greetings}}</div>
      </div>
      <div class="questionsContent">
        <div class="questionItem" v-for="(item, index) in itemDatas" :key="index">
          <p class="itemTitle">{{index+1}}、{{item.stem}} <i v-if="item.isRequired">*</i></p>
          <!-- 此处根据问题类型显示-->
          <!-- 如果是输入框-->
<!--          <div class="isInput" v-if="item.category == 2">-->
<!--            <div class="cell">-->
<!--              <input id="js_input" class="weui-input" placeholder="请输入您的回答">-->
<!--            </div>-->
<!--          </div>-->
<!--          如果是单选-->
          <div class="isOneChoice" v-if="item.category == 0">
            <div class="cell" :class="cItem.is ? 'cellClick' : ''" v-for="(cItem, cIndex) in item.questionItems" :key="cIndex" @click="oneChoiceClick(index, cIndex)">
              <i class="iconfont" :class="cItem.is ? 'icon-yuan' : 'icon-circle-empty'"></i> {{cItem.content}}
            </div>
          </div>
<!--          如果是复选-->
          <div class="isAnyChoice" v-if="item.category == 1">
            <div class="cell" :class="cItem.is ? 'cellClick' : ''" v-for="(cItem, cIndex) in item.questionItems" :key="cIndex" @click="anyChoiceClick(index, cIndex)">
              <i class="iconfont" :class="cItem.is ? 'icon-yuan' : 'icon-circle-empty'"></i> {{cItem.content}}
            </div>
          </div>
          <!--          如果是填空-->
          <div class="isTextarea" v-if="item.category == 2">
            <div class="cell">
              <textarea class="weui-textarea" placeholder="请描述你所发生的问题"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'doQuestions',
  data () {
    return {
      rightBtn: { // header 右侧按钮
        number: 1, // 按钮数量
        textValue: '退出'
      },
      choices: [{
        font: '您的性别',
        type: 1,
        items: [{
          font: '男',
          is: false
        }, {
          font: '女',
          is: false
        }]
      }, {
        font: '您的性别1',
        type: 1,
        items: [{
          font: '男1',
          is: false
        }, {
          font: '女1',
          is: false
        }]
      }],
      itemDatas: [],
      greetings: '',
      quesId: ''
    }
  },
  created () {
    this.quesId = this.$route.query.id
    this.getQuestionDetail()
  },
  methods: {
    handleText () {
      this.$router.push({name: 'home'})
    },
    getQuestionDetail () {
      let self = this
      let params = {
        id: self.quesId
      }
      self.$get('QuestionItemDetail', 'PACPatient', params).then(res => {
        if (res.result) {
          self.itemDatas = res.row.questions
          self.greetings = res.row.templateBase
          for (let i in self.itemDatas) {
            if (self.itemDatas[i].category === 0 || self.itemDatas[i].category === 1) {
              for (let k in self.itemDatas[i].items) {
                self.itemDatas[i].items[k].is = false
              }
            }
          }
        }
      })
    },
    // 单选
    oneChoiceClick (pIndex, cIndex) {
      let item = this.itemDatas[pIndex].questionItems
      for (let i in item) {
        if (i !== cIndex) {
          item[i].is = false
        }
      }
      this.$set(this.itemDatas[pIndex].questionItems[cIndex], 'is', true)
      this.$forceUpdate()
    },
    // 多选
    anyChoiceClick (pIndex, cIndex) {
      this.itemDatas[pIndex].questionItems[cIndex].is = !this.itemDatas[pIndex].questionItems[cIndex].is
      this.$forceUpdate()
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
.doQuestions {
  .allContent {
    padding: 0.2rem;
  }
  .topTitle {
    text-align: left;
    .title {
      font-size: 0.4rem;
      line-height: 2.5;
      font-weight: bold;
    }
    .topic {
      font-size: 0.34rem;
      line-height: 1.5;
      text-align: justify;
    }
  }
  .questionsContent {
    padding-bottom: 1rem;
    .questionItem{
      margin-top: 0.4rem;
      text-align: left;
      .itemTitle {
        font-size: 0.34rem;
        font-weight: 600;
        i {
          color: red;
        }
      }
      .cell {
        font-size: 0.3rem;
        border: 1px solid #e5e5e5;
        border-radius: 0.1rem;
        padding: 0.2rem;
        margin-top: 0.2rem;
        &.cellClick {
          color: cornflowerblue;
        }
        .weui-textarea {
          font-size: 0.32rem;
          border: none;
          width: 100%;
          height: 1rem;
        }
      }
    }
  }
  .submitBtn {
    margin: 0.4rem 0;
  }
}
</style>
