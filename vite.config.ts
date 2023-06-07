import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import ckeditor5 from "@ckeditor/vite-plugin-ckeditor5";

import { createRequire } from 'node:module';
const require = createRequire( import.meta.url );

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ckeditor5({ theme: require.resolve("@ckeditor/ckeditor5-theme-lark") })],
  resolve: {
    alias: { "@": path.resolve(__dirname, "src") },
  },
});
