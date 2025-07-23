import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'public/popup.html')
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  },
  root: '.',
  publicDir: 'public',
});
