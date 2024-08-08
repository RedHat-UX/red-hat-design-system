import type { CustomElementExport, Export, Package } from 'custom-elements-manifest';
import { readFile, writeFile } from 'node:fs/promises';

const isCustomElementExport = (exp: Export): exp is CustomElementExport =>
  exp.kind === 'custom-element-definition';

const makeExportStatement = (ex: Export) =>
  `export * from '${ex.declaration.package ?? '@rhds/elements'}/${ex.declaration?.module}';`;

const manifestUrl = new URL('../custom-elements.json', import.meta.url);
const manifest: Package = JSON.parse(await readFile(manifestUrl, 'utf8'));

const elements = manifest.modules?.flatMap(mod => mod.exports ?? [])
    .filter(isCustomElementExport)
    .map(makeExportStatement)
    .join('\n');

await writeFile(
  new URL('../elements.js', import.meta.url),
  `${elements}\n`,
  'utf8',
);

