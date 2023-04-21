<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>电流互感器设计软件</h1>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/Transformer.vue";

export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
