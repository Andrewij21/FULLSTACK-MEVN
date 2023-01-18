<template>
  <div class="navbar">
    <nav>
      <router-link to="/login">Sign In</router-link>
      <router-link to="/register">Sign Up</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-top: 14px;
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  width: 100%;
  justify-content: start;
}
nav a {
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  padding: 10px;
  border-radius: 10px;
}
/* nav a:hover {
  border: 2px solid rgb(17, 77, 24); 
  background-color: rgb(17, 77, 24);
   box-shadow: 0 0 10px #12854c;
} */
.navbar nav a.router-link-exact-active {
  /* background-color: rgb(17, 77, 24); */
  /* border: 2px solid rgb(15, 255, 43); */
  color: #12854c;
}
</style>
