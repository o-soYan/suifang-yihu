<template>
  <div class="home">
<mt-swipe :auto="4000" class="home0">
  <mt-swipe-item class="home1">1</mt-swipe-item>
  <mt-swipe-item class="home2">2</mt-swipe-item>
  <mt-swipe-item class="home3">3</mt-swipe-item>
</mt-swipe>
<div class="navbar">
<mt-navbar v-model="selected"  @click.native="onChangeNavbar">
  <mt-tab-item id="1">发布中</mt-tab-item>
  <mt-tab-item id="2">已结束</mt-tab-item>
  <mt-tab-item id="3">异常患者</mt-tab-item>
</mt-navbar>
</div>

<!-- tab-container -->
<mt-tab-container v-model="container" @change="onChangeList">
  <mt-tab-container-item id="1">
      <div class="progress_list">
         <div class="progress_title">满意度调查</div>
       <!-- <mt-progress  :value="200" :bar-height="20"></mt-progress> -->
      </div>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'测试 ' + n" :key="n"/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'选项 ' + n" :key="n"/>
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: '1',
      container: '1'
    }
  },
  methods: {
    onChangeNavbar (index) {
      console.log(this.selected)
      this.container = this.selected
    },
    onChangeList (index) {
      console.log(index)
    }
  }
}
</script>

<style scoped>
.mt-progress-progress{
    flex: 1;
    display: flex
}
.navbar{
    border-bottom: 0.30rem
}
.progress_title{
    flex: 1
}
.progress_list{
    display: flex;
    justify-content: space-between
}
.home{
    font-size: 0.30rem;
}
.home0{
    height: 200px;
    /* background-color: aqua */
}
.home3{
    background-color: violet
}
.home2{
    background-color: blueviolet
}
.home1{
    background-color: tomato
}

</style>
