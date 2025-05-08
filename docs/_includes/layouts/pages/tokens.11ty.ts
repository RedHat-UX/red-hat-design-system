import type { Color, DesignToken, TokenName } from '@rhds/tokens';

import tinycolor from 'tinycolor2';
import { tokens as tokensMeta } from '@rhds/tokens/meta.js';
import { createRequire } from 'node:module';
import { Renderer } from '#eleventy.config';

const require = createRequire(import.meta.url);
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');

import {
  capitalize,
  copyCell,
  resolveTokens,
  getDocs,
  isThemeColorToken,
  styleMap,
  classMap,
} from '#11ty-plugins/tokensHelpers.js';

interface Options {
  tokens: DesignToken;
  name: string;
  path: string;
  slug: string;
  level: number;
  parent?: DesignToken;
  themeTokens?: DesignToken[];
  exclude?: string[];
  include?: string[];
  seenPaths?: Set<string>;
}

interface TokenCategory {
  include: string[];
  exclude: string[];
  path: string;
  slug: string;
  title: string;
}

interface Data {
  title: string;
  tokenCategory: TokenCategory;
}

// for editor highlighting
const html = String.raw;

interface Data {
  title: string;
  tokenCategory: TokenCategory;
}

export default class TokensPage extends Renderer<Data> {
  data() {
    return {
      layout: 'layouts/pages/has-toc.njk',
      permalink: (data: Data): string | null => !data.tokenCategory?.slug ? null
        : `/tokens/${data.tokenCategory.slug}/index.html`,
      eleventyComputed: {
        title: (data: Data) =>
          data.title
            || `${capitalize(data.tokenCategory.title || data.tokenCategory.slug)} tokens`,
      },
      pagination: {
        size: 1,
        alias: 'tokenCategory',
        data: 'collections.tokenCategory',
      },
      tokenSearch: true,
    };
  }

  #themeTokensCardCount = 1;

