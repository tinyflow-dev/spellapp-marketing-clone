import Database from 'better-sqlite3';
export const prerender = false;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 9;
  const offset = (page - 1) * limit;
  const dbBuffer = await useStorage('assets:server').getItemRaw('resources.db');
  if (!dbBuffer) {
    throw createError({ statusCode: 500, message: 'Database not found in storage' });
  }
  const db = new Database(dbBuffer, { readonly: true });

  try {
    // 1. Get paginated results
    const resources = db.prepare(
      `SELECT id, title, description, slug
       FROM resources 
       ORDER BY date DESC 
       LIMIT ? OFFSET ?`
    ).all(limit, offset);

    // 2. Get total count for pagination
    const result = db.prepare(`SELECT COUNT(*) AS count FROM resources`).get() as { count: number };
    const total = result.count;
    const totalPages = Math.ceil(total / limit);

    console.log('[API] hit with page', page, 'offset', offset, '| Found resources:', resources.length, '| Total:', total);

    return {
      resources,
      pagination: {
        page,
        limit,
        total,
        totalPages,
      },
      error: null
    };
  } catch (err) {
    console.error('[API][resources] DB error:', err);
    return {
      resources: [],
      pagination: {
        page,
        limit,
        total: 0,
        totalPages: 0,
      },
      error: err instanceof Error ? err.message : String(err)
    };
  }
});