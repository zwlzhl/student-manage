<template>
<div class="box">
   <div class="header">
       <p>重点关注学生考试成绩统计表</p>
   </div>
   <div class="section">
        <div class="classBox">
            <span>切换班级</span>
                  <span class="active">1703C</span>
                   <span>1703C</span>
                   
             
            <span>创建班级+</span>
        </div>
        <div class="echartsOne">
           <div class="echartsImg" id="echartsImg" style="width: 100%;height:400px;">
             
           </div>
           <div class="echartsT">
               <button>添加成绩+</button>
               <button>添加分析和解决方案+</button>
           </div>
        </div>

        <div class="echartsTwo">
           <div class="echartsImgT" id="echartsImgT" style="width: 100%;height:400px;">
             
           </div>
           <div class="echartsT">
               <button>添加成绩+</button>
               <button>添加分析和解决方案+</button>
           </div>
        </div>
        <div>
            <div class="newBox">
                <div class="leftBox">
                   <p>新添成绩--XX同学</p>
                   <div>
                       <input type="text" placeholder="默认当前日期">
                       <button class="btn">昨天</button>
                   </div>
                   <div>
                       技能：<input type="text" placeholder="数字">
                   </div>
                   <div>
                       理论：<input type="text" placeholder="0-100的数字">
                   </div>
                   <div class="bottonBtn">
                       <button class="none">取消</button>
                       <button class="sure">确定</button>
                   </div>
                </div>
                <div class="rightBox">
                     <p>新添分析--XX同学</p>
                     <div>
                         <input type="text" placeholder="默认当前日期">
                         <button class="btn">昨天</button>
                     </div>
                     <div class="fen">
                         <span>分析：</span><textarea name="" id="" cols="30" rows="3"></textarea>
                     </div>
                     <div class="fen">
                         <span>解决方案：</span><textarea name="" id="" cols="30" rows="3"></textarea>
                     </div>
                      <div class="bottonBtn">
                       <button class="none">取消</button>
                       <button class="sure">确定</button>
                   </div>
                </div>
            </div>
        </div>
   </div>
