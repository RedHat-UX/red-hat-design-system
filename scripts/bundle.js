#!/usr/bin/env node
import { build } from 'esbuild';
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { minifyHTMLLiteralsPlugin } from 'esbuild-plugin-minify-html-literals';

import CleanCSS from 'clean-css';

const cleanCSS = new CleanCSS({
  sourceMap: true,
  returnPromise: true,
});

export async function bundle({ outfile = 'rhds.min.js', external = [] } = {}) {
  await build({
    entryPoints: ['./elements.js'],
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
        transform: source => cleanCSS.minify(source).then(x => x.styles),
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
