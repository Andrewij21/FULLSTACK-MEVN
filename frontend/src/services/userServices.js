import api from "@/api";

export default {
  users() {
    return api.get("user");
  },
};
