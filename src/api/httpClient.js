import axios from "axios";

const config = {
  baseURL: "https://crmd.crookedweb.site/api/"
};

const httpClient = axios.create(config);
const token = JSON.parse(localStorage.getItem('token'))

httpClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${token}`
  return config
});


export default httpClient