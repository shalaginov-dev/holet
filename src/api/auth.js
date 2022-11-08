import httpClient from "./httpClient.js";
import axios from "axios";
import store from '../store';
import { doRegister } from "src/store/auth/actions.js";

// const store = useStore(); 
const url = 'auth'

export const authApi = {
  
  doLogin(formData) {
    try {
      return httpClient.post(`${url}/login`, {
        email: formData.email,
        password: formData.password
      }).then(response => {
        return response
      })
    } catch (err) {
      console.log(err)
    }
  },

  // doRegister(formData) {
  //   try {
  //     return httpClient.post(`${url}/register`, {
  //       name: formData.email,
  //       email: formData.email,
  //       password: formData.password,
  //       password_confirmation: formData.confirmPassword,
  //       user_name: formData.name,
  //       user_lastname: formData.lastName,
  //       // image: formData.image
  //     }).then(response => {
  //       return response
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  doRegister(data) {
    const formData = new FormData();
    formData.append("email", data.email)
    formData.append("name", data.email)
    formData.append("password", data.password)
    formData.append("password_confirmation", data.confirmPassword)
    formData.append("user_name", data.user_name)
    formData.append("user_lastname", data.lastName)
    formData.append("image", data.image)
    console.log(data.image)
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