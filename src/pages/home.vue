<template>
  <div class="home">
<nut-swiper
    :paginationVisible="true"
    direction="horizontal"
    :swiperData="dataItem"
    ref="demo1"
    :autoPlay="3000"
>
    <div  v-for="(item,index) in dataItem" :key="index"  class="nut-swiper-slide">
        <span>page{{item.name}}</span>
         <img :data-src="item.imgSrc"   style="max-width:100%; max-height:100%" class="nut-img-lazyload"/>
    </div>
</nut-swiper>
  </div>
</template>

<script>
export default{
  data () {
    return {
      dataItem: [],
      dataImgItem: []
    }
  },
  mounted () {
    setTimeout(() => {
      this.dataItem = [{
        name: 1
      }, {
        name: 2
      }, {
        name: 3
      }, {
        name: 4
      }]

      this.dataImgItem = [
        {
          imgSrc: '../assets/home.png'
        },
        {
          imgSrc: '../assets/play2.png'
        },
        {
          imgSrc: '../assets/mine.png'
        },
        {
          imgSrc: '../assets/logo.png'
        }
      ]
    }, 300)
  }
}
</script>

<style scoped>

</style>
