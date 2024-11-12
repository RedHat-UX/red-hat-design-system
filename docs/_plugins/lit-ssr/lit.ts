import type { EleventyPage } from '@11ty/eleventy/src/UserConfig.js';
import type { UserConfig } from '@11ty/eleventy';

import { readFile, writeFile } from 'node:fs/promises';

import { Piscina } from 'piscina';
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

/**
 * Eleventy plugin to server-render lit elements directly from typescript source
 * @param eleventyConfig
 * @param opts
 */
export default async function(eleventyConfig: UserConfig, opts?: Options) {
  const imports = opts?.componentModules ?? [];
  const tsconfig = opts?.tsconfig ?? './tsconfig.json';

  let pool: Piscina;

  // If there are no component modules, we could never have anything to
  // render.
  if (imports?.length) {
    eleventyConfig.on('eleventy.before', async function() {
      await redactTSFileInPlace('./worker.ts');
      const filename = new URL('worker.js', import.meta.url).pathname;
      pool = new Piscina({
        filename,
        workerData: {
          imports,
          tsconfig,
        },
      });
    });

    eleventyConfig.on('eleventy.after', async function() {
      return pool.close();
    });

    eleventyConfig.addTransform('render-lit', async function(this, content) {
      const { outputPath, inputPath } = this.page;

      if (!outputPath.endsWith('.html')) {
        return content;
      }

      const page = { outputPath, inputPath };
      const message = await pool.run({ page, content });
      if (message.rendered) {
        const { durationMs, rendered, page } = message;
        if (durationMs > 1000) {
          const color =
            durationMs > 5000 ? chalk.red
          : durationMs > 1000 ? chalk.yellow
          : durationMs > 100 ? chalk.blue
          : chalk.green;
          // eslint-disable-next-line no-console
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

