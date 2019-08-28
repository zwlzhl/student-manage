<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/home" tag="li">Home</router-link> 
      <router-link to="/about" tag="li">About</router-link>
      <router-link to="/" tag="li">Show</router-link> -->
    </div>
    <router-view/>
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