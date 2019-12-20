<template>
  <div>
    <div class="patientManageTop">
      <div class="contentBox">
        <div class="selectBox">
          <div class="selectItem" @click="HospCompoundShow = true">
            <span>{{HospCompoundName}}</span>
            <i class="icon"></i>
          </div>
          <div class="selectItem" @click="departShow = true">
            <span>{{departName}}</span>
            <i class="icon"></i>
          </div>
          <div class="selectItem">
            <span>病症</span>
            <i class="icon"></i>
          </div>
        </div>
        <div class="searchBox">
          <van-icon name="search" />
          <input type="text" placeholder="搜索患者姓名">
          <form action="" style="width: 100%;" id="myform">
            <input type="search" id="input"  v-model="searchValue" @keyup="searchContent" placeholder="搜索内容" />
          </form>
        </div>
      </div>
    </div>
    <div class="contentBox">
      <div class="item">
        <div class="title" @click="clickThis">手术药流统计</div>
      </div>
    </div>
<!--    <form action="/">-->
<!--      <van-search-->
<!--        v-model="value"-->
<!--        placeholder="请输入搜索关键词"-->
<!--        show-action-->
<!--        @search="onSearch"-->
<!--        @cancel="onCancel"-->
<!--        shape="round"-->
<!--      />-->
<!--    </form>-->
<!--    <div class="tag_content">-->
<!--      <van-tag type="primary " size="large ">PAC</van-tag>-->
<!--      <van-tag type="success " size="large">脂肪胺</van-tag>-->
<!--    </div>-->

<!--    <sideTab :datas="tabDatas" @tabClick="tabClick">-->
<!--      <template v-for="(item, index) in tabDatas">-->
<!--        <div class="tabItem" :key="index" v-if="slected === index">-->
<!--          <div class="tabContent">-->
<!--            <div v-if="index === 0">-->
<!--              <ul>-->
<!--                <li>-->
<!--                  <router-link to="/statistics">手术药流统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/spinsterhoodSat">未婚已婚统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">流产次数统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">避孕方案统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">首月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">一个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">三个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">六个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">十二个月随访统计</router-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--            <div v-if="index === 1">-->
<!--              <ul>-->
<!--                <li>-->
<!--                  <router-link to="/">统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">流产</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">避孕</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">首月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">一个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">三个月随访统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">六个统计</router-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <router-link to="/">十统计</router-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </template>-->
<!--    </sideTab>-->
    <van-popup v-model="HospCompoundShow" position="bottom" :overlay="true">
      <!--          <van-picker :columns="columns" @change="onChange" />-->
      <van-picker
        show-toolbar
        title=""
        :columns="HospCompoundColums"
        @cancel="onCancel"
        @confirm="onChange"
      />
    </van-popup>
    <van-popup v-model="departShow" position="bottom" :overlay="true">
      <!--          <van-picker :columns="columns" @change="onChange" />-->
      <van-picker
        show-toolbar
        title=""
        :columns="departColums"
        @cancel="onDepartCancel"
        @confirm="onDepartChange"
      />
    </van-popup>
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
      searchValue: '',
      searchList: [],
      analyzeList: [],
      HospCompoundList: [],
      HospCompoundColums: [],
      HospCompoundShow: false,
      HospCompoundName: '院区',
      HospCompoundId: '',
      departList: [],
      departColums: [],
      departShow: false,
      departName: '科室',
      departId: ''
    }
  },
  components: {
    sideTab
  },
  created () {
    this.getHospCompound()
  },
  methods: {
    // 搜索内容
    searchContent () {
      let self = this
      // let params = {
      //   tr: self.searchValue
      // }
      // self.$post('Queryname', 'PACPatient', params).then(res => {})
      var search = self.searchValue
      if (search) {
        self.searchList = self.analyzeList.filter(function (product) {
          // 每一项数据
          // console.log(product)
          return Object.keys(product).some(function (key) {
            // 每一项数据的参数名
            // console.log(key)
            return (
              String(product[key])
              // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            )
          })
        })
      }
    },
    // 获取院区信息
    getHospCompound () {
      let self = this
      let params = {
        id: 'ECAC1ECF-970A-4B3B-B1A3-867A2F47F1E9'
      }
      self.$post('DepartmentTypeOptions', 'PACPatient', params).then(res => {
        if (res.result) {
          self.HospCompoundList = res.data
          for (let i in res.data) {
            self.HospCompoundColums.push(res.data[i].branchName)
          }
        }
      })
    },
    // 获取科室列表
    getDepartList (id) {
      let self = this
      let params = {
        id: id
      }
      self.$post('DepartmentQueryssss', 'PACPatient', params).then(res => {
        if (res.result) {
          self.departList = res.data
          for (let i in res.data) {
            self.departColums.push(res.data[i].deptName)
          }
        }
      })
    },
    tabClick (index) {
      this.slected = index
    },
    clickThis () {
      this.$router.push({name: 'SatisfactionSta'})
    },
    onSearch () {},
    // 院区
    onCancel () {
      this.HospCompoundShow = false
    },
    onChange (value, index) {
      this.HospCompoundName = value
      this.HospCompoundId = this.HospCompoundList[index].id
      this.HospCompoundShow = false
      this.getDepartList(this.HospCompoundId)
    },
    // 科室
    onDepartCancel () {
      this.departShow = false
    },
    onDepartChange (value, index) {
      this.departName = value
      this.departId = this.departList[index].id
      this.departShow = false
      this.getDepartList(this.departId)
    }
  }
}
</script>

