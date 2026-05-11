#!/usr/bin/env node
import { readFile, writeFile } from 'node:fs/promises';
import { glob } from 'glob';
import { minifyHTMLLiterals } from '@literals/html-css-minifier';

const files = await glob([
  'elements/**/*.js',
  'lib/**/*.js',
], { ignore: ['**/node_modules/**'] });

let changed = 0;
await Promise.all(files.map(async file => {
  const source = await readFile(file, 'utf-8');
  const result = await minifyHTMLLiterals(source, { fileName: file });
  if (result) {
    await writeFile(file, result.code);
    changed++;
  }
}));

console.log(`Minified template literals in ${changed} of ${files.length} files.`);
