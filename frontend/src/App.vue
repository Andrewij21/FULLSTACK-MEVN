<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: { Navbar },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  font-family: "Open sans", sans-serif;
  outline: none;
  box-sizing: border-box;
}
body {
  height: 100vh;
  background-image: url("./assets/forrest.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
