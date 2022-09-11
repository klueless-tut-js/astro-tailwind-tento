import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [svelte(), tailwind({
    config: {
      applyBaseStyles: false
    }
  })],
  adapter: netlify()
});