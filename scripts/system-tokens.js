import { glob, readFile, writeFile, stat } from 'node:fs/promises';
import { tokens } from '@rhds/tokens/meta.js';

import { dirname, join } from 'node:path';
import { parse } from 'postcss';
import valueParser from 'postcss-value-parser';

/**
 * name token name
 * $description token description
 * $type token value type
 * $value token value
 */

/* eslint-disable no-console */
const group = x => process.env.DEBUG && console.group(x);
const end = () => process.env.DEBUG && console.groupEnd();
const log = x => process.env.DEBUG && console.log(x);
/* eslint-enable no-console */

/** token type names to css syntax data types */
const syntaxes = new Map(Object.entries({
  color: '<color>',
  dimension: '<length>',
  fontFamily: '[ <family-name> | <generic-family> ]# ',
  fontWeight: '<font-weight-absolute> | bolder | lighter',
  shadow: '<shadow>',
}));

/**
 * @param {unknown} decl - possible custom element declaration
 * @returns {decl is import('custom-elements-manifest').CustomElementDeclaration} the param is a ce decl
 */
const isCustomElementDeclaration = decl => decl.customElement;

const exists = async path => {
  try {
    return !!await stat(path);
  } catch {
    return false;
  }
};

const byLocaleName = (a, b) => a.name.localeCompare(b.name);

const isVarCall = node => node.type === 'function' && node.value === 'var';

/**
 * Find system tokens that match a variable name
 * @param {string} value a CSS value or variable name
 * @yields {Token}
 */
function* iterSystemTokens(value) {
  if (tokens.has(value)) {
    yield tokens.get(value);
  }
}

/**
 * @param {Token} token - design token
 * @returns {import('custom-elements-manifest').CssCustomProperty} css custom property declaration
 */
function tokenToManifestCssProp(token) {
  return {
    name: `--${token.name}`,
    description: token.$description,
    syntax: syntaxes.get(token.$type) ?? token.$type,
    default: token.$value.toString(),
  };
}

function addSystemTokensToMap(map, node) {
  // Property name starts with --rh-:
  // --rh-cta-background-color: blue;
  for (const token of iterSystemTokens(node.prop)) {
    map.set(token.name, token);
  }

  // Property value is a var call that starts with --rh-:
  // color: var(--rh-color-blue-100);
  const parsed = valueParser(node.value);
  parsed.walk(node => {
    if (isVarCall(node)) {
      for (const { type, value } of node.nodes) {
        if (type === 'word') {
          for (const token of iterSystemTokens(value)) {
            map.set(token.name, token);
          }
        }
      }
    }
  });
}

/**
 * get all tokens, by name, for a given custom element declaration and it's module path
 * @param {import('custom-elements-manifest').CustomElementDeclaration} decl ce declaration
 * @param {string} modPath module path for the declaration
 * @returns {Promise<Map<string, Token>>} all the design system tokens used in the element's shadow css
 */
async function getSystemTokensForCEDecl(decl, modPath) {
  const tokensForCustomElementDecl = new Map();
  const dir = dirname(modPath);
  if (decl.tagName) {
    group('files:');
    for await (const rel of glob([
      `elements/${dir}/${decl.tagName}.css`,
      `elements/${dir}/${decl.tagName}-lightdom.css`,
    ])) {
      const cssFilePath = join(process.cwd(), rel);
      log(cssFilePath);
      if (await exists(cssFilePath)) {
        const css = await readFile(cssFilePath, 'utf8');
        const root = parse(css);
        root.walk(node => {
          switch (node.type) {
            case 'decl': addSystemTokensToMap(tokensForCustomElementDecl, node);
          }
        });
      }
    }
    end();
  }
  return tokensForCustomElementDecl;
}

function tokensToCEMCssProperties(tokens) {
  group('system tokens:');
  const decls = [];
  for (const [name, token] of tokens) {
    log(name);
    decls.push(tokenToManifestCssProp(token));
  }
  end();
  return decls.sort(byLocaleName);
}

/** file to modify */
const manifestUrl = new URL('../custom-elements.json', import.meta.url);

const manifest = JSON.parse(await readFile(manifestUrl, 'utf8'));

for (const mod of manifest.modules) {
  for (const decl of mod.declarations) {
    if (isCustomElementDeclaration(decl)) {
      group(decl.tagName);
      const systemTokens = await getSystemTokensForCEDecl(decl, mod.path);
      const cssProperties = tokensToCEMCssProperties(systemTokens);
      if (cssProperties.length) {
        decl.cssProperties ??= [];
        decl.cssProperties.push(...cssProperties);
      }
      end();
    }
  }
}

await writeFile(manifestUrl, JSON.stringify(manifest, null, 2), 'utf8');
