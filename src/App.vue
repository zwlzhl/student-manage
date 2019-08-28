<template>
  <div id="app">
    <ul class="ul">
      <li>
        <p>主页</p>
        <router-link to="/">登陆与注册</router-link>
      </li>
      <li>
        <p>可视化展示</p>
        <p>所有成绩</p>
        <!-- <router-link to='/allGrades'>所有成绩</router-link> -->
      </li>
      <li>
        <router-link to="/chart">院长视角</router-link>
      </li>
      <li>
        <router-link to="/chares">charts</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: none;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.ul {
  width: 200px;
  height: 300px;
  position: fixed;
  right: 0;
  top: 30%;
  color: #ccc;
  li {
    line-height: 50px;
    a {
      color: #ccc;
    }
@media screen and (max-width: 768px) {
// #app{
//       width:100%;
//       height:100%;
//       position:relative;
//        #nav{
//       z-index:99;
//       background:#ccc;
//       position:absolute;
//       right:0;
//       top:0;
//       width:200px;
//       height:100%;
//       border:1px solid #ccc;
//       text-align:center;
//       li{
//         padding-top:20px;
//       }
//     }

//     }
}
@media screen and (min-width: 768px) and (max-width: 1200px){
  // #app{
  //     width:100%;
  //     height:100%;
  //     position:relative;
  //      #nav{
  //     z-index:99;
  //     background:#ccc;
  //     position:absolute;
  //     right:0;
  //     top:0;
  //     width:200px;
  //     height:100%;
  //     border:1px solid #ccc;
  //     text-align:center;
  //     li{
  //       padding-top:20px;
  //     }
  //   }

  //   }
}
  }
}
   
</style>