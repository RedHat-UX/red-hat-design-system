/**
 * Loads element source in the SSR test worker.
 *
 * Browser tests rewrite `elements/*.js` to `*.ts`. This worker runs in Node,
 * which otherwise imports the compiled `.js` file. When that file has not been
 * built, resolve the TypeScript source, inline CSS imports, and transpile
 * decorators. A compiled `.js` file is left alone.
 */
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import ts from 'typescript';

const CSS_IMPORT = /import\s+([A-Za-z_$][\w$]*)\s+from\s+(['"])([^'"]+\.css)\2\s+with\s*\{[^}]*type:\s*['"]css['"][^}]*\}\s*;?/g;

function fileExists(url) {
  try {
    return existsSync(fileURLToPath(url));
  } catch {
    return false;
  }
}

function isProjectSource(url) {
  return url.includes('/elements/') || url.includes('/lib/');
}

/** Prefer a sibling `.ts` file when the compiled `.js` file is absent. */
function typescriptFallback(url) {
  if (!url.startsWith('file:') || !url.endsWith('.js') || !isProjectSource(url) || fileExists(url)) {
    return null;
  }
  const typescriptUrl = url.replace(/\.js$/, '.ts');
  return fileExists(typescriptUrl) ? typescriptUrl : null;
}

async function inlineCssImports(source, fileUrl) {
  const matches = [...source.matchAll(CSS_IMPORT)];
  if (matches.length === 0) {
    return source;
  }
  let result = source;
  for (const match of matches) {
    const [full, name, , cssPath] = match;
    const cssUrl = new URL(cssPath, fileUrl);
    const cssText = await readFile(fileURLToPath(cssUrl), 'utf8');
    const statement = `import { unsafeCSS as __ssrUnsafeCSS } from 'lit'; const ${name} = __ssrUnsafeCSS(${JSON.stringify(cssText)});`;
    result = result.replace(full, statement);
  }
  return result;
}

function transpile(source, fileName) {
  const output = ts.transpileModule(source, {
    fileName,
    reportDiagnostics: true,
    compilerOptions: {
      target: ts.ScriptTarget.ES2022,
      module: ts.ModuleKind.ESNext,
      experimentalDecorators: true,
      useDefineForClassFields: false,
      importHelpers: false,
    },
  });
  const errors = (output.diagnostics ?? []).filter(diagnostic =>
    diagnostic.category === ts.DiagnosticCategory.Error);
  if (errors.length > 0) {
    const message = errors
        .map(diagnostic => ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'))
        .join('\n');
    throw new Error(`SSR transpile failed for ${fileName}:\n${message}`);
  }
  return output.outputText;
}

export async function resolve(specifier, context, nextResolve) {
  if (specifier.endsWith('.css') && context.parentURL) {
    return {
      url: new URL(specifier, context.parentURL).href,
      shortCircuit: true,
    };
  }
  try {
    const resolved = await nextResolve(specifier, context);
    const fallback = typescriptFallback(resolved.url);
    return fallback ? { url: fallback, shortCircuit: true } : resolved;
  } catch (error) {
    if (typeof specifier === 'string' && specifier.endsWith('.js')) {
      try {
        return await nextResolve(specifier.replace(/\.js$/, '.ts'), context);
      } catch {
        // Keep the original resolution error.
      }
    }
    throw error;
  }
}

export async function load(url, context, nextLoad) {
  if (url.endsWith('.css')) {
    const cssText = await readFile(fileURLToPath(url), 'utf8');
    return {
      format: 'module',
      shortCircuit: true,
      source: `import { unsafeCSS } from 'lit'; export default unsafeCSS(${JSON.stringify(cssText)});`,
    };
  }
  const fallback = typescriptFallback(url);
  const typescriptUrl = url.endsWith('.ts') && isProjectSource(url) ? url : fallback;
  if (typescriptUrl == null) {
    return nextLoad(url, context);
  }
  const source = await inlineCssImports(await readFile(fileURLToPath(typescriptUrl), 'utf8'), typescriptUrl);
  return {
    format: 'module',
    shortCircuit: true,
    source: transpile(source, fileURLToPath(typescriptUrl)),
  };
}
