import httpClient from "./httpClient.js";
import axios from "axios";
// import store from '../store/store';
// import { doRegister } from "src/store/auth/actions.js";

// const store = useStore(); 
const url = ''

export const authApi = {

  doLogin(formData) {
    try {
      return httpClient.post(`${url}/login`, {
        email: formData.email,
        password: formData.password
      }).then(response => {
        let token = response.data.token;
        localStorage.setItem('token', token)
        console.log(token);
        return response
      })
    } catch (err) {
      console.log(err)
    }
  },

  doLogout(){
    localStorage.removeItem('token')
  },

  doRegister(data) {
    const formData = new FormData();
    formData.append("name", data.email)
    formData.append("email", data.email)
    formData.append("password", data.password)
    try {
      return httpClient({
        method: "post",
        url: `${url}/register`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(response => {
        return response
      })
    } catch (err) {
      console.log(err)
    }
  }

}