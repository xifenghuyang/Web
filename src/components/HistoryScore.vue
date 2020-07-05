<template>
    <div id="line" class="" style="width: 90%;height:400px;"></div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  // import axios from 'axios';
  // 引入柱状图
  import 'echarts/lib/chart/line';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/legend';
  import 'echarts/lib/component/toolbox';
  import 'echarts/lib/component/markPoint';
  import 'echarts/lib/component/tooltip';
  import ES from './ESTest';

  export default {
    mounted(){
      this.myChart = echarts.init(document.getElementById("line"));
      this.initData();
    },
    props: ['timeArea'],
    methods: {
      initData(){
        const colors = ['#5793f3'];
        const option = {
          color: colors,
          title: {
            text: '健康度分数曲线',
            subtext: ''
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['分数']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              restore: {},
            }
          },
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: [100, 100, 95, 80, 85, 90, 100],
            type: 'line'
          }]
        };
        this.myChart.setOption(option);
      }
    },
    watch: {
      timeArea: function (){
        console.log('折线图获取时间,开始渲染',this.timeArea);
        ES.fun();
        // axios({
        //   url:'/api'
        // }).then(res=>{
        //   console.log(res);
        // })
        // this.initData()
      }
    }
  }
</script>

<style scoped>

  #line{
    justify-content: center;
  }

</style>
