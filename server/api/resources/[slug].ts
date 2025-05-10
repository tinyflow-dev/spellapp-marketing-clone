import Database from "better-sqlite3";
import { getTempDbPath } from "~/utils/database";

export default defineEventHandler(async (event) => {
    const { slug } = event.context.params as { slug: string };
    if (!slug) {
        throw createError({
            statusCode: 400,
            statusMessage: "Oops! The page you are looking for doesn't exist or has been removed",
        });
    }

    const dbPath = await getTempDbPath();
    const db = new Database(dbPath, { readonly: true, fileMustExist: true });

    try {
        const resource = db.prepare(`SELECT * FROM resources WHERE slug = ? LIMIT 1`).get(slug);

        if (!resource) {
            throw createError({
                statusCode: 404,
                statusMessage: `Blog with slug "${slug}" not found`,
            });
        }

        console.log("[Resources Details API] hit with page slug:", slug);
        setHeader(event, "Cache-Control", "public, max-age=31536000, immutable");

        return resource;
    } catch (err) {
        console.error("[Resources Details API] Error:", err);
        throw createError({
            statusCode: 500,
            statusMessage: "Something went wrong retrieving the blog",
        });
    } finally {
        db.close();
    }
});
