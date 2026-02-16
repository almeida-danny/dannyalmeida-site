import { defineCollection, z } from 'astro:content';

const essaysCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  essays: essaysCollection,
};