import { defineCollection, z } from "astro:content";

// z -> zod schema

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string(),
    readtime: z.string(),
    date: z.date(),
    description: z.string(),
    tags: z.array(z.string()),
    buy: z.object({
      colombia: z.string().url(),
      usa: z.string().url(),
    }),
  }),
});

export const collections = { books };
