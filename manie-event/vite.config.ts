import vue from '@vitejs/plugin-vue';
import path from 'path';
import process from 'process';
import { defineConfig } from 'vite';


// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
    },
  },
})
