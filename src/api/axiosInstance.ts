import axios from "axios";
import type { AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "http://localhost:5000/api/users",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});
