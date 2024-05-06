// @ts-check
const { join } = require('node:path');
const { readFile } = require('node:fs/promises');
const tokenCategories = require('./tokenCategories.json');

const getDocs = (x, options) => x?.$extensions?.[options.docsExtension];
const capitalize = x => `${x.at(0).toUpperCase()}${x.slice(1)}`;

/** Returns a string with common indent stripped from each line. Useful for templating HTML */
function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

/** HTML attribute values should use single quotes to avoid breaking out of the value's surrounding double quotes */
function escapeDoubleQuotes(x) {
  return x?.toString().replaceAll('"', '\'');
}

/** Converts an object mapping css property names to values into a CSS rule for inlining into HTML */
function styleMap(objt) {
  return Object.entries(objt).map(([k, v]) => `${k}: ${escapeDoubleQuotes(v)}`).join(';');
}

/** When recursing over the token categories, it's helpful to get the containing category for things like docs and key names */
function getParentCollection(options, tokens) {
  let parent = options.parent ?? tokens;

  let collection;

  const key = options.path.split('.').pop();
  options.path.split('.').forEach((part, i, a) => {
    collection = parent[part];
    if (a[i + 1]) {
      parent = collection;
    }
  });

  return { parent, key };
}

/** Try to get the path to a token source file. Not all object values in a token collection have that metadata attached */
function getFilePathGuess(collection) {
  return Object.values(collection).reduce((path, val) =>
      path || typeof val !== 'object' ? path
            : '$value' in val ? val.filePath
            : getFilePathGuess(val), '');
}

/** Get the markdown description in a category's docs extension */
function getDescription(collection, options) {
  const {
    filePath = getFilePathGuess(collection),
    description = '',
    descriptionFile,
  } = getDocs(collection, options) ?? {};

  if (description) {
    return description;
  } else if (descriptionFile) {
    return readFile(join(process.cwd(), filePath, '..', descriptionFile), 'utf-8');
  } else {
    return '';
  }
}

/** @typedef {ReturnType<import('@rhds/tokens/js/meta.js')['tokens']['get']>} DesignToken */
/** @typedef {import('custom-elements-manifest').CssCustomProperty} CssCustomProperty */
/** @param {DesignToken|CssCustomProperty} token*/
function getVariableSyntax(token) {
  return `var(--${token.name}, ${escapeDoubleQuotes(token.$value ?? token.default)})`;
}

function copyCell(token) {
  const variable = getVariableSyntax(token);
  return /* html */`
    <td class="copy-cell">
      <uxdot-copy-button copy="${variable}"></uxdot-copy-button>
      <uxdot-copy-button copy="${getTokenHref(token)}">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/>
        </svg>
      </uxdot-copy-button>
    </td>
  `;
}

function getTokenCategorySlug(token) {
  const name = `--${token.name}`.replace('----', '--');
  const data = require('@rhds/tokens/meta.js').tokens.get(name);
  if (!data) {
    throw new Error(`Could not find token ${name}`);
  } else {
    return data?.attributes?.category;
  }
}

function getTokenHref(token) {
  return `https://ux.redhat.com/tokens/${getTokenCategorySlug(token)}/#${token.name}`;
}

module.exports = {
  capitalize,
  copyCell,
  dedent,
  escapeDoubleQuotes,
  getDescription,
  getDocs,
  getParentCollection,
  getTokenHref,
  getVariableSyntax,
  styleMap,
};
