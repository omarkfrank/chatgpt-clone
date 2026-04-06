// chatApi.js - This file defines the API functions for interacting with the backend server. It uses the Axios instance created in axios.js to send requests to the backend. The sendMessage function takes a message as input, sends it to the backend, and returns the response from the server, which is expected to be the reply from the ChatGPT model. - 2026-04.

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Backend API URL
});

export const sendMessage = async (message) => {
  const response = await api.post("/chat", { message });
  return response.data.repaly;
};
