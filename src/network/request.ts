import axios from "axios";

const instance = axios.create({
  baseURL: "https://lianghj.top:3000",
  // baseURL: "https://163-music-api-eight.vercel.app/",
  timeout: 30000,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截器

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
