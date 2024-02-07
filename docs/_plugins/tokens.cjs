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


function classMap(classInfo) {
  return Object.keys(classInfo)
    .filter(key => classInfo[key])
    .join(' ');
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
        const isLight = token.path.includes('on-light') || (token.attributes?.subitem !== 'on-light' && token.attributes?.subitem !== 'on-dark');

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
          });

        return isHSLorRGB ? '' : /* html */`
          <tr id="${token.name}"
              class="${classes}"
              style="${styleMap({
                '--samp-radius': isRadius ? token.$value : 'initial',
                '--samp-width': isWidth ? token.$value : 'initial',
                '--samp-color': isColor ? token.$value : 'initial',
                '--samp-font-family': isFamily ? token.$value : 'var(--rh-font-family-body-text)',
                '--samp-font-size': isSize ? token.$value : 'var(--rh-font-size-heading-md)',
                '--samp-font-weight': isWeight ? token.$value : 'var(--rh-font-weight-body-text-regular)',
                [`--samp-${token.attributes.type === 'icon' && token.$type === 'dimension' ? `${name}-size` : name}`]: token.$value,
              })}">
            <td data-label="Example">
              <samp class="${classes}" ${name === 'space' ? ` style="background-color: ${getDocs(token, options)?.color ?? ''};"` : ''}>
              ${isColor && token.path.includes('text') ? 'Aa'
              : isFont ? (docs?.example ?? token.attributes?.aliases?.[0] ?? 'Aa')
              : name === 'breakpoint' ? `
                <img src="/assets/breakpoints/device-${token.name}.svg" role="presentation">`
              : docs?.example ?? ''}
              </samp>
            </td>
            <td data-label="Token name">
              <uxdot-copy-button><code>--${token.name}</code></uxdot-copy-button>
            </td>
            <td data-label="Value">
              ${( isDimension ? `<uxdot-copy-button><code>${token.$value}</code></uxdot-copy-button>`
                : isColor ? `<uxdot-copy-button style="--color: ${token.$value}"><code>${token.$value}</code></uxdot-copy-button> `
                : isWeight ? `
                  <uxdot-copy-button class="numerical"><code>${token.$value}</uxdot-copy-button>
                  <uxdot-copy-button class="common"><code>${token.attributes?.aliases?.[0] ?? ''}</code></uxdot-copy-button>`
                : `<uxdot-copy-button><code>${token.$value}</code></uxdot-copy-button>`
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
                    style="${styleMap({
                      '--samp-color': isColor ? token.$value : 'initial',
                    })}">
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
                        <uxdot-copy-button><code>--${token.name}-rgb</code></uxdot-copy-button>
                      </td>
                      <td><uxdot-copy-button><code>rgb(${r}, ${g}, ${b})</code></uxdot-copy-button></td>
                      <td>To modify opacity</td>
                      ${copyCell(token)}
                    </tr>
                    <tr id="${token.name}-hsl" style="--color: hsl(${h} ${s}% ${l}%)">
                      <td class="sample"><samp class="${classes}">${token.path.includes('text') ? 'Aa' : docs?.example ?? ''}</samp></td>
                      <td ${options.attrs({ type: 'name', token })} class="token name">
                        <uxdot-copy-button><code>--${token.name}-hsl</code></uxdot-copy-button>
                      </td>
                      <td><uxdot-copy-button><code>hsl(${h} ${s}% ${l}%)</code></uxdot-copy-button></td>
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
        ${(level >= 4) ? /* html */`
          <div class="token-category level-2">
        ` : /* html */`
          <section id="${name}" class="token-category level-${level - 1}">
        `}
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
          ${(level >= 4) ? /* html */`
            </div>
          ` : /* html */`
            </section>
          `}
        `);
    });
};
