/* This is the Vite configuration file for the ChatGPT Clone application. 
It sets up the necessary plugins and configurations for building and running the React application using Vite as the development server and build tool. - 2026-04. */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
