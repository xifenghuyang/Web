<template>
  <!--    主界面-->
  <div class="main">
    <HistoryScore :timeArea='timeArea'>分数曲线</HistoryScore>
    <hr>
    <DcnTopo :timeArea='timeArea'>网络拓扑</DcnTopo>
    <hr>
    <FaultTable>故障详情</FaultTable>
    <hr>
    <router-link to="/about" tag="el-button">根因分析</router-link>
    <router-link to="/help" tag="el-button">影响范围</router-link>
    <router-view></router-view>
    <div style="height: 200px"></div>
  </div>
</template>

<script>
  import HistoryScore from "@/components/HistoryScore";
  import DcnTopo from "@/components/DcnTopo";
  import FaultTable from "@/components/FaultTable";

  export default {
    name: "MainPage",
    props: ['timeArea'],
    components:{
      HistoryScore,
      DcnTopo,
      FaultTable,
    },
    watch: {
      timeArea: function (){
        console.log('MainPage分发时间');
      }
    }
  }
</script>

<style scoped>

</style>
