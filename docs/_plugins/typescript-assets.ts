import type { UserConfig } from '@11ty/eleventy';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { transform as esbuildTransform } from 'esbuild';
import { transform } from '@pwrs/lit-css';

const cwd = process.cwd();

const tsconfigRaw = await readFile(new URL(
  '../../tsconfig.settings.json',
  import.meta.url,
), 'utf8');

async function transformTypescriptSource(sourcefile: string) {
  try {
    const { code: body, map } = await esbuildTransform(await readFile(sourcefile, 'utf8'), {
      loader: 'ts',
      sourcemap: true,
      target: 'es2022',
      sourcefile,
      tsconfigRaw,
    });

    return {
      body,
      status: 200,
      headers: {
        'Content-Type': 'text/javascript',
        'SourceMap': `data:application/json;base64,${Buffer.from(JSON.stringify(map)).toString('base64')}`,
      },
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(`Error transforming ${sourcefile}`);
    // eslint-disable-next-line no-console
    console.log(e);
    const body = JSON.stringify(e);
    return {
      body,
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}

export default function(eleventyConfig: UserConfig) {
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
      '/assets/packages/@:scope/elements/:path*.css': async function transformCss(
        args: { patternGroups: Record<string, string> },
      ) {
        const filePath = join(cwd, args.patternGroups.scope === 'uxdot' ? 'uxdot' : '.', `${args.patternGroups.path}.css`);
        const css = await readFile(filePath, 'utf8');
        if (args.patternGroups.path.includes('lightdom')) {
          return { body: css, status: 200 };
        } else {
          return {
            body: await transform({ css, filePath }),
            status: 200,
            headers: {
              'Content-Type': 'text/javascript',
            },
          };
        }
      },

      '/assets/packages/@:scope/:pkg/:path*.js': async function({
        patternGroups: { scope, path, pkg },
      }) {
        switch (scope) {
          case 'rhds':
            switch (pkg) {
              case 'elements': return transformTypescriptSource(join(cwd, `${path}.ts`));
              default: return;
            }
          case 'uxdot':
            return transformTypescriptSource(join(cwd, 'uxdot', `${path}.ts`));
          default:
            return;
        }
      },
    },
  });
}
