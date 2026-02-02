import { defineCollection, z } from 'astro:content';

const recipes = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        image: z.string().optional(),
        prepTime: z.string().optional(),
        servings: z.number().optional(),
        category: z.string().default('Geral'),
        tags: z.array(z.string()).default([]),
    }),
});

export const collections = {
    'recipes': recipes,
};
