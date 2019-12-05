<template>
  <div class="patientManageContainer">
<!--    <sideTab :datas='tabDatas' @tabClick='tabClick'>-->
<!--      <template v-for="(item, index) in tabDatas">-->
<!--        <div class="tabItem" :key="index" v-if="slected === index">-->
<!--          <patientItem :patientDatas='selectedDatas'></patientItem>-->
<!--        </div>-->
<!--      </template>-->
<!--    </sideTab>-->
    <div class="patientManageTop">
      <div class="contentBox">
        <div class="selectBox">
          <div class="selectItem">
            <span>科室</span>
            <i class="icon"></i>
          </div>
          <div class="selectItem">
            <span>病症</span>
            <i class="icon"></i>
          </div>
        </div>
        <div class="searchBox">
          <van-icon name="search" />
          <input type="text" placeholder="搜索患者姓名">
        </div>
      </div>
    </div>
    <div class="patientBox">
      <patientItem :patientDatas='patientDatas'></patientItem>
    </div>
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
.patientManageContainer {
  .patientManageTop {
    height:2.76rem;
    background:linear-gradient(180deg,rgba(11,185,191,1) 0%,rgba(11,185,191,0) 100%);
    padding: 0.28rem 0.3rem 0.3rem;
    box-sizing: border-box;
    .contentBox {
      height:2.18rem;
      background:rgba(255,255,255,1);
      border-radius:6px;
      .selectBox {
        display: flex;
        height: 1.18rem;
        align-items: center;
        border-bottom: 1px solid #f9f9f9;
        div {
          flex-basis: 50%;
          display: flex;
          justify-content: space-between;
          padding: 0.1rem 0.24rem 0.1rem 0.4rem;
          position: relative;
          line-height: 0.42rem;
          &:first-child {
            border-right: 1px solid #fbfbfb;
          }
          span {
            color: #121212;
            font-size: 0.3rem;
          }
          i {
            border-top: 0.1rem solid #b1b1b1;
            border-right: 0.1rem solid transparent;
            border-left: 0.1rem solid transparent;
            border-bottom: 0.1rem solid transparent;
            position: absolute;
            right: 0.24rem;
            top: 0.25rem;
          }
        }
      }
      .searchBox {
        padding: 0.24rem 0.24rem 0.3rem 0.4rem;
        color: #B6BABD;
        display: flex;
        justify-content: space-between;
        i {
          font-size: 0.36rem;
          font-weight: 600;
        }
        input {
          line-height: 0.36rem;
          font-size: 0.28rem;
          margin-left: 0.08rem;
          display: block;
          width: 100%;
        }
      }
    }
  }
  .patientBox {
    padding: 0 0.3rem;
  }
}
</style>
