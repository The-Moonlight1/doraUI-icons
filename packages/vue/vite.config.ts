// ./vite.config.ts
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import svgLoader from 'vite-svg-loader';

export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      vue(),
      svgLoader(),
    ],
  };
});
