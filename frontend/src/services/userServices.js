import api from "@/api";

export default {
  users() {
    return api.get("user");
  },
  create(data) {
    return api.post("user", { ...data });
  },
};
