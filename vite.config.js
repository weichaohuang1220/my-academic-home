import { defineConfig } from 'vite';
import { resolve } from 'path';


const REPO_NAME = '/my-academic-home/'; 

export default defineConfig({
  base: REPO_NAME,
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        projects: resolve(__dirname, 'projects.html')
      }
    }
  },
  server: {
    open: true
  }
});