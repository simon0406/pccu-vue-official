<template>
  <div class="comissionHistory">
    <h1 class="commissionHistory__header">Commission History</h1>
    <div id="bar-chart" ref="bar-chart" class="comissionHistory__chart"></div>
  </div>
</template>


<script>
import $echarts from 'echarts'
export default {
    mounted(){
        this.renderAnalysisChart();
        window.addEventListener('resize', this.resizeEchart)
    },
    methods: {
        renderAnalysisChart() {
           this.echart = $echarts.init(document.querySelector("#bar-chart")); 
           
           const xAxisData = [];
           const data1 = [];
           const data2 = [];
           for (var i = 0; i < 10; i++) {
                xAxisData.push("Jan 19'");
                data1.push((Math.random() * 2).toFixed(2));
                data2.push(-Math.random().toFixed(2));
            }

            const itemStyle = {
                normal: {
                    barborderRadius: 9,
                    color: '#79eaa6'
                },
            };
            const itemStyle2={
                normal:{
                    barborderRadius:9,
                    color:'#ffe323'
                }
            }
            const option = {
                legend: {
                    data: ['Upfront', 'Recurring'],
                    align: 'left',
                    left: 10
                },
            xAxis: {
                data: xAxisData,
            },
            yAxis: {
                name: '($K)'
            },
            series: [
                {
                    name: 'Upfront',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle2,
                    data: data2,
                    barWidth:18
                },
                {
                    name: 'Recurring',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data1,
                    barWidth:18
                }
            ]
            };
            this.echart.clear();
            this.echart.setOption(option);
        },
          resizeEchart() {
            this.echart.resize();
            const divContainer = this.$refs['bar-chart'].firstChild
            divContainer.style.width = "100%"
        },
    }
}





</script>
<style lang="scss" scoped>
  .commissionHistory{
    position: relative;
  }
  .commissionHistory__header{
    height:32px;
    font-size: 24px;
    color: #282828;
  }
  .comissionHistory__chart {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    div {
        width: 100%;
    }
}
</style>