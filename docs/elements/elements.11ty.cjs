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
      layout: 'layouts/pages/has-toc.njk',
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

  #actionsLabels = html`
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
    <span slot="action-label-wrap">Wrap lines</span>
    <span slot="action-label-wrap" hidden data-code-block-state="active">Overflow lines</span>
  `;

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
    const { doc } = ctx;
    const { fileExists, filePath, isCodePage, tagName } = doc;
    const content = fileExists ? await this.renderFile(filePath, ctx) : '';
    const planned = await this.isPlanned(tagName);

    const stylesheets = [
      '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css',
      '/styles/samp.css',
      ctx.doc.hasLightdom && `/assets/packages/@rhds/elements/elements/${tagName}/${tagName}-lightdom.css`,
      isCodePage && '/styles/pages/code.css',
    ].filter(Boolean);

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
        import '/assets/javascript/elements/uxdot-copy-button.js';
        import '@rhds/elements/rh-alert/rh-alert.js';
        import '@rhds/elements/rh-cta/rh-cta.js';
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

      ${!isCodePage ? content : await this.#renderCodePage.call(this, ctx)}
    `;
  }

  async #innerMD(content = '') {
    return (await this.renderTemplate(content.trim(), 'md')).trim();
  }

  async #getMainDemoContent(tagName) {
    try {
      const demoPath = join(process.cwd(), 'elements', tagName, 'demo', `${tagName}.html`);
      const demoContent = await readFile(demoPath, 'utf8');
      return html`
        <rh-code-block actions="wrap copy" highlighting="prerendered">
          ${this.highlight('html', demoContent)}
          ${this.#actionsLabels}
        </rh-code-block>`;
    } catch {
      return '';
    }
  }

  async #renderCodePage(ctx) {
    const { doc } = ctx;
    const { tagName } = doc.docsPage;
    return [
      await this.#renderInstallation.call(this, ctx),
      await this.#renderLightdom(ctx),
      html`<h2 id="usage">Usage</h2>`,
      await this.#getMainDemoContent(tagName),
      doc.fileExists && await this.renderFile(doc.filePath),
      await this.#renderCodeDocs.call(this,
                                      doc.docsPage.tagName,
                                      { ...ctx, level: (ctx.level ?? 2) + 1 }),
      ...await Promise.all(doc.siblingElements.map(tagName =>
        this.#renderCodeDocs.call(this, tagName, ctx))),
    ].filter(Boolean).join('');
  }

  async #renderLightdom(ctx) {
    const { docsPage } = ctx.doc;
    let content = '';
    // TODO: revisit after implementing auto-loaded light-dom css
    if (ctx.doc.hasLightdom) {
      content += html`
        <h3 id="lightdom-css">Lightdom CSS</h3>

        <p>This element requires you to load "Lightdom CSS" stylesheets for styling
           deeply slotted elements.</p>

        <rh-alert state="info">
          <h4 id="lightdom-css-note" slot="header">Note</h4>
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
        <h3 id="lightdom-css-shim">Lightdom CSS shim</h3>

        <rh-alert state="warning">
          <h4 id="lightdom-css-shim-warning" lot="header">Warning</h4>
          <p>Lightdom CSS shims are an optional, temporary solution for reducing CLS.
             Declarative Shadow DOM is the better solution, and once SSR tools are more widely
             available, Lightdom CSS shims will no longer be needed and will become deprecated.</p>
        </rh-alert>

        <p>This element has an optional "Lightdom CSS" <em>shim</em> to help reduce
          <a href="https://web.dev/cls/">Cumulative Layout Shift (CLS)</a> experience
          before the element has fully initialized.</p>

        <rh-alert state="info">
          <h4 id="lightdom-css-shim-note" slot="header">Note</h4>
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

  async #renderInstallation({ doc, cdnVersion = 'v1-alpha' }) {
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
      .attributes rh-table td.type pre {
        background: transparent;
        margin: 0;
        padding: 0;
        display: inline;
      }
      </style>
      <section class="band">
        <h2 id="installation">Installation</h2>
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
              ${this.#actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">NPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('shell', `npm install @rhds/elements`, 'shell')}${this.#actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
          <rh-tab slot="tab">JSPM</rh-tab>
          <rh-tab-panel>
            <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', this.dedent(html`
              <script type="importmap">
              ${jspmMap}
              </script>`))}
              ${this.#actionsLabels}
            </rh-code-block>
          </rh-tab-panel>
        </uxdot-installation-tabs>

        <p>Add it to your page with this import statement</p>

        <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', this.dedent(html`
          <script type="module">
            import '@rhds/elements/${doc.docsPage.tagName}/${doc.docsPage.tagName}.js';
          </script>`))}
          ${this.#actionsLabels}
        </rh-code-block>
      </section>
    `;
  }

  async #renderCodeDocs(tagName, ctx) {
    const { docsPage } = ctx.doc;
    const { manifest } = docsPage;

    const h = ctx.level ?? 2;

    // TODO: dsd
    return html`
      <h${h}>${tagName}</h${h}>

      <p>${manifest.getDescription(tagName)}</p>

      <rh-accordion box>
        ${await this.#renderSlots(tagName, ctx)}
        ${await this.#renderAttributes(tagName, ctx)}
        ${await this.#renderMethods(tagName, ctx)}
        ${await this.#renderEvents(tagName, ctx)}
        ${await this.#renderCssParts(tagName, ctx)}
        ${await this.#renderCssCustomProperties(tagName, ctx)}
        ${await this.#renderDesignTokens(tagName, ctx)}
      </rh-accordion>
    `;;
  }

  async #renderSlots(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allSlots = ctx.doc.docsPage.manifest.getSlots(tagName) ?? [];
    const slots = allSlots.filter(x => !x.deprecated);
    const deprecated = allSlots.filter(x => x.deprecated);
    const count = slots.length;
    const deprecatedSlotCount = deprecated.length;

    return html`
      <rh-accordion-header id="${tagName}-slots" ${!count ? '' : 'expanded'}>Slots
        <rh-badge>${count}</rh-badge>
        ${deprecatedSlotCount > 0 ? html`<rh-badge state="moderate">${deprecatedSlotCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
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
                  <td>${await this.#innerMD(slot.description)}</td>
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
                      ${await this.#innerMD(slot.description)}
                      <em>Note: ${slot.name} is deprecated. ${await this.#innerMD(slot.deprecated)}</em>
                    </td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>`;
  }

  async #renderAttributes(tagName, ctx) {
    const level = ctx.level ?? 2;
    const _attrs = (ctx.doc.docsPage.manifest.getAttributes(tagName) ?? [])
        .filter(x => !x.static && x.privacy !== 'protected' && x.privacy !== 'private');
    const deprecated = _attrs.filter(x => x.deprecated);
    const attributes = _attrs.filter(x => !x.deprecated);
    const count = _attrs.length;
    const deprecatedAttrCount = deprecated.length;

    return html`
      <rh-accordion-header id="${tagName}-attributes" ${!count ? '' : 'expanded'}>Attributes
        <rh-badge>${count}</rh-badge>
        ${deprecatedAttrCount > 0 ? html`<rh-badge state="moderate">${deprecatedAttrCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
        <section class="attributes">${!attributes.length ? html`
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
                  <td>${await this.#innerMD(attribute.description)}</td>
                  <td class="type">${this.highlight('ts', attribute?.type?.text ?? 'unknown').replace(/\s+/g, ' ')}</td>
                  <td class="type">${this.highlight('ts', attribute?.default ?? 'unknown').replace(/\s+/g, ' ')}</td>
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
                    <td>${await this.#innerMD(attribute.description)}</td>
                    <td class="type">${this.highlight('ts', attribute.type?.text ?? 'unknown').replace(/\s+/g, ' ')}</td>
                    <td class="type">${this.highlight('ts', attribute.default ?? 'unknown').replace(/\s+/g, ' ')}</td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>
    `;
  }

  async #renderMethods(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allMethods = ctx.doc.docsPage.manifest.getMethods(tagName) ?? [];
    const deprecated = allMethods.filter(x => x.deprecated);
    const methods = allMethods.filter(x => !x.deprecated);
    const count = methods.length;
    const deprecatedMethodsCount = deprecated.length;

    // TODO: inline code highlighting for type and default: render the markdown to html and extract the `<code>` from the `<pre>`
    return html`
      <rh-accordion-header id="${tagName}-methods" ${!count ? '' : 'expanded'}>Methods
        <rh-badge>${count}</rh-badge>
        ${deprecatedMethodsCount > 0 ? html`<rh-badge state="moderate">${deprecatedMethodsCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
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
                  <td>${await this.#innerMD(method.description)}</td>
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
                      ${await this.#innerMD(method.description)}
                      <em>Note: ${method.name} is deprecated. ${await this.#innerMD(method.deprecated)}</em>
                    </td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>
    `;
  }

  async #renderEvents(tagName, ctx) {
    const level = ctx.level ?? 2;
    const _events = ctx.doc.docsPage.manifest.getEvents(tagName) ?? [];
    const deprecated = _events.filter(x => x.deprecated);
    const events = _events.filter(x => !x.deprecated);
    const count = events.length;
    const deprecatedEventsCount = deprecated.length;

    return html`
      <rh-accordion-header id="${tagName}-events" ${!count ? '' : 'expanded'}>Events
        <rh-badge>${count}</rh-badge>
        ${deprecatedEventsCount > 0 ? html`<rh-badge state="moderate">${deprecatedEventsCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
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
                  <td>${await this.#innerMD(event.description)}</td>
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
                      ${await this.#innerMD(event.description)}
                      <em>Note: ${event.name} is deprecated. ${await this.#innerMD(event.deprecated)}</em>
                    </td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>
    `;
  }

  async #renderCssParts(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allParts = ctx.doc.docsPage.manifest.getCssParts(tagName) ?? [];
    const parts = allParts.filter(x => !x.deprecated);
    const deprecated = allParts.filter(x => x.deprecated);
    const count = parts.length;
    const deprecatedCssPartsCount = deprecated.length;

    return html`
      <rh-accordion-header id="${tagName}-css-parts" ${!count ? '' : 'expanded'}>CSS Shadow Parts
        <rh-badge>${count}</rh-badge>
        ${deprecatedCssPartsCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPartsCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
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
                  <td>${await this.#innerMD(part.description)}</td>
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
                      ${await this.#innerMD(part.description)}
                      <em>Note: ${part.name} is deprecated. ${await this.#innerMD(part.deprecated)}</em>
                    </td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>
    `;
  }

  async #renderCssCustomProperties(tagName, ctx) {
    const level = ctx.level ?? 2;
    const allCssProperties = (ctx.doc.docsPage.manifest.getCssCustomProperties(tagName) ?? [])
        .filter(x => !tokens.has(x.name));
    const cssProperties = allCssProperties.filter(x => !x.deprecated);
    const deprecated = allCssProperties.filter(x => x.deprecated);
    const count = cssProperties.length;
    const deprecatedCssPropertiesCount = deprecated.length;

    return html`
      <rh-accordion-header id="${tagName}-css-properties" ${!count ? '' : 'expanded'}>CSS Custom Properties
        <rh-badge>${count}</rh-badge>
        ${deprecatedCssPropertiesCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPropertiesCount}</rh-badge>` : ``}
      </rh-accordion-header>
      <rh-accordion-panel>
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
                  <td>${await this.#innerMD(prop.description ?? '')}</td>
                  <td>
                    ${!prop.default?.startsWith('#') ? html`<code>` : html`<code data-color="${prop.default}" style="--color:${prop.default}">`}${prop.default ?? '—'}</code>
                  </td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>`}${!deprecated.length ? '' : html`
          <details>
            <summary><h${level + 1}>Deprecated CSS Custom Properties</h${level + 1}></summary>
            <rh-table>
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
                    <td>${await this.#innerMD(prop.description)}</td>
                    <td>${await this.#innerMD(prop.default ?? '—')}</td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>
    `;
  }

  async #renderDesignTokens(tagName, ctx) {
    const designTokens = (ctx.doc.docsPage.manifest.getCssCustomProperties(tagName) ?? [])
        .filter(x => tokens.has(x.name));
    const count = designTokens.length;
    return html`
      <rh-accordion-header id="${tagName}-design-tokens" ${!count ? '' : 'expanded'}>Design Tokens
        <rh-badge>${count}</rh-badge>
      </rh-accordion-header>
      <rh-accordion-panel>
        <section class="design-tokens">
          ${!designTokens.length ? html`
          <em>None</em>` : html`
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th>Token</th>
                  <th>Copy</th>
                </tr>
              </thead>
              <tbody>${designTokens.map(token => html`
                <tr>
                  <td>
                    <a href="${getTokenHref(token)}">
                      <code>${token.name}</code>
                    </a>
                  </td>
                  ${copyCell(token)}
                </tr>`).join('')}
              </tbody>
            </table>
          </rh-table>`}
        </section>
      </rh-accordion-panel>
    `;
  }
};
