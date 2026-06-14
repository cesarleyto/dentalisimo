import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // ... el resto de tu configuración
  site: 'https://dentalisimo.com',

  integrations: [sitemap()]
});