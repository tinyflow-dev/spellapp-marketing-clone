import Database from 'better-sqlite3';

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
  const db = new Database(dbBuffer, { readonly: true });

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
