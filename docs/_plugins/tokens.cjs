const { join } = require('node:path');
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');

const {
  capitalize,
  copyCell,
  dedent,
  getDescription,
  getDocs,
  getParentCollection,
  styleMap,
} = require('./tokensHelpers.cjs');


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
          <th></th>
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
                <img src="/assets/breakpoints/device-${token.name}.svg" role="presentation">`
              : docs?.example ?? ''}
              </samp>
            </td>
            <td ${options.attrs({ type: 'name', token })} class="token name">
              <uxdot-copy-button><code>--${token.name}</code></uxdot-copy-button>
            </td>
            <td ${options.attrs({ type: 'value', token })} class="token value
                     ${!isDimension ? '' : token.$value?.endsWith('rem') ? 'rem' : 'px'}
                     ${!isColor ? '' : 'color'}
                     ${!isHSLorRGB ? 'hex' : ''}">${(
              isDimension ? `
              <uxdot-copy-button><code>${token.$value}</code></uxdot-copy-button>`
            : isColor ? `
              <uxdot-copy-button style="--color: ${token.$value}">
                <code>${token.$value}</code>
              </button> `
            : isWeight ? `
              <uxdot-copy-button class="numerical"><code>${token.$value}</uxdot-copy-button>
              <uxdot-copy-button class="common"><code>${token.attributes?.aliases?.[0] ?? ''}</code></uxdot-copy-button>`
            : `
              <uxdot-copy-button><code>${token.$value}</code></uxdot-copy-button>`)}
            </td>
            <td>${token.$description ?? ''}</td>
            ${copyCell(token)}
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
                      <uxdot-copy-button><code>--${token.name}-rgb</code></uxdot-copy-button>
                    </td>
                    <td><uxdot-copy-button><code>rgb(${r}, ${g}, ${b})</code></uxdot-copy-button></td>
                    <td>To modify opacity</td>
                    ${copyCell(token)}
                  </tr>
                  <tr id="${token.name}-hsl" style="--color: hsl(${h} ${s}% ${l}%)">
                    <td class="sample"><samp>${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                    <td ${options.attrs({ type: 'name', token })} class="token name">
                      <uxdot-copy-button><code>--${token.name}-hsl</code></uxdot-copy-button>
                    </td>
                    <td><uxdot-copy-button><code>hsl(${h} ${s}% ${l}%)</code></uxdot-copy-button></td>
                    <td>To modify opacity</td>
                    ${copyCell(token)}
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

/** Returns Markdown from the Tokens source YAML files OR from linked markdown files */
function getTokenDocs(path) {
  const { parent, key } = getParentCollection({ path }, require('@rhds/tokens/json/rhds.tokens.json'));
  const collection = parent[key];
  return getDocs(collection, { docsExtension: 'com.redhat.ux' });
}

/**
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 * @param {PluginOptions} [pluginOptions={}]
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

  eleventyConfig.addShortcode('category',
                              async function category(options = {}) {
                                options.tokens ??= await eleventyConfig.globalData.tokens;
                                options.attrs ??= pluginOptions.attrs ?? (() => '');

                                const parentName = options.parentName ?? '';

                                const path = options.path ?? '.';
                                const level = options.level ?? 2;
                                const exclude = options.exclude ?? [];
                                const include = Array.isArray(options.include) ? options.include : [options.include].filter(Boolean);

                                const name = options.name ?? path.split('.').pop();
                                const { parent, key } = getParentCollection(options, eleventyConfig.globalData.tokens ?? eleventyConfig.globalData?.tokenCategories);
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
  })))).join('\n')/* eslint-enable indent*/}
        </section>`);
                              });
};
