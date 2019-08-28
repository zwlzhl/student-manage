<template>
  <div class="home">
    <header>重点学生日周考成绩录入管理系统</header>
    <div class="login">
      <p class="name">网站工程</p>
      <div class="tit">
        <span :class="flag ===1 ?'active' : ''" @click="logind">登入</span>
        <span @click="registere" :class="flag ===2 ?'active' : ''">註册</span>
      </div>
      <input type="text" placeholder="牛牛虎/电话" />
      <input type="password" placeholder="输入密码" />
      <div class="check">
        <input type="checkbox" />
        <span>两周内自动登入</span>
      </div>
      <button v-if="flag === 1">登入</button>
      <button v-if="flag === 2">注册</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default Vue.extend({
  name: "home",
  data() {
    return {
      flag: 1
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    registere() {
      this.flag = 2
    },
    logind() {
      this.flag = 1
    }
  }
});
</script>

<style scoped lang="scss">
@media screen and (max-width: 376px) {
  .home {
    width: 100%;
    height: 100%;
    header {
      background: red;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      color: white;
      // background: #3f51b5;
    }
  }
}
.home {
  width: 100%;
  height: 100%;
  header {
    font-size: 20px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    color: white;
    background: #3f51b5;
  }
}
.login {
  width: 280px;
  height: 250px;
  position: fixed;
  left: 50%;
  top: 47%;
  z-index: 11;
  margin: -125px 0 0 -140px;
  border: 1px solid #ccc;
  > input {
    width: 80%;
    height: 35px;
    margin-top: 10px;
    border: 1px solid #ccc;
    font-size: 11px;
    text-indent: 7px;
    color: rgb(241, 235, 235);
  }
}
.name {
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: black;
}
.tit {
  width: 100%;
  height: 40px;
  line-height: 40px;
  span {
    display: inline-block;
    font-size: 12px;
    color: #777;
    width: 40px;
    text-align: center;
    height: 30px;
    border-bottom: 1px solid #999;
  }
  .active {
    color: #3f51b5;
    border-bottom: 2px solid #3f51b5 !important;
  }
}
.check {
  width: 100%;
  height: 40px;
  position: relative;
  > input {
    position: absolute;
    left: 28px;
    width: 15px;
    height: 15px;
    margin-top: 12px;
  }
  > span {
    line-height: 40px;
    margin-left: -85px;
    font-size: 12px;
    color: #333;
  }
}
button{
  width: 80%;
  border-radius: 3px;
  background: #364bc4;
  border:none;
  height: 30px;
  line-height: 30px;
  color: white;
}
</style>