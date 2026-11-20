import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 博客文章集合：文章放在 src/content/blog/ 下，Markdown 格式
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
