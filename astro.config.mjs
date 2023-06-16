import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";
import mdx from "@astrojs/mdx";


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  adapter: cloudflare(),
  output: 'hybrid'
});