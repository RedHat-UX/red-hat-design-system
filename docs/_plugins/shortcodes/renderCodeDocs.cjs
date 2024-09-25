import('@patternfly/pfe-tools/11ty/DocsPage.js');
const { tokens } = require('@rhds/tokens');
const { copyCell, getTokenHref, dedent } = require('../tokensHelpers.cjs');

/** quick and dirty dedent, also provides in-editor syntax highlighting */
const html = (...args) =>
  String.raw(...args)
      .split('\n')
      .map(x => x.replace(/^ {6}/, ''))
      .join('\n');

module.exports = function(eleventyConfig) {
  eleventyConfig
      .addPairedShortcode('renderCodeDocs', async function renderCodeDocs(content, kwargs = {}) {
        const page = this.context?.doc ?? this.ctx;
        const renderers = new Renderers(page, {
          ...kwargs,
          renderTemplate: eleventyConfig.javascriptFunctions.renderTemplate,
        });
        return renderers.renderAll(content);
      });
};

function mdHeading(content, { level = 2 }) {
  // Following code does not work the 2nd line fixes, however I don't think
  // this is what we want any more as we are only using this on depreciated
  // summary headings.  This should be just plain text not a formatted heading.
  // would be better just to apply styling to that text.
  // const hashes = Array.from({ length }, () => '#').join('');
  // const hashes = Array(level).fill('#').join('');
  return content;
}

function type(content = '', { lang = 'ts' } = {}) {
  return content.trim() && `\n\n\`\`\`${lang}\n${content.trim()}\n\n\`\`\`\n\n`;
}

function stringifyParams(method) {
  return method.parameters?.map?.(p =>
    `${p.name}: ${p.type?.text ?? 'unknown'}`).join(', ') ?? '';
}

class Renderers {
  constructor(page, kwargs) {
    /**
     * NB: since the data for this shortcode is no a POJO,
     * but a DocsPage instance, 11ty assigns it to this.ctx._
     * @see https://github.com/11ty/eleventy/blob/bf7c0c0cce1b2cb01561f57fdd33db001df4cb7e/src/Plugins/RenderPlugin.js#L89-L93
     */
    this.docsPage = page.doc.docsPage;
    this.manifest = this.docsPage.manifest;
    this.kwargs = kwargs;
  }

  async innerMD(content = '') {
    return (await this.kwargs.renderTemplate(content.trim(), 'md')).trim();
  }

  packageTagName(kwargs) {
    if (kwargs.for && !kwargs.for.match(/@/)) {
      return kwargs.for;
    } else {
      const [, tagName = this.tagName] = (kwargs?.for ?? '').match(/@[-\w]+\/(.*)/) ?? [];
      return tagName;
    }
  }

