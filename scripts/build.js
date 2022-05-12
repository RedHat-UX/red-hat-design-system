#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { build } from 'esbuild';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { singleFileBuild } from '@patternfly/pfe-tools/esbuild.js';
// import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

const elements = await readdir(new URL('../elements', import.meta.url));

const entryPoints = elements.map(x =>
  fileURLToPath(new URL(`../elements/${x}/${x}.js`, import.meta.url)));

const componentsEntryPointContents = entryPoints.reduce((acc, x) => `${acc}
export * from '${x}';`, '');

const litCssOptions = {
  include: /elements\/rh-(.*)\/(.*)\.css$/,
  uglify: true,
};

const external = [
  '@*',
  'prism*',
  'lit*',
  'tslib',
];

await singleFileBuild({
  componentsEntryPointContents,
  outfile: 'rhds.min.js',
  litCssOptions,
  external,
  minify: false,
});

await build({
  entryPoints,
  outdir: 'elements',
  outbase: 'elements',
  entryNames: '[dir]/[name]',
  bundle: true,
  external,
  format: 'esm',
  sourcemap: 'linked',
  minify: false,
  legalComments: 'linked',
  plugins: [
    // BUG: https://github.com/asyncLiz/minify-html-literals/issues/37
    // minifyHTMLLiteralsPlugin(),
    litCssPlugin(litCssOptions),
  ],
});

