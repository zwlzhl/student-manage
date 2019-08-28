<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
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
    
   
</style>