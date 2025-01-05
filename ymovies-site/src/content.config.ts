import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const movie = defineCollection({
  loader: glob({ base: "./src/content/movies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { movie };
