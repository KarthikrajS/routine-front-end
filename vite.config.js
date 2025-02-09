import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss'
import {visualizer} from 'rollup-plugin-visualizer';

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'date-fns'], // Separate common libraries into a vendor chunk
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Increase limit to 1000 kB if needed
  },
  plugins: [visualizer({
    filename: './stats.html',
    open: true,
  }), react()],
  base: "/routine-front-end",
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
