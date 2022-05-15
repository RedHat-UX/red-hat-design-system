#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { build as esBuild } from 'esbuild';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { singleFileBuild } from '@patternfly/pfe-tools/esbuild.js';
// import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

const external = [
  '@*',
  'prism*',
  'lit*',
  'tslib',
];

export async function build() {
  const elements = await readdir(new URL('../elements', import.meta.url));

  const entryPoints = elements.map(x =>
    fileURLToPath(new URL(`../elements/${x}/${x}.js`, import.meta.url)));

  const componentsEntryPointContents = entryPoints.reduce((acc, x) => `${acc}
  export * from '${x}';`, '');

  const litCssOptions = {
    include: /elements\/rh-(.*)\/(.*)\.css$/,
    uglify: true,
  };

  await singleFileBuild({
    componentsEntryPointContents,
    outfile: 'rhds.min.js',
    litCssOptions,
    allowOverwrite: true,
    external,
    minify: false,
  });

  await esBuild({
    entryPoints,
    outdir: 'elements',
    outbase: 'elements',
    entryNames: '[dir]/[name]',
    allowOverwrite: true,
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
}

const stripExtension = x => x.replace(/\.\w+$/, '');
const and = (x, y) => x && y;

/** Was the module was run directly? */
const INVOKED_VIA_CLI = [process.argv[1], fileURLToPath(import.meta.url)]
  .map(stripExtension) // fun with functional programming
  .reduce(and, false);

if (INVOKED_VIA_CLI) {
  await build();
}
