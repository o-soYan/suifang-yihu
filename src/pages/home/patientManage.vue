<template>
  <div class="patientManageContainer">
<!--    <sideTab :datas='tabDatas' @tabClick='tabClick'>-->
<!--      <template v-for="(item, index) in tabDatas">-->
<!--        <div class="tabItem" :key="index" v-if="slected === index">-->
<!--          <patientItem :patientDatas='selectedDatas'></patientItem>-->
<!--        </div>-->
<!--      </template>-->
<!--    </sideTab>-->
    <div class="patientManageTop">
      <div class="contentBox">
        <div class="selectBox">
<!--          <div class="selectItem" @click="HospCompoundShow = true">-->
<!--            <span>{{HospCompoundName}}</span>-->
<!--            <i class="icon"></i>-->
<!--          </div>-->
          <div class="selectItem" @click="departShow = true">
            <span>{{departName}}</span>
            <i class="icon"></i>
          </div>
          <div class="selectItem" @click="diseaseShow = true">
            <span>{{diseaseName}}</span>
            <i class="icon"></i>
          </div>
        </div>
        <div class="searchBox">
          <van-icon name="search" />
          <form action="" style="width: 100%;" id="myform">
            <input type="search" id="input"  v-model="searchValue" @keyup.enter="searchPatient" placeholder="搜索患者姓名" />
          </form>
        </div>
      </div>
    </div>
    <div class="patientBox">
      <van-pull-refresh v-if="!showNone " v-model="isLoading" @refresh="onRefresh">
<!--        <van-list-->
<!--          v-model="loading"-->
<!--          :finished="finished"-->
<!--          finished-text="没有更多了"-->
<!--          @load="onLoad"-->
<!--          :offset="100"-->
<!--        >-->
          <patientItem v-if="searchList.length === 0"  :patientDatas='patientDatas'></patientItem>
          <patientItem v-else :patientDatas='searchList'></patientItem>
<!--        </van-list>-->
      </van-pull-refresh>
      <none v-else></none>
    </div>
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
    <van-popup v-model="diseaseShow" position="bottom" :overlay="true">
      <!--          <van-picker :columns="columns" @change="onChange" />-->
      <van-picker
        show-toolbar
        title=""
        :columns="diseaseColums"
        @cancel="onDiseaseCancel"
        @confirm="onDiseaseChange"
      />
    </van-popup>
  </div>
</template>

<script>
import sideTab from '@/components/sideTab'
import patientItem from '@/components/patientItem'
import none from '@/components/none'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      tabDatas: ['感冒', '肿瘤'],
      slected: 0,
      patientDatas: [],
      searchList: [],
      searchValue: '',
      selectedDatas: [],
      HospCompoundList: [],
      HospCompoundColums: [],
      HospCompoundShow: false,
      HospCompoundName: '院区',
      HospCompoundId: '',
      departList: [],
      departColums: ['科室'],
      departShow: false,
      departName: '科室',
      departId: '',
      diseaseList: [],
      diseaseColums: ['病症'],
      diseaseShow: false,
      diseaseName: '病症',
      diseaseId: '',
      isLoading: false,
      finished: false,
      loading: false,
      currentPage: 1,
      pageSize: 10,
      showNone: false
    }
  },
  components: {
    sideTab,
    patientItem,
    none
  },
  created () {
    this.selectedDatas.push(this.patientDatas[0])
    this.getDepartList()
    this.getDisease()
  },
  mounted () {
    this.patientDatas = []
    this.currentPage = 1
    this.getAllPatient()
  },
  watch: {
    searchValue () {
      if (this.searchValue.length === 0) {
        this.searchList = []
        this.patientDatas = []
        this.currentPage = 1
        this.getAllPatient()
      }
    }
  },
  methods: {
    ...mapActions([
      'showLoading',
      'hideLoading'
    ]),
    onRefresh () {
      setTimeout(() => {
        this.isLoading = false
        this.patientDatas = []
        this.currentPage = 1
        this.searchList = []
        if (this.searchValue.length > 0) {
          this.searchPatient()
        } else {
          this.getAllPatient()
        }
      }, 500)
    },
    onLoad () {
      if (this.searchValue.length > 0) {
        this.searchPatient()
      } else {
        this.getAllPatient()
        this.currentPage++
      }
    },
    // 获取列表
    getAllPatient () {
      let self = this
      let params = {
        deptid: self.departId,
        disId: self.diseaseId
      }
      self.showLoading({ msg: '加载中...', autoClose: false })
      self.$get('PatientBaseQueryed', 'PACPatient', params).then(res => {
        self.hideLoading()
        self.loading = false
        if (res.rows.length === 0) {
          self.showNone = true
        } else {
          self.showNone = false
        }
        for (let i in res.rows) {
          self.patientDatas.push(res.rows[i])
        }
        if (res.rows.length < self.pageSize) {
          self.finished = true
        } else {
          self.finished = false
        }
      })
    },
    // 搜索患者
    searchPatient () {
      let self = this
      // let params = {
      //   tr: self.searchValue,
      //   pageSize: 100,
      //   pageIndex: 1
      // }
      // self.$post('Queryname', 'PACPatient', params).then(res => {
      //   self.searchList = res.rows
      //   self.finished = true
      // })
      var search = self.searchValue
      if (search) {
        self.searchList = self.patientDatas.filter(function (product) {
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
        if (self.searchList.length === 0) {
          self.showNone = true
        } else {
          self.showNone = false
        }
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
    getDepartList () {
      let self = this
      // let params = {
      //   id: id
      // }
      self.$post('DepartmentTypeOptions', 'PACPatient').then(res => {
        if (res.result) {
          self.departList = res.data
          self.departColums = ['选择科室']
          for (let i in res.data) {
            self.departColums.push(res.data[i].deptName)
          }
        }
      })
    },
    tabClick (index) {
      this.slected = index
      let arr = []
      arr.push(this.patientDatas[index])
      this.selectedDatas = arr
    },
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
      if (index === 0) {
        this.departId = ''
      } else {
        this.departId = this.departList[index - 1].id
      }
      this.departShow = false
      this.patientDatas = []
      this.currentPage = 1
      this.getAllPatient()
    },
    //  病症
    getDisease () {
      let self = this
      self.$post('DiseaseEntitiesTypes', 'PACPatient').then(res => {
        if (res.result) {
          self.diseaseList = res.data
          self.diseaseColumns = ['选择病种']
          for (let i in res.data) {
            self.diseaseColums.push(res.data[i].diseaseName)
          }
        }
      })
    },
    onDiseaseCancel () {
      this.diseaseShow = false
    },
    onDiseaseChange (value, index) {
      this.diseaseName = value
      if (index === 0) {
        this.diseaseId = ''
      } else {
        this.diseaseId = this.diseaseList[index - 1].id
      }
      this.diseaseShow = false
      this.patientDatas = []
      this.currentPage = 1
      this.getAllPatient()
    }
  },
  beforeRouteEnter (to, from, next) {
    if (from.path === '/patientInfo' || from.path === '/analyze') {
      from.meta.keepAlive = false
    }
    next()
  }
}
</script>

<style lang="less" scoped>
.patientManageContainer {
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
          flex-basis: 50%;
          display: flex;
          justify-content: space-between;
          padding: 0.1rem 0.5rem 0.1rem 0.34rem;
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
            right: 0.24rem;
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
}
</style>
