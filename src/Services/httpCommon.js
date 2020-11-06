import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  async (config) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      config.headers.Authorization = "Bearer " + user.accessToken;
    }
    return config;
  },
  (e) => {
    return Promise.reject(e);
  }
);

export default api;
