<template>
  <div class="patientInfoContainer">
    <div class="patientBaseInfo">
      <div class="headLogo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="userInfo">
        <p class="userNameSex">
          <span class="name">方宇</span>
          <span class="sex">女</span>
          <span class="old">30岁</span>
        </p>
        <p>
          <span>生日：1999-01-01</span>
        </p>
        <p>
          <span>电话：15562918452</span>
        </p>
        <p>
          <span>地址：广东省广州市</span>
        </p>
      </div>
    </div>
    <div class="patientSituation">
      <div class="cell">
        <div class="title">院区</div>
        <div class="answer">总院</div>
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
  font-size: 0.32rem;
  .patientBaseInfo {
    display: flex;
    height: 1.7rem;
    padding: 0.2rem;
    background: skyblue;
    .headLogo {
      flex: 1;
      line-height: 1.4rem;
      height: 100%;
      padding-right: 0.2rem;
      img {
        height: 80%;
      }
    }
    .userInfo {
      flex: 6;
      line-height: 1.6;
      text-align: left;
      font-size: 0.28rem;
      .userNameSex {
        span {
          margin-right: 0.5rem;
        }
      }
    }
  }
  .patientSituation {
    padding: 0 0.2rem;
    .cell {
      display: flex;
      height: 0.8rem;
      line-height: 0.8rem;
      justify-content: space-between;
      border-bottom: 1px solid #e5e5e5;
      .title {
        flex: 2;
      }
      .answer {
        flex: 5;
      }
    }
  }
}
</style>
