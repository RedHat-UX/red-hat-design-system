import { readFile, writeFile } from 'node:fs/promises';
import { tokens } from '@rhds/tokens/meta.js';

/** token type names to css syntax data types */
const syntaxes = new Map(Object.entries({
  color: '<color>',
  dimension: '<length>',
  fontFamily: '<custom-ident>|string+',
  fontWeight: '<integer>',
  shadow: '<shadow>',
}));

/** @return {decl is import('custom-elements-manifest').CustomElementDeclaration} */
const isCustomElementDeclaration = decl => decl.customElement;

/** file to modify */
const url = new URL('../custom-elements.json', import.meta.url);

/** @type{import('custom-elements-manifest').Package} */
const manifest = JSON.parse(await readFile(url, 'utf8'));

for (const mod of manifest.modules) {
  for (const decl of mod.declarations) {
    if (isCustomElementDeclaration(decl)) {
      for (const prop of decl?.cssProperties ?? []) {
        const token = tokens.get(prop.name);
        if (token) {
          prop.description = token.$description;
          prop.syntax = syntaxes.get(token.$type) ?? token.$type;
          prop.default = token.$value.toString();
        }
      }
    }
  }
}

await writeFile(url, JSON.stringify(manifest, null, 2), 'utf8');
