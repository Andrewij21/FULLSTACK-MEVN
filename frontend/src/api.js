import axios from "axios";
import store from "@/store/index.js";
import authServices from "./services/authServices";
import router from "./router";

const instence = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});

instence.interceptors.request.use(
  async function (config) {
    const token = store.state.auth.token;
    // if(!token && config.url == "user/refresh"){

    // }else if(!token){
    //   const refresh = await authServices.refreshToken();
    //   console.log({ refresh });
    //   return config;
    // }
    // if (!token) {
    //   console.info("GADA TOKENNNN");

    // }
    config.headers.Authorization = `Bearer ${token || ""}`;
    console.log({ req: "request", config });
    return config;
  },
  function (error) {
    return error;
  }
);
instence.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    const originalRequest = error.config;
    console.log({ res: "res", error });

    // CEK USER
    if (originalRequest.url == "user/check") {
      return error;
    }
    // CEK REFRESH TOKEN STATUS
    if (
      (error.response.status == 403 || error.response.status == 401) &&
      originalRequest.url === "user/refresh"
    ) {
      console.log("ExpiredToken");
      // localStorage.removeItem("isAuth");
      store.dispatch("SET_LOGIN", false);
      router.push({ path: "/login" });
      return error;
    }

    // CEK ACCESS TOKEN
    if (error.response.status == 401 || error.response.status == 403) {
      return authServices.refreshToken().then((val) => {
        console.log({ refresh: val });
        if (val.status == 200) {
          store.dispatch("SET_TOKEN", val.data.accessToken);
          originalRequest.headers = {
            Authorization: `Bearer ${val.data.accessToken}`,
          };
          return axios.request(originalRequest);
        }
      });
    }
    return Promise.reject(error);
  }
);

export default instence;
