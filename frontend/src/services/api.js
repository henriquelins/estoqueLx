import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

api.interceptors.request.use(async config => {
  
  const token = getToken();
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
  
});


export function doLogin(username, password){
  return api.get("/authenticate", {username, password})     
}

export function addUser(data){
  return api.post("/users/add", data)     
}

export function fetchProducts(){
  return api.get("/products/all")
}

export function updateBalanceProduct(id, amount) {
  return api.put("/products/updateAmount", {id, amount})
}

export function addProduct(data){
  return api.post("/products/add", data)     
}

export function editProduct(data){
  console.log(data.id)
  return api.put("/products/edit", data)     
}

export function deleteProduct(id){
  console.log(id)
  void api.delete("/products/delete", id)
}


export default api;
