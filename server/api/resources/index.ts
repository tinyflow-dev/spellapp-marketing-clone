// server/api/blogs.js
import Database from 'better-sqlite3';
import path from 'path';

export default defineEventHandler(() => {
  const dbPath = path.resolve(process.cwd(), 'database/resources.db');
  const db = new Database(dbPath, { readonly: true });

  const stmt = db.prepare('SELECT * FROM resources ORDER BY date DESC');
  const blogs = stmt.all();

  return blogs;
});