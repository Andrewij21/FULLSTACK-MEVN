<template>
  <div
    :class="[
      isHover ? 'safeContainer' : '',
      !errors.checkPassword ? 'errorContainer' : '',
      'container',
    ]"
  >
    <form @submit.prevent="handleSubmit">
      <h1>Register</h1>
      <label>Username</label>
      <input type="text" v-model="user.username" required />
      <label>Email</label>
      <input type="email" v-model="user.email" required />
      <p v-show="errors.isEmailExist">Email already exist !!!</p>
      <label>Password</label>
      <input
        type="password"
        v-model="user.password"
        @keydown.space.prevent
        required
      />
      <p v-show="!errors.checkPassword">Please insert password</p>
      <input
        type="submit"
        :class="[isHover ? 'buttonHover' : '', 'button']"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        :disabled="!errors.checkPassword"
        value="Login"
      />
    </form>
  </div>
</template>
<script>
import User from "@/services/userServices";
export default {
  name: "Register",
  name: "SignIn",
  components: {},
  data() {
    return {
      isHover: false,
      user: {
        email: null,
        password: null,
        username: null,
      },
      errors: {
        checkPassword: true,
        isEmailExist: false,
      },
    };
  },
  watch: {
    "user.password"(msg) {
      msg.split(" ").join("") == ""
        ? (this.errors.checkPassword = false)
        : (this.errors.checkPassword = true);
    },
  },
  methods: {
    handleSubmit() {
      if (!this.errors.checkPassword) {
        return;
      }
      User.create(this.user)
        .then((val) => {
          this.errors.isEmailExist = false;
          this.$router.push({ path: "/login" });
          console.log({ val });
        })
        .catch((err) => {
          this.errors.isEmailExist = true;
          console.log({ err });
        });
      console.log({ user: this.user });
    },
  },
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 20px;
  max-width: 450px;
  min-width: 290px;
  background-color: rgba(0, 0, 0, 0.4);
  /* background-color: #fff; */
  border-radius: 20px;
  box-shadow: 0 0 10px #fefefe;
}
.container h1 {
  text-transform: uppercase;
  text-align: left;
  color: #fff;
  margin-bottom: 30px;
}
.container label {
  color: #fff;
  display: inline-block;
  font-size: 0.8em;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: bold;
}

.container input {
  display: block;
  margin-bottom: 15px;
  padding: 8px 6px 6px 0;
  width: 100%;
  color: #fafafa;
  /* border-radius: 5px; */
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.8);
  font-size: 16px;
  background-color: transparent;
}
.container .button {
  padding: 10px 0;
  font-size: 18px;
  background-color: transparent;
  color: #fafafa;
  border: none;
  cursor: pointer;
}
.container .buttonHover {
  color: #00ff7f;
}
.safeContainer {
  box-shadow: 0 0 10px rgba(13, 255, 0, 0.728);
}
.errorContainer {
  box-shadow: 0 0 10px rgba(255, 9, 29, 0.982);
}
.container p {
  color: rgba(255, 9, 29, 0.982);
  font-weight: bold;
  font-size: 0.5;
  margin: 3px 0;
}
</style>