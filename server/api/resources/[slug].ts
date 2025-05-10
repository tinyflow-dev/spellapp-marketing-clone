import Database from 'better-sqlite3';
import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export default defineEventHandler(async (event) => {
  const { slug } = event.context.params as { slug: string };
  if (!slug) {
    throw createError({
      statusCode: 400,
      statusMessage: "Oops! The page you are looking for doesn't exist or has been removed",
    });
  }

  const dbBuffer = await useStorage('assets:server').getItemRaw('resources.db');
  if (!dbBuffer) {
    throw createError({ statusCode: 500, message: 'Database not found in storage' });
  }

  // ✅ Write buffer to a temp file
  const tempDbPath = join(tmpdir(), `resources-${Date.now()}.db`);
  writeFileSync(tempDbPath, dbBuffer);

  // ✅ Read from temp file
  const db = new Database(tempDbPath, { readonly: true });

  try {
    const resource = db
      .prepare(`SELECT * FROM resources WHERE slug = ? LIMIT 1`)
      .get(slug);

    if (!resource) {
      throw createError({
        statusCode: 404,
        statusMessage: `Blog with slug "${slug}" not found`,
      });
    }

    return resource;
  } catch (err) {
    console.error('[API][slug] Error:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Something went wrong retrieving the blog',
    });
  } finally {
    db.close();
  }
});
