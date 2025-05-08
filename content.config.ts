import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
    collections: {
        resources: defineCollection({
            type: "page",
            source: "resources/**/*.md",
            schema: z.object({
                featured: z.boolean(),
                category: z.string(),
                date: z.coerce.date(),
            }),
        }),
        pages: defineCollection({
            type: "page",
            source: "pages/**/*.md",
        }),
        config: defineCollection({
            type: "data",
            source: "config/**/*.{json,yaml,yml}",
            schema: z.object({
                key: z.string().optional(),
                config: z.any(),
            }),
        }),
        content: defineCollection(
            asSitemapCollection({
                type: "page",
                source: "resources/**/*.md",
            }),
        ),
    },
});
