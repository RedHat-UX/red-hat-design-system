const { join } = require('node:path');
const { tokens: tokensMeta } = require('@rhds/tokens/meta.js');
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');
const tinycolor = require('tinycolor2');

const {
  capitalize,
  copyCell,
  dedent,
  getDescription,
  getDocs,
  getParentCollection,
  styleMap,
} = require('./tokensHelpers.cjs');

const isThemeColorToken = token =>
  token.$type === 'color' && Array.isArray(token.original?.$value);

function classMap(classInfo) {
  return Object.keys(classInfo)
      .filter(key => classInfo[key])
      .join(' ');
}

/**
 * Generate an HTML table of tokens
 * @param {object} [opts]
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
  <rh-table>
    <table>
      <thead>
        <tr>
          <th scope="col" data-label="Example"><abbr title="Example">Ex.</abbr></th>
          <th scope="col" data-label="Token name">Token name</th>
          <th scope="col" data-label="Value">Value</th>
          <th scope="col" data-label="Use case">Use case</th>
          <th scope="col" data-label="Copy"></th>
        </tr>
      </thead>
      <tbody>
      ${tokens.map(token => {
    if (!token.path || name === 'attributes' || name === 'original' || token.name === '_') {
      return '';
    }
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
    const isLight =
      token.path.includes('on-light')
      || (token.attributes?.subitem !== 'on-light'
      && token.attributes?.subitem !== 'on-dark');
    const isOpacity = !!token.path.includes('opacity');
    const isSpace = !!token.path.includes('space');
    const isBreakpoint = !!token.path.includes('breakpoint');
    const isHeading = !!token.path.includes('heading');

    const classes = classMap({
      'light': isLight,
      'dark': !isLight,
      'color': isColor,
      'crayon': isCrayon,
      'dimension': isDimension,
      'family': isFamily,
      'font': isFont,
      'radius': isRadius,
      'size': isSize,
      'weight': isWeight,
      'width': isWidth,
      'box-shadow': token.path.includes('box-shadow'),
      'border': token.path.includes('border'),
      'sm': token.path.includes('sm'),
      'md': token.path.includes('md'),
      'lg': token.path.includes('lg'),
      'opacity': isOpacity,
      'space': isSpace,
      'length': token.path.includes('length'),
      'icon': token.path.includes('icon'),
      'breakpoint': isBreakpoint,
      'heading': isHeading,
      'code': token.path.includes('code'),
    });

    return isHSLorRGB ? '' : /* html */`
          <tr id="${token.name}"
              class="${classes}"
              style="${styleMap({
      '--samp-radius': isRadius ? token.$value : 'initial',
      '--samp-width': isWidth ? token.$value : 'initial',
      '--samp-color': isColor ? token.$value : 'initial',
      '--samp-opacity': isOpacity ? token.$value : 'initial',
      '--samp-space': isSpace ? token.$value : 'initial',
      '--samp-font-family': isFamily ? token.$value : 'var(--rh-font-family-body-text)',
      '--samp-font-size': isSize ? token.$value : 'var(--rh-font-size-heading-md)',
      '--samp-font-weight': isWeight ? token.$value : 'var(--rh-font-weight-body-text-regular)',
      [`--samp-${token.$type === 'dimension' ? `${name}-size` : name}`]: token.$value,
      [`${token.$type === 'dimension' && token.attributes.category === 'space' ? `--samp-${name}-color` : ``}`]: isSpace ? token.original['$extensions']['com.redhat.ux'].color : '',
    })}">
            <td data-label="Example">
              <samp class="${classes}">
              ${isSpace ? `<span class="${parseInt(token.$value) < 16 ? `offset` : ''}">${parseInt(token.$value)}</span>` : ``}
              ${isColor && token.path.includes('text') ? 'Aa'
              : isFont ? (docs?.example ?? token.attributes?.aliases?.[0] ?? 'Aa')
              : name === 'breakpoint' ? `
                <img src="/assets/breakpoints/device-${token.name}.svg" role="presentation">`
              : docs?.example ?? ''}
              </samp>
            </td>
            <td data-label="Token name">
              <uxdot-copy-button>--${token.name}</uxdot-copy-button>
            </td>
            <td data-label="Value">
              ${( isDimension ? `<code>${token.$value}<code>`
                : isColor ? `<code style="--color: ${token.$value}">${token.$value}</code> `
                : isWeight ? `
                  <code class="numerical">${token.$value}</code>
                  <code class="common">${token.attributes?.aliases?.[0] ?? ''}</code>`
                : `<code>${token.$value}</code>`
              )}
            </td>
            <td data-label="Use case">${token.$description ?? ''}</td>
            ${copyCell(token)}
          </tr>${!isCrayon ? '' : `
          <tr class="variants">
            <td colspan="5">
              <details ${options.attrs({ type: 'details', token })}>
                <summary title="Color function variants">Color function variants</summary>
                  <rh-table>
                    <table class="${classes}"
                          style="${styleMap({ '--samp-color': isColor ? token.$value : 'initial' })}">
                      <thead>
                      <tr>
                        <th scope="col" data-label="Example"><abbr title="Example">Ex.</abbr></th>
                        <th scope="col" data-label="Token name">Token name</th>
                        <th scope="col" data-label="Value">Value</th>
                        <th scope="col" data-label="Use case">Use case</th>
                        <th scope="col" data-label="Copy"></th>
                      </tr>
                    </thead>
                    <tbody>
                    <tr id="${token.name}-rgb" style="--color: rgb(${r}, ${g}, ${b})">
                      <td class="sample"><samp class="${classes}">${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                      <td ${options.attrs({ type: 'name', token })} class="token name">
                        <uxdot-copy-button>--${token.name}-rgb</uxdot-copy-button>
                      </td>
                      <td><code>rgb(${r}, ${g}, ${b})</code></td>
                      <td>To modify opacity</td>
                      ${copyCell(token)}
                    </tr>
                    <tr id="${token.name}-hsl" style="--color: hsl(${h} ${s}% ${l}%)">
                      <td class="sample"><samp class="${classes}">${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                      <td ${options.attrs({ type: 'name', token })} class="token name">
                        <uxdot-copy-button>--${token.name}-hsl</uxdot-copy-button>
                      </td>
                      <td><code>hsl(${h} ${s}% ${l}%)</code></td>
                      <td>To modify opacity</td>
                      ${copyCell(token)}
                    </tr>
                    </tbody>
                  </table>
                </rh-table>
              </details>
            </td>
          </tr>
        `}`;
  }).map(dedent).join('\n')}
      </tbody>
    </table>
  </rh-table>`).trim();
}

/** Returns Markdown from the Tokens source YAML files OR from linked markdown files */
function getTokenDocs(path) {
  const { parent, key } =
    getParentCollection({ path }, require('@rhds/tokens/json/rhds.tokens.json'));
  const collection = parent[key];
  return getDocs(collection, { docsExtension: 'com.redhat.ux' });
}

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {PluginOptions} [pluginOptions]
 */
module.exports = function RHDSPlugin(eleventyConfig, pluginOptions = { }) {
  eleventyConfig.addGlobalData('tokens', tokensJSON);
  eleventyConfig.addGlobalData('tokenCategories', require('./tokenCategories.json'));

  eleventyConfig.addCollection('token', function() {
    const cats = eleventyConfig.globalData?.tokenCategories;
    return cats.map(cat => {
      const docs = getTokenDocs(cat.path ?? cat.slug);
      const title = docs?.heading ?? cat.slug.replaceAll('-', ' ');
      const url = `/tokens/${cat.slug}/`;
      return { ...cat, title, docs, url };
    });
  });

  const slugify = eleventyConfig.getFilter('slugify');

  const assetsPath = pluginOptions.assetsPath ?? '/assets/';
  eleventyConfig.addPassthroughCopy('docs/tokens/**/*.{svg,jpe?g,png}');
  eleventyConfig.addPassthroughCopy({
    [join(__dirname, '11ty', '*')]: assetsPath,
  });

  eleventyConfig.addShortcode(
    'category',
    async function category(options = {}) {
      options.tokens ??= await eleventyConfig.globalData.tokens;
      options.attrs ??= pluginOptions.attrs ?? (() => '');

      const parentName = options.parentName ?? '';

      const path = options.path ?? '.';
      const level = options.level ?? 1;
      const exclude = options.exclude ?? [];

      const name = options.name ?? path.split('.').pop();

      // these are token metadata, don't display them
      if (name === 'attributes' || name === 'original' || name === '_') {
        return '';
      }

      const include =
        Array.isArray(options.include) ?
        options.include : [options.include].filter(Boolean);

      const { parent, key } =
        getParentCollection(
          options,
          eleventyConfig.globalData.tokens
          ?? eleventyConfig.globalData?.tokenCategories
        );

      const collection = parent[key] ?? {};
      const docs = getDocs(collection, options);
      const heading = docs?.heading ?? capitalize(name.replace('-', ' '));
      const slug = slugify(`${parentName} ${name}`.trim()).toLowerCase();

      /**
       * is the object a child collection?
       * @example isChildEntry(['blue', tokens.color.blue]); // true
       * @example isChildEntry(['500', tokens.color.blue.500]); // false
       */
      const isChildEntry = ([key, value]) =>
        typeof value === 'object'
        && value !== null
        && !value.$value
        && !key.startsWith('$')
        && !exclude.includes(key);

      const children = Object.entries(collection)
          .filter(isChildEntry)
          .map(([key]) => ({
            path: `${options.path}.${key}`.replace('..', '.'),
            parent: collection,
            level: level + 1,
            parentName: `${parentName} ${name}`.trim(),
          }));

      const parts = path.split('.');

      const themeTokens = [];
      if (parts.at(0) === 'color' && parts.length === 2) {
        const prefix = `rh-color-${parts.at(1)}`;

        for (const token of tokensMeta.values()) {
          if (isThemeColorToken(token) && token.name.startsWith(prefix)) {
            themeTokens.push(token);
          }
        }
      }

      const childrenTokens = Object.values(collection).filter(x => x.$value);

      /**
       * 0. render the description
       * 1. get all the top-level $value-bearing objects and render them
       * 2. for each remaining object, recurse
       */
      return (!options.parent && !options.path.includes('.')) || include.includes(options.path) ? [
        dedent(await getDescription(collection, pluginOptions)),
        await table({ tokens: collection, options, name, docs }),
        ...await Promise.all(children.map(category)),
        ...await Promise.all(include.map(path => category({ path, level: level + 1 }))),
      ].join('\n')
      : dedent(/* html */`${(level >= 4) ? /* html */`
        <div class="token-category level-2" data-name="${name}" data-slug="${slug}">` : /* html */`
        <section id="${name}"
                 class="token-category level-${level - 1}"
                 data-name="${name}"
                 data-parent="${options.parent?.path}"
                 data-path="${options.path}"
                 data-slug="${slug}">`}
          <uxdot-copy-permalink class="h${level}">
            <h${level} id="${slug}"><a href="#${slug}">${heading}</a></h${level}>
          </uxdot-copy-permalink>
          <div class="description">\n\n${(dedent(await getDescription(collection, pluginOptions)))}\n\n</div>
          ${themeTokensCard({ slug, themeTokens, level })}
          ${await table({ tokens: collection, options, name, docs })}
          ${await table({ tokens: childrenTokens, options, name, docs })}
          ${(await Promise.all(children.map(category))).join('\n')}
          ${(await Promise.all(include.map(path => category({ path, level: level + 1 })))).join('\n')}${(level >= 4) ? /* html */`
        </div>` : /* html */`
        </section>
      `}`);
    });
};

function themeTokensCard({ level, slug, themeTokens }) {
  return !themeTokens.length ? '' : /* html*/`
  <rh-card id="surface-${slug}"
           class="swatches"
           color-palette="lightest">
    <h${level + 1} slot="header">Theme Tokens</h${level + 1}>
    <label for="picker-${slug}" slot="header">Color Palette</label>
    <rh-context-picker id="picker-${slug}"
                       slot="header"
                       allow="lightest,darkest"
                       target="surface-${slug}"></rh-context-picker>
    ${themeTokens.map(token => token.path.includes('text') ? /* html*/`
    <samp class="swatch font ${classMap(getLightness(token.name))}"
          style="--swatch-color: var(--${token.name})">
      <span>Aa</span> <span>--${token.name}</span>
    </samp>` : token.path.includes('icon') ? /* html */ `
    <samp class="swatch icon ${classMap(getLightness(token.name))}"
          style="--swatch-color: var(--${token.name})">
      <rh-icon icon="unknown-fill" set="ui"></rh-icon>
      <span>--${token.name}</span>
    </samp>` : token.path.includes('border') ? /* html */ `
    <samp class="swatch border ${classMap(getLightness(token.name))}"
          style="--swatch-color: var(--${token.name})">
      <span>--${token.name}</span>
    </samp>` : `
    <samp class="swatch color ${classMap(getLightness(token.name))}"
          style="--swatch-color: var(--${token.name})">
      <span>--${token.name}</span>
    </samp>`).join('')}
  </rh-card>`;
}

const deref = $value =>
  `rh-${$value.replace(/{(.*)}/, '$1').replaceAll('.', '-')}`;

function getLightness(name) {
  const token = tokensMeta.get(`--${name}`);
  const value =
       token.$value
    || token.original.$value.find(x => x.endsWith('lightest}') || x.endsWith('light}'));
  const derefed = `--${deref(value)}`;
  const derefedToken = token?.$value ? token : tokensMeta.get(derefed);

  const color = tinycolor(derefedToken.$value);
  const isDark = color.isDark();
  const isLight = color.isLight();
  return { isDark, isLight };
}

