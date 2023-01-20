import authServices from "@/services/authServices";
export default {
  async isAuth() {
    try {
      const isLogin = await authServices.userCheck();
      return isLogin.data?.status;
    } catch (error) {
      console.error({ err: error.toString() });
      return false;
    }
  },
};
