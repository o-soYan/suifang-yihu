<!-- 顶部标签栏 -->
<template>
  <div class="tab">
    <van-tabbar v-model="active" :fixed="isFixed" route>
      <van-tabbar-item :to="item.path" replace v-for="(item, index) in tabs" :key="index" @change="getPage(index)">
        <span>{{item.title}}</span>
        <template slot="icon" slot-scope="props">
          <img :src="props.active ? item.colorIcon : item.icon"/>
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
      active: 0, // 当前栏
      tabs: [{
        title: '首页',
        icon: require('../assets/tabBar/home-gray.png'),
        colorIcon: require('../assets/tabBar/home-color.png'),
        path: '/mainHome'
      }, {
        title: '患者管理',
        icon: require('../assets/tabBar/man-gray.png'),
        colorIcon: require('../assets/tabBar/man-color.png'),
        path: '/patientManage'
      }, {
        title: '统计分析',
        icon: require('../assets/tabBar/bar-gray.png'),
        colorIcon: require('../assets/tabBar/bar-color.png'),
        path: '/analyze'
      }],
      isFixed: true
    }
  },
  methods: {
    // 切换页面
    getPage (index) {
      this.active = index
    }
  }
}
</script>

<style lang="less">
.tab {
  .van-tabbar-item {
    color: #999999;
    font-size: 0.2rem;
  }
  .van-tabbar-item--active{
    color: #0BB9BF;
  }
  .van-tabbar-item__icon img {
    height: 0.42rem;
    width: 0.42rem;
  }
}
</style>
