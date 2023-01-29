<template>
  <div :class="[isLogin ? 'onNavbar' : '', 'navbar']">
    <nav>
      <router-link v-show="!isLogin" to="/login">Sign In</router-link>
      <router-link v-show="!isLogin" to="/register">Sign Up</router-link>
      <div class="content">
        <router-link v-show="isLogin" class="login" to="/dashboard"
          >My Project</router-link
        >
        <router-link v-show="isLogin" class="login" to="/dashboard/project"
          >Team Project</router-link
        >
      </div>
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
          console.error(e);
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
  position: relative;
  width: 100%;
}
.onNavbar {
  /* background: none; */
  background: rgb(0, 0, 0, 0.4);
}
nav {
  /* margin-top: 14px; */
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: end;
  padding: 5px;
}
nav a,
button {
  font-size: 1em;
  /* font-size: 16px; */
  letter-spacing: 2px;
  color: #fff;
  text-decoration: none;
  margin: 0 5px;
  padding: 10px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

nav .content {
  align-self: center;
  flex: 1;
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
