import type { UserConfig } from '@11ty/eleventy';
import type { BuildFailure, Message } from 'esbuild';
import type { BeforeEvent } from '@11ty/eleventy/src/UserConfig.js';

import { join, basename, relative } from 'node:path';
import { readFile } from 'node:fs/promises';

import { $ } from 'execa';

const $$ = $({ stdout: ['pipe'], stderr: ['pipe'] });

import { transform } from 'esbuild';

interface Options {
  /** path to tsconfig */
  tsconfig: string;
}

const filteredWarnings = ['Unsupported source map comment'];

let tsconfigRaw;

export default function(eleventyConfig: UserConfig, opts?: Options) {
  eleventyConfig.on('eleventy.before', async function({ runMode }: BeforeEvent) {
    switch (runMode) {
      case 'build': await $$`npx tspc -b`;
    }
  });

  eleventyConfig.addExtension('11ty.ts', {
    key: '11ty.js',
    compile() {
      return async function(this, data) {
        return this.defaultRenderer(data);
      };
    },
  });

  eleventyConfig.setServerOptions({
    onRequest: {
      '/assets/packages/@uxdot/*.js': async function({ url, pattern, patternGroups }) {
        const cwd = process.cwd();
        const sourcefile =
          join(cwd, 'uxdot', basename(typeof url === 'string' ? url : url.pathname));
        try {
          const code = await readFile(sourcefile, 'utf-8');
          const tsconfig = opts?.tsconfig ?? 'tsconfig.json';
          tsconfigRaw ??= await readFile(join(cwd, tsconfig), 'utf8');
          const { code: transformedCode, warnings } = await transform(code, {
            sourcefile,
            sourcemap: 'inline',
            loader: 'ts',
            target: 'esnext',
            tsconfigRaw,
          });

          if (warnings) {
            const relativePath = relative(process.cwd(), relative(cwd, sourcefile));
            for (const warning of warnings) {
              if (!filteredWarnings.some(w => warning.text.includes(w))) {
                console.warn(
                  `[11ty] [plugin-typescript-assets] Warning while transforming ${relativePath}: ${warning.text}`,
                );
              }
            }
          }

          return transformedCode;
        } catch (e) {
          if (Array.isArray((e as BuildFailure).errors)) {
            const msg = (e as BuildFailure).errors[0] as Message;

            if (msg.location) {
              throw new Error(
                `${sourcefile}:${msg.location.line}:${msg.location.column}:${msg.text}`,
              );
            }

            throw new Error(msg.text);
          }

          throw e;
        }
      },
    },
  });
}

