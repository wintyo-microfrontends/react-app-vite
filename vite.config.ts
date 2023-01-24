import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

const SUB_DIRECTORY_NAME = "react-app-vite";
/** ライブラリ出力するか */
const isLibMode = process.env.LIB_MODE === "true";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  base: `/${SUB_DIRECTORY_NAME}/`,
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "development"
    ),
  },
  build: isLibMode
    ? {
        lib: {
          formats: ["es"],
          entry: path.join(__dirname, "src/index.tsx"),
          fileName: (format) => `index.${format}.js`,
        },
        outDir: path.join(__dirname, `dist-lib/${SUB_DIRECTORY_NAME}/lib`),
        // libの場合だとこの設定は無意味っぽい
        // https://vitejs.dev/config/build-options.html#build-assetsinlinelimit
        // assetsInlineLimit: 0,
        manifest: true,
        sourcemap: process.env.NODE_ENV !== "production" ? "inline" : false,
        minify: process.env.NODE_ENV === "production",
      }
    : undefined,
});
