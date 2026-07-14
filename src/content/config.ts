
import { defineCollection, z } from 'astro:content';

const dreamSymbolsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title:    z.string(),
    category: z.string(),
    symbol:   z.string(),
    summary:  z.string(),
  }),
});

export const collections = {
  'dream-symbols': dreamSymbolsCollection,
};


