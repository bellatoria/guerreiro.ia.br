// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  outDir: 'dist',
  site: 'https://guerreiro.ia.br',
  vite: {
    plugins: [tailwindcss()]
  }
});

