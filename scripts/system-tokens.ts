/* eslint-disable no-console */

import type { CssCustomProperty, CustomElementDeclaration, Package } from 'custom-elements-manifest';
import type { PathLike } from 'node:fs';
import type { Declaration } from 'postcss';
import type { DesignToken, TokenValue } from '@rhds/tokens/meta.js';

import { glob, readFile, writeFile, stat } from 'node:fs/promises';
import { tokens } from '@rhds/tokens/meta.js';

import { dirname, join } from 'node:path';
import { parse } from 'postcss';
import valueParser from 'postcss-value-parser';
import chalk from 'chalk';


/**
 * name token name
 * $description token description
 * $type token value type
 * $value token value
 */

const group = (x: string | undefined) => process.env.DEBUG && console.group(x);
const end = () => process.env.DEBUG && console.groupEnd();
const log = (x: string) => process.env.DEBUG && console.log(x);

/** token type names to css syntax data types */
const syntaxes = new Map(Object.entries({
  color: '<color>',
  dimension: '<length>',
  fontFamily: '[ <family-name> | <generic-family> ]# ',
  fontWeight: '<font-weight-absolute> | bolder | lighter',
  shadow: '<shadow>',
}));

const isCustomElementDeclaration = (decl: unknown): decl is CustomElementDeclaration =>
  !!(decl as CustomElementDeclaration)?.customElement;

const exists = async (path: PathLike) => {
  try {
    return !!await stat(path);
  } catch {
    return false;
  }
};

const byLocaleName = (a: { name: string }, b: { name: string }) =>
  a.name.localeCompare(b.name);

const isVarCall = (node: valueParser.Node) =>
  node.type === 'function' && node.value === 'var';

/**
 * Find system tokens that match a variable name
 * @param  value a CSS value or variable name
 */
function* iterSystemTokens(value: string): Generator<null | DesignToken<TokenValue>> {
  if (tokens.has(value)) {
    yield tokens.get(value);
  }
}

/**
 * @param token - design token
 * @returns css custom property declaration
 */
function tokenToManifestCssProp(token: DesignToken<TokenValue>): CssCustomProperty {
  return {
    name: `--${token.name}`,
    description: token.$description,
    syntax: syntaxes.get(token.$type!) ?? token.$type,
    default: token.$value?.toString(),
  };
}

function addSystemTokensToMap(map: Map<string, DesignToken<TokenValue>>, node: Declaration) {
  // Property name starts with --rh-:
  // --rh-cta-background-color: blue;
  for (const token of iterSystemTokens(node.prop)) {
    if (token?.name) {
      map.set(token.name, token);
    }
  }

  // Property value is a var call that starts with --rh-:
  // color: var(--rh-color-blue-100);
  const parsed = valueParser(node.value);
  parsed.walk(node => {
    if (isVarCall(node)) {
      if (node.type === 'function') {
        for (const { type, value } of node.nodes) {
          if (type === 'word') {
            for (const token of iterSystemTokens(value)) {
              if (token?.name) {
                map.set(token.name, token);
              }
            }
          }
        }
      }
    }
  });
}

/**
 * get all tokens, by name, for a given custom element declaration and it's module path
 * @param decl ce declaration
 * @param modPath module path for the declaration
 * @returns all the design system tokens used in the element's shadow css
 */
async function getSystemTokensForCEDecl(
  decl: CustomElementDeclaration,
  modPath: string,
): Promise<Map<string, DesignToken<TokenValue>>> {
  const tokensForCustomElementDecl = new Map<string, DesignToken<TokenValue>>();
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

function tokensToCEMCssProperties(tokens: Map<string, DesignToken<TokenValue>>) {
  group('system tokens:');
  const decls: CssCustomProperty[] = [];
  for (const [name, token] of tokens) {
    log(name);
    decls.push(tokenToManifestCssProp(token));
  }
  end();
  return decls.sort(byLocaleName);
}

export async function analyze(manifest: Package) {
  performance.mark('cem-system-tokens-start');
  for (const mod of manifest.modules) {
    for (const decl of mod.declarations ?? []) {
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
  performance.mark('cem-system-tokens-end');
  console.log(`⏲️  Adding system tokens to CEM took ${chalk.blue(performance.measure('cem-system-tokens-total', 'cem-system-tokens-start', 'cem-system-tokens-end').duration)}ms\n`);
}
