import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function GET(context) {
  const movies = await getCollection("movie");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: movies.map((movie) => ({
      ...movie.data,
      link: `/watch/${movie.id}/`,
    })),
  });
}
