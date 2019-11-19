<template>
  <div class="doQuestions container">
    <Header
      :isTitle="true"
      title="问卷调查"
      :isScan="false"
      :isBack="true"
      :rightBtn="rightBtn"
      @handleText="handleText">
    </Header>
    <div class="allContent">
      <div class="topTitle">
        <div class="title">问卷调查</div>
        <div class="topic">感谢您能抽出几分钟时间来参加本次答题，现在我们开始吧！</div>
      </div>
      <div class="questionsContent">
        <div class="questionItem" v-for="(item, index) in choices" :key="index">
          <p class="itemTitle">1、您的名字 <i>*</i></p>
          <!-- 此处根据问题类型显示-->
          <!-- 如果是输入框-->
          <div class="isInput" v-if="item.type == 1">
            <div class="cell">
              <input id="js_input" class="weui-input" placeholder="请输入您的姓名">
            </div>
          </div>
<!--          如果是单选-->
          <div class="isOneChoice" v-if="item.type == 3">
            <div class="cell" :class="cItem.is ? 'cellClick' : ''" v-for="(cItem, cIndex) in item.items" :key="cIndex" @click="oneChoiceClick(index, cIndex)">
              <i class="iconfont" :class="cItem.is ? 'icon-yuan' : 'icon-circle-empty'"></i> {{cItem.font}}
            </div>
          </div>
<!--          如果是复选-->
          <div class="isAnyChoice" v-if="item.type == 1">
            <div class="cell" :class="cItem.is ? 'cellClick' : ''" v-for="(cItem, cIndex) in item.items" :key="cIndex" @click="anyChoiceClick(index, cIndex)">
              <i class="iconfont" :class="cItem.is ? 'icon-yuan' : 'icon-circle-empty'"></i> {{cItem.font}}
            </div>
          </div>
          <!--          如果是填空-->
          <div class="isTextarea">
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
import Header from '@/components/header'
export default {
  name: 'doQuestions',
  components: {
    Header
  },
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
      }]
    }
  },
  methods: {
    handleText () {
      this.$router.push({name: 'home'})
    },
    // 单选
    oneChoiceClick (pIndex, cIndex) {
      let item = this.choices[pIndex].items
      for (let i in item) {
        if (i !== cIndex) {
          item[i].is = false
        }
      }
      this.choices[pIndex].items[cIndex].is = true
    },
    // 多选
    anyChoiceClick (pIndex, cIndex) {
      this.choices[pIndex].items[cIndex].is = !this.choices[pIndex].items[cIndex].is
    }
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
    }
  }
  .questionsContent {
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
        padding: 0.1rem 0.2rem;
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
