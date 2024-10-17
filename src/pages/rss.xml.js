import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";

export async function get(context) {
  const essays = await getCollection("essays");
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: essays.map((essay) => ({
      ...essay.data,
      link: `/essays/${essay.slug}/`,
    })),
  });
}
