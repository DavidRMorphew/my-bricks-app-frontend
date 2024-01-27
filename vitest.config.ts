/// <reference types="vitest" />
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig((configEnv) =>
  mergeConfig(
    viteConfig(configEnv),
    defineConfig({
      test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.ts",
        css: true,
        reporters: ["verbose"],
        coverage: {
          reporter: ["text", "json", "html"],
          include: ["src/**/*"],
          exclude: [
            "src/constants/",
            "**/**/types.ts",
            "src/mocks/",
            "src/vite-env.d.ts",
            "src/reportWebVitals.js",
            "src/utils/test-utils.tsx",
          ],
        },
      },
    })
  )
);
