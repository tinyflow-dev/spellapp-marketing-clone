import Database from 'better-sqlite3';
import { writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

export const prerender = false;

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 9;
  const offset = (page - 1) * limit;

  // 1. Load DB buffer from Nitro storage
  const dbBuffer = await useStorage('assets:server').getItemRaw('resources.db');
  if (!dbBuffer) {
    throw createError({ statusCode: 500, message: 'Database not found in storage' });
  }

  // 2. Write buffer to a temp file
  const tempDbPath = join(tmpdir(), `resources-${Date.now()}.db`);
  writeFileSync(tempDbPath, dbBuffer);

  // 3. Load DB from temp file path
  const db = new Database(tempDbPath, { readonly: true });

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

    console.log('[API New] hit with page', page, 'offset', offset, '| Found resources:', resources.length, '| Total:', total);
    console.log(`[API] received page = ${query.page}`);

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
  } finally {
    db.close(); // cleanup
  }
});