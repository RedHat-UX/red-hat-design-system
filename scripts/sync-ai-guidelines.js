import { cp } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const src = resolve(root, 'node_modules/@project-felt/ai-guidelines/content');
const dest = resolve(root, 'docs/ai-guidelines');

await cp(src, dest, { recursive: true });
