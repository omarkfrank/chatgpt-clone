// src/api/axios.js - This file sets up an Axios instance with a base URL for making API requests to the backend server. By creating an instance, we can easily manage and reuse the configuration for all our API calls throughout the application. - 2026-04
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // backend
});

export default api;
