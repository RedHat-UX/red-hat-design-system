import { readFile, writeFile } from 'node:fs/promises';
import { tokens } from '@rhds/tokens/meta.js';

import * as fs from 'node:fs';
import * as path from 'node:path';
import * as postcss from 'postcss';

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

/**
 * Extract system token from css rule string
 * @param {Set} tokenSet
 * @param {string} cssString
 * return set of tokens from system tokens
 */
function extractSystemTokens(tokenSet, cssString) {
  if (cssString.startsWith('var')) {
    // find all substrings that include --rh-
    const matches = cssString.match(/--rh-[\w-]+/g);
    matches.forEach(match => {
      if (tokens.get(match)) {
        tokenSet.add(tokens.get(match));
      }
    });
  } else {
    if (tokens.get(cssString)) {
      tokenSet.add(tokens.get(cssString));
    }
  }
  // return unique tokens
  return tokenSet;
}

for (const mod of manifest.modules) {
  for (const decl of mod.declarations) {
    if (isCustomElementDeclaration(decl)) {
      const modulePath = mod.path;
      const cssFilePath = path.format({ ...path.parse(modulePath), ext: '.css', base: '' });
      const cssFileTokenSet = new Set();
      // open css file if it exists
      if (fs.existsSync(cssFilePath)) {
        const css = await readFile(cssFilePath, 'utf8');
        // parse css
        const root = postcss.parse(css);
        // root.walk looking for custom properties
        root.walk(node => {
          switch (node.type) {
            case 'decl': {
              // Rule Declaration starts with --rh-:
              // --rh-cta-background-color: var(--rh-cta-focus-background-color);
              if (node.prop.startsWith('--rh-')) {
                // function call to extract token name
                extractSystemTokens(cssFileTokenSet, node.prop);
              }

              if (node.value.includes('var(--rh-')) {
                // function call to extract token name
                extractSystemTokens(cssFileTokenSet, node.value);
              }
              break;
            }
          }
        });
      }
      // modify custom element declaration
      // TODO: alpha order the set
      const tempArray = [];
      for (const token of cssFileTokenSet) {
        const prop = {};
        prop.name = `--${token.name}`;
        prop.description = token.$description;
        prop.syntax = syntaxes.get(token.$type) ?? token.$type;
        prop.default = token.$value.toString();
        tempArray.push(prop);
      }
      tempArray.sort((a, b) => a.name.localeCompare(b.name));
      // if there are no previous cssProperties create the array
      if (!decl.cssProperties) {
        decl.cssProperties = [];
      }
      decl.cssProperties = [...decl.cssProperties, ...tempArray];
    }
  }
}

await writeFile(url, JSON.stringify(manifest, null, 2), 'utf8');
