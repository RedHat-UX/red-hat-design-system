import { transform } from '@pwrs/lit-css';
import { readFile } from 'node:fs/promises';
import { basename } from 'node:path';
import { fileURLToPath } from 'node:url';

interface HookContext {
  source: string;
  format: 'module' | 'commonjs' | 'wasm' | 'json';
}

type LoadFunction = (url: string, context: HookContext) => Promise<HookContext>;

const cache = new Map<string, string>();

export async function load(url: string, context: HookContext, nextLoad: LoadFunction) {
  if (url.endsWith('.css')) {
    if (!cache.has(url)) {
      const filePath = fileURLToPath(new URL(url));
      const specifier = basename(filePath, '.css');
      const raw = await readFile(filePath, 'utf8');
      // Inject a marker so the SSR renderer can identify this stylesheet by name.
      // CSSResult.cssText carries no filename, so without this the renderer can't
      // deduplicate styles or assign a specifier for shadowrootadoptedstylesheets.
      const css = `/* @sheet:${specifier} */${raw}`;
      cache.set(url, await transform({ css, filePath }));
    }
    const format = 'module';
    const source = cache.get(url);
    return { source, shortCircuit: true, format };
  } else {
    return nextLoad(url, context);
  }
}
