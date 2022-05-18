import axios from "axios";
const baseURL = `${process.env.REACT_APP_API_BASE_URL}`;
export const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: { "Access-Control-Allow-Origin": "*" },
});

export const authAxiosInstance = axios.create({
  baseURL: baseURL || process.env.BASE_URL_LOCAL_HOST,
  headers: { "Access-Control-Allow-Origin": "*" },
});

authAxiosInstance.interceptors.request.use(
  async (config) => {
    config.headers["x-access-token"] = "token";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
