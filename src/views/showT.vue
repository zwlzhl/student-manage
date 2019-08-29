<template>
<div class="all">
   <div class="head">
       <p>XX学生日周考试成绩统计</p>
   </div>
   <div class="section">
       <div class="secbox">
         <div class="secboxTop">
             <div>
              <span>讲师：XXX</span>&nbsp;&nbsp;&nbsp;
             <span>学生：XXX</span>
             </div>
           
             <div>
                 <select name="" id="opt">
                     <option>11111</option>
                     <option>222</option>
                     <option>33333</option>
                 </select>
             </div>
         </div>
         <div class="tdbox">
             <tr>
                 <td>序号</td>
                 <td>日期</td>
                 <td>理论</td>
                 <td>技能</td>
                 <td class="fx">分析和解决</td>
                 <td class="fx">是否周考</td>
                 <td>操作</td>
             </tr>
             <tr>
                 <td>1</td>
                 <td>8-2</td>
                 <td>80</td>
                 <td>90</td>
                 <td class="fx">点击</td>
                 <td>是</td>
                 <td>
                     <button>编辑</button>
                     <button>删除</button>
                 </td>
             </tr>
             <tr>
                 <td>1</td>
                 <td>8-2</td>
                 <td>80</td>
                 <td>90</td>
                 <td class="fx">点击</td>
                 <td>是</td>
                 <td>
                     <button>编辑</button>
                     <button>删除</button>
                 </td>
             </tr>
             <tr>
                 <td>1</td>
                 <td>8-2</td>
                 <td>80</td>
                 <td>90</td>
                 <td class="fx">点击斤</td>
                 <td>是</td>
                 <td class="zk">
                     <button>编辑</button>
                     <button>删除</button>
                 </td>
             </tr>
         </div>
       </div>
       <div class="editbox">
           <div class="editcontent">
               <p>编辑内容</p>
               <div>理论：<input type="text" placeholder="0-100之间数字"></div>
               <div>技能：<input type="text" placeholder="0-100之间数字"></div>
               <div>
                   <select name="" id="">
                       <option>日考</option>
                        <option>日考</option>
                         <option>日考</option>
                          <option>日考</option>
                           <option>日考</option>

                   </select>
                   <select name="" id="">
                       <option>周考</option>
                        <option>周考</option>
                         <option>周考</option>
                          <option>周考</option>
                           <option>周考</option>
                           
                   </select>
               </div>
               <div class="text">
                   分析解决方案: <textarea name="" id="" cols="15" rows="4"></textarea>
               </div>
               <div>
                   <button class="sure">确定</button>
                   <button class="none">取消</button>
               </div>
           </div>
           <div class="editopt">
               <select name="" id="">
                   <option value="">快捷返回其他学生</option>
                   <option value="">学生1</option>
                   <option value="">学生2</option>
                    <option value="">学生3</option>
                    <option value="">学生4</option>

               </select>
           </div>
       </div>
       <div class="btnSure">
           <p>您确定删除吗</p>
           <div>
               <button class="none">取消</button>
               <button class="sure">确定</button>
           </div>
       </div>
   </div>
