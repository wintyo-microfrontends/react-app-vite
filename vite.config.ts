import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  base: "/react-app/",
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  build: {
    lib: {
      formats: ["es"],
      entry: path.join(__dirname, "src/index.tsx"),
      fileName: (format) => `index.${format}.js`,
    },
  },
});
