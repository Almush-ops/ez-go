import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Optional - can use filename as slug
    description: z.string(),
    date: z.string(),
    category: z.enum(['guides', 'uses', 'technical', 'info', 'comparisons']),
    image: z.string().optional(),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).optional(),
  }),
});

const modelsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    category: z.enum(['electric', 'gas', 'cargo', 'industrial']),
    seats: z.number(),
    power: z.enum(['lithium', 'ac-48v', 'gas']),
    badge: z.string().optional(),
    image: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
  models: modelsCollection,
};
