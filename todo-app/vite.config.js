import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/AppDev_-_TodoList/",
  plugins: [react()],
});
