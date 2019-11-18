<template>
  <div class="patientItem">
    <ul>
      <li v-for="(item, index) in patientDatas" :key="index">
        <div class="headerLogo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="userInfo">
          <p class='baseInfo'>
            <span class="name">{{item.name}}</span>
            <span class="sex">{{item.sex}} {{item.yearsold}}岁</span>
          </p>
          <p class="baseZhenduan">出院诊断：{{item.pics}}</p>
        </div>
        <div class="topic">
          <span>{{item.topic}}</span>
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
  }
}
</script>

<style lang="less" scoped>
.patientItem {
  padding: 0 0.2rem;
  width: 100%;
  font-size: 0.32rem;
  box-sizing: border-box;
  li {
    display: flex;
    height: 1rem;
    border-bottom: 1px solid #e5e5e5;
    padding: 0.1rem 0;
    .headerLogo {
      flex: 1;
      margin-right: 0.1rem;
      height: 100%;
      img {
        // width: 100%;
        height: 100%;
      }
    }
    .userInfo {
      flex: 3;
      text-align: left;
      line-height: 1.6;
      width: 0;
      .baseInfo {
        .name {
          font-weight: 600;
          padding-right: 0.2rem;
        }
        .sex {
          font-size: 0.28rem;
          color: #666;
        }
      }
      .baseZhenduan {
        font-size: 0.28rem;
        color: #666;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
    .topic {
      flex: 1;
      line-height: 1rem;
      span {
        padding: 0 0.3rem;
        background: orange;
        border-radius: 0.3rem;
      }
    }
  }
}
</style>
