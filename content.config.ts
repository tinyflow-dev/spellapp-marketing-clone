import { defineContentConfig, defineCollection, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
    collections: {
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
