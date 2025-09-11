// vitest.config.ts
import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default defineConfig(() =>
  mergeConfig(viteConfig, {
    test: {
      globals: true, // use global test functions: describe, it, expect
      environment: "jsdom", // simulate browser environment
      setupFiles: "./src/setupTests.ts", // optional
      coverage: {
        provider: "istanbul", // required for coverage
        reporter: ["text", "lcov"], // generates lcov.info
        reportsDirectory: "coverage",
      },
    },
  })
);
