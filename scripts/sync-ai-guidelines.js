import { cp, rm, mkdir, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'node_modules/@project-felt/ai-guidelines/content');
const dest = resolve(root, 'docs/ai-guidelines');

await rm(dest, { recursive: true, force: true });
await mkdir(dest);
await cp(src, dest, { recursive: true });
await writeFile(
  resolve(dest, 'ai-guidelines.11tydata.json'),
  JSON.stringify({ layout: 'layouts/pages/has-toc.njk' }, null, 2) + '\n',
  'utf8'
);
