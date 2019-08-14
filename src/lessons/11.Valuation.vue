<template>
  <div class="valuationHistory__headerGroup">
    <span class="valuationHistory__header">Valuation History</span>
    <span class="monthly__rectangle">
        <span class="monthly">Monthly</span>
        <span class="monthly__icon"><img src="@/assets/facebook.png"></span>
    </span>
    <div id="bar-chart" ref="bar-chart" class="valuationHistory__chart"></div>
  </div>
</template>



<script>
import $echarts from 'echarts'
export default {
    mounted(){
        this.renderAnalysisChart();
        window.addEventListener('resize', this.resizeEchart)
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEchart)
    },
    methods: {
        renderAnalysisChart() {
            this.echart = $echarts.init(document.querySelector("#bar-chart")); 

            const option = {
                legend: {
                    data:['直接访问','搜索引擎']
                },
                
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['周一','周二','周三','周四','周五','周六','周日']
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'直接访问',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name:'搜索引擎',
                        type:'line',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'top'
                            }
                        },
                        areaStyle: {normal: {}},
                        data:[820, 932, 901, 934, 1290, 1330, 1320]
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
  .valuationHistory__headerGroup{
    height:28px;
    position: relative;
    padding:10px 0px 0px 10px;
  }
  .valuationHistory__header{
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
  }
  .monthly__rectangle{
    height: 40px;
    border-radius: 2px;
    background-color: #f2f4ff;
    position: relative;
    margin-left: 100px;
  }
  .monthly{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    position: absolute;
  }
  .monthly__icon{
    width: 12px;
    height: 7px;
    background-color: #414042;
    position: absolute;
  }



  .valuationHistory__chart{
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