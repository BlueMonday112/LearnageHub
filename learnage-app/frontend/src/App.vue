<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background-color: #000000;
  color: #00ffcc;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}

#app {
  text-align: center;
  width: 100%;
}
</style>
