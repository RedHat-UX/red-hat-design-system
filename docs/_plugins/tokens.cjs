const { readFile } = require('node:fs/promises');
const { join } = require('node:path');

const getDocs = (x, options) => x?.$extensions?.[options.docsExtension];
const capitalize = x => `${x.at(0).toUpperCase()}${x.slice(1)}`;
const isRef = x => x?.original?.$value?.startsWith?.('{') ?? false;
const deref = x => `rh-${x.original.$value.replace(/[{}]/g, '').split('.').join('-')}`;

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
    descriptionFile
  } = getDocs(collection, options) ?? {};

  if (description) {
    return description;
  } else if (descriptionFile) {
    return readFile(join(process.cwd(), filePath, '..', descriptionFile), 'utf-8');
  } else {
    return '';
  }
}

function copyCell(token, variable) {
  return /* html */`
    <td class="copy-cell">
      <rh-tooltip position="top-start">
        <button class="copy-button" data-copy="${variable}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M30.286 6.857q.714 0 1.214.5t.5 1.214v21.714q0 .714-.5 1.214t-1.214.5H13.143q-.714 0-1.214-.5t-.5-1.214v-5.143H1.715q-.714 0-1.214-.5t-.5-1.214v-12q0-.714.357-1.571T1.215 8.5l7.286-7.286q.5-.5 1.357-.857T11.429 0h7.429q.714 0 1.214.5t.5 1.214v5.857q1.214-.714 2.286-.714h7.429zm-9.715 3.804L15.232 16h5.339v-5.339zM9.143 3.804 3.804 9.143h5.339V3.804zm3.5 11.553 5.643-5.643V2.285h-6.857v7.429q0 .714-.5 1.214t-1.214.5H2.286v11.429h9.143v-4.571q0-.714.357-1.571t.857-1.357zm17.071 14.357V9.143h-6.857v7.429q0 .714-.5 1.214t-1.214.5h-7.429v11.429h16z"/>
          </svg>
        </button>
        <code slot="content">${variable}</code>
      </rh-tooltip>
      <rh-tooltip position="top-start">
        <button class="copy-button" data-copy="https://ux.redhat.com/tokens/#${token.name}">
          <!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path d="M172.5 131.1C228.1 75.51 320.5 75.51 376.1 131.1C426.1 181.1 433.5 260.8 392.4 318.3L391.3 319.9C381 334.2 361 337.6 346.7 327.3C332.3 317 328.9 297 339.2 282.7L340.3 281.1C363.2 249 359.6 205.1 331.7 177.2C300.3 145.8 249.2 145.8 217.7 177.2L105.5 289.5C73.99 320.1 73.99 372 105.5 403.5C133.3 431.4 177.3 435 209.3 412.1L210.9 410.1C225.3 400.7 245.3 404 255.5 418.4C265.8 432.8 262.5 452.8 248.1 463.1L246.5 464.2C188.1 505.3 110.2 498.7 60.21 448.8C3.741 392.3 3.741 300.7 60.21 244.3L172.5 131.1zM467.5 380C411 436.5 319.5 436.5 263 380C213 330 206.5 251.2 247.6 193.7L248.7 192.1C258.1 177.8 278.1 174.4 293.3 184.7C307.7 194.1 311.1 214.1 300.8 229.3L299.7 230.9C276.8 262.1 280.4 306.9 308.3 334.8C339.7 366.2 390.8 366.2 422.3 334.8L534.5 222.5C566 191 566 139.1 534.5 108.5C506.7 80.63 462.7 76.99 430.7 99.9L429.1 101C414.7 111.3 394.7 107.1 384.5 93.58C374.2 79.2 377.5 59.21 391.9 48.94L393.5 47.82C451 6.731 529.8 13.25 579.8 63.24C636.3 119.7 636.3 211.3 579.8 267.7L467.5 380z"/>
          </svg>
        </button>
        <span slot="content">Copy Link</span>
      </rh-tooltip>
    </td>
  `;
}

/**
 * Generate an HTML table of tokens
 * @param {object} [opts={}]
 * @param {object} opts.tokens the collection of tokens to render
 * @param {string} opts.name the name of the collection
 * @param {object} opts.docs the docs extension for the collection
 * @param {Options} opts.options options
 */
