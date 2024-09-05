// @ts-check
const { join } = require('node:path');
const { readFile } = require('node:fs/promises');

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
  const parent = options.parent ?? tokens;
  const key = options.path.split('.').pop();
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
  if (collection.$description) {
    return collection.$description;
  }
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

/** @param {DesignToken|CssCustomProperty} token*/
function getVariableSyntax(token) {
  return `var(--${token.name}, ${escapeDoubleQuotes(token.$value ?? token.default)})`;
}

function copyCell(token) {
  const variable = getVariableSyntax(token);
  return /* html */`
    <td data-label="Copy">
      <div>
        <uxdot-copy-button copy="${variable}"></uxdot-copy-button>
        <uxdot-copy-button copy="${getTokenHref(token)}" icon="link"></uxdot-copy-button>
      </div>
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
