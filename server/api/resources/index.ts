import Database from 'better-sqlite3';
import path from 'path';

export default defineEventHandler((event) => {
  const query = getQuery(event);
  const page = parseInt(query.page as string) || 1;
  const limit = parseInt(query.limit as string) || 9;
  const offset = (page - 1) * limit;

  const dbPath = path.resolve(process.cwd(), 'public/resources.db');
  const db = new Database(dbPath, { readonly: true });

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

  return {
    resources,
    pagination: {
      page,
      limit,
      total,
      totalPages,
    }
  };
});