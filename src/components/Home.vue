<template>
  <div>
    <div class="header_container" style="">
      <!--导航区-->
      <el-menu :default-active="$route.path" mode="horizontal" @select="handleSelect"
               background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name"
                      :disabled="item.disable">{{ item.navItem }}
        </el-menu-item>
      </el-menu>
      <!--时间选择器-->
      <DatePicker @sendTime="getTime"></DatePicker>
    </div>
    <!--主页面-->
    <router-view></router-view>
  </div>
</template>

<script>
  import DatePicker from "@/components/DatePicker";

  const navList = [
    {name: '/', navItem: '网络健康度', disable: true},
    {name: '/home/analysis', navItem: '历史数据', disable: false},
    {name: '/cases', navItem: '案例设置', disable: false}
  ];

  export default {
    name: "Home",
    data() {
      return {
        aaa: false,
        navList: navList,
        timeArea: [0, 0]
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        this.$router.push({
          path:key,
          query:{
            startTime: this.timeArea[0],
            endTime:this.timeArea[1]
          }
        })
        console.log(key+"-"+ keyPath);
      },
      getTime(value) {
        // 给MainPage时间
        this.timeArea = value;
        this.$router.push({
          query:{
            startTime: this.timeArea[0],
            endTime:this.timeArea[1]
          }
        })
        console.log("Home拿到时间", value);
      }
    },
    components: {
      DatePicker,
    }
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
</style>
