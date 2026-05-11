import { minifyHTMLLiterals } from '@literals/html-css-minifier';
import { fileURLToPath } from 'node:url';

interface HookContext {
  source: string;
  format: 'module' | 'commonjs' | 'wasm' | 'json';
}

type LoadFunction = (url: string, context: HookContext) => Promise<HookContext>;

const cache = new Map<string, string>();

const ELEMENT_PATH_RE = /\/(elements|lib|uxdot)\//;

export async function load(url: string, context: HookContext, nextLoad: LoadFunction) {
  const result = await nextLoad(url, context);
  if (result.format !== 'module' || !ELEMENT_PATH_RE.test(url)) {
    return result;
  }
  const source = typeof result.source === 'string'
    ? result.source
    : result.source?.toString();
  if (!source || !source.includes('html`')) {
    return result;
  }
  if (!cache.has(url)) {
    const fileName = url.startsWith('file://')
      ? fileURLToPath(url)
      : url;
    const minified = await minifyHTMLLiterals(source, { fileName });
    cache.set(url, minified?.code ?? source);
  }
  return { ...result, source: cache.get(url) };
}
