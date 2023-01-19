import api from "@/api";

export default {
  Login(data) {
    return api.post("user/login", { ...data });
  },
  refreshToken() {
    return api.get("user/refresh");
  },
  userCheck() {
    return api.get("user/check");
  },
};