<style lang="less" scoped>
  .patientManageTop {
    height:2.76rem;
    background:linear-gradient(180deg,rgba(11,185,191,1) 0%,rgba(11,185,191,0) 100%);
    padding: 0.28rem 0.3rem 0.3rem;
    box-sizing: border-box;
    .contentBox {
      height:2.18rem;
      background:rgba(255,255,255,1);
      border-radius:6px;
      .selectBox {
        display: flex;
        height: 1.18rem;
        align-items: center;
        border-bottom: 1px solid #f9f9f9;
        div {
          flex-basis: 33%;
          display: flex;
          justify-content: space-between;
          padding: 0.1rem 0.34rem 0.1rem 0.24rem;
          position: relative;
          line-height: 0.42rem;
          border-right: 1px solid #fbfbfb;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          &:last-child {
            border-right: none
          }
          span {
            color: #121212;
            font-size: 0.3rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 100%;
          }
          i {
            border-top: 0.1rem solid #b1b1b1;
            border-right: 0.1rem solid transparent;
            border-left: 0.1rem solid transparent;
            border-bottom: 0.1rem solid transparent;
            position: absolute;
            right: 0.08rem;
            top: 0.25rem;
          }
        }
      }
      .searchBox {
        padding: 0.24rem 0.24rem 0.3rem 0.4rem;
        color: #B6BABD;
        display: flex;
        justify-content: space-between;
        i {
          font-size: 0.36rem;
          font-weight: 600;
        }
        input {
          line-height: 0.36rem;
          font-size: 0.28rem;
          margin-left: 0.08rem;
          display: block;
          width: 100%;
        }
      }
    }
}
  .contentBox {
    padding: 0 0.3rem;
    .item {
      height:1.52rem;
      background:rgba(255,255,255,1);
      box-shadow:0px 0px 12px 0px rgba(238,238,238,1);
      border-radius:6px;
      line-height: 1.52rem;
      padding: 0 0.4rem;
      box-sizing: border-box;
      text-align: left;
      margin-bottom: 0.2rem;
      .title {
        font-size:0.32rem;
        font-weight:600;
        color:rgba(18,18,18,1);
      }
    }
  }
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
.tabContent li {
  padding: 0.18rem 0;
  font-size: 0.32rem;
}
.tabContent li a {
  color: #333333;
}
</style>
