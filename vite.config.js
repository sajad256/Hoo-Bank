import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // makes the dev server accessible on your local network
    port: 3000, // optional, default is 5173
  },
});