function table({ tokens, name = '', docs, options } = {}) {
  if (!tokens.length || name.startsWith('$')) {
    return '';
  }
  return dedent(/* html */`
    <table>
      <thead>
        <tr>
          <th><abbr title="Example">Ex.</abbr></th>
          <th>Token name</th>
          <th>Value</th>
          <th>Use case</th>
        </tr>
      </thead>
      ${tokens.map(token => { /* eslint-disable indent */
        const { r, g, b } = token.attributes?.rgb ?? {};
        const { h, s, l } = token.attributes?.hsl ?? {};
        const isColor = !!token.path.includes('color');
        const isCrayon = isColor && token.name.match(/0$/);
        const isDimension = token.$type === 'dimension';
        const isHSLorRGB = isColor && !!token.name.match(/(hsl|rgb)$/);
        const isFamily = !!token.path.includes('family');
        const isFont = !!token.path.includes('font');
        const isRadius = !!token.path.includes('radius');
        const isSize = !!token.path.includes('size');
        const isWeight = !!token.path.includes('weight');
        const isWidth = !!token.path.includes('width');
        const variable = `var(--${token.name}, ${escapeDoubleQuotes(token.$value)})`;

        return isHSLorRGB ? '' : /* html */`
        <tbody>
          <tr id="${token.name}"
              class="${token.path.join(' ')}${token.attributes.isLight ? ' light' : ''}"
              style="${styleMap({
                '--radius': isRadius ? token.$value : 'initial',
                '--width': isWidth ? token.$value : 'initial',
                '--color': isColor ? token.$value : 'initial',
                '--font-family': isFamily ? token.$value : 'var(--rh-font-family-body-text)',
                '--font-size': isSize ? token.$value : 'var(--rh-font-size-heading-md)',
                '--font-weight': isWeight ? token.$value : 'var(--rh-font-weight-body-text-regular)',
                [`--${token.attributes.type === 'icon' && token.$type === 'dimension' ? `${name}-size` : name}`]: token.$value,
              })}">
            <td class="sample">
              <samp${name === 'space' ? ` style="background-color: ${getDocs(token, options)?.color ?? ''};"` : ''}>
              ${isColor && token.path.includes('text') ? 'Aa'
              : isFont ? (docs?.example ?? token.attributes?.aliases?.[0] ?? 'Aa')
              : name === 'breakpoint' ? `
                <img src="assets/device-${token.name}.svg" role="presentation">`
              : docs?.example ?? ''}
              </samp>
            </td>
            <td ${options.attrs({ type: 'name', token })} class="token name">
              <button class="copy-button"><code>--${token.name}</code></button>
            </td>
            <td ${options.attrs({ type: 'value', token })} class="token value
                     ${!isDimension ? '' : token.$value?.endsWith('rem') ? 'rem' : 'px'}
                     ${!isColor ? '' : 'color'}
                     ${!isHSLorRGB ? 'hex' : ''}">${(
              isDimension ? `
              <button class="copy-button"><code>${token.$value}</code></button>`
            : isColor ? `
              <button class="copy-button" style="--color: ${token.$value}">
                <code>${token.$value}</code>
              </button> `
            : isWeight ? `
              <button class="copy-button numerical"><code>${token.$value}</button>
              <button class="copy-button common"><code>${token.attributes?.aliases?.[0] ?? ''}</code></button>`
            : `
              <button class="copy-button"><code>${token.$value}</code></button>`)}
            </td>
            <td>${token.$description ?? ''}</td>
            ${copyCell(token, variable)}
          </tr>${!isCrayon ? '' : `
          <tr class="variants">
            <td colspan="5">
              <details ${options.attrs({ type: 'details', token })}>
                <summary title="Color function variants"></summary>
                <table class="${token.path.join(' ')}${token.attributes.isLight ? ' light' : ''}"
                       style="--color: ${token.$value}">
                  <tr id="${token.name}-rgb" style="--color: rgb(${r}, ${g}, ${b})">
                    <td class="sample"><samp>${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                    <td ${options.attrs({ type: 'name', token })} class="token name">
                      <button class="copy-button"><code>--${token.name}-rgb</code></button>
                    </td>
                    <td><button class="copy-button"><code>rgb(${r}, ${g}, ${b})</code></button></td>
                    <td>To modify opacity</td>
                    ${copyCell(token, variable)}
                  </tr>
                  <tr id="${token.name}-hsl" style="--color: hsl(${h} ${s}% ${l}%)">
                    <td class="sample"><samp>${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                    <td ${options.attrs({ type: 'name', token })} class="token name">
                      <button class="copy-button"><code>--${token.name}-hsl</code></button>
                    </td>
                    <td><button class="copy-button"><code>hsl(${h} ${s}% ${l}%)</code></button></td>
                    <td>To modify opacity</td>
                    ${copyCell(token, variable)}
                  </tr>
                </table>
              </details>
            </td>
          </tr>
        </tbody>`}`;
        }).map(dedent).join('\n')}
    </table>`).trim();
    /* eslint-enable indent */
}

