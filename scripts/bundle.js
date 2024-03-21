#!/usr/bin/env node
/* eslint-env node */
import { build } from 'esbuild';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

import { glob } from 'glob';

import CleanCSS from 'clean-css';

import postcss from 'postcss';
import nesting from 'postcss-nesting';

const cleanCSS = new CleanCSS({
  sourceMap: true,
  returnPromise: true,
});


// TODO(bennypowers): remove for 2.0, don't ship a bundle
export async function bundle({ outfile = 'rhds.min.js', external = [], additionalPackages = [] } = {}) {
  const resolveDir = join(fileURLToPath(import.meta.url), '../elements');

  const elementSources = await glob('./*/*-*.ts', { cwd: join(process.cwd(), 'elements') });
  const elementDirs = new Set(elementSources.map(x => dirname(x)));
  const elementFiles = Array.from(elementDirs, x => join(process.cwd(), `elements/${x}/${x}.js`));

  const contents = [...additionalPackages, ...elementFiles]
    .map(x => `export * from './${relative(resolveDir, x).replace('.ts', '.js')}';`).join('\n');

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
      minifyHTMLLiteralsPlugin(),
      litCssPlugin({
        include: /elements\/rh-(.*)\/(.*)\.css$/,
        transform: async (source, meta) =>
          Promise.resolve(source)
            .then(source => postcss([nesting]).process(source, { from: meta.filePath }))
            .then(x => x.css)
            .then(unnested => cleanCSS.minify(unnested))
            .then(x => x.styles)
      }),
    ],
  });
}

if (import.meta.url.endsWith(process.argv.at(1))) {
  try {
    await bundle();
  } catch ( e ) {
    // it is necessary to log this error in case the script needs debugging
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  }
}
