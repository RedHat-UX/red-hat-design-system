const html = String.raw;

const { tokens } = require('@rhds/tokens');
const { copyCell, getTokenHref } = require('../_plugins/tokensHelpers.cjs');
const { join } = require('node:path');
const { readFile } = require('node:fs/promises');

const { AssetCache } = require('@11ty/eleventy-fetch');

function stringifyParams(method) {
  return method.parameters?.map?.(p =>
    `${p.name}: ${p.type?.text ?? 'unknown'}`).join(', ') ?? '';
}

module.exports = class ElementsPage {
  static assetCache = new AssetCache('rhds-ux-dot-import-map-jspmio');

  data() {
    return {
      hasToc: true,
      layout: 'layouts/base.njk',
      permalink: ({ doc }) => doc.permalink,
      eleventyComputed: {
        title: ({ doc }) => doc.pageTitle || doc.slug,
        context: x => x,
      },
      pagination: {
        data: 'collections.elementDocs',
        alias: 'doc',
        size: 1,
      },
    };
  }

  /**
   * Returns a string with common indent stripped from each line. Useful for templating HTML
   * @param {string} str
   */
  dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
  }

  async generateImportMap(tagName) {
    const { assetCache } = ElementsPage;
    if (!assetCache.isCacheValid('1d')) {
      const { Generator } = await import('@jspm/generator');
      const generator = new Generator({
        cache: false,
        // prevent node from resolving @rhds/elements to cwd
        // see https://discord.com/channels/570400367884501026/724211491087056916/1290733101923700737
        baseUrl: 'about:blank',
        defaultProvider: 'jspm.io',
      });
      await generator.install('@rhds/elements');
      await assetCache.save(generator.getMap(), 'json');
    }
    const map = structuredClone(await assetCache.getCachedValue());
    map.imports[`@rhds/elements/${tagName}/${tagName}.js`] = map.imports['@rhds/elements'].replace('elements.js', `${tagName}/${tagName}.js`);
    delete map.imports['@rhds/elements'];
    return JSON.stringify(map, null, 2);
  }

  async render(ctx) {
    const { doc, page, repoStatus } = ctx;
    const { alias, docsPage, fileExists, filePath, isCodePage, slug, tagName } = doc;
    const { manifest } = docsPage;
    const content = fileExists ? await this.renderFile(filePath, ctx) : '';
    const prettyName = this.deslugify(alias ?? slug);
    const planned = this.isPlanned(repoStatus, prettyName);
    const demos = manifest?.getDemos(docsPage.tagName);
    const demosUrl = `/elements/${slug}/demos/`;
    const hasLightdom = [
      'rh-pagination',
      'rh-table',
      'rh-tile',
      'rh-audio-player',
    ].includes(tagName);

    const stylesheets = [
      '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css',
      '/styles/pages/backpage.css',
      '/styles/samp.css',
    ];

    if (isCodePage) {
      stylesheets.push('/styles/pages/code.css');
    }

    if (hasLightdom) {
      stylesheets.push(
        `/assets/packages/@rhds/elements/elements/${tagName}/${tagName}-lightdom.css`,
      );
    }

    return html`${stylesheets.map(x => html`
      <link rel="stylesheet" data-helmet href="${x}">`).join('')}

      <noscript data-helmet>
        <style>
        rh-audio-player:not([expanded]) rh-transcript:not(:defined) {
          display: block;
        }
        </style>
      </noscript>

      <script type="module" data-helmet>
        import '/assets/javascript/elements/uxdot-feedback.js';
        import '/assets/javascript/elements/uxdot-copy-button.js';
        import '/assets/javascript/elements/uxdot-header.js';
        import '@rhds/elements/rh-alert/rh-alert.js';
        import '@rhds/elements/rh-cta/rh-cta.js';
        import '@rhds/elements/rh-footer/rh-footer.js';
        import '@rhds/elements/rh-subnav/rh-subnav.js';
        import '@rhds/elements/rh-surface/rh-surface.js';
        import '@rhds/elements/rh-code-block/rh-code-block.js';
        import '@rhds/elements/rh-table/rh-table.js';
        import '@rhds/elements/rh-accordion/rh-accordion.js';
        import '@rhds/elements/rh-badge/rh-badge.js';
        import '@rhds/elements/rh-tag/rh-tag.js';
      </script>

      ${planned ? '' : html`
      <script type="module" data-helmet>
        import '@rhds/elements/${tagName}/${tagName}.js';
      </script>`}

      ${await this.renderFile('./docs/_includes/partials/component/masthead.njk', ctx)}
      ${await this.renderFile('./docs/_includes/partials/component/sidenav.njk', ctx)}

      <rh-surface id="main"
                  role="main"
                  color-palette="lightest">
        <article class="has-toc">
          <uxdot-header has-subnav>
            <h1 id="${slug}" class="page-title">
              ${prettyName}${!planned ? '' : html`
              <rh-tag icon="notification-fill" color="gray">Planned</rh-tag>`}
            </h1>
            <rh-subnav slot="subnav">${doc.tabs.map((tab, i, a) => html`
              ${!(demos.length && i === a.length - 1) ? '' : html`
              <a ${page.url !== demosUrl ? '' : 'active'} href="${demosUrl}">Demos</a>`}
              <a ${tab.href !== page.url ? '' : 'active'} href="${tab.href}">${tab.pageTitle}</a>`).join('')}
            </rh-subnav>
          </uxdot-header>

          <div class="aside">
            <uxdot-toc summary="On this page">
              ${this.toc(content)}
            </uxdot-toc>
          </div>

          <div class="container">
            ${!isCodePage ? content : await this.renderCodePage.call(this, ctx)}
            ${await this.renderFile('./docs/_includes/partials/component/feedback.html', ctx)}
            ${await this.renderFile('./docs/_includes/partials/component/edit-this-page.njk', ctx)}
          </div>

        </article>
        ${await this.renderFile('./docs/_includes/partials/component/back-to-top.njk', ctx)}
      </rh-surface>
      ${await this.renderFile('./docs/_includes/partials/component/footer.njk', ctx)}
    `;
  }

  async getMainDemoContent(tagName) {
    try {
      const demoPath = join(process.cwd(), 'elements', tagName, 'demo', `${tagName}.html`);
      const demoContent = await readFile(demoPath, 'utf8');
      return html`
        <rh-code-block actions="wrap copy" highlighting="prerendered">
          ${this.highlight('html', demoContent)}
        </rh-code-block>`;
    } catch {
      return '';
    }
  }

  async renderCodePage(ctx) {
    const { doc } = ctx;
    const { tagName } = doc.docsPage;
    return [
      await this.renderInstallation.call(this, ctx),
      await this.renderLightdom(ctx),
      html`<h2>Usage</h2>`,
      await this.getMainDemoContent(tagName),
      doc.fileExists && await this.renderFile(doc.filePath),
      await this.renderCodeDocs.call(this,
                                     doc.docsPage.tagName,
                                     { ctx, level: (ctx.level ?? 2) + 1 }),
      await Promise.all(doc.siblingElements.map(tagName =>
        this.renderCodeDocs.call(this, tagName, ctx))),
    ].filter(Boolean).join('');
  }

  async renderLightdom(ctx) {
    const { docsPage } = ctx.doc;
    let content = '';
    // TODO: revisit after implementing auto-loaded light-dom css
    if (ctx.doc.hasLightdom) {
      content += html`
        <h3>Lightdom CSS</h3>

        <p>This element requires you to load "Lightdom CSS" stylesheets for styling
           deeply slotted elements.</p>

        <rh-alert state="info">
          <h4 slot="header">Note</h4>
          <p>Replace <code>/path/to/</code> with path to the CSS file, whether local or CDN.</p>
        </rh-alert>

        <rh-code-block actions="copy" highlighting="prerendered">
          ${this.highlight('html', html`
          <link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom.css">
          `.trim())}
        </rh-code-block>
      `;
    }
    if (ctx.doc.hasLightdomShim) {
      content += html`
        <h3>Lightdom CSS shim</h3>

        <rh-alert state="warning">
          <h4 slot="header">Warning</h4>
          <p>Lightdom CSS shims are an optional, temporary solution for reducing CLS.
             Declarative Shadow DOM is the better solution, and once SSR tools are more widely
             available, Lightdom CSS shims will no longer be needed and will become deprecated.</p>
        </rh-alert>

        <p>This element has an optional "Lightdom CSS" <em>shim</em> to help reduce
          <a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> experience
          before the element has fully initialized.</p>

        <rh-alert state="info">
          <h4 slot="header">Note</h4>
          <p>Replace <code>/path/to/</code> with path to the CSS file, whether local or CDN.</p>
        </rh-alert>

        <rh-code-block actions="copy" highlighting="prerendered">
          ${this.highlight('html', html`
          <link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom-shim.css">
          `.trim())}
        </rh-code-block>
      `;
    }
    return content;
  }

  async renderInstallation({ doc, cdnVersion = 'v1-alpha' }) {
    const { version: packageVersion } = require('../../package.json');

    const jspmMap = await this.generateImportMap(doc.docsPage.tagName)
        .catch(error => {
          console.warn(error); // eslint-disable-line no-console
          return `Could not generate import map using JSPM: ${error.message}`;
        });

    return html`
      <script data-helmet type="module" src="/assets/javascript/elements/uxdot-installation-tabs.js"></script>
      <style data-helmet>${''/* NOTE: adapted from theming/developers.css - better to wrap the localhost behaviour? */}
      uxdot-installation-tabs {
        border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle);
        border-radius: var(--rh-border-radius-default);
        max-width: 56rem; /* warning: magic number */
        overflow: hidden;
        & rh-tab-panel {
          padding: 0;
          border-radius: 0;
        }
        & rh-code-block {
          --rh-border-radius-default: 0;
          --rh-border-width-sm: 0px;
          border-width: 0;
        }
      }
      </style>
      <section class="band">
        <h2>Installation</h2>
        <p>We recommend import maps when building pages with RHDS. Learn more about how to install on our <a href="/get-started/developers/installation/">getting started docs</a>.</p>
        <uxdot-installation-tabs>
          <rh-tab slot="tab">Red Hat CDN</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', this.dedent(html`
              <script type="importmap">
              {
                "imports": {
                  "@rhds/elements/": "https://www.redhatstatic.com/dx/${cdnVersion}/@rhds/elements@${packageVersion}/elements/",
                }
              }
              </script>`))}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">NPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('shell', `npm install @rhds/elements`, 'shell')}</rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">JSPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', this.dedent(html`
              <script type="importmap">
              ${jspmMap}
              </script>`))}
            </rh-code-block>
          </rh-tab-panel>
        </uxdot-installation-tabs>

        <p>Add it to your page with this import statement</p>

        <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', this.dedent(html`
          <script type="module">
            import '@rhds/elements/${doc.docsPage.tagName}/${doc.docsPage.tagName}.js';
          </script>`))}
        </rh-code-block>
      </section>
    `;
  }

  async innerMD(content = '') {
    return (await this.renderTemplate(content.trim(), 'md')).trim();
  }

  async renderCodeDocs(tagName, ctx) {
    const { docsPage } = ctx.doc;
    const { manifest } = docsPage;

    const allSlots = manifest.getSlots(tagName) ?? [];
    const slotCount = allSlots.filter(x => !x.deprecated).length;
    const deprecatedSlotCount = allSlots.filter(x => x.deprecated).length;

    const allAttr = manifest.getAttributes(tagName) ?? [];
    const attrCount = allAttr.filter(x => !x.deprecated).length;
    const deprecatedAttrCount = allAttr.filter(x => x.deprecated).length;

    const allMethods = manifest.getMethods(tagName) ?? [];
    const methodsCount = allMethods.filter(x => !x.deprecated).length;
    const deprecatedMethodsCount = allMethods.filter(x => x.deprecated).length;

    const allEvents = manifest.getEvents(tagName) ?? [];
    const eventsCount = allEvents.filter(x => !x.deprecated).length;
    const deprecatedEventsCount = allEvents.filter(x => x.deprecated).length;

    const allCssParts = manifest.getCssParts(tagName) ?? [];
    const cssPartsCount = allCssParts.filter(x => !x.deprecated).length;
    const deprecatedCssPartsCount = allCssParts.filter(x => x.deprecated).length;

    const allCssProperties = manifest.getCssCustomProperties(tagName) ?? [];
    const cssPropertiesCount =
      allCssProperties.filter(x => !x.deprecated && !tokens.has(x.name)).length;
    const deprecatedCssPropertiesCount =
      allCssProperties.filter(x => x.deprecated && !tokens.has(x.name)).length;

    const allDesignTokens = manifest.getCssCustomProperties(tagName) ?? [];
    const designTokensCount = allDesignTokens.filter(x => tokens.has(x.name)).length;

    const h = ctx.level ?? 2;
    // TODO: dsd
    return html`
      <h${h}>${tagName}</h${h}>

      <p>${manifest.getDescription(tagName)}</p>

      <rh-accordion box>
        <rh-accordion-header id="${tagName}-slots" expanded>Slots
          <rh-badge>${slotCount}</rh-badge>
          ${deprecatedSlotCount > 0 ? html`<rh-badge state="moderate">${deprecatedSlotCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderSlots(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-attributes">Attributes
          <rh-badge>${attrCount}</rh-badge>
          ${deprecatedAttrCount > 0 ? html`<rh-badge state="moderate">${deprecatedAttrCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderAttributes(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-methods">Methods
          <rh-badge>${methodsCount}</rh-badge>
          ${deprecatedMethodsCount > 0 ? html`<rh-badge state="moderate">${deprecatedMethodsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderMethods(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-events">Events
          <rh-badge>${eventsCount}</rh-badge>
          ${deprecatedEventsCount > 0 ? html`<rh-badge state="moderate">${deprecatedEventsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderEvents(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-css-parts">CSS Shadow Parts
          <rh-badge>${cssPartsCount}</rh-badge>
          ${deprecatedCssPartsCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPartsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderCssParts(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-css-properties">CSS Custom Properties
          <rh-badge>${cssPropertiesCount}</rh-badge>
          ${deprecatedCssPropertiesCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPropertiesCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderCssCustomProperties(tagName, ctx)}</rh-accordion-panel>
        <rh-accordion-header id="${tagName}-design-tokens">Design Tokens
          <rh-badge>${designTokensCount}</rh-badge>
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderTokens(tagName, ctx)}</rh-accordion-panel>
      </rh-accordion>
    `.trim();
  }

  /** Render the list of element attributes */
  async renderAttributes(tagName, ctx) {
    const level = ctx.level ?? 2;
    const _attrs = ctx.doc.docsPage.manifest.getAttributes(tagName) ?? [];
    const deprecated = _attrs.filter(x => x.deprecated);
    const attributes = _attrs.filter(x => !x.deprecated);
    return html`
      <section class="attributes">
        ${!attributes.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col">Attribute</th>
                <th scope="col">DOM Property</th>
                <th scope="col">Description</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(attributes.map(async attribute => html`
              <tr>
                <td><code>${attribute.name}</code></td>
                <td><code>${attribute.fieldName}</code></td>
                <td>${await this.innerMD(attribute.description)}</td>
                <td>${this.highlight(attribute?.type?.text ?? 'unknown', 'ts')}</td>
                <td>${this.highlight(attribute?.default ?? 'unknown', 'ts')}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}
        ${!deprecated.length ? '' : html`
        <details>
          <summary><h${level + 1}>Deprecated Attributes<h${level + 1}></summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col">Attribute</th>
                  <th scope="col">DOM Property</th>
                  <th scope="col">Description</th>
                  <th scope="col">Type</th>
                  <th scope="col">Default</th>
                </tr>
              </thead>
              <tbody>
                ${(await Promise.all(deprecated.map(async attribute => html`
                <tr>
                  <td><code>${attribute.name}</code></td>
                  <td><code>${attribute.fieldName}</code></td>
                  <td>${await this.innerMD(attribute.description)}</td>
                  <td>${this.highlight(attribute.type?.text ?? 'unknown', 'ts')}</td>
                  <td>${this.highlight(attribute.default ?? 'unknown', 'ts')}</td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render a table of element Design Tokens */
  async renderTokens(tagName, ctx) {
    const allCssProperties =
      ctx.doc.docsPage.manifest.getCssCustomProperties(tagName) ?? [];
    const elTokens = allCssProperties.filter(x => tokens.has(x.name));
    return html`
      <section class="design-tokens">
        ${!elTokens.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Copy</th>
              </tr>
            </thead>
            <tbody>${elTokens.map(token => html`<tr><td><a href="${getTokenHref(token)}"><code>${token.name}</code></a></td>${copyCell(token)}</tr>`).join('')}</tbody>
          </table>
      </rh-table>`}
      </section>`;
  }

  /** Render a table of element CSS Custom Properties */
  async renderCssCustomProperties(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allCssProperties = ctx.doc.docsPage.manifest.getCssCustomProperties(tagName) ?? [];
    const cssProperties = allCssProperties.filter(x => !x.deprecated && !tokens.has(x.name));
    const deprecated = allCssProperties.filter(x => x.deprecated && !tokens.has(x.name));
    return html`
      <section class="css-custom-properties">
        ${!cssProperties.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table class=css-custom-properties>
            <thead>
              <tr>
                <th scope="col">CSS Property</th>
                <th scope="col">Description</th>
                <th scope="col">Default</th>
              </tr>
            </thead>
            <tbody>${(await Promise.all(cssProperties.map(async prop => html`
              <tr>
                <td><code>${prop.name}</code></td>
                <td>${await this.innerMD(prop.description ?? '')}</td>
                <td>
                  ${!prop.default?.startsWith('#') ? html`<code>` : html`<code data-color="${prop.default}" style="--color:${prop.default}">`}${prop.default ?? '—'}</code>
                </td>
              </tr>`))).join('')}
            </tbody>
          </table>`}${!deprecated.length ? '' : html`
          <details>
            <summary><h${level + 1}>Deprecated CSS Custom Properties</h${level + 1}></summary>
            <table>
              <thead>
                <tr>
                  <th scope="col">CSS Property</th>
                  <th scope="col">Description</th>
                  <th>Default</th>
                </tr>
              </thead>
              <tbody>${(await Promise.all(deprecated.map(async prop => html`
                <tr>
                  <td><code>${prop.name}</code></td>
                  <td>${await this.innerMD(prop.description)}</td>
                  <td>${await this.innerMD(prop.default ?? '—')}</td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of element CSS Shadow Parts */
  async renderCssParts(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allParts = ctx.doc.docsPage.manifest.getCssParts(tagName) ?? [];
    const parts = allParts.filter(x => !x.deprecated);
    const deprecated = allParts.filter(x => x.deprecated);
    return html`
      <section class="css-shadow-parts">
        ${!parts.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col">Part Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(parts.map(async part => html`
              <tr>
                <td><code>${part.name}</code></td>
                <td>${await this.innerMD(part.description)}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary><h${level + 1}>Deprecated CSS Shadow Parts</h${level + 1}></summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col">Part Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                ${(await Promise.all(deprecated.map(async part => html`
                <tr>
                  <td><code>${part.name}</code></td>
                  <td>
                    ${await this.innerMD(part.description)}
                    <em>Note: ${part.name} is deprecated. ${await this.innerMD(part.deprecated)}</em>
                  </td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of events for the element */
  async renderEvents(tagName, ctx) {
    const level = ctx.level ?? 2;
    const _events = ctx.doc.docsPage.manifest.getEvents(tagName) ?? [];
    const deprecated = _events.filter(x => x.deprecated);
    const events = _events.filter(x => !x.deprecated);
    return html`
      <section class="events">
        ${!events.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col">Event Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(events.map(async event => html`
              <tr>
                <td><code>${event.name}</code></td>
                <td>${await this.innerMD(event.description)}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary><h${level + 1}>Deprecated Events</h${level + 1}></summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col">Event Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                ${(await Promise.all(deprecated.map(async event => html`
                <tr>
                  <td><code>${event.name}</code></td>
                  <td>
                    ${await this.innerMD(event.description)}
                    <em>Note: ${event.name} is deprecated. ${await this.innerMD(event.deprecated)}</em>
                  </td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of element methods */
  async renderMethods(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allMethods = ctx.doc.docsPage.manifest.getMethods(tagName) ?? [];
    const deprecated = allMethods.filter(x => x.deprecated);
    const methods = allMethods.filter(x => !x.deprecated);
    // TODO: inline code highlighting for type and default: render the markdown to html and extract the `<code>` from the `<pre>`
    return html`
      <section class="methods">
        ${!methods.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col">Method Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(methods.map(async method => html`
              <tr>
                <td><code>${method.name}(${stringifyParams(method)})</code></td>
                <td>${await this.innerMD(method.description)}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary><h${level + 1}>Deprecated Methods</h${level + 1}></summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col">Method Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                ${(await Promise.all(deprecated.map(async method => html`
                <tr>
                  <td><code>${method.name}(${stringifyParams(method)})</code></td>
                  <td>
                    ${await this.innerMD(method.description)}
                    <em>Note: ${method.name} is deprecated. ${await this.innerMD(method.deprecated)}</em>
                  </td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of the element's slots */
  async renderSlots(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allSlots = ctx.doc.docsPage.manifest.getSlots(tagName) ?? [];
    const slots = allSlots.filter(x => !x.deprecated);
    const deprecated = allSlots.filter(x => x.deprecated);
    return html`
      <section class="slots">
        ${!slots.length ? html`
        <em>None</em>` : html`
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col">Slot Name</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              ${(await Promise.all(slots.map(async slot => html`
              <tr>
                <td><code>${slot.name}</code></td>
                <td>${await this.innerMD(slot.description)}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary><h${level + 1}>Deprecated Slots</h${level + 1}></summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col">Slot Name</th>
                  <th scope="col">Description</th>
                </tr>
              </thead>
              <tbody>
                ${(await Promise.all(deprecated.map(async slot => html`
                <tr>
                  <td><code>${slot.name}</code></td>
                  <td>
                    ${await this.innerMD(slot.description)}
                    <em>Note: ${slot.name} is deprecated. ${await this.innerMD(slot.deprecated)}</em>
                  </td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }
};
