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

function toExportStatements(acc = '', x) {
  return `${acc}\nexport * from '${x}';`;
}

export async function build(options) {
  const elements = await readdir(new URL('../elements', import.meta.url));

  const entryPoints = elements.map(x =>
    fileURLToPath(new URL(`../elements/${x}/${x}.js`, import.meta.url)));

  const additionalPackages = options?.additionalPackages ?? [];
  const componentsEntryPointContents =
    `${entryPoints.reduce(toExportStatements, '')}
${additionalPackages.reduce(toExportStatements, '')}`;

  const litCssOptions = {
    include: /elements\/rh-(.*)\/(.*)\.css$/,
    uglify: true,
  };

  await singleFileBuild({
    componentsEntryPointContents,
    outfile: options?.outfile ?? 'rhds.min.js',
    litCssOptions,
    allowOverwrite: true,
    external: options?.external ?? external,
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
const eqeqeq = (x, y) => x === y;

/** Was the module was run directly? */
const INVOKED_VIA_CLI = [process.argv[1], fileURLToPath(import.meta.url)]
  .map(stripExtension) // fun with functional programming
  .reduce(eqeqeq);

if (INVOKED_VIA_CLI) {
  await build();
}
