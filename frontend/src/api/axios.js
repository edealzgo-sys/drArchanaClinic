import axios from "axios";

const api = axios.create({
  baseURL: "/api", // 👈 REQUIRED for proxy
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
