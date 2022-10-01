import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";
import eslintPlugin from "vite-plugin-eslint";

export default defineConfig({
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      public: resolve(__dirname, "public"),
    },
  },
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    eslintPlugin(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        silent: resolve(__dirname, "silent-renew.html"),
      },
    },
  },
});
