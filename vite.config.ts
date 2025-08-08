import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: 'esbuild',
  },
  plugins: [
    react(),
    tailwindcss(),
    visualizer()
  ],
})
