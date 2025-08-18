import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://workintech-fe-ecommerce.onrender.com",
  headers: { "Content-Type": "application/json" },
});

export const setAuthToken = (token) => {
  if (token) axiosInstance.defaults.headers.common.Authorization = token;
  else delete axiosInstance.defaults.headers.common.Authorization;
};

export default axiosInstance;
