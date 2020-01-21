<template>
  <div>
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
          <div class="selectItem" @click="diseasePopShow">
            <span>{{diseaseName}}</span>
            <i class="icon"></i>
          </div>
          <div class="selectItem" @click="typePopShow">
            <span>{{typeName}}</span>
            <i class="icon"></i>
          </div>
        </div>
        <div class="searchBox">
          <van-icon name="search" />
<!--          <input type="text" placeholder="搜索患者姓名">-->
          <form action="" style="width: 100%;" id="myform">
            <input type="search" id="input"  v-model="searchValue" @keyup="searchContent" placeholder="搜索内容" />
          </form>
        </div>
      </div>
    </div>
    <div class="contentBox" v-if="!searchValue">
      <template v-if="typeJudge === 0">
        <div class="item" v-for="(item, index) in baseType" :key="index">
          <div class="title" @click="clickThis(item.type)">{{item.name}}</div>
        </div>
      </template>
      <template v-else>
        <div class="item" v-for="(item, index) in fovList" :key="index">
          <div class="title" @click="clickThis(item.id)">{{item.planTitle}}</div>
        </div>
        <none v-if="fovList.length === 0"></none>
      </template>
    </div>
    <div class="contentBox" v-else>
      <template v-if="typeIndex === 0">
        <div class="item" v-for="(item, index) in searchList" :key="index">
          <div class="title" @click="clickThis(item.type)">{{item.name}}</div>
        </div>
      </template>
      <template v-else>
        <div class="item" v-for="(item, index) in searchList" :key="index">
          <div class="title" @click="clickThis(item.id)">{{item.planTitle}}</div>
        </div>
      </template>
      <none v-if="searchList.length === 0"></none>
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
    <van-popup v-model="typeShow" position="bottom" :overlay="true">
      <!--          <van-picker :columns="columns" @change="onChange" />-->
      <van-picker
        show-toolbar
        title=""
        :columns="tabDatas"
        @cancel="onTypeCancel"
        @confirm="onTypeChange"
      />
    </van-popup>
    <van-popup v-model="diseaseShow" position="bottom" :overlay="true">
      <!--          <van-picker :columns="columns" @change="onChange" />-->
      <van-picker
        show-toolbar
        title=""
        :columns="diseaseColumns"
        @cancel="onDiseaseCancel"
        @confirm="onDiseaseChange"
      />
    </van-popup>
  </div>
</template>

<script>
import sideTab from '@/components/sideTab'
import none from '@/components/none'
export default {
  data () {
    return {
      value: '',
      tabDatas: ['基本信息统计', '随访统计'],
      baseType: [{
        name: '手术药流统计',
        type: 'yl'
      }, {
        name: '未婚已婚统计',
        type: 'hunyin'
      }, {
        name: '流产次数统计',
        type: 'liuchan'
      }, {
        name: '避孕方案统计',
        type: 'by'
      }],
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
      departId: '',
      typeShow: false,
      typeName: '基本信息统计',
      typeIndex: 0,
      diseaseName: '病种',
      diseaseShow: false,
      diseaseColumns: [],
      diseaseList: ['病种'],
      diseaseId: '',
      fovList: [],
      typeJudge: 0
    }
  },
  components: {
    sideTab,
    none
  },
  created () {
    this.getDepartList()
    this.getDiseaseData()
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
        if (self.typeIndex === 0) {
          self.searchList = self.baseType.filter(function (product) {
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
        } else {
          self.searchList = self.fovList.filter(function (product) {
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
    // 获取随访列表
    getFovList () {
      let self = this
      let params = {
        deptid: self.departId,
        disId: self.diseaseId
      }
      self.$get('FuvPublishPlanQuery', 'PACPatient', params).then(res => {
        if (res.result) {
          self.fovList = res.data
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
          self.departName = res.data[0].deptName
          self.departId = res.data[0].id
          for (let i in res.data) {
            self.departColums.push(res.data[i].deptName)
          }
        }
      })
    },
    tabClick (index) {
      this.slected = index
    },
    clickThis (type) {
      if (this.typeJudge === 0) {
        this.$router.push({name: 'statistics', query: {type: type, deptid: this.departId, disId: this.diseaseId}})
      } else {
        this.$router.push({name: 'statisticsItem', query: {type: type, deptid: this.departId, disId: this.diseaseId}})
      }
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
      if (index === 0) {
        this.departId = ''
      } else {
        this.departId = this.departList[index - 1].id
      }
      this.departShow = false
      if (this.typeJudge === 1) {
        this.getFovList()
      }
      // this.getDepartList(this.departId)
    },
    // 病种
    getDiseaseData () {
      let self = this
      self.$post('DiseaseEntitiesTypes', 'PACPatient').then(res => {
        if (res.result) {
          self.diseaseColumns = ['选择病种']
          self.diseaseList = res.data
          for (let i in res.data) {
            self.diseaseColumns.push(res.data[i].diseaseName)
          }
        }
      })
    },
    diseasePopShow () {
      this.diseaseShow = true
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
      if (this.typeJudge === 1) {
        this.getFovList()
      }
      this.diseaseShow = false
    },
    // 分类
    typePopShow () {
      this.typeShow = true
    },
    onTypeCancel () {
      this.typeShow = false
    },
    onTypeChange (value, index) {
      this.typeName = value
      this.typeShow = false
      this.typeIndex = index
      this.typeJudge = index
      if (index === 1) {
        this.getFovList()
      }
    }
  },
  // 修改列表页的meta值，false时再次进入页面会重新请求数据。
  beforeRouteEnter (to, from, next) {
    if (from.path === '/statistics' || from.path === '/statisticsItem') {
      from.meta.keepAlive = false
    }
    next()
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
