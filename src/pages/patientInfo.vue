<template>
  <div class="patientInfoContainer">
    <div class="patientBaseInfo">
      <div class="headLogo">
        <img src="@/assets/logo.png" alt="">
      </div>
      <div class="userInfo">
        <p>
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
    height: 1.4rem;
    padding: 0.2rem;
    .headLogo {
      flex: 1;
      line-height: 1.4rem;
      height: 100%;
      img {
        height: 80%;
      }
    }
    .userInfo {
      flex: 6;
      line-height: 1.5;
      text-align: left;
      font-size: 0.28rem;
    }
  }
}
</style>
