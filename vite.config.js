import react from "@vitejs/plugin-react-swc";
import fs from "fs";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync("./localhost-key.pem"),
      cert: fs.readFileSync("./localhost.pem"),
    },
    host: "localhost",
    port: 5173,
  },
});
