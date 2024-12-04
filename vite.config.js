import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Base URL para o projeto
  plugins: [react()],
  build: {
    outDir: "dist", // Diretório de saída para os arquivos construídos
  },
});