</div>
</template>
<style lang="scss">
*{
    margin:0;padding:0;
    list-style:none;
}
html,body{
    width:100%;
    height:100%;
}
/* pc */
@media screen and(min-width: 667px) and (max-width: 1920px){
.all{
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    .head{
    width:100%;
    height:45px;
    background:#00f;
    p{
        text-align:center;
        color:#fff;
        line-height:45px;
    }
    }
    .section{
        flex:1;
        // background:#ccc;
        .secbox{
            width:80%;
            border:1px solid #ccc;
            margin:10px auto;
            .secboxTop{
                display:flex;
                height:60px;
                border:1px solid #ccc;
                div{
                    flex:1;
                    line-height:60px;
                }
                #opt{
                    width:180px;
                    height:30px;
                }
            }
            .tdbox{
                width:80%;
                tr{
                    height:50px;
                    display:flex;
                    td{
                        flex:1;
                    }
                    .fx{
                        flex:4;
                    }
                }
            }
        }
        .editbox{
            width:80%;
            display:flex;
            margin:0 auto;
            .editcontent{
                flex:1;
                width:300px;
                height:250px;
                border:1px solid #ccc;
                box-shadow:5px 5px 5px #ccc;
                p{
                    padding-left:-00px;
                }
                div{
                   margin-top:3px;
                    input{
                        height:30px;
                    }
                    .none{
                        width:40px;
                        height:30px;
                        border:1px solid #ccc;
                          background:#fff;
                        color:#000;
                        padding:0 5px;
                    }
                    .sure{
                        width:40px;
                        height:30px;
                        border:1px solid #ccc;
                        background:#00f;
                        color:#fff;
                        padding:0 5px;
                    }
                }

            }
            .editopt{
                 flex:1;
                border:1px solid #ccc;
                box-shadow:5px 5px 5px #ccc;
                select{
                    width:200px;
                    height:30px;
                    margin-top:30px;
                }
            }
        }
        .btnSure{   
            // width:80%;
            margin:20px 100px;
            width:300px;
            height:150px;
            border:1px solid #ccc;
            box-shadow:3px 3px 3px #ccc;
            p{
                font-size:18px;
                padding-top:50px;
            }
            div{
                height:50px;
                margin-top:10px;
                .none{
                        width:40px;
                        height:30px;
                        border:1px solid #ccc;
                        background:#fff;
                        color:#000;
                        padding:0 5px;
                    }
                    .sure{
                        width:40px;
                        height:30px;
                        border:1px solid #ccc;
                        background:#00f;
                        color:#fff;
                        padding:0 5px;
                    }
            }
        }
    }
}
}
/* 移动 */
@media screen and (max-width: 667px){
.all{
    width:100%;
    height:100%;
    .head{
    width:100%;
    height:2rem;
    background:#00f;
    p{
        text-align:center;
        color:#fff;
        line-height:2rem;
    }
    }
  .section{
        flex:1;
        font-size:0.2rem;
        // background:#ccc;
        .secbox{
            width:100%;
            border:1px solid #ccc;
            margin:0.2rem auto;
            .secboxTop{
                display:flex;
                height:1.2rem;
                border:1px solid #ccc;
                div{
                    flex:1;
                    line-height:1.2rem;
                }
                #opt{
                    width:3.6rem;
                    height:0.9rem;
                }
            }
            .tdbox{
                width:100%;
                tr{
                    height:1rem;
                    width:100%;
                    display:flex;
                    td{
                        flex:1;
                    }
                    .fx{
                        flex:2;
                    }
                    .zk{
                        // width:20px;
                        // flex:3;
                        display:flex;
                        button{
                            flex:1;
                             font-size:0.005rem;
                        }
                    }
                }
            }
        }
        .editbox{
            width:100%;
            display:flex;
            margin:0 auto;
            .editcontent{
                flex:1;
                height:9rem;
                border:1px solid #ccc;
                box-shadow:5px 5px 5px #ccc;
                div{
                    height:1.3rem;
                    display:flex;
                   margin-top:0.1rem;
                    input{
                        height:0.8rem;
                        width:7rem;
                    }
                    .none{
                        font-size:0.2rem;
                        width:2rem;
                        height:1rem;
                        border:1px solid #ccc;
                          background:#fff;
                        color:#000;
                        padding:0 0.1rem;
                    }
                    .sure{
                        font-size:0.2rem;
                        width:2rem;
                        height:1rem;
                        border:1px solid #ccc;
                        background:#00f;
                        color:#fff;
                        padding:0 0.1rem;
                    }
                }

            }
            .text{
                display:flex;
                font-size:0.3rem;
            }
            .editopt{
                 flex:1;
                border:1px solid #ccc;
                box-shadow:5px 5px 5px #ccc;
                
                select{
                    font-size:0.2rem;
                    width:6rem;
                    height:1.5rem;
                    margin-top:0.8rem;
                }
            }
        }
        .btnSure{   
            // width:80%;
            margin:1rem 2rem;
            width:8rem;
            height:5rem;
            border:1px solid #ccc;
            box-shadow:3px 3px 3px #ccc;
            p{
                font-size:0.5rem;
                padding-top:1rem;
            }
            div{
                height:1rem;
                margin-top:0.2rem;
               .none{
                        font-size:0.2rem;
                        width:2rem;
                        height:1rem;
                        border:1px solid #ccc;
                          background:#fff;
                        color:#000;
                        padding:0 0.1rem;
                    }
                    .sure{
                        font-size:0.2rem;
                        width:2rem;
                        height:1rem;
                        border:1px solid #ccc;
                        background:#00f;
                        color:#fff;
                        padding:0 0.1rem;
                    }
            }
        }
    }
}
}
</style>
