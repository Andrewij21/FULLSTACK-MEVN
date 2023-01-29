<template>
  <div class="container">
    <h1 style="text-align: center; color: aliceblue">Todos</h1>
    <div class="actions">
      <button>Add project</button>
    </div>
    <div class="projects" style="color: white">
      <div class="project">
        <h4>Cretae CRUD app</h4>
      </div>
      <div class="project">
        <h4>Cretae Api</h4>
      </div>
    </div>
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
  
<style scoped>
.container {
  /* background-color: red; */
  margin-top: 5%;
}
.actions {
  /* background-color: aqua; */
  padding-bottom: 3px;
  margin: 0 5px;
}
.projects {
  background-color: rgb(0, 0, 0, 0.4);
  padding: 5px;
  margin: 0 5px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}
.project {
  /* background-color: gray; */
  color: #fff;
  padding: 8px;
  margin: 3px 5px;
  width: 100%;
  border-radius: 10px;
  border: 2px solid rgb(255, 255, 255);
}
</style>