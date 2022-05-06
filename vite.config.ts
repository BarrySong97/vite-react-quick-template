import { defineConfig } from 'vite';
import Unocss from 'unocss/vite';
import { presetAttributify, presetUno, presetMini, presetWind } from 'unocss';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetWind(), presetAttributify()]
    })
  ]
});
