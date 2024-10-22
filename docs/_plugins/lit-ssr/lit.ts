import type { EleventyPage } from '@11ty/eleventy/src/UserConfig.js';
import type { UserConfig } from '@11ty/eleventy';

import { $, execa, type ResultPromise } from 'execa';
import { cp, glob, mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join, relative } from 'node:path';

import tsBlankSpace from 'ts-blank-space';
import chalk from 'chalk';

import { register } from 'node:module';

export interface RenderRequestMessage {
  content: string;
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
}

export interface RenderResponseMessage {
  page: Pick<EleventyPage, 'inputPath' | 'outputPath'>;
  rendered?: string;
  durationMs: number;
}

interface Options {
  componentModules?: string[];
  /** path from project root to tsconfig */
  tsconfig?: string;
}

async function redactTSFileInPlace(path: string) {
  const inURL = new URL(path, import.meta.url);
  const outURL = new URL(path.replace('.ts', '.js'), import.meta.url);
  await writeFile(outURL, tsBlankSpace(await readFile(inURL, 'utf8')), 'utf8');
}

register('./lit-css-node.ts', import.meta.url);

export default async function(eleventyConfig: UserConfig, opts?: Options) {
  const imports = opts?.componentModules ?? [];
  const tsconfig = opts?.tsconfig ?? './tsconfig.json';

  let proc: ResultPromise<{ node: true; ipc: true; all: true }>;

  // If there are no component modules, we could never have anything to
  // render.
  if (imports?.length) {
    eleventyConfig.on('eleventy.before', async function() {
      await $`npx tspc -b elements --clean`;
      await redactTSFileInPlace('./worker.ts');
      const $$ = execa({
        node: true,
        all: true,
        ipcInput: {
          imports,
          tsconfig,
        },
      });
      proc = $$`docs/_plugins/lit-ssr/worker.js`;
    });

    eleventyConfig.on('eleventy.after', async function() {
      proc.disconnect();
      const result = (await proc);
      // eslint-disable-next-line no-console
      console.log(result.all);
    });

    eleventyConfig.on('eleventy.after', async function({ runMode }) {
      const cwd = process.cwd();
      const pkgsDir = join(cwd, '_site/assets/packages');
      switch (runMode) {
        case 'build':
          await $`npx tspc -b elements`;
          await mkdir(join(pkgsDir, '@rhds/elements/elements'), { recursive: true });
          await mkdir(join(pkgsDir, '@rhds/elements/lib'), { recursive: true });
          await mkdir(join(pkgsDir, '@uxdot/elements'), { recursive: true });
          for await (const file of glob('./{elements,lib}/**/*.{js,d.ts,map,css}')) {
            const outDir = join(pkgsDir, '@rhds/elements');
            const rel = relative(cwd, file);
            const out = join(outDir, dirname(rel));
            const from = join(cwd, rel);
            const to = join(outDir, rel);
            await mkdir(out, { recursive: true });
            await cp(from, to);
          }
          for await (const file of glob('./uxdot/*.{js,d.ts,map,css}')) {
            const rel = relative(join(cwd, 'uxdot'), file);
            const outDir = join(pkgsDir, '@uxdot/elements');
            const from = join(cwd, 'uxdot', rel);
            const to = join(outDir, rel);
            await cp(from, to);
          }
      }
    });

    eleventyConfig.addTransform('render-lit', async function(this, content) {
      const { outputPath, inputPath } = this.page;

      if (!outputPath.endsWith('.html')) {
        return content;
      }

      const page = { outputPath, inputPath };
      proc.sendMessage({ page, content });
      const message = await proc.getOneMessage({
        filter: msg => (msg as RenderResponseMessage).page?.outputPath === outputPath,
      }) as RenderResponseMessage;
      if (message.rendered) {
        const { durationMs, rendered, page } = message;
        if (durationMs > 1000) {
          const color =
            durationMs > 5000 ? chalk.red
          : durationMs > 1000 ? chalk.yellow
          : durationMs > 100 ? chalk.blue
          : chalk.green;
          console.log(`${color(durationMs.toFixed(2).padEnd(8))} Rendered ${page.outputPath} in`);
        }
        return trimOuterMarkers(rendered);
      } else {
        return content;
      }
    });
  }
}

// Lit SSR includes comment markers to track the outer template from
// the template we've generated here, but it's not possible for this
// outer template to be hydrated, so they serve no purpose.
function trimOuterMarkers(renderedContent: string) {
  return renderedContent
      .replace(/^((<!--[^<>]*-->)|(<\?>)|\s)+/, '')
      .replace(/((<!--[^<>]*-->)|(<\?>)|\s)+$/, '');
}

