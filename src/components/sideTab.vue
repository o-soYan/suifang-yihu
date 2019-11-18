<template>
  <div class='sideTabContainer'>
    <div class="sideTab">
      <ul>
        <li v-for="(item, index) in datas" :key="index" :class='selected === index ? "active" : ""' @click="clickTab(index)">
          <span>{{item}}</span>
        </li>
      </ul>
    </div>
    <div class="tabContent">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Array
    }
  },
  data () {
    return {
      selected: 0
    }
  },
  methods: {
    clickTab (type) {
      this.selected = type
      this.$emit('tabClick', type)
    }
  }
}
</script>

<style lang="less" scoped>
.sideTabContainer {
  display: flex;
}
.sideTab {
  flex: 1;
  font-size: 0.32rem;
  font-weight: 600;
  background: #e5e5e5;
  li {
    display: inline-block;
    width: 100%;
    padding: 0.2rem 0;
    box-sizing: border-box;
    span {
      display: inline-block;
      width: 100%;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
    &.active {
      background: #fff;
      span {
        color: green;
        border-left: 5px solid green;
      }
    }
  }
}
.tabContent {
  flex: 3;
}
</style>
