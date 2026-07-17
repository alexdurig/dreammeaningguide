import { defineCollection, z } from 'astro:content';

// Guides collection
const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

// Symbols collection
const symbols = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    symbol: z.string().optional(),
    pubDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// Pages collection (NEW)
const pages = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.string().optional(),
    tags: z.array(z.string()).optional(),
    canonical: z.string().optional(),
  }),
});

export const collections = {
  guides,
  symbols,
  pages,
};


