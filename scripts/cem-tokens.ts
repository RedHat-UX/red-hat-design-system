/* eslint-disable no-console */
import type { CustomElementDeclaration, Package } from 'custom-elements-manifest';

import { tokens, type TokenName } from '@rhds/tokens/meta.js';
import chalk from 'chalk';

/** token type names to css syntax data types */
const syntaxes = new Map(Object.entries({
  color: '<color>',
  dimension: '<length>',
  fontFamily: '<custom-ident>|string+',
  fontWeight: '<integer>',
  shadow: '<shadow>',
}));

function isCustomElementDeclaration(decl: unknown): decl is CustomElementDeclaration {
  return !!(decl as any)?.customElement;
}

export function analyze(manifest: Package) {
  performance.mark('cem-tokens-start');
  for (const mod of manifest.modules) {
    for (const decl of mod.declarations ?? []) {
      if (isCustomElementDeclaration(decl)) {
        for (const prop of decl?.cssProperties ?? []) {
          const token = tokens.get(prop.name as TokenName);
          if (token) {
            prop.description = token.$description;
            prop.syntax = syntaxes.get(token.$type!) ?? token.$type;
            prop.default = token.$value.toString();
          }
        }
      }
    }
  }
  performance.mark('cem-tokens-end');
  console.log(`⏲️  Adding tokens to CEM took ${chalk.blue(performance.measure('cem-tokens-total', 'cem-tokens-start', 'cem-tokens-end').duration)}ms\n`);
}
