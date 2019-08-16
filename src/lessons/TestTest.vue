<template>
  <div class="css__RWD">
    <div class="valuationHistory__headerGroup">
        <span class="valuationHistory__header">Valuation History</span>
        <span class="monthly__rectangle">
            <span class="monthly">Monthly</span>
            <span class="monthly__icon d-768-none"><img src="@/assets/facebook.png"></span>
        </span>
        <span class="yearly d-375-none d-768-block">Yearly</span>
        
        <div id="bar-chart" ref="bar-chart" class="valuationHistory__chart"></div>
    </div>
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
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
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
                        data : ['11/18','12/18','01/19','02/19','03/19','04/19','05/19','06/19','07/19']
                    }
                ],
                yAxis : [
                    {
                        name:'$M',
                        type : 'value'
                    }
                ],
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series : [
                    {
                        name:'AUM',
                        type:'line',
                        stack: '总量',
                        symbol:'circle',
                        symbolSize:10,
                        areaStyle: {
                            color:'#FFFF82'
                        },
                        itemStyle: {
                            color: 'rgb(255, 255, 0)'
                        },
                        data:[320, 332, 301, 334, 390, 330, 320,330,340]
                    },
                    {
                        name:'Net Contribution',
                        type:'line',
                        stack: '总量',
                        symbol:'circle',
                        symbolSize:10,
                        label: {
                            normal: {
                                position: 'top'
                            }
                        },
                        areaStyle: {
                            color:'#FFFFAB'
                        },
                        itemStyle: {
                            color: 'rgb(255, 255, 0)'
                        },
                        data:[820, 932, 901, 934, 1290, 1330, 1320,1200,1310]
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
.css__RWD{
  width: 100%;
  padding: 0 1rem;
  .valuationHistory__headerGroup{
    height: 28px;
    position: relative;
  }
  .valuationHistory__header{
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
    position: absolute;
  }
  .monthly__rectangle{
    width: 106px;
    height: 40px;
    border-radius: 2px;
    background-color: #f2f4ff;
    position: absolute;
    margin: 10px 0px 0px 200px;
  }
  .monthly{
    height: 16px;
    font-size: 14px;
    font-weight: bold;
    color: #486bff;
    position: absolute;
    margin: 10px 0px 0px 10px;
  }
  .monthly__icon{
    width: 12px;
    height: 7px;
    background-color: #414042;
    position: absolute;
    margin: 10px 0px 0px 70px;
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
  .d-375-block{
    display:block;
  }
  .d-375-none{
    display:none;
  }
@media (min-width: 768px) {
  .yearly{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
  }

  .d-768-block{
    display:block;
  }
  .d-768-none{
    display:none;
  }
}

}
</style>