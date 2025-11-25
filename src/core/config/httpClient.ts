import axios from "axios";
import { BASE_API_URL } from "./endpoints";

const http = axios.create({
  baseURL: BASE_API_URL,
  auth: {
    username: "student",
    password: "dvfu",
  },
  withCredentials: true,
});

export default http;