<template>
  <div class="home">
    <div class="swipe">
      <van-swipe :autoplay="10000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="tabBox">
      <p @click="tabChange(0)" :class="activeItem === 0 ? 'active' : ''">
        <span>发布中{{tabOneData.length}}</span>
      </p>
      <p @click="tabChange(1)" :class="activeItem === 1 ? 'active' : ''">
        <span>已结束{{tabTwoData.length}}</span>
      </p>
      <p @click="tabChange(2)" :class="activeItem === 2 ? 'active' : ''">
        <span>异常患者{{patientDatas.length}}</span>
      </p>
      <i :style="{transform: 'translateX(' + transAnimate + 'rem)' +  'translateX(-50%)'}"></i>
    </div>
    <div class="tabContent">
      <div class="oneContent" v-if="activeItem === 0">
        <div class="tab_content" v-for="(item, index) in tabOneData" :key="index">
          <div class="content_left">
            <div class="tab_name">{{item.templateTitle}}</div>
            <div class="tab_time_top color_one">{{item.diseaseName}}</div>
            <div class="tab_time">
              {{item.time | dateSlice}}
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">{{item.percentage}}</p>
            <p class="progress">完成度</p>
          </div>
        </div>
      </div>
      <div class="twoContent" v-if="activeItem === 1">
        <div class="tab_content" v-for="(item, index) in tabTwoData" :key="index">
          <div class="content_left">
            <div class="tab_name">{{item.templateTitle}}</div>
            <div class="tab_time_top color_one">{{item.diseaseName}}</div>
            <div class="tab_time">
              {{item.time | dateSlice}}
            </div>
          </div>
          <div class="content_right">
            <p class="percentum">{{item.percentage}}</p>
            <p class="progress">完成度</p>
          </div>
        </div>
      </div>
      <div class="threeContent" v-if="activeItem === 2">
        <patientItem :patientDatas='patientDatas'></patientItem>
      </div>
    </div>
  </div>
</template>
<script>
import patientItem from '@/components/patientItem'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      images: [
        'http://imgsa.baidu.com/exp/w=500/sign=b26e62947d1ed21b79c92ee59d6fddae/aec379310a55b319de3e711343a98226cefc1794.jpg',
        'http://img5.imgtn.bdimg.com/it/u=2287440564,27896561&fm=26&gp=0.jpg',
        'http://imgsa.baidu.com/exp/w=500/sign=9e546a1dd11373f0f53f6f9f940f4b8b/8601a18b87d6277fd138c05e28381f30e924fcaa.jpg'
      ],
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
      tabOneData: [],
      tabTwoData: [],
      activeItem: 0,
      transAnimate: -2.1
    }
  },
  components: {
    patientItem
  },
  filters: {
    dateSlice (n) {
      return n.slice(0, 10)
    }
  },
  created () {
    this.getTabOneData()
    this.getTabTwoData()
    this.getTabThreeData()
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    tabChange (item) {
      this.activeItem = item
      if (item === 0) {
        this.transAnimate = -2.1
      } else if (item === 1) {
        this.transAnimate = 0.2
      } else {
        this.transAnimate = 2.5
      }
    },
    getTabOneData () {
      let self = this
      self.$get('Beingreleased', 'PACPatient').then(res => {
        if (res.result) {
          self.tabOneData = res.row
        }
      })
    },
    getTabTwoData () {
      let self = this
      self.$get('Hasended', 'PACPatient').then(res => {
        if (res.result) {
          self.tabTwoData = res.row
        }
      })
    },
    getTabThreeData () {
      let self = this
      self.showLoading({ msg: '加载中...', autoClose: false })
      self.$get('Abnormalpatients', 'PACPatient').then(res => {
        if (res.result) {
          self.patientDatas = res.row
        }
        self.hideLoading()
      })
    }
  },
  beforeRouteEnter (to, from, next) {
    from.meta.keepAlive = false
    next()
  }
}
</script>

