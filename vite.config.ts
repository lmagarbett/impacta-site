import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools()],
  base: "/impacta-site/",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          router: ["react-router-dom"],
          leaflet: ["leaflet", "react-leaflet", "@react-leaflet/core"],
          motion: ["framer-motion", "motion", "gsap"],
        },
      },
    },
  },
})
