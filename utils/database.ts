import { writeFileSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

let dbPath: string | null = null;

export async function getTempDbPath(): Promise<string> {
  if (dbPath && existsSync(dbPath)) return dbPath;

  const dbBuffer = await useStorage('assets:server').getItemRaw('resources.db');
  if (!dbBuffer) throw createError({ statusCode: 500, message: 'Database not found in storage' });

  dbPath = join(tmpdir(), `resources-cache.db`);
  writeFileSync(dbPath, dbBuffer); // only writes once
  return dbPath;
}