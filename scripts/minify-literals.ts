#!/usr/bin/env npx tsx
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'glob';
import { minifyHTMLLiterals } from '@literals/html-css-minifier';

const files = await glob([
  'elements/**/*.js',
  'lib/**/*.js',
], { ignore: ['**/node_modules/**'] });

let changed = 0;
await Promise.all(files.map(async (file: string) => {
  const source = await readFile(file, 'utf-8');
  const result = await minifyHTMLLiterals(source, { fileName: file });
  if (result) {
    await writeFile(file, result.code);
    changed++;
  }
}));
