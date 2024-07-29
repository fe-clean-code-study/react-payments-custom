import { defineConfig as defineTestConfig, mergeConfig } from "vitest/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default mergeConfig(
  defineConfig({
    plugins: [react(), vanillaExtractPlugin()],
  }),
  defineTestConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: "./src/setupTests.ts",
      coverage: {
        reportsDirectory: "./.coverage",
        reporter: ["lcov", "json", "json-summary"],
      },
    },
  })
);
