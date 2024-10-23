import type { UserConfig } from '@11ty/eleventy';

import { readFile } from 'node:fs/promises';
import { basename, join } from 'node:path';

import { transformFile } from '@swc/core';
import { transform } from '@pwrs/lit-css';

const cwd = process.cwd();

async function transformSource(sourcefile: string) {
  try {
    const { code: body, map } = await transformFile(sourcefile, {
      filename: basename(sourcefile),
      sourceMaps: true,
      inlineSourcesContent: true,
      jsc: {
        parser: {
          syntax: 'typescript',
          decorators: true,
        },
        target: 'es2022',
        keepClassNames: true,
        transform: {
          legacyDecorator: true,
          useDefineForClassFields: false,
          decoratorMetadata: true,
          decoratorVersion: '2021-12',
        },
      },
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

async function transformCss(args: { patternGroups: Record<string, string> }) {
  if (!args.patternGroups.path.includes('lightdom')) {
    const filePath = join(cwd, args.patternGroups.scope === 'uxdot' ? 'uxdot' : '.', `${args.patternGroups.path}.css`);
    const css = await readFile(filePath, 'utf8');
    const body = await transform({ css, filePath });
    return {
      body,
      status: 200,
      headers: {
        'Content-Type': 'text/javascript',
      },
    };
  } else {
    const filePath = join(cwd, args.patternGroups.scope === 'uxdot' ? 'uxdot' : '.', `${args.patternGroups.path}.css`);
    const body = await readFile(filePath, 'utf8');
    return {
      body,
      status: 200,
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
      '/assets/packages/@:scope/elements/:path*.css': transformCss,
      '/assets/packages/@:scope/:pkg/:path*.js': async function({
        patternGroups: { scope, path, pkg },
      }) {
        switch (scope) {
          case 'rhds':
            switch (pkg) {
              case 'elements': return transformSource(join(cwd, `${path}.ts`));
              default: return;
            }
          case 'uxdot':
            return transformSource(join(cwd, 'uxdot', `${path}.ts`));
          default:
            return;
        }
      },
    },
  });
}


