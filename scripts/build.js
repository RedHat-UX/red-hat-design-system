#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { build } from 'esbuild';
import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';
import { litCssPlugin } from 'esbuild-plugin-lit-css';

const elements = await readdir(new URL('../elements', import.meta.url));

const entryPoints = elements.map(x =>
  fileURLToPath(new URL(`../elements/${x}/${x}.ts`, import.meta.url)));

await build({
  entryPoints,
  outfile: 'rhds.min.js',
  format: 'esm',
  minify: true,
  bundle: true,
  legalComments: 'linked',
  sourcemap: 'linked',
  plugins: [
    minifyHTMLLiteralsPlugin(),
    litCssPlugin({
      include: /elements\/rh-(.*)\/(.*)\.css$/,
      uglify: true,
    }),
  ],
});

await build({
  entryPoints,
  outdir: 'elements',
  outbase: 'elements',
  entryNames: '[dir]/[name]',
  bundle: true,
  external: ['@*', 'prism*', 'lit*', '@patternfly/*', 'tslib'],
  format: 'esm',
  sourcemap: 'linked',
  minify: true,
  legalComments: 'linked',
  plugins: [
    minifyHTMLLiteralsPlugin(),
    litCssPlugin({
      include: /elements\/rh-(.*)\/(.*)\.css$/,
      uglify: true,
    }),
  ],
});

