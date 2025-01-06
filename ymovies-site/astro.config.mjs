// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import tailwind from "@astrojs/tailwind";
import rehypeExternalLinks from "rehype-external-links";

export default defineConfig({
  prefetch: {
    prefetchAll: true,
  },
  site: "https://ymovies.app",
  integrations: [mdx(), sitemap(), tailwind()],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  image: {
    domains: ["i.ytimg.com"],
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          content: { type: "text", value: " 🔗" },
        },
      ],
    ],
  },
});
