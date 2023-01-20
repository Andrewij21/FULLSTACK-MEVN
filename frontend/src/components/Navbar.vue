<template>
  <div class="navbar">
    <nav>
      <router-link v-show="!isLogin" to="/login">Sign In</router-link>
      <router-link v-show="!isLogin" to="/register">Sign Up</router-link>
      <button v-show="isLogin" @click="logout">Logout</button>
    </nav>
  </div>
</template>

<script>
import auth from "@/services/authServices.js";
export default {
  name: "HelloWorld",
  watch: {
    isLogin(a) {
      console.log("is Login", a);
    },
  },
  mounted() {
    console.log(this.isLogin);
  },
  methods: {
    logout() {
      auth
        .logOut()
        .then((val) => {
          this.$store.dispatch("SET_LOGIN", false);
          this.$router.push({ path: "/login" });
        })
        .catch((e) => {
          console.error({ e });
        });
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.auth.login;
    },
  },
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
  justify-content: end;
}
nav a,
button {
  font-size: 16px;
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* nav a:hover {
  border: 2px solid rgb(17, 77, 24); 
  background-color: rgb(17, 77, 24);
   box-shadow: 0 0 10px #12854c;
} */
.navbar nav a.router-link-exact-active {
  /* background-color: rgb(17, 77, 24); */
  /* border: 2px solid rgb(15, 255, 43); */
  color: #00ff80;
}
</style>
