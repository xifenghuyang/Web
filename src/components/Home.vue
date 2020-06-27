<template>
  <div>
    <div class="header_container" style="">
      <!--      导航区-->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
               @select="handleSelect" background-color="#545c64"
               text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item index="1" disabled>网络健康度</el-menu-item>
        <el-menu-item index="2">历史数据</el-menu-item>
        <el-menu-item index="3">案例库设置</el-menu-item>
      </el-menu>
      <!--      时间选择器-->
      <DatePicker @sendTime="getTime"></DatePicker>
    </div>
<!--    <router-link to="/main">主页</router-link>-->
<!--    <router-view id="main"></router-view>-->
    <MainPage :timeArea="timeArea"></MainPage>
  </div>
</template>

<script>
  import DatePicker from "@/components/DatePicker";
  import MainPage from "@/components/MainPage";

  export default {
    name: "Home",
    data() {
      return {
        activeIndex: "2",
        timeArea: [0, 0]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      getTime(value) {
        // 给MainPage时间
        this.timeArea = value;
        console.log("Home拿到时间", value);
      }
    },
    components: {
      DatePicker,
      MainPage
    },
    // watchs
  }
</script>

<style scoped>
  .header_container {
    position: absolute;
    height: 60px;
    top: 0;
    right: 0;
    left: 0;
    background: #545c64;
    display: flex;
    justify-content: space-between;
    align-items: center
  }

  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: auto;
  }

  .active{
    background-color: #545c64;
    color: white;
  }

</style>
