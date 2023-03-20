#!/usr/bin/env node
/* eslint-env node */
import { build } from 'esbuild';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { litCssPlugin } from 'esbuild-plugin-lit-css';

import glob from 'glob';
import CleanCSS from 'clean-css';

const cleanCSS = new CleanCSS({
  sourceMap: true,
  returnPromise: true,
});

export async function bundle({ outfile = 'rhds.min.js', external = [], additionalPackages = [] } = {}) {
  const resolveDir = join(fileURLToPath(import.meta.url), '../elements');

  const elementSources = await glob('./*/*-*.ts', { cwd: join(process.cwd(), 'elements') });
  const elementDirs = new Set(elementSources.map(x => dirname(x)));
  const elementFiles = Array.from(elementDirs, x => join(process.cwd(), `elements/${x}/${x}.js`));

  const contents = [...additionalPackages, ...elementFiles]
    .map(x => `export * from '${x.replace('.ts', '.js')}';`).join('\n');

  await build({
    stdin: {
      contents,
      loader: 'ts',
      resolveDir,
    },
    format: 'esm',
    outfile,
    allowOverwrite: true,
    treeShaking: true,
    legalComments: 'linked',
    logLevel: 'info',
    sourcemap: true,
    bundle: true,
    minify: true,
    minifyWhitespace: true,

    external: external ?? [
      '@*',
      'prism*',
      'lit*',
      'tslib',
    ],

    plugins: [
      litCssPlugin({
        include: /elements\/rh-(.*)\/(.*)\.css$/,
        transform: source => cleanCSS.minify(source).then(x => x.styles)
      }),
    ],
  });
}

if (import.meta.url.endsWith(process.argv.at(1))) {
  try {
    await bundle();
  } catch ( e ) {
    process.exit(1);
  }
}
