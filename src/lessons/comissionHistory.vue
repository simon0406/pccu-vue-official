<template>
    <div class="comissionHistory">
        <h1 class="comissionHistory__header">Commission Hostory</h1>
        <!-- <cardNavs
            class="comissionHistory__navs d-none d-768-block"
            :id="'invertal'"
            :value.sync="currentInterval"
            :options="intervalOptions"
        ></cardNavs> -->
        <div id="bar-chart" ref="bar-chart" class="comissionHistory__chart"></div>
        <!-- <div class="comissionHistory__toggle">
            <button
                class="toggle__button button--analysis"
                :class="{'toggle__button--active': currentToggleIndex==='0'}"
                @click="switchToAnalysis()"
            >Analysis</button>
            <button
                class="toggle__button button--total"
                :class="{'toggle__button--active': currentToggleIndex==='1'}"
                @click="switchToTotal()"
            >Total</button>
        </div> -->
    </div>
</template>
<script>
import cardNavs from '@/components/cardNavs.vue'
import $echarts from 'echarts'
export default {
    components: {
        cardNavs
    },
    data: () => ({
        currentInterval: "",
        intervalOptions: [
            {
                text: 'Monthly',
                value: ''
            },
            {
                text: 'Yearly',
                value: '2'
            },
        ],
        // Echart
        echart: null,
        currentToggleIndex: '0'
    }),
    mounted() {
        this.switchToAnalysis()
        window.addEventListener('resize', this.resizeEchart)
    },
    destroyed() {
        window.removeEventListener('resize', this.resizeEchart)
    },
    methods: {
        renderAnalysisChart() {
            this.echart = $echarts.init(document.querySelector("#bar-chart"));

            const xAxisData = [];
            const data1 = [];
            const data2 = [];

            for (let i = 0; i < 10; i++) {
                xAxisData.push("Jan 19'");
                data1.push(Math.random().toFixed(2));
                data2.push((-Math.random() * 2).toFixed(2));
            }

            const itemStyle = {
                normal: {
                    color: '#79eaa6',
                    barBorderRadius: 9
                },
            };
            const itemStyle2 = {
                normal: {
                    color: '#ffe323',
                    barBorderRadius: 9
                },
            }

            const option = {
                legend: {
                    data: ['Recurring', 'Upfront'],
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
                        barWidth: 18
                    },
                    {
                        name: 'Recurring',
                        type: 'bar',
                        stack: 'one',
                        itemStyle: itemStyle,
                        data: data1,
                        barWidth: 18
                    },

                ]
            };
            this.echart.clear();
            this.echart.setOption(option);
        },
        renderTotalChart() {
            this.echart = $echarts.init(document.querySelector("#bar-chart"));

            const xAxisData = [];
            const dataTotal = [];

            for (let i = 0; i < 10; i++) {
                xAxisData.push("Jan 19'");
                dataTotal.push(Math.random().toFixed(2));
            }

            const itemStyle = {
                normal: {
                    color: '#486bff',
                    barBorderRadius: 9
                },
            };

            const option = {
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
                        itemStyle,
                        data: dataTotal,
                        barWidth: 18
                    },
                ]
            };
            this.echart.clear();
            this.echart.setOption(option);
        },
        switchToAnalysis() {
            this.currentToggleIndex = "0"
            this.renderAnalysisChart();
        },
        switchToTotal() {
            this.currentToggleIndex = "1"
            this.renderTotalChart();
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
.comissionHistory {
    position: relative;
}
.comissionHistory__header {
    font-size: 24px;
    font-weight: bold;
    color: #282828;
}
.comissionHistory__navs {
    position: absolute;
    top: 0;
    right: 0;
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
.comissionHistory__toggle {
    display: flex;
    justify-content: center;
    .toggle__button {
        width: 131px;
        height: 24px;
        border-radius: 4px;
        border: solid 1px #486bff;
        color: #486bff;
        transition: 300ms;
    }
    .toggle__button--active {
        background-color: #486bff;
        color: white;
    }
}
</style>
