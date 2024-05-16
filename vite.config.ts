import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": "/src",
      "@constants": "/src/constants",
      "@components": "/src/components",
      "@data": "/src/data",
      "@pages": "/src/pages",
      "@scss": "/scss",
      "@hooks": "/src/hooks",
      "@assets": "/src/assets",
      "@static": "/src/static",
    },
  },
});
