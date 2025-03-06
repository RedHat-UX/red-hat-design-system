import type { CssCustomProperty } from 'custom-elements-manifest';
import { tokens as tokensMeta, type DesignToken } from '@rhds/tokens/meta.js';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');

export const capitalize = (x: string): string => `${x.at(0)?.toUpperCase() ?? ''}${x.slice(1)}`;

/* eslint-disable jsdoc/require-param */

/**
 * HTML attribute values should use single quotes to avoid breaking out of the value's surrounding double quotes
 */
function escapeDoubleQuotes(x: string) {
  return x?.toString().replaceAll('"', '\'');
}

/**
 * When recursing over the token categories, it's helpful to get the containing category for things like docs and key names
 */
export function getParentCollection(options: {
  parent: string;
  path: string;
}, tokens: DesignToken[]) {
  const parent = options.parent ?? tokens;
  const key = options.path.split('.').pop();
  return { parent, key };
}

function isDesignToken(token: DesignToken | CssCustomProperty): token is DesignToken {
  return '$value' in token;
}

/** generate `var(--rh-xxx, xxx)` string, given a token or css property */
export function getVariableSyntax(token: DesignToken | CssCustomProperty) {
  if (token.name) {
    const name = formatTokenVariableName(token.name);
    const value = isDesignToken(token) ? token.$value : token.default;
    return `var(${name}, ${escapeDoubleQuotes(value)})`;
  }
}

/** generate string of copy cell for 11ty templates */
export function copyCell(token: DesignToken) {
  return /* html */`
    <td data-label="Copy">
      <div>
        <uxdot-copy-button class="icon-only" copy="${getVariableSyntax(token)}">
          <span slot="extra-content" class="visually-hidden">
            Full CSS Variable
          </span>
        </uxdot-copy-button>
        <uxdot-copy-button class="icon-only" copy="${getTokenHref(token)}" icon="link">
          <span slot="extra-content" class="visually-hidden">
            Permalink to this token
          </span>
        </uxdot-copy-button>
      </div>
    </td>
  `.trim();
}

function formatTokenVariableName(token: string) {
  return `--${token}`.replace('----', '--') as `--rh-${string}`;
}

function getTokenCategorySlug(token: DesignToken) {
  if (!token.name) {
    throw new Error(`Unknown token`);
  }
  const name = formatTokenVariableName(token.name);
  const data = tokensMeta.get(name);
  if (!data) {
    throw new Error(`Could not find token ${name}`);
  } else {
    return data?.attributes?.category;
  }
}

/** generate fully qualified URL to a token's docs */
export function getTokenHref(token: DesignToken) {
  return `https://ux.redhat.com/tokens/${getTokenCategorySlug(token)}/#${token.name}`;
}

/** get the tokens at a given json path */
export function resolveTokens(path: string) {
  let tokens = tokensJSON;
  for (const part of path.split('.')) {
    tokens = tokens[part];
  }
  return tokens;
}

export const getDocs = (x: DesignToken) => x?.$extensions?.['com.redhat.ux'];

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param  str
 */
export function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

export const isThemeColorToken = (token: DesignToken) =>
  token.$type === 'color' && Array.isArray(token.original?.$value);

/**
 * Converts an object mapping css property names to values into a CSS rule for inlining into HTML
 */
export function styleMap(objt: object) {
  return Object.entries(objt)
      .map(([k, v]) => `${k}: ${escapeDoubleQuotes(v)}`)
      .join(';');
}

/** generate a string of classes, given an object */
export function classMap(classInfo: Record<string, string | boolean>) {
  return Object.keys(classInfo)
      .filter(key => classInfo[key])
      .join(' ');
}
