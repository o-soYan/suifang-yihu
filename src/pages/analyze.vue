<template>
  <div>
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
    <div class="contentBox">
      <div class="item">
        <div class="title">手术药流统计</div>
      </div>
    </div>
<!--    <form action="/">-->
<!--      <van-search-->
<!--        v-model="value"-->
<!--        placeholder="请输入搜索关键词"-->
<!--        show-action-->
<!--        @search="onSearch"-->
<!--        @cancel="onCancel"-->
<!--        shape="round"-->
<!--      />-->
<!--    </form>-->
<!--    <div class="tag_content">-->
<!--      <van-tag type="primary " size="large ">PAC</van-tag>-->
<!--      <van-tag type="success " size="large">脂肪胺</van-tag>-->
<!--    </div>-->

<!--    <sideTab :datas="tabDatas" @tabClick="tabClick">-->
<!--      <template v-for="(item, index) in tabDatas">-->
<!--        <div class="tabItem" :key="index" v-if="slected === index">-->
<!--          <div class="tabContent">-->
<!--            <div v-if="index === 0">-->
<!--              <ul>-->
<!--                <li>-->
<!--                  <router-link to="/statistics">手术药流统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/spinsterhoodSat">未婚已婚统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">流产次数统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">避孕方案统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">首月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">一个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">三个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">六个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">十二个月随访统计</router-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div v-if="index === 1">-->
<!--              <ul>-->
<!--                <li>-->
<!--                  <router-link to="/">统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">流产</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">避孕</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">首月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">一个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">三个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">六个统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">十统计</router-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </template>-->
<!--    </sideTab>-->
  </div>
</template>

<script>
import sideTab from '@/components/sideTab'
export default {
  data () {
    return {
      value: '',
      tabDatas: ['基本信息统计', '随访统计'],
      slected: 0
    }
  },
  components: {
    sideTab
  },
  methods: {
    tabClick (index) {
      this.slected = index
    },
    onSearch () {},
    onCancel () {}
  }
}
</script>

<style lang="less" scoped>
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
  .contentBox {
    padding: 0 0.3rem;
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
      .title {
        font-size:0.32rem;
        font-weight:600;
        color:rgba(18,18,18,1);
      }
    }
  }
.tag_content {
  text-align: left;
  background: #e5e5e5;
  margin: 0.08rem 0;
}
/deep/.van-tag--large {
  height: 1rem;
  // width: 1.5rem;
  padding: 0 0.6rem;
  text-align: center;
  font-size: 0.32rem;
  align-items: center;
}
/deep/.van-cell {
  font-size: 0.32rem;
  line-height: 0.68rem;
}
.tabContent li {
  padding: 0.18rem 0;
  font-size: 0.32rem;
}
.tabContent li a {
  color: #333333;
}
</style>
