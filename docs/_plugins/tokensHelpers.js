import { tokens as tokensMeta } from '@rhds/tokens/meta.js';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');
export const capitalize = (x) => `${x.at(0)?.toUpperCase() ?? ''}${x.slice(1)}`;
/* eslint-disable jsdoc/require-param */
/**
 * HTML attribute values should use single quotes to avoid breaking out of the value's surrounding double quotes
 */
function escapeDoubleQuotes(x) {
    return x?.toString().replaceAll('"', '\'');
}
/**
 * When recursing over the token categories, it's helpful to get the containing category for things like docs and key names
 */
export function getParentCollection(options, tokens) {
    const parent = options.parent ?? tokens;
    const key = options.path.split('.').pop();
    return { parent, key };
}
/** generate `var(--rh-xxx, xxx)` string, given a token or css property */
export function getVariableSyntax(token) {
    return `var(--${token.name}, ${escapeDoubleQuotes(token.$value ?? token.default)})`;
}
/** generate string of copy cell for 11ty templates */
export function copyCell(token) {
    return /* html */ `
    <td data-label="Copy">
      <div>
        <uxdot-copy-button copy="${getVariableSyntax(token)}"></uxdot-copy-button>
        <uxdot-copy-button copy="${getTokenHref(token)}" icon="link"></uxdot-copy-button>
      </div>
    </td>
  `.trim();
}
function getTokenCategorySlug(token) {
    const name = `--${token.name}`.replace('----', '--');
    const data = tokensMeta.get(name);
    if (!data) {
        throw new Error(`Could not find token ${name}`);
    }
    else {
        return data?.attributes?.category;
    }
}
/** generate fully qualified URL to a token's docs */
export function getTokenHref(token) {
    return `https://ux.redhat.com/tokens/${getTokenCategorySlug(token)}/#${token.name}`;
}
/** get the tokens at a given json path */
export function resolveTokens(path) {
    let tokens = tokensJSON;
    for (const part of path.split('.')) {
        tokens = tokens[part];
    }
    return tokens;
}
export const getDocs = (x) => x?.$extensions?.['com.redhat.ux'];
/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param  str
 */
export function dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}
export const isThemeColorToken = (token) => token.$type === 'color' && Array.isArray(token.original?.$value);
/**
 * Converts an object mapping css property names to values into a CSS rule for inlining into HTML
 */
export function styleMap(objt) {
    return Object.entries(objt)
        .map(([k, v]) => `${k}: ${escapeDoubleQuotes(v)}`)
        .join(';');
}
/** generate a string of classes, given an object */
export function classMap(classInfo) {
    return Object.keys(classInfo)
        .filter(key => classInfo[key])
        .join(' ');
}
//# sourceMappingURL=tokensHelpers.js.map