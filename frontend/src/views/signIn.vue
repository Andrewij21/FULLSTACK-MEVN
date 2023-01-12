<template>
  <div class="container">
    <form>
      <h1>Login</h1>
      <label>Email</label>
      <input type="text" required />
      <label>Password</label>
      <input type="password" required />
      <input type="submit" class="button" value="Login" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  components: {},
};
</script>
<style scoped>
.container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px 20px;
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
}
.container .button:hover {
  color: #00ff7f;
}
</style>>
