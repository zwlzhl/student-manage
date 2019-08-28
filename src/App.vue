<template>
  <div id="app">
    <ul class="home-ul">
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
.home-ul {
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
  }
}
</style>
