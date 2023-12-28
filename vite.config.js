import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "./src", // Utilisez des chemins relatifs plutôt que des chemins absolus
      assets: "./src/assets", // Utilisez des chemins relatifs plutôt que des chemins absolus
    },
  },

  server: {
    proxy: {
      // Configurations du proxy si nécessaire
    },
    // Ajoutez la configuration pour la gestion du routage SPA
    hmr: {
      overlay: false,
    },
    middlewareMode: true,
  },
});
