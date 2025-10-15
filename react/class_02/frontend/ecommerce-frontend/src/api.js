import axios from "axios";

const API = axios.create({
  baseURL: "https://your-vercel-backend-url.vercel.app/api", // change later
});

export default API;
