import axios from "axios";
import * as firebase from "firebase";

const http = axios.create({
  baseURL: "http://localhost:5001/api",
  headers: {
    "Content-type": "application/json",
  }
});

http.interceptors.request.use(
  async config => {
    const token = await firebase.auth().currentUser.getIdToken();
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      delete http.defaults.headers.common.Authorization;
    }
    return config;
  },

  error => Promise.reject(error)
);

export default http;