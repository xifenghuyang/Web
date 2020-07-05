<template>
  <!-- 主界面-->
  <div class="main" :timeArea="$route.query">
    <h2>{{this.$route.query}}</h2>
    <HistoryScore :timeArea=$route.query>分数曲线</HistoryScore>
    <hr>
    <DcnTopo :timeArea=$route.query>网络拓扑</DcnTopo>
    <hr>
    <FaultTable :timeArea=$route.query>故障详情</FaultTable>
    <hr>
    <!-- 详情信息 -->
    <router-link tag="el-button" v-for="(item, i) in navList"
                 :to="item.name" :key="i">{{item.navItem}}
    </router-link>
    <router-view></router-view>
    <div style="height: 200px"></div>
  </div>
</template>

<script>
  import HistoryScore from "@/components/HistoryScore";
  import DcnTopo from "@/components/DcnTopo";
  import FaultTable from "@/components/FaultTable";

  const navList = [
    {name: '/home/analysis', navItem: '网络健康度'},
    {name: '/home/influence', navItem: '历史数据'},
    {name: '/home/solution', navItem: '修复建议'}
  ];

  export default {
    name: "MainPage",
    data() {
      return {
        timeArea:{timeStart:0,timeEnd:0},
        navList: navList
      }
    },
    components: {
      HistoryScore,
      DcnTopo,
      FaultTable,
    },
    watch: {
      $route: function () {
        this.timeArea=this.$route.query;
      },
      timeArea:function () {
        console.log('MainPage分发时间');
      }
    }
  }
</script>

<style scoped>
  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    right: 0;
    left: 0;
    overflow: auto;
  }

  .active {
    background-color: #545c64;
    color: white;
  }
</style>
