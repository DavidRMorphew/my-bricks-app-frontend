import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig((env) => ({
  base: "/",
  plugins: [react(), env.mode !== "test" && eslint()],
}));
