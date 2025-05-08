import Database from 'better-sqlite3';
import path from 'path';

export default defineEventHandler((event) => {
  const { slug } = event.context.params as { slug: string };
  const dbPath = path.resolve(process.cwd(), 'public/resources.db');
  // const dbPath = path.resolve(path.dirname(new URL(import.meta.url).pathname), 'resources.db');
  const db = new Database(dbPath, { readonly: true });

  const blog = db
    .prepare(`SELECT * FROM resources WHERE slug = ? LIMIT 1`)
    .get(slug);

  if (!blog) {
    throw createError({
      statusCode: 404,
      statusMessage: `Blog with slug "${slug}" not found`,
    });
  }

  return blog;
});
