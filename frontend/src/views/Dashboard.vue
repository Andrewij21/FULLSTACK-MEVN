<template>
  <div class="container">
    <h1 style="text-align: center; color: aliceblue">Dashboard</h1>
    <router-view />
  </div>
</template>

<script>
import userServices from "@/services/userServices";
export default {
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      userServices.users().then((user, err) => {
        if (err) return console.error(err.toString());
        console.log({ user });
      });
    },
  },
};
</script>

<style>
</style>