</div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex';
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
    computed:{
       ...mapState({
           lists:state=>state.show.lists
       })
    },
    mounted(){
        this.echartd()
        this.list()
    },
    methods:{
        data() {
      return {
        bool: false
      };
    },
    ...mapMutations({
         showList:'show/showRess'
    }),
    ...mapActions({
        list:'show/getShow'
    }),
    
    echartd(){
   var myChart = echarts.init(document.getElementById('echartsImg'));
   var myChartT = echarts.init(document.getElementById('echartsImgT'));
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
     myChartT.setOption({
    title: {
        color:'blue',
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
<style lang="scss" scoped> 
   .active{
       background:#00f;
       color:#fff;
   }
    //pc段
    @media screen and(min-width: 667px) and (max-width: 1920px){
       .box{
            width:100%;
            height:100%;
            font-size:16px;
             .header{
               width:100%;
               height:100rpx;
               background:#00f;
               color:#fff;
               p{
                   text-align:center;
                   line-height:100rpx;
               }
            }
            .section{
                flex:1;
                .classBox{
                    margin-top:10px;
                    width:90%;
                    height:90px;
                    border:1px solid #ccc;
                      display:flex;
                    span{
                        line-height:45px;
                         flex:7;
                        border:1px solid #ccc;
                         width:160px;
                        height:45px;
                        display:inline-block;
                        text-align:center;
                         margin:6px 10px;
                    }
                        span{
                            line-height:45px;
                            flex:1;
                            margin-left:10rpx;
                            text-align:center;
                            border:1px solid #ccc;
                             width:160rpx;
                            padding:0 10px;
                            height:45px;
                            display:inline;
                             margin:6px 10px;
                        }
                }
                .newBox{
                    width:100%;
                    height:500px;
                    border:px solid #ccc;
                    display:flex;
                    .leftBox{
                        width:386px;
                        height:290px;
                        border:1px solid #ccc;
                        box-shadow:2px 2px 3px #ccc;
                        margin:25px 25px;
                        padding:25px 25px;
                        position: relative;
                        p{
                            padding:5px 5px;
                        }
                        div{
                            width:100%;
                            height:50px;
                            margin:5px 0;
                            input{
                                height:25px;
                            }
                            .btn{
                                color:steelblue;
                                background:skyblue;
                                height:25px;
                                width:50px;
                                border:1px solid #ccc;
                                margin-left:5px;
                            }
                            .bottonBtn{
                                 width:300px;
                                 height:50px;
                                 border:1px solid #f00;
                                 margin:5px 0;
                                 position: absolute;
                                 right:0;
                                 bottom:0;
                            }
                            .none{
                                background:#fff;
                                 height:25px;
                                width:50px;
                                margin-left:5px;
                            }
                            .sure{
                                background:blue;
                                 height:25px;
                                width:50px;
                                margin-left:5px;
                                color:#fff;
                                border:1px solid #fff;
                            }
                        }
                    }
                     .rightBox{
                        width:386px;
                        height:290px;
                        border:1px solid #ccc;
                        box-shadow:2px 2px 3px #ccc;
                        margin:25px 25px;
                        padding:25px 25px;
                         p{
                            padding:5px 5px;
                        }
                        div{
                            width:100%;
                            height:50px;
                            margin:5px 0;
                            input{
                                height:25px;
                            }
                            .btn{
                                color:steelblue;
                                background:skyblue;
                                height:25px;
                                width:50px;
                                border:1px solid #ccc;
                                margin-left:5px;
                            }
                    }
                      .fen{
                                height:60px;
                                width:200px;
                                margin-top:10px;
                                line-height:60px;
                                display:flex;
                                span{
                                    flex:1;
                                }
                                   textarea{
                                       flex:1;
                                       display:inline;
                                       width:100%;
                                       height:100%;
                                   }
                            }
                            .none{
                                background:#fff;
                                 height:25px;
                                width:50px;
                                margin-left:5px;
                            }
                            .sure{
                                background:blue;
                                 height:25px;
                                width:50px;
                                margin-left:5px;
                                color:#fff;
                                border:1px solid #fff;
                            }
                        }
                }
                .echartsOne{
                    width:100%;
                     height:500px;
                     .echartsImg{
                       width:100%;
                       height:180px;
                    }
                    .echartsT{
                      width:100%;
                       height:100px;
                       background:#ccc;
                        line-height:100px;
                       button{
                           background:#fff;
                          padding:0 25px;
                           height:45px;
                           margin:0 10px;
                       }
                    }
                }
                .echartsTwo{
                    border:2px solid #00f;
                    width:98%;
                    padding-bottom:30px;
                     height:550px;
                     .echartsImgT{
                       width:100%;
                       height:180px;
                    }
                    .echartsT{
                      width:100%;
                       height:100px;
                       background:#ccc;
                        line-height:100px;
                       button{
                           background:#fff;
                          padding:0 25px;
                           height:45px;
                           margin:0 10px;
                       }
                    }
                }
            }
        }
    }
    //手机端
    @media screen and (max-width: 667px){
        .box{
            width:100%;;
            height:100%;
            font-size:0.1rem;
            .header{
               width:100%;
               height:2rem;
               background:#00f;
               color:#fff;
               p{
                   text-align:center;
                   line-height:2rem;
               }
            }
            .section{
                flex:1;
                 .classBox{
                    margin-top:0.5rem;
                    width:90%;
                    height:3rem;
                    border:1px solid #ccc;
                   display:flex;
                    span{
                        line-height:1rem;
                        flex:2;
                        border:1px solid #ccc;
                        height:1rem;
                        // width:3.02rem;
                        display:inline-block;
                        text-align:center;
                        margin:0.15rem 0.5rem;
                    }
                    ul{
                        
                        // display:flex;
                        li{
                            line-height:1rem;
                            flex:1;
                            margin-left:0.5rem;
                            text-align:center;
                            border:1px solid #ccc;
                            // width:3.02rem;
                            // padding:0 10px;
                            height:1rem;
                             display:inline;
                            //  margin:0.15rem 0.5rem;
                        }
                    }
                }
                 .newBox{
                    width:100%;
                    height:10rem;
                    border:1px solid #ccc;
                    // display:flex;
                    margin-top:5rem;
                    font-size:0.1rem;
                    .leftBox{
                         margin-bottom:3rem;
                        width:100%;
                        height:10rem;
                        border:1px solid #ccc;
                        box-shadow:2px 2px 3px #ccc;
                        margin:0.5rem 0.5rem;
                        padding:0.5rem 0.5rem;
                        position: relative;
                        p{
                            padding:0.1rem 0.1rem
                        }
                        div{
                            width:100%;
                            height:1.2rem;
                            margin:0.5rem 0;
                            input{
                                height:1rem;
                            }
                            .btn{
                                font-size:0.1rem;
                                color:steelblue;
                                background:skyblue;
                                height:1rem;
                                width:2rem;
                                border:1px solid #ccc;
                                margin-left:5px;
                            }
                            .bottonBtn{
                                 width:8rem;
                                 height:2rem;
                                 border:1px solid #f00;
                                 margin:0.1rem 0;
                                 position: absolute;
                                 right:0;
                                 bottom:0;
                            }
                            .none{
                                background:#fff;
                                 height:1.2rem;
                                width:2rem;
                                margin-left:0.1rem;
                            }
                            .sure{
                                background:blue;
                                 height:1.2rem;
                                width:2rem;
                                margin-left:0.1rem;
                                color:#fff;
                                border:1px solid #fff;
                            }
                        }
                    }
                     .rightBox{
                        width:100%;
                        height:10rem;
                        border:1px solid #ccc;
                        box-shadow:2px 2px 3px #ccc;
                        margin:0.5rem 0.5rem;
                        padding:0.5rem 0.5rem;
                         p{
                            padding:5px 5px;
                        }
                        div{
                            width:100%;
                            height:2rem;
                            margin:5px 0;
                            input{
                                height:1rem;
                            }
                            .btn{
                                color:steelblue;
                                background:skyblue;
                                height:1rem;
                                width:2rem;
                                border:1px solid #ccc;
                                margin-left:0.1rem;
                            }
                    }
                      .fen{
                          margin-top:1rem;
                                height:1.2rem;
                                width:6rem;
                                margin-top:0.5rem;
                                line-height:1.2rem;
                                display:flex;
                                span{
                                    flex:1;
                                }
                                   textarea{
                                       flex:1;
                                       display:inline;
                                       width:100%;
                                       height:100%;
                                   }
                            }
                            .none{
                                background:#fff;
                                 height:1.2rem;
                                width:2rem;
                                margin-left:0.1rem;
                            }
                            .sure{
                                background:blue;
                                 height:1.2rem;
                                width:2rem;
                                margin-left:0.01rem;
                                color:#fff;
                                border:1px solid #fff;
                            }
                        }
                }
                .echartsOne{
                    width:100%;
                    height:25rem;
                    border-bottom:1px solid #ccc;
                    margin-top:2rem;
                    .echartsImg{
                       width:100%;
                       height:9rem;
                    }
                    .echartsT{
                      width:100%;
                       height:2rem;
                       background:#ccc;
                        line-height:2rem;
                       button{
                           background:#fff;
                          padding:0 0.5rem;
                           height:1.5rem;
                           margin:0 0.2rem;
                       }
                    }
                }
                .echartsTwo{
                    width:100%;
                    height:20rem;
                    border-bottom:1px solid #ccc;
                    margin-top:2rem;
                    .echartsImgT{
                       width:100%;
                       height:9rem;
                    }
                    .echartsT{
                      width:100%;
                       height:2rem;
                       background:#ccc;
                        line-height:2rem;
                       button{
                           background:#fff;
                          padding:0 0.5rem;
                           height:1.5rem;
                           margin:0 0.2rem;
                       }
                    }
                }
            }
        }
    }
    
</style>