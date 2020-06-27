<template>
    <div id="topo" class="" style="width: 90%;height:400px;"></div>
</template>

<script>
  import echarts from 'echarts/lib/echarts';
  // 引入柱状图
  import 'echarts/lib/chart/graph';
  import 'echarts/lib/component/title';
  import 'echarts/lib/component/legend';
  import 'echarts/lib/component/toolbox';
  import 'echarts/lib/component/markPoint';
  import 'echarts/lib/component/tooltip';

  export default {
    mounted() {
      this.myChart = echarts.init(document.getElementById("topo"));
      this.initData();
    },
    props: ['timeArea'],
    methods: {
      initData() {
        const colors = ['#5793f3', '#675bba', '#d14a61'];
        const data = [
          {
            name: 'serverleaf1',
            x: 100,
            y: 100
          }, {
            name: 'serverleaf2',
            x: 300,
            y: 100
          }, {
            name: 'borderleaf1',
            x: 500,
            y: 100
          }, {
            name: 'borderleaf2',
            x: 700,
            y: 100
          }, {
            name: 'serviceleaf1',
            x: 100,
            y: 500
          }, {
            name: 'serviceleaf2',
            x: 300,
            y: 500
          }, {
            name: 'serviceleaf3',
            x: 500,
            y: 500
          }, {
            name: 'serviceleaf4',
            x: 700,
            y: 500
          }, {
            name: 'spine1',
            x: 200,
            y: 300
          }, {
            name: 'spine2',
            x: 600,
            y: 300
          }];
        const links = [
          {
            source: 'serverleaf1',
            target: 'spine1'
          }, {
            source: 'serverleaf2',
            target: 'spine1'
          }, {
            source: 'serverleaf1',
            target: 'spine2'
          }, {
            source: 'serverleaf2',
            target: 'spine2'
          }, {
            source: 'borderleaf1',
            target: 'spine1'
          }, {
            source: 'borderleaf2',
            target: 'spine1'
          }, {
            source: 'borderleaf1',
            target: 'spine2'
          }, {
            source: 'borderleaf2',
            target: 'spine2'
          }, {
            source: 'serviceleaf1',
            target: 'spine1'
          }, {
            source: 'serviceleaf2',
            target: 'spine1'
          }, {
            source: 'serviceleaf3',
            target: 'spine1'
          }, {
            source: 'serviceleaf4',
            target: 'spine1'
          }, {
            source: 'serviceleaf1',
            target: 'spine2'
          }, {
            source: 'serviceleaf2',
            target: 'spine2'
          }, {
            source: 'serviceleaf3',
            target: 'spine2'
          }, {
            source: 'serviceleaf4',
            target: 'spine2'
          }];
        const option = {
          color: colors,
          title: {
            text: '网络拓扑结构',
            subtext: ''
          },
          legend: {
            data: ['拓扑数据']
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
          series: [{
            type: 'graph',
            layout: 'none',
            symbolSize: 70,
            roam: true,
            label: {
              show: true
            },
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
              fontSize: 20
            },
            data: data,
            // links: [],
            links: links,
            lineStyle: {
              opacity: 0.9,
              width: 2,
              curveness: 0
            }
          }]
        };
        this.myChart.setOption(option);
      }
    },
    watch: {
      timeArea: function () {
        console.log('拓扑图获取时间,开始渲染', this.timeArea);
        this.initData()
      }
    }
  }
</script>

<style scoped>

  #topo {
    justify-content: center;
  }

</style>
