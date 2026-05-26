import axios from "axios";
import { ENV } from "../config/env";

const axiosClient = axios.create({
  baseURL: ENV.API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosClient;