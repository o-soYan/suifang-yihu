<template>
  <div class="remindContainer">
    <div class="header">
      <div class="tabBox">
        <p @click="tabClick(0)" :class="activeItem === 0 ? 'active' : ''">
          <span>已完成</span>
        </p>
        <p @click="tabClick(1)" :class="activeItem === 1 ? 'active' : ''">
          <span>未完成</span>
        </p>
        <i :style="activeItem === 0 ? 'transform: translateX(-0.8rem) translateX(-50%)' : 'transform: translateX(1.25rem) translateX(-50%)'"></i>
      </div>
      <div class="searchBox" :class="isfixTab ? 'fixedTop' : ''">
        <form action="/">
          <van-search placeholder="请输入搜索关键词" :show-action="showStatus" v-model="searchValue" @search="searchItems" @cancel="onCancel" />
        </form>
      </div>
    </div>
    <div class="tabContent">
      <none v-if="logoData.length === 0"></none>
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          @load="onLoad"
          :offset="10"
        >
          <logItem :logType="'followUp'" :showStatus="showStatus" :logDatas="logoData"></logItem>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import logItem from '@/components/logItem'
import none from '@/components/none'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      logoData: [],
      activeItem: 0,
      searchValue: '',
      patientId: '',
      currentPage: 1,
      pageSize: 10,
      isfixTab: false,
      showStatus: true,
      isLoading: false,
      finished: false,
      loading: false
    }
  },
  components: {
    logItem,
    none
  },
  created () {
    this.patientId = this.$route.query.id
    this.currentPage = 1
    // this.getLogItem()
  },
  watch: {
    searchValue () {
      if (this.searchValue.length === 0) {
        this.logoData = []
        this.currentPage = 1
        this.getLogItem()
      }
    }
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    handleTabFix () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var offsetTop = document.querySelector('.searchBox').offsetTop
      scrollTop > offsetTop ? this.isfixTab = true : this.isfixTab = false
    },
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.logoData = []
        this.currentPage = 1
        if (this.searchValue.length > 0) {
          this.searchItems()
        } else {
          this.getLogItem()
        }
      }, 500)
    },
    onLoad () {
      if (this.searchValue.length > 0) {
        this.searchItems()
      } else {
        this.getLogItem()
        this.currentPage++
      }
    },
    getLogItem () {
      let self = this
      let params = {
        id: self.patientId,
        pageSize: self.pageSize,
        pageIndex: self.currentPage,
        isFinished: self.activeItem
      }
      self.showLoading({ msg: '加载中...', autoClose: false })
      self.$post('FuvPaperQuery', 'PACPatient', params).then(res => {
        self.hideLoading()
        for (let i in res.rows) {
          self.logoData.push(res.rows[i])
        }
        self.loading = false
        if (res.rows.length < self.pageSize) {
          self.finished = true
        } else {
          self.finished = false
        }
      })
    },
    searchItems () {
      let self = this
      let params = {
        templatetitle: self.searchValue,
        pageSize: self.pageSize,
        pageIndex: self.currentPage
      }
      self.$post('TemplateTitleFuvPaperQuery', 'PACPatient', params).then(res => {
        for (let i in res.rows) {
          self.logoData.push(res.rows[i])
        }
        self.loading = false
        if (res.rows.length < self.pageSize) {
          self.finished = true
        } else {
          self.finished = false
        }
      })
    },
    onCancel () {
      // if (this.searchValue === '') {
      //   return
      // }
      this.searchValue = ''
      this.getLogItem()
    },
    tabClick (type) {
      if (type === this.activeItem) {
        return
      }
      this.activeItem = type
      this.logoData = []
      this.currentPage = 1
      this.getLogItem()
    }
  },
  // 监听页面滚动
  mounted () {
    window.addEventListener('scroll', this.handleTabFix, true)
  },
  beforeRouteLeave (to, from, next) {
    if (to.path === '/patientInfo') {
      to.meta.keepAlive = true
    }
    window.removeEventListener('scroll', this.handleTabFix, true)
    next()
  }
}
</script>

<style lang="less" scoped>
  .remindContainer {
    .tabBox {
      height: 0.98rem;
      align-items: center;
      display: flex;
      justify-content: center;
      border-bottom: 1px solid #f9f9f9;
      position: relative;
      p {
        width: 2rem;
        text-align: center;
        font-size:0.3rem;
        color:rgba(160,160,160,1);
        line-height:0.42rem;
        &.active {
          font-size:0.34rem;
          color:rgba(51,51,51,1);
          line-height:0.36rem;
          span {
            font-weight:900;
          }
        }
      }
      i {
        display: inline-block;
        width:0.44rem;
        height:4px;
        background:rgba(11,185,191,1);
        border-radius:6px;
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -0.22rem;
        transition-duration: 0.3s;
      }
    }
    .tabContent {
      /deep/.van-search {
        padding: 0.2rem 0.3rem 0;
      }
    }
    .fixedTop {
      position: fixed;
      top: 0;
      z-index: 10;
      left: 0;
      right: 0;
    }
  }
</style>
