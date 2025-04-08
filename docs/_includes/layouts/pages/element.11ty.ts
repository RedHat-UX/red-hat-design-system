import type { ElementDocsPageData } from '#11ty-plugins/element-docs.js';
import type { ClassMethod } from 'custom-elements-manifest';

import { tokens } from '@rhds/tokens/meta.js';
import { join } from 'node:path';
import { readFile } from 'node:fs/promises';
import { capitalize, copyCell, dedent, getTokenHref } from '#11ty-plugins/tokensHelpers.js';
import { getPfeConfig } from '@patternfly/pfe-tools/config.js';
import { AssetCache } from '@11ty/eleventy-fetch';
import { Renderer } from '#eleventy.config';
import type { ImportMap } from '#11ty-plugins/importMap.js';

import { serialize } from 'parse5';

import * as Tools from '@parse5/tools';

import {
  getAllManifests,
  type DemoRecord,
} from '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js';
import { parseFragment } from 'parse5';

const html = String.raw; // for editor highlighting
const pfeconfig = getPfeConfig();

function stringifyParams(method: ClassMethod) {
  return method.parameters?.map?.(p =>
    `${p.name}: ${p.type?.text ?? 'unknown'}`).join(', ') ?? '';
}

interface EleventyPageRenderData {
  page: {
    outputPath: string;
    inputPath: string;
    url: string;
  };
}

interface Context extends EleventyPageRenderData {
  doc: ElementDocsPageData;
  cdnVersion?: string;
  level?: number;
  tagName: string;
  isLocal: boolean;
  importMap: { imports: Record<string, string>; scopes: Record<string, Record<string, string>> };
}

export default class ElementsPage extends Renderer<Context> {
  static assetCache = new AssetCache<ImportMap>('rhds-ux-dot-import-map-jspmio');

  data() {
    return {
      layout: 'layouts/pages/has-toc.njk',
      permalink: ({ doc }: Context) => doc.permalink,
      eleventyComputed: {
        title: ({ doc }: Context) => `${doc.pageTitle} | ${pfeconfig.aliases[doc.tagName] ?? capitalize(doc.tagName.replace('rh-', '').replaceAll('-', ' '))}`,
        tagName: ({ doc }: Context) => doc.tagName,
      },
    };
  }

  static demoManifestsForTagNames =
    Object.groupBy(getAllManifests()
        .flatMap(manifest => manifest.getTagNames()
            .flatMap(tagName => manifest.getDemoMetadata(tagName, getPfeConfig()))),
                   x => x.primaryElementName);

