<!-- 顶部标签栏 -->
<template>
  <div class="tab">
    <van-tabbar v-model="active" :fixed="isFixed" route>
<!--      <van-tab v-for="item in tabList" :key="item" :title="item">-->
<!--        <router-view></router-view>-->
<!--      </van-tab>-->
      <van-tabbar-item active-color="#0BB9BF" replace to="/home/mainhome" inactive-color="#999999" v-for="(item, index) in tabs" :key="index">
        <span>{{item.title}}</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? item.colorIcon : item.icon"
        >
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
      tabList: ['热卖', '新品', '优惠', '更多'], // tab 列表
      tabs: [{
        icon: '../../assets/tabBar/home-gray.png',
        title: '首页',
        colorIcon: '../assets/tabBar/home-color.png'
      }, {
        icon: '../assets/tabBar/man-gray.png',
        title: '个人中心',
        colorIcon: '../assets/tabBar/man-color.png'
      }, {
        icon: '../assets/tabBar/bar-gray.png',
        title: '统计',
        colorIcon: '../assets/tabBar/bar-color.png'
      }],
      isFixed: true
    }
  },
  methods: {
    // 切换页面
    getPage (index, title) {
      switch (index) {
        case 0:
          this.$router.push('/home/mainhome')
          break
        case 1:
          // this.$router.push('/home/mainhome')
          break
        case 2:
          // this.$router.push('/home/home-preferential')
          break
        case 3:
          // this.$router.push('/home/home-more')
          break
        default:
          return false
      }
    }
  }
}
</script>

<style scoped>

</style>