  async renderAll(content = '') {
    const length = this.kwargs.level ?? 2;
    const level = length + 1;
    const component = this.kwargs.for ?? this.docsPage.tagName;
    const description = this.manifest.getDescription(component);

    const allSlots =
      this.docsPage.manifest.getSlots(this.packageTagName({ level, for: component })) ?? [];
    const slotCount = allSlots.filter(x => !x.deprecated).length;
    const deprecatedSlotCount = allSlots.filter(x => x.deprecated).length;

    const allAttr =
      this.manifest.getAttributes(this.packageTagName({ level, for: component })) ?? [];
    const attrCount = allAttr.filter(x => !x.deprecated).length;
    const deprecatedAttrCount = allAttr.filter(x => x.deprecated).length;

    const allMethods =
      this.manifest.getMethods(this.packageTagName({ level, for: component })) ?? [];
    const methodsCount = allMethods.filter(x => !x.deprecated).length;
    const deprecatedMethodsCount = allMethods.filter(x => x.deprecated).length;

    const allEvents = this.manifest.getEvents(this.packageTagName({ level, for: component })) ?? [];
    const eventsCount = allEvents.filter(x => !x.deprecated).length;
    const deprecatedEventsCount = allEvents.filter(x => x.deprecated).length;

    const allCssParts =
      this.manifest.getCssParts(this.packageTagName({ level, for: component })) ?? [];
    const cssPartsCount = allCssParts.filter(x => !x.deprecated).length;
    const deprecatedCssPartsCount = allCssParts.filter(x => x.deprecated).length;

    const allCssProperties =
      this.manifest.getCssCustomProperties(this.packageTagName({ level, for: component })) ?? [];
    const cssPropertiesCount =
      allCssProperties.filter(x => !x.deprecated && !tokens.has(x.name)).length;
    const deprecatedCssPropertiesCount =
      allCssProperties.filter(x => x.deprecated && !tokens.has(x.name)).length;

    const allDesignTokens =
      this.manifest.getCssCustomProperties(this.packageTagName({ level, for: component })) ?? [];
    const designTokensCount = allDesignTokens.filter(x => tokens.has(x.name)).length;


    // TODO: dsd
    return html`
      ${Array.from({ length }, () => '#').join('')} ${component}
      ${this.kwargs.hideDescription ?? false ? `` : html`<p>${description}</p>`}

      <rh-accordion box>
        <rh-accordion-header id="${component}-slots" expanded>Slots
          <rh-badge>${slotCount}</rh-badge>
          ${deprecatedSlotCount > 0 ? html`<rh-badge state="moderate">${deprecatedSlotCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderSlots('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-attributes">Attributes
          <rh-badge>${attrCount}</rh-badge>
          ${deprecatedAttrCount > 0 ? html`<rh-badge state="moderate">${deprecatedAttrCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderAttributes('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-methods">Methods
          <rh-badge>${methodsCount}</rh-badge>
          ${deprecatedMethodsCount > 0 ? html`<rh-badge state="moderate">${deprecatedMethodsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderMethods('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-events">Events
          <rh-badge>${eventsCount}</rh-badge>
          ${deprecatedEventsCount > 0 ? html`<rh-badge state="moderate">${deprecatedEventsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderEvents('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-css-parts">CSS Shadow Parts
          <rh-badge>${cssPartsCount}</rh-badge>
          ${deprecatedCssPartsCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPartsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderCssParts('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-css-properties">CSS Custom Properties
          <rh-badge>${cssPropertiesCount}</rh-badge>
          ${deprecatedCssPropertiesCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPropertiesCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderCssCustomProperties('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-design-tokens">Design Tokens
          <rh-badge>${designTokensCount}</rh-badge>
        </rh-accordion-header>
        <rh-accordion-panel>${await this.renderTokens('', { level, for: component })}</rh-accordion-panel>
      </rh-accordion>
      ${content}
    `.trim();
  }

  async renderBand(content, { level } = {}) {
    return html`
      <section>
        ${mdHeading(content, { level })}
        ${await this.innerMD(content)}
      </section>`;
  }

  /** Render the list of element attributes */
  async renderAttributes(content, { header = 'Attributes', level = 2, ...kwargs } = {}) {
    const _attrs = this.manifest.getAttributes(this.packageTagName(kwargs)) ?? [];
    const deprecated = _attrs.filter(x => x.deprecated);
    const attributes = _attrs.filter(x => !x.deprecated);
    return html`
      <section class="attributes">
        ${!content && !attributes.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}
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
                <td>${type(attribute.type?.text ?? 'unknown')}</td>
                <td>${type(attribute.default ?? 'unknown')}</td>
              </tr>`))).join('')}
            </tbody>
          </table>
        </rh-table>`}
        ${!deprecated.length ? '' : html`
        <details>
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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
                  <td>${type(attribute.type?.text ?? 'unknown')}</td>
                  <td>${type(attribute.default ?? 'unknown')}</td>
                </tr>`))).join('')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render a table of element Design Tokens */
  async renderTokens(content, {
    header = 'Design Tokens',
    ...kwargs
  } = {}) {
    const allCssProperties =
      this.manifest.getCssCustomProperties(this.packageTagName(kwargs)) ?? [];
    const elTokens = allCssProperties.filter(x => tokens.has(x.name));
    return html`
      <section class="design-tokens">
        ${!content && !elTokens.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}
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
  async renderCssCustomProperties(content, {
    header = 'CSS Custom Properties',
    level = 2, ...kwargs
  } = {}) {
    const allCssProperties =
      this.manifest.getCssCustomProperties(this.packageTagName(kwargs)) ?? [];
    const cssProperties = allCssProperties.filter(x => !x.deprecated && !tokens.has(x.name));
    const deprecated = allCssProperties.filter(x => x.deprecated && !tokens.has(x.name));
    return html`
      <section class="css-custom-properties">
        ${!content && !cssProperties.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}
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
            <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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
  async renderCssParts(content, { header = 'CSS Shadow Parts', level = 2, ...kwargs } = {}) {
    const allParts = this.manifest.getCssParts(this.packageTagName(kwargs)) ?? [];
    const parts = allParts.filter(x => !x.deprecated);
    const deprecated = allParts.filter(x => x.deprecated);
    return html`
      <section class="css-shadow-parts">
        ${!content && !parts.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}
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
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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
  async renderEvents(content, { header = 'Events', level = 2, ...kwargs } = {}) {
    const _events = this.manifest.getEvents(this.packageTagName(kwargs)) ?? [];
    const deprecated = _events.filter(x => x.deprecated);
    const events = _events.filter(x => !x.deprecated);
    return html`
      <section class="events">
        ${!content && !events.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}
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
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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

  /** Render the installation instructions for the element */
  renderInstallation(content, { header = 'Installation', level = 2, tagName } = {}) {
    return html`
      <section>
        <h2>Installation</h2>

      We recommend loading elements via a CDN such as [JSPM][inst-jspm] and
      using an import map to manage your dependencies.

      For more information on import maps and how to use them,
      see the [import map reference on MDN Web Docs][inst-mdn].

      If you are using node and NPM, you can install this component using npm:

      ~~~shell
      npm install ${this.manifest.packageJson.name}
      ~~~

      Then import this component into your project by using a
      [bare module specifier][inst-bms]:

      ~~~js
      import '@patternfly/elements/${tagName}/${tagName}.js';
      ~~~

      **Please Note** You should either load elements via a CDN or
      install them locally through NPM. *Do not do both.*

      </section>

      [inst-jspm]: https://jspm.dev
      [inst-mdn]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script/type/importmap/
      [inst-bms]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules`;
  }

  /** Render the list of element methods */
  async renderMethods(content, { header = 'Methods', level = 2, ...kwargs } = {}) {
    const allMethods = this.manifest.getMethods(this.packageTagName(kwargs)) ?? [];
    const deprecated = allMethods.filter(x => x.deprecated);
    const methods = allMethods.filter(x => !x.deprecated);
    // TODO: inline code highlighting for type and default: render the markdown to html and extract the `<code>` from the `<pre>`
    return html`
      <section class="methods">
        ${!content && !methods.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}

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
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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
  async renderSlots(content, { header = 'Slots', level = 2, ...kwargs } = {}) {
    const allSlots = this.docsPage.manifest.getSlots(this.packageTagName(kwargs)) ?? [];
    const slots = allSlots.filter(x => !x.deprecated);
    const deprecated = allSlots.filter(x => x.deprecated);
    return html`
      <section class="slots">
        ${!content && !slots.length ? html`
        <em>None</em>` : html`
        ${await this.innerMD(content)}

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
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
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
}