  async render(ctx: Context) {
    const { fileExists, filePath, pageSlug, planned, tagName } = ctx.doc;
    const isCodePage = pageSlug === 'code';
    const isDemoPage = pageSlug === 'demos';
    const isOverviewPage = pageSlug === 'overview';
    const content = fileExists ? await this.renderFile(filePath, ctx) : '';
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
        // although we load these ssr support modules elsewhere, we still
        // need them here to ensure no double-rendering on webkit
        import '/assets/javascript/ssr-support.js';
        import '@uxdot/elements/uxdot-copy-button.js';
        import '@uxdot/elements/uxdot-copy-permalink.js';
        import '@uxdot/elements/uxdot-best-practice.js';
        import '@uxdot/elements/uxdot-repo-status-checklist.js';
        import '@uxdot/elements/uxdot-repo-status-list.js';
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

      ${isOverviewPage ? await this.#renderOverviewPage(content, ctx)
      : isCodePage ? await this.#renderCodePage(content, ctx)
      : isDemoPage ? await this.#renderDemos(content, ctx)
      : content}

      ${await this.renderFile('./docs/_includes/partials/component/feedback.11ty.ts', ctx)}
    `;
  }

  #actionsLabels = html`
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
    <span slot="action-label-wrap">Wrap lines</span>
    <span slot="action-label-wrap" hidden data-code-block-state="active">Overflow lines</span>
  `;

  async #innerMD(content = '') {
    return (await this.renderTemplate(content.trim(), 'md')).trim();
  }

  async #getMainDemoContent(tagName: string) {
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

  async #getOverviewInlineSvg(ctx: Context) {
    const svgPath = join(
      process.cwd(),
      'elements',
      ctx.tagName,
      'docs',
      ctx.doc.overviewImageHref!,
    );
    return readFile(svgPath, 'utf8');
  }

  #header(text: string, level = 2, id = this.slugify(text)) {
    return html`
      <uxdot-copy-permalink class="h${level}">
        <h${level} id="${id}">
          <a href="#${id}">${text}</a>
        </h${level}>
      </uxdot-copy-permalink>`;
  }

  async #renderOverviewPage(content: string, ctx: Context) {
    const description = ctx.doc.docsPage.description ?? ctx.doc.description ?? '';
    return html`${!ctx.doc.planned ? '' : html`
      ${this.#header('Coming soon!')}
      <p>This element is currently in progress and not yet available for use.</p>`}
      ${this.#header('Overview')}
      ${await this.renderTemplate(description, 'md')}
      ${!ctx.doc.overviewImageHref ? ''
       : ctx.doc.overviewImageHref.endsWith('svg') ? html`
      <uxdot-example>${await this.#getOverviewInlineSvg(ctx)}</uxdot-example>
      ` : html`
      <uxdot-example color-palette="lightest"><img src="${ctx.doc.overviewImageHref}" alt="" aria-labelledby="overview-image-description"></uxdot-example>`}
      ${this.#header('Status')}
      <uxdot-repo-status-list element="${ctx.tagName}"></uxdot-repo-status-list>
      ${this.#header('Sample element')}
      ${ctx.doc.mainDemoContent}
      ${content}
      ${this.#header('Status checklist')}
      <uxdot-repo-status-checklist element="${ctx.tagName}"></uxdot-repo-status-checklist>
    `;
  }

  async #renderCodePage(content: string, ctx: Context) {
    const { doc } = ctx;
    const { tagName } = doc.docsPage;
    return [
      content,
      html`
      <section class="band" id="installation">
        ${this.#header('Importing')}
        <p>Add ${doc.docsPage.tagName} to your page with this import statement:</p>
        <rh-code-block actions="copy" highlighting="prerendered">${this.highlight('html', dedent(html`
          <script type="module">
            import '@rhds/elements/${doc.docsPage.tagName}/${doc.docsPage.tagName}.js';
          </script>`))}
          ${this.#actionsLabels}
        </rh-code-block>
        <p>To learn more about installing RHDS elements on your site using an import map read our <a href="/get-started/developers/installation/">getting started docs</a>.        
      </section>
      `,
      /* eslint-enable lit-a11y/anchor-is-valid */
      /* eslint-enable lit-a11y/accessible-name */
      await this.#renderLightdom(ctx),
      this.#header('Usage'),
      await this.#getMainDemoContent(tagName),
      doc.fileExists && await this.renderFile(doc.filePath, ctx),
      await this.#renderCodeDocs.call(this,
                                      doc.docsPage.tagName,
                                      { ...ctx, level: (ctx.level ?? 1) + 1 }),
      ...await Promise.all(doc.siblingElements.map(tagName =>
        this.#renderCodeDocs.call(this, tagName, ctx))),
    ].filter(Boolean).join('');
  }

  async #renderLightdom(ctx: Context) {
    const { docsPage } = ctx.doc;
    let content = '';
    // TODO: revisit after implementing auto-loaded light-dom css
    if (ctx.doc.hasLightdom) {
      content += html`
        ${this.#header('Lightdom CSS', 3)}

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
        ${this.#header('Lightdom CSS shim', 3)}

        <rh-alert state="warning">
          <h4 slot="header">Warning</h4>
          <p>Lightdom CSS shims are an optional, temporary solution for reducing
             <abbr title="cumulative layout shift">CLS</abbr>.
             <a href="/get-started/developers/installation/#lightdom-css-shims">
               Learn more about lightdom CSS shims
             </a>.</p>
        </rh-alert>

        <rh-code-block actions="copy" highlighting="prerendered">
          ${this.highlight('html', html`
          <link rel="stylesheet" href="/path/to/${docsPage.tagName}/${docsPage.tagName}-lightdom-shim.css">
          `.trim())}
        </rh-code-block>

        <rh-alert state="info">
          <h4 slot="header">Note</h4>
          <p>Replace <code>/path/to/</code> with path to the CSS file, whether local or CDN.</p>
        </rh-alert>
      `;
    }
    return content;
  }

  async #renderCodeDocs(tagName: string, ctx: Context) {
    const { docsPage } = ctx.doc;
    const { manifest } = docsPage;

    const h = ctx.level ?? 2;

    // TODO: dsd
    return html`
      ${this.#header(tagName, h, `${tagName}-apis`)}

      ${await this.renderTemplate(manifest.getDescription(tagName) ?? '', 'md')}

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

  async #renderSlots(tagName: string, ctx: Context) {
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
                      <em>Note: ${slot.name} is deprecated. ${await this.#innerMD(String(slot.deprecated ?? ''))}</em>
                    </td>
                  </tr>`))).join('')}
                </tbody>
              </table>
            </rh-table>
          </details>`}
        </section>
      </rh-accordion-panel>`;
  }

  async #renderAttributes(tagName: string, ctx: Context) {
    const level = ctx.level ?? 2;
    const _attrs = (ctx.doc.docsPage.manifest.getAttributes(tagName) ?? []);
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

  async #renderMethods(tagName: string, ctx: Context) {
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
                      <em>Note: ${method.name} is deprecated. ${await this.#innerMD((method.deprecated ?? '').toString())}</em>
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

  async #renderEvents(tagName: string, ctx: Context) {
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
                      <em>Note: ${event.name} is deprecated. ${await this.#innerMD((event.deprecated ?? '').toString())}</em>
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

  async #renderCssParts(tagName: string, ctx: Context) {
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
                      <em>Note: ${part.name} is deprecated. ${await this.#innerMD((part.deprecated ?? '').toString())}</em>
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

  async #renderCssCustomProperties(tagName: string, ctx: Context) {
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

  async #renderDesignTokens(tagName: string, ctx: Context) {
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

  async #renderDemos(content: string, ctx: Context) {
    const tagName = ctx.tagName as `rh-${string}`;
    const demos = ElementsPage.demoManifestsForTagNames[tagName] ?? [];
    return [
      html`
      <script type="module" data-helmet>
        import '@uxdot/elements/uxdot-copy-button.js';
        import '@uxdot/elements/uxdot-header.js';
        import '@uxdot/elements/uxdot-demo.js';
        import '@rhds/elements/rh-button/rh-button.js';
        import '@rhds/elements/rh-card/rh-card.js';
        import '@rhds/elements/rh-code-block/rh-code-block.js';
        import '@rhds/elements/rh-cta/rh-cta.js';
        import '@rhds/elements/rh-footer/rh-footer.js';
        import '@rhds/elements/rh-subnav/rh-subnav.js';
        import '@rhds/elements/rh-surface/rh-surface.js';
        import '@rhds/elements/rh-tabs/rh-tabs.js';
      </script>`,
      content,
      ctx.doc.fileExists && await this.renderFile(ctx.doc.filePath, ctx),
      ...await Promise.all(demos.map(async demo => {
        if (!demo.title || !demo.filePath) {
          return '';
        } else {
          const labelSlug = this.slugify(demo.title);
          const filepath = demo.filePath
              ?.replace(join(process.cwd(), 'elements', tagName, 'demo/'), '');
          const demoSlug = filepath?.split('.').shift()?.replaceAll('/', '-') ?? '';
          const projectId = `demo-${tagName}-${demoSlug}`;

          const githubSourcePrefix = `https://github.com/RedHat-UX/red-hat-design-system/tree/main`;

          const sourceUrl = `${githubSourcePrefix}${demo.filePath.replace(process.cwd(), '')}`;

          const demoUrl = `/elements/${this.getTagNameSlug(tagName)}/demo/${demoSlug === tagName ? '' : `${demoSlug}/`}`;

          const codeblocks = await this.#getDemoCodeBlocks(demo);

          if (codeblocks) {
            return html`
              ${this.#header(demo.title, 2, `demo-${labelSlug}`)}
              <uxdot-demo id="${projectId}"
                          tag="${tagName}"
                          demo="${demoSlug}"
                          demo-title="${demo.title}"
                          demo-source-url="${sourceUrl}"
                          demo-url="${demoUrl}"
                          demo-file-path="${demo.filePath}"
              >${codeblocks}</uxdot-demo>
            `;
          } else {
            return '';
          }
        }
      })),
    ].filter(Boolean).join('');
  }

  async #getDemoCodeBlocks(demo: DemoRecord) {
    const map = new Map<'html' | 'css' | 'js', string>();

    function updateKey(key: 'html' | 'css' | 'js', node: Tools.ParentNode) {
      const oldContent = map.get(key) ?? '';
      const newContent =
      dedent(node.childNodes.map(x => Tools.isTextNode(x) ? x.value : '').join('\n'));
      Tools.removeNode(node);
      map.set(key, oldContent + newContent);
    }

    if (demo.filePath) {
      const fragment = parseFragment(await readFile(demo.filePath, 'utf-8'));

      for (const node of Tools.queryAll<Tools.Element>(fragment, Tools.isElementNode)) {
        if (node.tagName === 'script'
          && node.attrs.some(x => x.name === 'type' && x.value === 'module')) {
          updateKey('js', node);
        } else if (node.tagName === 'style') {
          updateKey('css', node);
        }
      }

      map.set('html', serialize(fragment));

      const blocks = await Promise.all(map.entries().map(([kind, content]) => this.renderTemplate(dedent(`
        ~~~${kind} rhcodeblock {slot="${kind}"}
        ${content.trim()}
        ~~~
      `), 'md')).toArray());
      return blocks.join('\n');
    }
  }
}
