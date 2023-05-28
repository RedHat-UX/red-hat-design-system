import { writeFile } from 'node:fs/promises';
import { tokens } from '@rhds/tokens/meta.js';
import json from '../custom-elements.json' assert { type: 'json' };

/** @return {decl is import('custom-elements-manifest').CustomElementDeclaration} */
function isCE(decl) {
  return decl.kind === 'class' && Array.isArray(decl.cssProperties)
}

const syntaxes = new Map(Object.entries({
  color: '<color>',
  dimension: '<length>',
  fontFamily: '<custom-ident>|string+',
  fontWeight: '<integer>',
  shadow: '<shadow>',
}));

/** @type{import('custom-elements-manifest').Package} */
const manifest = JSON.parse(JSON.stringify(json));

for (const mod of manifest.modules) {
  for (const decl of mod.declarations) {
    if (isCE(decl)) {
      for (const prop of decl.cssProperties) {
        const token = tokens.get(prop.name);
        if (token) {
          prop.description = token.$description
          prop.syntax = syntaxes.get(token.$type) ?? token.$type;
          prop.default = token.value.toString();
        }
      }
    }
  }
}

await writeFile(
  new URL('../custom-elements.json', import.meta.url),
  JSON.stringify(manifest, null, 2),
  'utf8',
);
