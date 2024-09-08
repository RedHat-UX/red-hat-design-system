// @ts-check
const { tokens: tokensMeta } = require('@rhds/tokens/meta.js');
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');
const tinycolor = require('tinycolor2');

const {
  capitalize,
  copyCell,
  resolveTokens,
  getDocs,
  dedent,
  isThemeColorToken,
  styleMap,
  classMap,
} = require('../_plugins/tokensHelpers.cjs');

/* eslint-disable jsdoc/check-tag-names */
/** @import {DesignToken} from '../_plugins/tokensHelpers.cjs' */
/**
 * @typedef {object} Options
 * @property {typeof tokensJSON} tokens tokens to render
 * @property {string} name most-specific token attribute
 * @property {string} path tokens path
 * @property {string} slug tokens slug
 * @property {number} level heading level
 * @property {DesignToken} [parent] parent tokens
 * @property {DesignToken[]} [themeTokens] theme tokens in the category
 * @property {string[]} [exclude] token paths to exclude from render
 * @property {string[]} [include] token paths to include in render
 */
/* eslint-enable jsdoc/check-tag-names */

// for editor highlighting
const html = String.raw;

module.exports = class TokensPage {
  data() {
    return {
      layout: 'layouts/pages/basic.njk',
      permalink: data => !data?.cat?.slug ? null
        : `/tokens/${data.cat.slug}/index.html`,
      eleventyComputed: {
        title: data =>
          data.title
            || `${capitalize(data.cat.title || data.cat.slug)} tokens`,
      },
      hasToc: true,
      tocTags: [
        'h2',
      ],
      pagination: {
        size: 1,
        alias: 'cat',
        data: 'collections.token',
      },
      tokenSearch: true,
      importElements: [
        'rh-table',
      ],
    };
  }

  themeTokensCardCount = 1;

  /** @param {DesignToken} token */
  getTokenLightness(token) {
    const meta = tokensMeta.get(`--${token.name}`);
    const value =
       meta?.$value
    || !Array.isArray(meta?.original.$value) ? ''
     : meta?.original.$value.find(x =>
       x.toString().endsWith('lightest}')
        || x.toString().endsWith('light}'));
    const derefed =
      `--rh-${value?.toString().replace(/{(.*)}/, '$1').replace(/\./g, '-')}`;
    const derefedToken = meta?.$value ? meta : tokensMeta.get(derefed);
    const color = tinycolor(derefedToken?.$value?.toString());
    const isDark = color.isDark();
    const isLight = color.isLight();
    return { isDark, isLight };
  }

  /** @param {Options} options */
  getThemeTokens(options) {
    const parts = options.path?.split('.') ?? [];
    const themeTokens = [];

    if (parts.at(0) === 'color' && parts.length === 2) {
      const prefix = `rh-color-${parts.at(1)}`;
      for (const token of tokensMeta.values()) {
        if (isThemeColorToken(token) && token.name.startsWith(prefix)) {
          themeTokens.push(token);
        }
      }
    }
    return themeTokens;
  }

  /**
   * Generate an HTML table of tokens
   * @param {Options} options options
   */
  renderTable(options) {
    const tokens = Object.values(options.tokens).filter(x => x.$value);
    const { name } = options;
    const example = getDocs(options.tokens)?.example ?? '';

    if (!tokens.length || name.startsWith('$')) {
      return '';
    }

    return dedent(html`
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

    return isHSLorRGB ? '' : html`
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
                  : isFont ? (example || token.attributes?.aliases?.[0] || 'Aa')
                  : name === 'breakpoint' ? `
                    <img src="/assets/breakpoints/device-${token.name}.svg" role="presentation">`
                  : example}
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
                  <details>
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
                          <td class="sample">
                            <samp class="${classes}">${token.path.includes('text') ? 'Aa' : example}</samp>
                          </td>
                          <td class="token name">
                            <uxdot-copy-button>--${token.name}-rgb</uxdot-copy-button>
                          </td>
                          <td><code>rgb(${r}, ${g}, ${b})</code></td>
                          <td>To modify opacity</td>
                          ${copyCell(token)}
                        </tr>
                        <tr id="${token.name}-hsl" style="--color: hsl(${h} ${s}% ${l}%)">
                          <td class="sample">
                            <samp class="${classes}">${token.path.includes('text') ? 'Aa' : example}</samp>
                          </td>
                          <td class="token name">
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

  /** @param {Options} options */
  async renderIncludes(options) {
    if (Array.isArray(options.include)) {
      const includes = await Promise.all(
        options.include.map(path => this.renderCategory({
          ...options,
          path,
          level: 2,
          include: [],
          tokens: path.split('.').reduce((collection, key) => {
            options.parent = collection;
            return collection[key];
          }, tokensJSON),
        })),
      );
      return includes.join('\n');
    } else {
      return '';
    }
  }

  /** @param {Options} options */
  renderThemeTokensCard(options) {
    const { level = 1 } = options;
    const themeTokens = this.getThemeTokens(options);
    const slug = (this.themeTokensCardCount++).toString();
    return !themeTokens?.length ? '' : html`
      <rh-card id="surface-${slug}"
               class="swatches"
               color-palette="lightest">
        <h${level + 1} slot="header">Theme Tokens</h${level + 1}>
        <label for="picker-${slug}" slot="header">Color Palette</label>
        <rh-context-picker id="picker-${slug}"
                           slot="header"
                           allow="lightest,darkest"
                           target="surface-${slug}"></rh-context-picker>
        ${themeTokens.map(token => token.path.includes('text') ? html`
        <samp class="swatch font ${classMap(this.getTokenLightness(token))}"
              style="--swatch-color: var(--${token.name})">
          <span>Aa</span> <span>--${token.name}</span>
        </samp>` : token.path.includes('icon') ? html`
        <samp class="swatch icon ${classMap(this.getTokenLightness(token))}"
              style="--swatch-color: var(--${token.name})">
          <rh-icon icon="unknown-fill" set="ui"></rh-icon>
          <span>--${token.name}</span>
        </samp>` : token.path.includes('border') ? html`
        <samp class="swatch border ${classMap(this.getTokenLightness(token))}"
              style="--swatch-color: var(--${token.name})">
          <span>--${token.name}</span>
        </samp>` : html`
        <samp class="swatch color ${classMap(this.getTokenLightness(token))}"
              style="--swatch-color: var(--${token.name})">
          <span>--${token.name}</span>
        </samp>`).join('')}
      </rh-card>
    `;
  }

  /** @param {Options} options */
  async renderChildren(options) {
    const include = [];
    const parent = options.tokens;
    const level = (options.level ?? 1) + 1;
    const kids = await Promise.all(Object.entries(options.tokens)
        .filter(([key, value]) =>
          typeof value === 'object'
            && value !== null
            && !value.$value
            && !key.startsWith('$')
            && !(options.exclude ?? []).includes(key))
        .map(([name, tokens]) => this.renderCategory({
          ...options, include, name, tokens, parent, level,
          path: `${options.path}.${name}`.replace('..', '.').replace(/^\./, ''),
          slug: `${options.slug}-${name}`.toLowerCase(),
        })));
    return kids.join('\n');
  }

  /** @param {Options} options */
  async renderContent(options) {
    const docs = getDocs(options.tokens);
    const heading = docs?.heading ?? capitalize(options.name.replace('-', ' '));
    const permalink = options.level === 1 ? '' : html`
      <uxdot-copy-permalink class="h${options.level}">
        <h${options.level} id="${options.slug}">
          <a href="#${options.slug}">${heading}</a>
        </h${options.level}>
      </uxdot-copy-permalink>`;

    return html`
      ${permalink}

      <div class="description">

        ${dedent(options.tokens.$description ?? '')}

      </div>

      ${this.renderThemeTokensCard(options)}
      ${this.renderTable(options)}
      ${await this.renderChildren(options)}
      ${await this.renderIncludes(options)}
    `;
  }

  /** @param {Options} options */
  async renderCategory(options) {
    // these are token metadata, don't display them
    switch (options.name) {
      case 'attributes':
      case 'original':
      case '_':
        return '';
    }

    const content = await this.renderContent(options);

    /**
     * 0. render the description
     * 1. get all the top-level $value-bearing objects and render them
     * 2. for each remaining object, recurse
     */
    if (!options.parent) {
      return html`
        <div class="token-category"
          data-name="${options.name}"
          data-path="${options.path}"
          data-slug="${options.slug}">
          ${content}
        </div>
      `;
    } else if (options.level >= 4) {
      return html`
        <div class="token-category level-2"
          data-name="${options.name}"
          data-parent="${options.parent?.name}"
          data-path="${options.path}"
          data-slug="${options.slug}">
          ${content}
        </div>
      `;
    } else {
      return html`
        <section id="${options.name}"
          class="token-category level-${options.level - 1}"
          data-name="${options.name}"
          data-parent="${options.parent?.name}"
          data-path="${options.path}"
          data-slug="${options.slug}">
          ${content}
        </section>
      `;
    }
  }

  async render({ cat }) {
    const { exclude, include, path, slug } = cat;
    const name = path.split('.').pop();
    const tokens = resolveTokens(path);
    return dedent(html`
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <link rel="stylesheet" href="/styles/samp.css">
      <link rel="stylesheet" href="/styles/tokens-pages.css">
      <script type="module" src="/assets/javascript/tokens-pages.js"></script>
      ${await this.renderCategory({ tokens, name, path, slug, level: 1, exclude, include })}
      ${await this.renderFile('./docs/_includes/partials/component/feedback.html')}
    `);
  }
};
