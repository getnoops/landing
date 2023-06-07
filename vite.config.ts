import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import remarkGfm from 'remark-gfm';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: parseInt(process.env.PORT || "3000"),
  },
  plugins: [
    { 
      enforce: "pre", 
      ...mdx({
          remarkPlugins: [remarkGfm]
      })
    },
    react(),
  ],
});
