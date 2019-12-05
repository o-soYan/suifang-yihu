<template>
  <div class="patientInfoContainer">
    <div class="patientBaseInfo">
      <div class="baseInfo">
        <div class="nameInfo">
          <p class="name">李小欣</p>
          <p class="info">
            <span class="sex">女</span>
            <span class="years">26岁</span>
            <span class="birthday">199-01-04</span>
          </p>
        </div>
        <div class="patientLogo">
          <img src="../assets/logo.png" alt="">
        </div>
      </div>
      <div class="connectInfo">
        <div class="phone">
          <p class="title">联系方式</p>
          <p class="num">15584967412</p>
        </div>
        <div class="address">
          <p class="title">联系地址</p>
          <p class="num">广州市海珠区</p>
        </div>
      </div>
      <div class="patientAbout">
        <div>
          <p class="now">3</p>
          <p class="title">随访</p>
        </div>
        <div>
          <p class="now">1</p>
          <p class="title">提醒</p>
        </div>
        <div>
          <p class="now">0</p>
          <p class="title">电话回访</p>
        </div>
      </div>
    </div>
    <div class="info">
      <div class="infoTitle">基本信息</div>
      <div class="infoItem">
        <div class="itemTitle">院区</div>
        <div class="itemResult">总院</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">文化程度</div>
        <div class="itemResult">大学本科</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">患者职业</div>
        <div class="itemResult">-</div>
      </div>
      <div class="infoItem">
        <div class="itemTitle">患者户籍</div>
        <div class="itemResult">广东省广州市</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.patientInfoContainer {
  .patientBaseInfo {
    height:4.94rem;
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
    .infoItem {
      display: flex;
    }
    .infoTitle {
      color: #121212;
      font-size: 0.38rem;
      line-height: 0.52rem;
      font-weight: 600;
      padding: 0.16rem 0.4rem 0.34rem;
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
}
</style>
