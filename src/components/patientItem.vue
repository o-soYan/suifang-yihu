<template>
  <div class="patientItem">
<!--    <ul>-->
<!--      <li v-for="(item, index) in patientDatas" :key="index">-->
<!--        <div class="headerLogo">-->
<!--          <img src="@/assets/logo.png" alt="">-->
<!--        </div>-->
<!--        <div class="userInfo">-->
<!--          <p class='baseInfo'>-->
<!--            <span class="name">{{item.name}}</span>-->
<!--            <span class="sex">{{item.sex}} {{item.yearsold}}岁</span>-->
<!--          </p>-->
<!--          <p class="baseZhenduan">出院诊断：{{item.pics}}</p>-->
<!--        </div>-->
<!--        <div class="topic">-->
<!--          <span>{{item.topic}}</span>-->
<!--        </div>-->
<!--      </li>-->
<!--    </ul>-->
    <ul>
      <li v-for="(item, index) in patientDatas" :key="index" @click="clickItem(item.id)">
        <div class="patientBaseInfo">
          <div class="headerLogo">
            <img src="../assets/logo.png" alt="">
          </div>
          <div class="patientInfo">
            <div class="nameSexInfo">
              <p>
                <span class="name">{{item.userName}}</span>
                <span class="sex">{{item.sex}}</span>
                <span class="sex">{{item.yearsold}}岁</span>
              </p>
              <span class="num">{{item.fuvTimes}}</span>
            </div>
            <div class="patientHandle">
              <span>随访{{item.fuvTimes}}</span>
              <span>提醒{{item.remindTimes}}</span>
              <span>电话回访{{item.unfinishedTimes}}</span>
            </div>
          </div>
        </div>
        <div class="patientOutHosp">
          <p>出院诊断：{{item.rishHistroyName}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    patientDatas: {
      type: Array
    }
  },
  data () {
    return {}
  },
  methods: {
    clickItem (id) {
      this.$router.push({name: 'patientInfo', query: {id: id}})
    }
  }
}
</script>

<style lang="less" scoped>
.patientItem {
  width: 100%;
  font-size: 0.32rem;
  box-sizing: border-box;
  li {
    height:2.3rem;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
    border-radius:6px;
    margin-bottom: 0.2rem;
    .patientBaseInfo {
      padding: 0.3rem 0.42rem;
      border-bottom: 1px solid #fbfbfb;
      display: flex;
      box-sizing: border-box;
      .headerLogo {
        height: 0.92rem;
        width: 0.92rem;
        margin-right: 0.18rem;
        flex: 1;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .patientInfo {
        flex: 6;
        .nameSexInfo {
          display: flex;
          justify-content: space-between;
          .name {
            font-size:0.32rem;
            font-weight:600;
            color:rgba(18,18,18,1);
            line-height:0.44rem;
            margin-right: 0.2rem;
          }
          .sex {
            font-size:0.26rem;
            color:rgba(51,51,51,1);
            line-height:0.36rem;
            margin-right: 0.1rem;
          }
          .num {
            font-size:0.24rem;
            font-weight:600;
            color:rgba(255,125,0,1);
            line-height:0.36rem;
            min-width:0.56rem;
            text-align: center;
            height:0.36rem;
            background:rgba(255,246,238,1);
            border-radius:0.18rem;
          }
        }
        .patientHandle {
          font-size:0.24rem;
          color:rgba(151,151,151,1);
          line-height:0.34rem;
          text-align: left;
          margin-top: 0.14rem;
          span {
            margin-right: 0.3rem;
            &:last-child{
              margin: 0;
            }
          }
        }
      }
    }
    .patientOutHosp {
      padding: 0.2rem 0.42rem;
      font-size:0.26rem;
      color:rgba(151,151,151,1);
      line-height:0.36rem;
      text-align: left;
    }
  }
}
</style>
