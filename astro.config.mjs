import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import partytown from '@astrojs/partytown';
import tailwind from "@astrojs/tailwind";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Enable React to support React JSX components.
  site: 'https://www.getnoops.com',
  integrations: [
    react(), 
    tailwind(),
    sitemap(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),
  ],
});
