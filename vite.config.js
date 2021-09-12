import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { ViteFaviconsPlugin } from "vite-plugin-favicon";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), ViteFaviconsPlugin()],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  },
});
