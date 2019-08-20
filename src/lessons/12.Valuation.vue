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
                    padding:15,
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                grid: {
                    left: '3%',
                    right: '3%',
                    top: '10%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['11/18','12/18','01/19','02/19','03/19','04/19','05/19','06/19','07/19','08/19','09/19','10/19','11/19']
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        name:'($M)          '
                    }
                ],
                dataZoom: [{
                                type: 'inside',
                                start: 0,
                                end: 60
                            }, {
                                start: 0,
                                end: 60,
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
                        name:'Net Contribution',
                        type:'line',
                        smooth:true,
                        stack: '总量',
                        symbol:'circle',
                        symbolSize:15,
                        showSymbol:false,
                        gridIndex: 1,
                        label: {
                            normal: {
                                position: 'top'
                            }
                        },
                        itemStyle: {
                            normal:{
                                color: 'rgb(255,255,255)',
                                    lineStyle:{
                                        type:'solid',
                                        color:'rgb(255,255,0)'
                                    }
                                }
                            },
                        areaStyle: {
                                        color:'#FFFF82'
                                    },
                                    
                        data:[320, 332, 301, 334, 390, 330,320,330,340,360,320,290,270]
                    },
                    {
                        name:'AUM',
                        type:'line',
                        smooth:true,
                        stack: '总量',
                        symbol:'circle',
                        symbolSize:10,
                        showSymbol:false,
                        itemStyle: {
                            normal:{
                                color: 'rgb(255,255,0)',
                                    lineStyle:{
                                        type:'solid',
                                        color:'rgb(255,255,0)'
                                    }
                                }
                            },
                    
                                    
                        areaStyle: {
                                        color:'#FFFFAB'
                                    },
                        data:[820, 932, 901, 934, 980, 1130, 1220,1150,1310,1120,1130,1100,1200]
                        
                    },
                    
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
  width:100%;
  padding:0 1rem;
  .AUM{
      padding-left:100px;
  }
  .valuationHistory__headerGroup{
    height:600px;
    position: relative;
    padding:10px 0px 0px 10px;
  }
  .valuationHistory__header{
    height: 28px;
    font-size: 24px;
    font-weight: 500;
    color: #282828;
    position: absolute;
  }
  .monthly__rectangle{
    width: 100px;
    height: 35px;
    border-radius: 2px;
    background-color: #f2f4ff;
    margin: 5px 0px 0px 0px;
    position: absolute;
    right: 30px;
  }
  .monthly{
    height: 16px;
    opacity: 0.9;
    font-size: 14px;
    font-weight: bold;
    color: #414042;
    margin: 5px 0px 0px 10px;
    position: absolute;
  }
  .monthly__icon{
    height: 7px;
    background-color: #414042;
    margin: 8px 0px 0px 70px;
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
    .d-375-block{   
        display:block;
    }
    .d-375-none{
        display:none;
    }

@media (min-width: 768px) {
    .monthly{
        margin: 7px 0px 0px 22px;
    }
    .monthly__rectangle{        
        position: absolute;
        right: 100px;
    }
    .monthly{
        color: #486bff;
    }
    .yearly{
        height: 16px;
        opacity: 0.9;
        font-size: 14px;
        font-weight: bold;
        color: #414042;
        margin-top: 10px;
        position: absolute;
        right: 50px;
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