import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  preview: {
    host: true, // équivalent à 0.0.0.0
    port: process.env.PORT || 4173,
    allowedHosts: ['sysml-designer-lite.onrender.com']
  }
});