/**
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 * @param {PluginOptions} [pluginOptions={}]
 */
module.exports = function RHDSPlugin(eleventyConfig, pluginOptions = { }) {
  /** Returns Markdown from the Tokens source YAML files OR from linked markdown files */
  eleventyConfig.addFilter('getTokenDocs', function(path) {
    const tokens = require('@rhds/tokens/json/rhds.tokens.json');
    const { parent, key } = getParentCollection({ path }, tokens);
    const collection = parent[key];
    return getDocs(collection, pluginOptions);
  });

  eleventyConfig.addCollection('token', function() {
    const cats = eleventyConfig.globalData?.tokenCategories ?? require('./tokenCategories.json');
    const getDocs = eleventyConfig.getFilter('getTokenDocs');
    return cats.map(cat => {
      const docs = getDocs(cat.path ?? cat.slug);
      const title = docs?.heading ?? cat.slug.replaceAll('-', ' ');
      const url = `/tokens/${cat.slug}/`;
      return { ...cat, title, docs, url };
    });
  });

  const slugify = eleventyConfig.getFilter('slugify');

  const assetsPath = pluginOptions.assetsPath ?? '/assets/';
  eleventyConfig.addPassthroughCopy({ [join(__dirname, '11ty', '*')]: assetsPath });

  eleventyConfig.addShortcode('category',
    async function category(options = {}) {
      options.attrs ??= pluginOptions.attrs ?? (() => '');
      options.docsExtension ??= pluginOptions.docsExtension ?? 'com.redhat.ux';

      const tokens = require('@rhds/tokens/json/rhds.tokens.json');

      const isLast = options.isLast ?? false;
      const parentName = options.parentName ?? '';

      const path = options.path ?? '.';
      const level = options.level ?? 2;
      const exclude = options.exclude ?? [];
      const include = Array.isArray(options.include) ? options.include : [options.include].filter(Boolean);

      const name = options.name ?? path.split('.').pop();
      const { parent, key } = getParentCollection(options, tokens);
      const collection = parent[key];
      const docs = getDocs(collection, options);
      const heading = docs?.heading ?? capitalize(name.replace('-', ' '));
      const slug = slugify(`${parentName} ${name}`.trim()).toLowerCase();

      /**
       * is the object a child collection?
       * @example isChildEntry(['blue', tokens.color.blue]); // true
       * @example isChildEntry(['500', tokens.color.blue.500]); // false
       */
      const isChildEntry = ([key, value]) =>
        !value.$value && typeof value === 'object' && !key.startsWith('$') && !exclude.includes(key);

      const children = Object.entries(collection)
        .filter(isChildEntry)
        .map(([key], i, a) => ({
          path: key,
          parent: collection,
          level: level + 1,
          parentName: `${parentName} ${name}`.trim(),
          isLast: i === a.length - 1,
        }));

      /**
       * 0. render the description
       * 1. get all the top-level $value-bearing objects and render them
       * 2. for each remaining object, recurse
       */
      return dedent(/* html */`
        <section id="${name}" class="token-category level-${level - 1}">
          <h${level} id="${slug}">${heading}<a href="#${slug}">#</a></h${level}>
          <div class="description">

          ${(dedent(await getDescription(collection, pluginOptions)))}

          </div>
          ${await table({ /* eslint-disable indent */
            tokens: Object.values(collection).filter(x => x.$value),
            options,
            name,
            docs,
          })/* eslint-enable indent */}
          ${(await Promise.all(children.map(category))).join('\n')}
          ${(await Promise.all(include.map((path, i, a) => category({ /* eslint-disable indent */
              path,
              level: level + 1,
              isLast: !a[i + 1],
            })))).join('\n')/* eslint-enable indent*/}${isLast ? '' : `
          <a class="btt" href="#">Top</a>`}
        </section>`);
    });
};
