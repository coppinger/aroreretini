import { defineCollection, z } from "astro:content";

const essays = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    // Transform string to Date object
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    updatedDate: z
      .string()
      .optional()
      .transform((str) => (str ? new Date(str) : undefined)),
    heroImage: z.string().optional(),
    tags: z.string().array().optional(),
    content: z.string().optional(),
  }),
});

export const collections = { essays };
