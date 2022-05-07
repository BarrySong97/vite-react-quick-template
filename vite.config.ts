import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno, presetMini, presetWind } from 'unocss';
import react from '@vitejs/plugin-react';
import Pages from 'vite-plugin-pages';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    Unocss({
      presets: [presetUno(), presetWind(), presetAttributify(), presetMini()]
    })
  ]
});
