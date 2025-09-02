import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// ⚠️ ĐỔI theo đúng tên repo GitHub của bạn
const REPO_NAME = "ai-learner-folio";

export default defineConfig(({ mode }) => ({
  // Base cần cho GitHub Pages: https://<user>.github.io/<repo>/
  base: `/${REPO_NAME}/`,

  server: {
    host: "::",   // cho phép LAN; giữ nguyên theo bạn
    port: 3000,   // dev server 3000
  },
  // Preview bản build (npm run preview) – tùy chọn
  preview: {
    host: true,
    port: 3000,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
