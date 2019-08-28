<template>
<div class="echartsOne">
           <div class="echartsImg" id="echartsImgT" style="width: 100%;height:400px;">
             
           </div>
           <div class="echartsT">
               <button>添加成绩+</button>
               <button>添加分析和解决方案+</button>
           </div>
        </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
// 引入柱状图
require("echarts/lib/chart/bar");
// 引入柱状图
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
export default {
    data(){
        return{

        }
    },
    mounted(){
        this.echartd()
    },
    methods:{
        data() {
      return {
        bool: false
      };
    },
    echartd(){
   var myChart = echarts.init(document.getElementById('echartsImgT'));
   console.log(myChart,'00')
    myChart.setOption({
    title: {
        text: 'XX同学的日周考成绩统计',
        subtext: '仅供参考'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['技能','理论']
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none'
            },
            dataView: {readOnly: false},
            magicType: {type: ['line', 'bar']},
            restore: {},
            saveAsImage: {}
        }
    },
    xAxis:  {
        type: 'category',
        boundaryGap: false,
        data: ['08-01','08-02','08-03','08-04','08-05','08-06','08-07']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value}'
        }
    },
    series: [
        {
            name:'技能',
            type:'line',
            data:[30, 50, 70, 25, 30, 76, 40],
            markPoint: {
                data: [
                    {type: 'max', name: '最大值'},
                    {type: 'min', name: '最小值'}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'}
                ]
            }
        },
        {
            name:'理论',
            type:'line',
            data:[1, -2, 2, 5, 3, 2, 0],
            markPoint: {
                data: [
                    {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                ]
            },
            markLine: {
                data: [
                    {type: 'average', name: '平均值'},
                    [{
                        symbol: 'none',
                        x: '90%',
                        yAxis: 'max'
                    }, {
                        symbol: 'circle',
                        label: {
                            normal: {
                                position: 'start',
                                formatter: '最大值'
                            }
                        },
                        type: 'max',
                        name: '最高点'
                    }]
                ]
            }
        }
    ]
    })
        }
    }
}
</script>