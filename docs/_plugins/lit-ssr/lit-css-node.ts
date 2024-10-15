import { transform } from '@pwrs/lit-css';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

interface HookContext {
  source: string;
  format: 'module' | 'commonjs' | 'wasm' | 'json';
}

type LoadFunction = (url: string, context: HookContext) => Promise<HookContext>;

export async function load(url: string, context: HookContext, nextLoad: LoadFunction) {
  if (url.endsWith('.css')) {
    const format = 'module';
    const filePath = fileURLToPath(new URL(url));
    const css = await readFile(filePath, 'utf8');
    const source = await transform({ css, filePath });
    return {
      ...await nextLoad(url, { ...context, format }),
      source,
      format,
    };
  } else {
    return nextLoad(url, context);
  }
}
