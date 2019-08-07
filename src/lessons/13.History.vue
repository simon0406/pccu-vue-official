<template>
  <div class="comissionHistory">
    <h1 class="commissionHistory__header">Commission Hostory</h1>
    <div id="bar-chart" ref="bar-chart" class="comissionHistory__chart"></div>
  </div>
</template>


<script>
export default {
    methods: {
        abc() {
           this.echart = $echarts.init(document.querySelector("#bar-chart")); 
           var xAxisData = [];
           var data1 = [];
           var data2 = [];
           for (var i = 0; i < 10; i++) {
                xAxisData.push('Class' + i);
                data1.push((Math.random() * 2).toFixed(2));
                data2.push(-Math.random().toFixed(2));
            }

            var itemStyle = {
                normal: {
                },
                emphasis: {
                    barBorderWidth: 1,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    shadowColor: 'rgba(0,0,0,0.5)'
                }
            };
            option = {
                backgroundColor: '#eee',
                legend: {
                    data: ['Upfront', 'Recurring'],
                    align: 'left',
                    left: 10
                },
            xAxis: {
                data: xAxisData,
                name: 'X Axis',
                silent: false,
                axisLine: {onZero: true},
                splitLine: {show: false},
                splitArea: {show: false}
            },
            yAxis: {
                inverse: true,
                splitArea: {show: false}
            },
            series: [
                {
                    name: 'Upfront',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data1
                },
                {
                    name: 'Recurring',
                    type: 'bar',
                    stack: 'one',
                    itemStyle: itemStyle,
                    data: data2
                }
            ]
            };
            this.echart.clear();
            this.echart.setOption(option);
        }
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