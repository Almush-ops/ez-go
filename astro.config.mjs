import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ez-go.co.il',
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        !page.includes('/thank-you') &&
        !page.includes('/accessibility') &&
        !page.includes('/privacy') &&
        !page.includes('/terms'),
    }),
  ],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ezgo.txtsv.com',
      },
    ],
  },
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
});
