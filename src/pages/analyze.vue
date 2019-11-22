<template>
  <div>
    <form action="/">
      <van-search
        v-model="value"
        placeholder="请输入搜索关键词"
        show-action
        @search="onSearch"
        @cancel="onCancel"
        shape="round"
      />
    </form>
    <div class="tag_content">
      <van-tag type="primary " size="large ">PAC</van-tag>
      <van-tag type="success " size="large">脂肪胺</van-tag>
    </div>

    <sideTab :datas="tabDatas" @tabClick="tabClick">
      <template v-for="(item, index) in tabDatas">
        <div class="tabItem" :key="index" v-if="slected === index">
            <div class="tabContent">
<div v-if="index === 0">
            <ul>
              <li>
                <router-link to="/statistics">手术药流统计</router-link>
              </li>
              <li>
                <router-link to="/spinsterhoodSat">未婚已婚统计</router-link>
              </li>
              <li>
                <router-link to="/">流产次数统计</router-link>
              </li>
              <li>
                <router-link to="/">避孕方案统计</router-link>
              </li>
              <li>
                <router-link to="/">首月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">一个月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">三个月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">六个月随访统计</router-link>
              </li>
              <li>
                <router-link to="/">十二个月随访统计</router-link>
              </li>
            </ul>
          </div>
          <div v-if="index === 1">
            <ul>
              <li>
                <router-link to="/">统计</router-link>
              </li>
              <li>
                <router-link to="/">统计</router-link>
              </li>
              <li>
                <router-link to="/">流产</router-link>
              </li>
              <li>
                <router-link to="/">避孕</router-link>
              </li>
              <li>
                <router-link to="/">首月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">一个月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">三个月随访统计</router-link>
              </li>
               <li>
                <router-link to="/">六个统计</router-link>
              </li>
              <li>
                <router-link to="/">十统计</router-link>
              </li>
            </ul>
          </div>
            </div>

        </div>
      </template>
    </sideTab>
  </div>
</template>

<script>
import sideTab from '@/components/sideTab'
export default {
  data () {
    return {
      value: '',
      tabDatas: ['基本信息统计', '随访统计'],
      slected: 0,
      analyzeDatas: [
        {
          name: '手术药流统计'
        },
        {
          name: '未婚已婚统计'
        }
      ]
    }
  },
  components: {
    sideTab
  },
  methods: {
    tabClick (index) {
      this.slected = index
      let arr = []
      arr.push(this.patientDatas[index])
      this.selectedDatas = arr
    },
    onSearch () {},
    onCancel () {}
  }
}
</script>

<style lang="less" scoped>
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
.tabContent li{
    padding:0.18rem 0;
    font-size: 0.32rem
}
.tabContent li a{
   color: #333333
}
</style>
