#!/usr/bin/env node
/* eslint-env node */
import { fileURLToPath } from 'node:url';
import { readFile, writeFile } from 'node:fs/promises';
import { promisify } from 'node:util';
import { transform } from '@pwrs/lit-css';

import _glob from 'glob';
const glob = promisify(_glob);

export async function build() {
  const entryPoints = await glob('./elements/**/*.css', {
    ignore: ['./elements/**/*lightdom.css', './elements/**/demo/*.css'],
    absolute: true,
  });

  await Promise.all(entryPoints.map(async inPath => {
    const outPath = `${inPath}.js`;

    const styleSheet = await readFile(inPath, 'utf8');
    const result = await transform({ css: styleSheet, filePath: outPath });
    await writeFile(outPath, result, 'utf8');
  }));
}

const stripExtension = x => x.replace(/\.\w+$/, '');
const eqeqeq = (x, y) => x === y;

/** Was the module was run directly? */
const INVOKED_VIA_CLI = [process.argv[1], fileURLToPath(import.meta.url)]
  .map(stripExtension) // fun with functional programming
  .reduce(eqeqeq);

if (INVOKED_VIA_CLI) {
  await build();
}
