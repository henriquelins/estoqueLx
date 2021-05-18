import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:3333"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export function  logar(loginUser){
  return axios.post( 'http://localhost:8081/sessions', {loginUser})
  //return axios.post( `${baseURL}/usuarios`, {loginUser})
}

export default api;