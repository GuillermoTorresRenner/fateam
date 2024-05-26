import axios from "axios";

export default api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
  headers: {
    "Content-type": "application/json",
  },
});