  #getTokenLightness(token: DesignToken, palette: 'light' | 'dark') {
    const meta = tokensMeta.get(`--${token.name}` as TokenName);
    const value =
       meta?.$value
    || !Array.isArray(meta?.original?.$value) ? ''
     : meta?.original.$value.find((x: string | number) =>
       x.toString().endsWith(`${palette}est}`)
        || x.toString().endsWith(`${palette}}`));
    const derefed =
      `--rh-${value?.toString().replace(/{(.*)}/, '$1').replace(/\./g, '-')}` as const;
    const derefedToken = meta?.$value ? meta : tokensMeta.get(derefed as TokenName);
    const color = tinycolor(derefedToken?.$value?.toString());
    const isDark = color?.isDark();
    const isLight = color?.isLight();
    return { isDark, isLight };
  }

  #getThemeTokens(options: Options) {
    const parts = options.path?.split('.') ?? [];
    const themeTokens = [];
    if (parts.at(0) === 'color' && parts.length === 2) {
      const prefix = `rh-color-${parts.at(1)}`;
      for (const token of tokensMeta.values()) {
        if (isThemeColorToken(token) && token.name?.startsWith(prefix)) {
          themeTokens.push(token);
        }
      }
    }
    return themeTokens;
  }

  async #renderTable(options: Options) {
    if (options.slug === 'space') {
      return html`<uxdot-spacer-tokens-table></uxdot-spacer-tokens-table>`;
    }

    const tokens = Object.values(options.tokens)
        .filter((x: unknown): x is DesignToken =>
          !!(typeof x === 'object' && x && '$value' in x && !!x.$value));
    const { name } = options;
    if (!tokens.length || name.startsWith('$')) {
      return '';
    }

    const deprecatedTokens = tokens.filter(x => x.$deprecated);

    return html`
      <rh-table>
        <table>
          <thead>
            <tr>
              <th scope="col"><abbr title="Example">Ex.</abbr></th>
              <th scope="col">Token name</th>
              <th scope="col">Value</th>
              <th scope="col">Use case</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            ${(await Promise.all(tokens.filter(x => !x.$deprecated).map(token => this.#renderToken(token, options)))).join('\n')}
          </tbody>
        </table>
      </rh-table>${!deprecatedTokens.length ? '' : html`

      <rh-disclosure summary="Deprecated tokens"
                     style="--rh-color-surface: light-dark(var(--rh-color-surface-lighter), var(--rh-color-surface-darkest))">
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col"><abbr title="Example">Ex.</abbr></th>
                <th scope="col">Token name</th>
                <th scope="col">Value</th>
                <th scope="col">Deprecation reason</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(deprecatedTokens.map(token => this.#renderToken(token, options)))).join('\n')}
            </tbody>
          </table>
        </rh-table>
      </rh-disclosure>`}`.trim();
  }

  async #renderToken(token: DesignToken, { name, tokens }: Options) {
    const example = getDocs(tokens)?.example ?? '';

    if (!token.path
        || name === 'attributes'
        || name === 'original'
        || token.name === '_') {
      return '';
    }
    const isColor = !!token.path.includes('color');
    const isHSL = !!token.name?.match(/hsl$/);
    const isRGB = !!token.name?.match(/rgb$/);
    const isCrayon = isColor && token.name?.match(/0$/);
    const isDimension = token.$type === 'dimension';
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
      light: isLight,
      dark: !isLight,
      color: isColor,
      crayon: !!isCrayon,
      dimension: isDimension,
      family: isFamily,
      font: isFont,
      radius: isRadius,
      size: isSize,
      weight: isWeight,
      width: isWidth,
      ['box-shadow']: token.path.includes('box-shadow'),
      border: token.path.includes('border'),
      sm: token.path.includes('sm'),
      md: token.path.includes('md'),
      lg: token.path.includes('lg'),
      opacity: isOpacity,
      space: isSpace,
      length: token.path.includes('length'),
      icon: token.path.includes('icon'),
      breakpoint: isBreakpoint,
      heading: isHeading,
      code: token.path.includes('code'),
    });

    return html`
      <tr id="${token.name}"
          class="${classes}"
          style="${styleMap({
          '--samp-radius': isRadius ? token.$value : 'initial',
          '--samp-width': isWidth ? token.$value : 'initial',
          '--samp-color': isHSL ? `hsl(${token.$value})` : isRGB ? `rgb(${token.$value})` : isColor ? token.$value : 'initial',
          '--samp-opacity': isOpacity ? token.$value : 'initial',
          '--samp-space': isSpace ? token.$value : 'initial',
          '--samp-font-family': isFamily ? token.$value : 'var(--rh-font-family-body-text)',
          '--samp-font-size': isSize ? token.$value : 'var(--rh-font-size-heading-md)',
          '--samp-font-weight':
            isWeight ? token.$value : 'var(--rh-font-weight-body-text-regular)',
          [`--samp-${token.$type === 'dimension' ? `${name}-size` : name}`]: token.$value,
          [`${token.$type === 'dimension' && token.attributes?.category === 'space' ? `--samp-${name}-color` : ``}`]: isSpace ? token.original?.['$extensions']['com.redhat.ux'].color : '',
        })}">
        <td>
          <samp class="${classes}">
            ${!isSpace ? '' : html`<span class="${parseInt(token.$value) < 16 ? `offset` : ''}">${parseInt(token.$value)}</span>`}
            ${isColor && token.path.includes('text') ? 'Aa'
            : isFont ? (example || (token.attributes?.aliases as string[])?.[0] || 'Aa')
            : name === 'breakpoint' ? html`
            <img src="/assets/breakpoints/device-${token.name}.svg" role="presentation">`
            : example}
          </samp>
        </td>
        <td>
          <uxdot-copy-button>--${token.name}</uxdot-copy-button>
        </td>
        <td>
          ${( isDimension ? html`<code>${token.$value}<code>`
            : isColor ? html`<code style="--color: ${token.$value}">${token.$value}</code> `
            : isWeight ? html`
            <code class="numerical">${token.$value}</code>
            <code class="common">${(token.attributes?.aliases as string[])?.[0] ?? ''}</code>`
            : html`<code>${token.$value}</code>`
            )}
        </td>
        <td>
          ${await this.renderTemplate(token.$description ?? '', 'md')}
          ${await this.#renderTokenDeprecationReason(token)}
        </td>
        ${copyCell(token)}
      </tr>`;
  }

  async #renderIncludes(options: Options): Promise<string> {
    if (Array.isArray(options.include)) {
      const includes = await Promise.all(
        options.include.map(path => this.#renderCategory({
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

  #makeSwatches(palette: 'light' | 'dark') {
    return (token: DesignToken) => {
      const suffix = token.name === 'rh-color-surface' ? `${palette}est` : `on-${palette}`;
      const style = `--swatch-color: var(--${token.name}-${suffix})`;
      const classes = `swatch on-${palette} ${classMap(this.#getTokenLightness(token, palette))}`;
      return token.path.includes('text') ? html`
        <samp class="${classes} font" style="${style}">
          <span>Aa</span> <span>--${token.name}</span>
        </samp>` : token.path.includes('icon') ? html`
        <samp class="${classes} icon" style="${style}">
          <rh-icon icon="unknown-fill" set="ui"></rh-icon>
          <span>--${token.name}</span>
        </samp>` : token.path.includes('border') ? html`
        <samp class="${classes} border" style="${style}">
          <span>--${token.name}</span>
        </samp>` : html`
        <samp class="${classes} color" style="${style}">
          <span>--${token.name}</span>
        </samp>`;
    };
  }

  #renderThemeTokensCard(options: Options) {
    const { level = 1 } = options;
    const themeTokens = this.#getThemeTokens(options);
    const slug = (this.#themeTokensCardCount++).toString();
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
        ${themeTokens.map(this.#makeSwatches('light')).join('')}
        ${themeTokens.map(this.#makeSwatches('dark')).join('')}
      </rh-card>
    `;
  }

  async #renderChildren(options: Options): Promise<string> {
    const include: string[] = [];
    const parent = options.tokens;
    const level = (options.level ?? 1) + 1;
    const kids = await Promise.all(Object.entries(options.tokens)
        .filter(([key, value]) =>
          typeof value === 'object'
            && value !== null
            && !(value as Record<string, unknown>).$value
            && !key.startsWith('$')
            && !(options.exclude ?? []).includes(key))
        .map(([name, tokens]) => this.#renderCategory({
          ...options, include, name, tokens, parent, level,
          path: `${options.path}.${name}`.replace('..', '.').replace(/^\./, ''),
          slug: `${options.slug}-${name}`.toLowerCase(),
        })));
    return kids.join('\n');
  }

  async #renderContent(options: Options) {
    const docs = getDocs(options.tokens);
    const heading = docs?.heading ?? capitalize(options.name.replace('-', ' '));
    const permalink = options.level === 1 ? '' : html`
      <uxdot-copy-permalink class="h${options.level}">
        <h${options.level} id="${options.slug}">
          <a href="#${options.slug}">${heading}</a>
        </h${options.level}>
      </uxdot-copy-permalink>`;

    const description = `${options.tokens.$description ?? ''}\n\n${options.tokens._?.$description ?? ''}`.trim();
    return html`
      ${permalink}
      <div class="description">${await this.renderTemplate(description, 'md')}</div>
      ${await this.#renderTokenDeprecationReason(options.tokens)}
      ${this.#renderThemeTokensCard(options)}
      ${await this.#renderTable(options)}
      ${await this.#renderChildren(options)}
      ${await this.#renderIncludes(options)}
    `;
  }

  async #renderTokenDeprecationReason({ $deprecated }: DesignToken) {
    return !$deprecated ? ''
      : $deprecated === true ? html`<div class="deprecated"><strong>Deprecated</strong></div>`
      : html`<div class="deprecated">${await this.renderTemplate($deprecated, 'md')}</div>`;
  }

  async #renderCategory(options: Options) {
    if (options.seenPaths?.has(options.path)) {
      return '';
    }
    options.seenPaths?.add(options.path);
    // these are token metadata, don't display them
    switch (options.name) {
      case 'attributes':
      case 'original':
      case '_':
        return '';
    }

    const content = await this.#renderContent(options);

    /**
     * 0. render the description
     * 1. get all the top-level $value-bearing objects and render them
     * 2. for each remaining object, recurse
     */
    if (options.level >= 4) {
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
        <div id="${options.path.replace('.', '-')}-section"
             class="token-category level-${options.level - 1}"
             data-name="${options.name}"
             data-parent="${options.parent?.name}"
             data-path="${options.path}"
             data-slug="${options.slug}">
          ${content}
        </div>
      `;
    }
  }

  override async render(ctx: Data) {
    const { tokenCategory } = ctx;
    const { exclude, include, path, slug } = tokenCategory;
    const name = path.split('.').pop()!;
    const tokens = resolveTokens(path);
    const seenPaths = new Set<string>();
    const options: Options = { tokens, name, path, slug, level: 1, exclude, include, seenPaths };
    return html`
      <link rel="stylesheet" data-helmet href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <link rel="stylesheet" data-helmet href="/styles/samp.css">
      <link rel="stylesheet" data-helmet href="/styles/pages/tokens.css">
      <script type="module" data-helmet>
        import '@uxdot/elements/uxdot-spacer-tokens-table.js';
        import '@rhds/elements/rh-card/rh-card.js';
        import '@rhds/elements/rh-disclosure/rh-disclosure.js';
        import '@rhds/elements/rh-tooltip/rh-tooltip.js';
        import { ContextChangeEvent } from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

        document.addEventListener('change', function(event) {
          if (event instanceof ContextChangeEvent) {
            updateSwatches();
          }
        });

        const swatches = document.querySelectorAll('.swatches .swatch');
        async function updateSwatches() {
          const tinycolor = await import('tinycolor2').then(x => x.default);
          for (const swatch of swatches) {
            const value = getComputedStyle(swatch).getPropertyValue('--swatch-color');
            const color = tinycolor(value);
            const isDark = color.isDark();
            const isLight = color.isLight();
            swatch.classList.toggle('isDark', isDark);
            swatch.classList.toggle('isLight', isLight);
          }
        }

        updateSwatches();
      </script>
      ${await this.#renderCategory(options)}
      ${await this.renderFile('./docs/_includes/partials/component/feedback.11ty.ts', ctx)}
    `;
  }
};
