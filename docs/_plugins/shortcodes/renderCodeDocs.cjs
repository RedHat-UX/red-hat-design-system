import('@patternfly/pfe-tools/11ty/DocsPage.js');
const { tokens } = require('@rhds/tokens');
const { copyCell, getTokenHref } = require('../tokensHelpers.cjs');

/** quick and dirty dedent, also provides in-editor syntax highlighting */
const html = (...args) =>
  String.raw(...args)
      .split('\n')
      .map(x => x.replace(/^ {6}/, ''))
      .join('\n');

module.exports = function(eleventyConfig) {
  eleventyConfig
      .addPairedShortcode('renderCodeDocs', function renderCodeDocs(content, kwargs = {}) {
        const page = this.context?.doc ?? this.ctx;
        const renderers = new Renderers(page, kwargs);
        return renderers.renderAll(content);
      });
};

function innerMD(content = '') {
  const trimmed = content.trim();
  return trimmed && `\n\n\n${trimmed}\n\n\n`;
}

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

  packageTagName(kwargs) {
    if (kwargs.for && !kwargs.for.match(/@/)) {
      return kwargs.for;
    } else {
      const [, tagName = this.tagName] = (kwargs?.for ?? '').match(/@[-\w]+\/(.*)/) ?? [];
      return tagName;
    }
  }

  renderAll(content = '') {
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
        <rh-accordion-panel>${this.renderSlots('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-attributes">Attributes
          <rh-badge>${attrCount}</rh-badge>
          ${deprecatedAttrCount > 0 ? html`<rh-badge state="moderate">${deprecatedAttrCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderAttributes('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-methods">Methods
          <rh-badge>${methodsCount}</rh-badge>
          ${deprecatedMethodsCount > 0 ? html`<rh-badge state="moderate">${deprecatedMethodsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderMethods('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-events">Events
          <rh-badge>${eventsCount}</rh-badge>
          ${deprecatedEventsCount > 0 ? html`<rh-badge state="moderate">${deprecatedEventsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderEvents('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-css-parts">CSS Shadow Parts
          <rh-badge>${cssPartsCount}</rh-badge>
          ${deprecatedCssPartsCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPartsCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderCssParts('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-css-properties">CSS Custom Properties
          <rh-badge>${cssPropertiesCount}</rh-badge>
          ${deprecatedCssPropertiesCount > 0 ? html`<rh-badge state="moderate">${deprecatedCssPropertiesCount}</rh-badge>` : ``}
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderCssCustomProperties('', { level, for: component })}</rh-accordion-panel>
        <rh-accordion-header id="${component}-design-tokens">Design Tokens
          <rh-badge>${designTokensCount}</rh-badge>
        </rh-accordion-header>
        <rh-accordion-panel>${this.renderTokens('', { level, for: component })}</rh-tab-panel>
      </rh-accordion>
      ${content}
    `.trim();
  }

  renderBand(content, { level } = {}) {
    return html`
      <section>
        ${mdHeading(content, { level })}
        ${innerMD(content)}
      </section>`;
  }

  /** Render the overview of a component page */
  renderOverview(content) {
    return html`
      <section class="overview">
        <h2>Overview</h2>
        <div class="example-preview">
          ${content}
        </div>
      </section>

      <section>
        <h2>Installation</h2>

      ~~~shell
      npm install ${this.manifest.packageJson.name}
      ~~~

      </section>`;
  }

  /** Render the list of element attributes */
  renderAttributes(content, { header = 'Attributes', level = 2, ...kwargs } = {}) {
    const _attrs = this.manifest.getAttributes(this.packageTagName(kwargs)) ?? [];
    const deprecated = _attrs.filter(x => x.deprecated);
    const attributes = _attrs.filter(x => !x.deprecated);
    return html`
      <section class="attributes">
        ${!content && !attributes.length ? html`
        <em>None</em>` : html`
        ${innerMD(content)}
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col" data-label="DOM Property">DOM Property</th>
                <th scope="col" data-label="Description">Description</th>
                <th scope="col" data-label="Type">Type</th>
                <th scope="col" data-label="Default">Default</th>
              </tr>
            </thead>
            <tbody>
              ${attributes.map(attribute => html`
              <tr>
                <td data-label="DOM Property"><code>${attribute.fieldName}</code></td>
                <td data-label="Description">${innerMD(attribute.description)}</td>
                <td data-label="Type">${type(attribute.type?.text ?? 'unknown')}</td>
                <td data-label="Default">${type(attribute.default ?? 'unknown')}</td>
              </tr>`).join('\n')}
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
                  <th scope="col" data-label="DOM Property">DOM Property</th>
                  <th scope="col" data-label="Description">Description</th>
                  <th scope="col" data-label="Type">Type</th>
                  <th scope="col" data-label="Default">Default</th>
                </tr>
              </thead>
              <tbody>
                ${deprecated.map(attribute => html`
                <tr>
                  <td data-label="DOM Property"><code>${attribute.fieldName}</code></td>
                  <td data-label="Description">${innerMD(attribute.description)}</td>
                  <td data-label="Type">${type(attribute.type?.text ?? 'unknown')}</td>
                  <td data-label="Default">${type(attribute.default ?? 'unknown')}</td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render a table of element Design Tokens */
  renderTokens(content, {
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
        ${innerMD(content)}
        <rh-table>
          <table>
            <thead>
              <tr>
                <th data-label="Token">Token</th>
                <th data-label="Copy">Copy</th>
              </tr>
            </thead>
            <tbody>${elTokens.map(token => html`
              <tr>
                <td data-label="Token">
                  <a href="${getTokenHref(token)}"><code>${token.name}</code></a>
                </td>
              ${copyCell(token)}
              </tr>`).join('\n')}
            </tbody>
          </table>
      </rh-table>`}
      </section>`;
  }

  /** Render a table of element CSS Custom Properties */
  renderCssCustomProperties(content, {
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
        ${innerMD(content)}
        <rh-table>
          <table class=css-custom-properties>
            <thead>
              <tr>
                <th scope="col" data-label="CSS Property">CSS Property</th>
                <th scope="col" data-label="Description">Description</th>
                <th scope="col" data-label="Default">Default</th>
              </tr>
            </thead>
            <tbody>${cssProperties.map(prop => html`
              <tr>
                <td data-label="CSS Property"><code>${prop.name}</code></td>
                <td data-label="Description">${innerMD(prop.description ?? '')}</td>
                <td data-label="Default">${!prop.default?.startsWith('#') ? html`
                  <code>` : html`
                  <code data-color="${prop.default}"
                        style="--color:${prop.default}">`}
                    ${prop.default ?? '—'}
                  </code>
                </td>
              </tr>`).join('\n')}
            </tbody>
          </table>`}${!deprecated.length ? '' : html`
          <details>
            <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
            <table>
              <thead>
                <tr>
                  <th scope="col" data-label="CSS Property">CSS Property</th>
                  <th scope="col" data-label="Description">Description</th>
                  <th data-label="">Default</th>
                </tr>
              </thead>
              <tbody>${deprecated.map(prop => html`
                <tr>
                  <td data-label="CSS Property"><code>${prop.name}</code></td>
                  <td data-label="Description">${innerMD(prop.description)}</td>
                  <td data-label="Default">${innerMD(prop.default ?? '—')}</td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of element CSS Shadow Parts */
  renderCssParts(content, { header = 'CSS Shadow Parts', level = 2, ...kwargs } = {}) {
    const allParts = this.manifest.getCssParts(this.packageTagName(kwargs)) ?? [];
    const parts = allParts.filter(x => !x.deprecated);
    const deprecated = allParts.filter(x => x.deprecated);
    return html`
      <section class="css-shadow-parts">
        ${!content && !parts.length ? html`
        <em>None</em>` : html`
        ${innerMD(content)}
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col" data-label="Part Name">Part Name</th>
                <th scope="col" data-label="Description">Description</th>
              </tr>
            </thead>
            <tbody>
              ${parts.map(part => html`
              <tr>
                <td data-label="Part Name"><code>${part.name}</code></td>
                <td data-label="Description">${innerMD(part.description)}</td>
              </tr>`).join('\n')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col" data-label="Part Name">Part Name</th>
                  <th scope="col" data-label="Description">Description</th>
                </tr>
              </thead>
              <tbody>
                ${deprecated.map(part => html`
                <tr>
                  <td data-label="Part Name"><code>${part.name}</code></td>
                  <td data-label="Description">
                    ${innerMD(part.description)}
                    <em>Note: ${part.name} is deprecated. ${innerMD(part.deprecated)}</em>
                  </td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of events for the element */
  renderEvents(content, { header = 'Events', level = 2, ...kwargs } = {}) {
    const _events = this.manifest.getEvents(this.packageTagName(kwargs)) ?? [];
    const deprecated = _events.filter(x => x.deprecated);
    const events = _events.filter(x => !x.deprecated);
    return html`
      <section class="events">
        ${!content && !events.length ? html`
        <em>None</em>` : html`
        ${innerMD(content)}
        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col" data-label="Event Name">Event Name</th>
                <th scope="col" data-label="Description">Description</th>
              </tr>
            </thead>
            <tbody>
              ${events.map(event => html`
              <tr>
                <td data-label="Event Name"><code>${event.name}</code></td>
                <td data-label="Description">${innerMD(event.description)}</td>
              </tr>`).join('\n')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col" data-label="Event Name">Event Name</th>
                  <th scope="col" data-label="Description">Description</th>
                </tr>
              </thead>
              <tbody>
                ${deprecated.map(event => html`
                <tr>
                  <td data-label="Event Name"><code>${event.name}</code></td>
                  <td data-label="Description">
                    ${innerMD(event.description)}
                    <em>Note: ${event.name} is deprecated. ${innerMD(event.deprecated)}</em>
                  </td>
                </tr>`).join('\n')}
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
  renderMethods(content, { header = 'Methods', level = 2, ...kwargs } = {}) {
    const allMethods = this.manifest.getMethods(this.packageTagName(kwargs)) ?? [];
    const deprecated = allMethods.filter(x => x.deprecated);
    const methods = allMethods.filter(x => !x.deprecated);
    // TODO: inline code highlighting for type and default: render the markdown to html and extract the `<code>` from the `<pre>`
    return html`
      <section class="methods">
        ${!content && !methods.length ? html`
        <em>None</em>` : html`
        ${innerMD(content)}

        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col" data-label="Method Name">Method Name</th>
                <th scope="col" data-label="Description">Description</th>
              </tr>
            </thead>
            <tbody>
              ${methods.map(method => html`
              <tr>
                <td data-label="Method Name"><code>${method.name}(${stringifyParams(method)})</code></td>
                <td data-label="Description">${innerMD(method.description)}</td>
              </tr>`).join('\n')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col" data-label="Method Name">Method Name</th>
                  <th scope="col" data-label="Description">Description</th>
                </tr>
              </thead>
              <tbody>
                ${deprecated.map(method => html`
                <tr>
                  <td data-label="Method Name"><code>${method.name}(${stringifyParams(method)})</code></td>
                  <td data-label="Description">
                    ${innerMD(method.description)}
                    <em>Note: ${method.name} is deprecated. ${innerMD(method.deprecated)}</em>
                  </td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }

  /** Render the list of the element's slots */
  renderSlots(content, { header = 'Slots', level = 2, ...kwargs } = {}) {
    const allSlots = this.docsPage.manifest.getSlots(this.packageTagName(kwargs)) ?? [];
    const slots = allSlots.filter(x => !x.deprecated);
    const deprecated = allSlots.filter(x => x.deprecated);
    return html`
      <section class="slots">
        ${!content && !slots.length ? html`
        <em>None</em>` : html`
        ${innerMD(content)}

        <rh-table>
          <table>
            <thead>
              <tr>
                <th scope="col" data-label="Slot Name">Slot Name</th>
                <th scope="col" data-label="Description">Description</th>
              </tr>
            </thead>
            <tbody>
              ${slots.map(slot => html`
              <tr>
                <td data-label="Slot Name"><code>${slot.name}</code></td>
                <td data-label="Description">${innerMD(slot.description)}</td>
              </tr>`).join('\n')}
            </tbody>
          </table>
        </rh-table>`}${!deprecated.length ? '' : html`
        <details>
          <summary>${mdHeading(`Deprecated ${header}`, { level: level + 1 })}</summary>
          <rh-table>
            <table>
              <thead>
                <tr>
                  <th scope="col" data-label="Slot Name">Slot Name</th>
                  <th scope="col" data-label="Description">Description</th>
                </tr>
              </thead>
              <tbody>
                ${deprecated.map(slot => html`
                <tr>
                  <td data-label="Slot Name"><code>${slot.name}</code></td>
                  <td data-label="Description">
                    ${innerMD(slot.description)}
                    <em>Note: ${slot.name} is deprecated. ${innerMD(slot.deprecated)}</em>
                  </td>
                </tr>`).join('\n')}
              </tbody>
            </table>
          </rh-table>
        </details>`}
      </section>`;
  }
}
