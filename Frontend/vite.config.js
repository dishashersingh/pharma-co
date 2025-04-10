import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    proxy: {
      "/api": {
        target: "https://pharma-co-backend.onrender.com", 
        changeOrigin: true,
        secure: false,
      },
      "/vpi": {  
        target: "https://pharma-co-ml-s.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
