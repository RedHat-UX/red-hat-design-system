#!/usr/bin/env node
import { readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import { singleFileBuild } from '@patternfly/pfe-tools/esbuild.js';

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

  await singleFileBuild({
    componentsEntryPointContents,
    outfile: options?.outfile ?? 'rhds.min.js',
    allowOverwrite: true,
    external: options?.external ?? external,
    minify: false,
    litCssOptions: {
      include: /elements\/rh-(.*)\/(.*)\.css$/,
      uglify: true,
    },
  });
}

const stripExtension = x => x.replace(/\.\w+$/, '');
const eqeqeq = (x, y) => x === y;

/* eslint-env node */
/** Was the module was run directly? */
const INVOKED_VIA_CLI = [process.argv[1], fileURLToPath(import.meta.url)]
  .map(stripExtension) // fun with functional programming
  .reduce(eqeqeq);

if (INVOKED_VIA_CLI) {
  await build();
}

process.env['NODE_ENV'] = 'production';