<style lang="less" scoped>
  .tabBox {
    width:6.9rem;
    margin: 0.3rem auto;
    height:1.18rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    align-items: center;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #f9f9f9;
    position: relative;
    p {
      width: 33%;
      text-align: center;
      font-size:0.3rem;
      color:rgba(160,160,160,1);
      line-height:0.42rem;
      &.active {
        font-size:0.34rem;
        color:rgba(51,51,51,1);
        line-height:0.36rem;
        span {
          font-weight:900;
        }
      }
    }
    i {
      display: inline-block;
      width:0.44rem;
      height:4px;
      background:rgba(11,185,191,1);
      border-radius:6px;
      position: absolute;
      bottom: 0;
      left: 50%;
      margin-left: -0.22rem;
      transition-duration: 0.3s;
    }
  }
.oneContent, .twoContent {
  padding: 0 0.3rem;
}
/deep/.van-tab {
  font-size: 0.3rem;
}
.swipe {
  /*margin-bottom: 0.36rem;*/
  .van-swipe {
    /*width: 6.9rem;*/
    height: 2.88rem;
    margin: 0.3rem;
    /*box-sizing: border-box;*/
    /*position: relative;*/
    .van-swipe-item {
      /*width: 6.9rem !important;*/
      /*height: 2.88rem !important;*/
      img {
        width: 6.9rem;
        height: 100%;
      }
    }
    /deep/.van-swipe__indicators {
      left: 1rem !important;
      i {
        display: inline-block;
        width:0.44rem;
        height:0.06rem;
        background:rgba(236,237,240,1);
        border-radius:0.04rem;
        &.van-swipe__indicator--active {
          background:rgba(158,165,186,1);
        }
      }
    }
  }
}
/deep/.van-tabs__nav--card {
  font-size: 50px;
}
/deep/.van-progress__pivot {
  position: unset;
  font-size: 0.32rem;
  background: transparent !important;
}
.abnormal_content {
  margin: 0.24rem 0.2rem;
  text-align: left;
}
.tab_content {
  margin: 0.24rem 0;
  padding: 0.9em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
  border-radius: 0.12rem;
  position: relative;
  .tab_time_top {
    color: #0bb9bf;
  }
  &:before {
    content: '';
    position: absolute;
    width:0.08rem;
    height:100%;
    border-radius:0.1rem;
    left: 0;
    background:#0bb9bf;
  }
  &:first-child {
    .tab_time_top {
      color: #0bb9bf;
    }
    &:before {
      background:#0bb9bf;
    }
  }
  &:nth-child(2) {
    .tab_time_top {
      color: #2eadff;
      background:#e7f5ff;
    }
    &:before {
      background:#2eadff;
    }
  }
  &:nth-child(3) {
    .tab_time_top {
      color: #ffc92e;
      background:#fff7de;
    }
    &:before {
      background:#ffc92e;
    }
  }
  &:nth-child(4) {
    .tab_time_top {
      color: #f09999;
      background:#fce9e9;
    }
    &:before {
      background:#f09999;
    }
  }
}
.tab_content .content_left {
}
.tab_content .content_right {
  margin-right: 0.3rem;
}
.tab_content .content_right .percentum {
  color: #ff7d00;
  font-weight: 600;
  font-size: 0.54rem;
  padding-bottom: 0.16rem;
}
.tab_content .content_right .progress {
  color: #979797;
  font-size: 0.3rem;
}
.tab_time {
  text-align: left;
  font-size: 0.26rem;
  color: #c4c4c4;
}
.tab_name {
  color: #333333;
  font-size: 0.34rem;
  font-weight: 600;
  padding-bottom: 0.2rem;
}
.tab_time_top {
  font-size: 0.3rem;
  text-align: center;
  background: #e3f5f6;
  /*color: #0bb9bf;*/
  padding: 0.08rem 0.2rem;
  margin-bottom: 0.08rem;
}
</style>
