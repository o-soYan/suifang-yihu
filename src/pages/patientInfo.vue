<template>
  <div class="patientInfoContainer">
    <div class="patientBaseInfo">
      <div class="baseInfo">
        <div class="nameInfo">
          <p class="name">{{patientInfo.name}}</p>
          <p class="info">
            <span class="sex">{{patientInfo.sex === 2 ? '女' : '男'}}</span>
            <span class="years">{{patientInfo.age}}岁</span>
            <span class="birthday">{{patientInfo.birthday}}</span>
          </p>
        </div>
        <div class="patientLogo">
          <img v-if="patientInfo.logo" :src="patientInfo.logo" alt="">
          <img v-else src="../assets/logo.png" alt="">
        </div>
      </div>
      <div class="connectInfo">
        <div class="phone">
          <p class="title">联系方式</p>
          <p class="num">{{patientInfo.contactPhone}}</p>
        </div>
        <div class="address">
          <p class="title">联系地址</p>
          <p class="num">{{patientInfo.contactAddress}}</p>
        </div>
      </div>
      <div class="patientAbout">
        <div @click="goFuv">
          <p class="now">{{patientInfo.fuvTimes}}</p>
          <p class="title">随访</p>
        </div>
        <div @click="goRemind">
          <p class="now">{{patientInfo.remindTimes}}</p>
          <p class="title">提醒</p>
        </div>
        <div @click="goCallLog">
          <p class="now"></p>
          <p class="title">电话回访</p>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="infoTitle">基本信息</div>
      <div class="infoItem">
        <div class="itemTitle">院区</div>
        <div class="itemResult">{{patientInfo.clinic}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">文化程度</div>
        <div class="itemResult">{{patientInfo.education}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">患者职业</div>
        <div class="itemResult">{{patientInfo.career}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">患者户籍</div>
        <div class="itemResult">广东省广州市</div>
      </div>
    </div>
    <div class="info last">
      <div class="infoTitle">诊疗信息</div>
      <div class="infoItem">
        <div class="itemTitle">诊疗卡号</div>
        <div class="itemResult">{{patientInfo.clinic}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">流产日期</div>
        <div class="itemResult">{{patientInfo.miscarriedDate | dateSlice}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">高危流产</div>
        <div class="itemResult">{{patientInfo.isHighRiskMis ? '有' : '无'}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">本次流产方式</div>
        <div class="itemResult">{{patientInfo.lastMiscarriedType}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">流产次数</div>
        <div class="itemResult">{{patientInfo.miscarriedTimes}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">上次妊娠时间</div>
        <div class="itemResult">{{patientInfo.prewGestationDate}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">终止方式</div>
        <div class="itemResult">{{patientInfo.prewTerPregnancy}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">现病史/既往史</div>
        <div class="itemResult">{{patientInfo.isMedicalHistory ? '有' : '无'}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">病史名称</div>
        <div class="itemResult">{{patientInfo.diagnose}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">生育计划</div>
        <div class="itemResult">{{patientInfo.isPlanFertility ? '有' : '无'}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">目前孕期</div>
        <div class="itemResult">{{patientInfo.prewGestationDate}}</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">异常回访次数</div>
        <div class="itemResult">{{patientInfo.unfinishedTimes}}</div>
      </div>
    </div>
    <div class="callBox">
      <a :href="'tel:'+patientInfo.contactPhone">
        <van-icon name="phone-o" />
        <span>电话回访</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      patientInfo: '',
      logo: require('../assets/logo.png'),
      patientId: ''
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
    this.patientId = this.$route.query.id
    this.getBaseInfo()
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    getBaseInfo () {
      let self = this
      self.showLoading({ msg: '加载中...', autoClose: false })
      let params = {
        id: self.patientId
      }
      self.$get('PatientBasebbbQueryDetail', 'PACPatient', params).then(res => {
        self.hideLoading()
        self.patientInfo = res.rows[0]
        self.patientInfo.birthday = self.patientInfo.birthday.slice(0, 10)
      })
    },
    goFuv () {
      this.$router.push({name: 'followUpLog', query: {id: this.patientId}})
    },
    goRemind () {
      this.$router.push({name: 'remindLog', query: {id: this.patientId}})
    },
    goCallLog () {
      this.$router.push({name: 'callLog', query: {id: this.patientId}})
    },
    getAge (strBirthday) {
      var returnAge
      var strBirthdayArr = strBirthday.split('-')
      var birthYear = strBirthdayArr[0]
      var birthMonth = strBirthdayArr[1]
      var birthDay = strBirthdayArr[2]

      var d = new Date()
      var nowYear = d.getFullYear()
      var nowMonth = d.getMonth() + 1
      var nowDay = d.getDate()

      // eslint-disable-next-line eqeqeq
      if (nowYear == birthYear) {
        returnAge = 0
      } else {
        var ageDiff = nowYear - birthYear
        if (ageDiff > 0) {
          // eslint-disable-next-line eqeqeq
          if (nowMonth == birthMonth) {
            var dayDiff = nowDay - birthDay
            if (dayDiff < 0) {
              returnAge = ageDiff - 1
            } else {
              returnAge = ageDiff
            }
          } else {
            var monthDiff = nowMonth - birthMonth
            if (monthDiff < 0) {
              returnAge = ageDiff - 1
            } else {
              returnAge = ageDiff
            }
          }
        } else {
          returnAge = -1
        }
      }
      return returnAge
    }
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteEnter (to, from, next) {
    // if (from.path !== '/patientManage') {
    from.meta.keepAlive = false
    // }
    next()
  }
}
</script>

<style lang="less" scoped>
.patientInfoContainer {
  .patientBaseInfo {
    height:4.74rem;
    background:linear-gradient(180deg,rgba(11,185,191,1) 0%,rgba(11,185,191,0) 100%);
    padding: 0.6rem 0.4rem 0.44rem;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    .baseInfo {
      display: flex;
      justify-content: space-between;
      padding-bottom: 0.2rem;
      .nameInfo {
        color: #ffffff;
        text-align: left;
        .name {
          font-size: 0.44rem;
          line-height: 0.6rem;
        }
        .info {
          font-size: 0.26rem;
          margin-top: 0.16rem;
          line-height: 0.36rem;
          span {
            margin-right: 0.1rem;
            &:last-child {
              margin: 0;
            }
          }
        }
      }
      .patientLogo {
        width: 1.22rem;
        height: 1.22rem;
        border-radius: 50%;
        background: #fff;
        padding: 2px;
        box-sizing: border-box;
        img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
        }
      }
    }
    .connectInfo {
      display: flex;
      font-size: 0.26rem;
      padding-top: 0.2rem;
      padding-bottom: 0.3rem;
      border-top: 1px solid rgba(135, 232, 234, 0.3);
      text-align: left;
      line-height: 0.38rem;
      .phone {
        flex-basis: 30%;
      }
      .title {
        color: rgb(165, 244, 247);
      }
      .num {
        color: #ffffff;
      }
    }
    .patientAbout {
      height: 1.18rem;
      background: #fff;
      display: flex;
      text-align: center;
      padding: 0.24rem 0 0.22rem;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      border-radius:6px;
      div {
        flex-basis: 33%;
        border-right: 1px solid #f7f7f7;
        &:last-child {
          border: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .now {
          color: #333333;
          font-size: 0.36rem;
          line-height: 0.36rem;
          font-weight: 600;
        }
        .title {
          color: #979797;
          font-size: 0.26rem;
          line-height: 0.36rem;
        }
      }
    }
  }
  .info {
    text-align: left;
    &.last {
      margin-bottom: 2rem;
    }
    .infoItem {
      display: flex;
    }
    .infoTitle {
      color: #121212;
      font-size: 0.38rem;
      line-height: 0.52rem;
      font-weight: 600;
      padding: 0.36rem 0.4rem 0.34rem;
      border-bottom: 1px solid #f9f9f9;
    }
    .infoItem {
      padding: 0.28rem 0.4rem;
      line-height:0.42rem;
      font-size: 0.3rem;
      border-bottom: 1px solid #f9f9f9;
      .itemTitle {
        color:rgba(102,102,102,1);
        min-width: 1.88rem;
        margin-right: 0.52rem;
      }
      .itemResult {
        color: #979797;
      }
    }
  }
  .callBox a {
    width:4.56rem;
    height:0.84rem;
    background:rgba(11,185,191,1);
    box-shadow:0px 2px 6px 0px rgba(11,185,191,0.3);
    border-radius:0.42rem;
    color: #fff;
    position: fixed;
    bottom: 0.48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 50%;
    margin-left: -2.28rem;
    font-size: 0.32rem;
    .van-icon {
      font-size: 0.46rem;

    }
  }
}
</style>
