import { glob } from "astro/loaders";
import { defineCollection, z, reference } from "astro:content";

const movie = defineCollection({
  loader: glob({ base: "./src/content/movies", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    vid: z.string(),
    title: z.string(),
    name: z.string(),
    slug: z.string(),
    thumbnail: z.string(),
    language: z.string(),
    publishedAt: z.coerce.date(),
    related: z.array(reference("movie")),
  }),
});

export const collections = { movie };
