import { transform } from '@pwrs/lit-css';
import { readFile } from 'node:fs/promises';
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
      const css = await readFile(filePath, 'utf8');
      cache.set(url, await transform({ css, filePath }));
    }
    const format = 'module';
    const source = cache.get(url);
    return { source, shortCircuit: true, format };
  } else {
    return nextLoad(url, context);
  }
}
