import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';

import 'playground-elements';
import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';

import style from './rh-playground.css.js';

class RhPlayground extends LitElement {
  static styles = [style];

  static properties = {
    loading: { type: Boolean, state: true },
    showing: { type: Boolean, state: true },
    tagName: { attribute: 'tag-name' },
    demos: { state: true },
    filename: { state: true },
    config: { state: true },
  };

  constructor() {
    super();
    /** Is the demo code loading? */
    this.loading = false;
    /** Is the demo displayed? */
    this.showing = false;
    this.project; // ?: PlaygroundProject | null;
    this.fileEditor; // ?: PlaygroundFileEditor | null;
    this.preview; // ?: PlaygroundPreview | null;
    this.filename = 'demo/index.html';
    this.config;
    this.demos = [];
  }

  render() {
    const { showing, loading } = this;
    return html`
      <div id="snippet" class="${classMap({ showing, loading })}">
        <slot></slot>
        <rh-spinner>Loading demo...</rh-spinner>
      </div>
      <rh-button ?hidden="${showing}" @click="${this.load}">Load Demo</rh-button>
      <playground-project ?hidden="${!showing}"
                          @filesChanged="${() => this.requestUpdate()}">
        <rh-tabs @expand="${this.onTab}">${repeat(this.demos, x => x.filename, ({ label, filename }) => html`
          <rh-tab slot="tab" data-filename="${filename}">${label}</rh-tab>
          <rh-tab-panel style="display:none;"></rh-tab-panel>
          `)}
        </rh-tabs>
        <playground-file-editor filename="${this.filename}"></playground-file-editor>
        <playground-preview .htmlFile="${this.filename}"></playground-preview>
      </playground-project>
    `;
  }

  firstUpdated() {
    this.project = this.shadowRoot?.querySelector('playground-project');
    this.fileEditor = this.shadowRoot?.querySelector('playground-file-editor');
    this.preview = this.shadowRoot?.querySelector('playground-preview');
    if (this.project && this.fileEditor && this.preview) {
      this.fileEditor.project = this.project;
      this.preview.project = this.project;
    }
  }

  onTab(event) {
    if (event.active && event.tab?.dataset.filename) {
      this.filename = event.tab.dataset.filename;
    }
  }

  async load() {
    this.loading = true;
    const { config } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    this.config = config;
    this.demos = Object.entries(config.files ?? {})
      .filter(([, { contentType }]) => contentType?.startsWith('text/html'))
      .map(([filename, { label }]) => ({ filename, label, active: filename === 'demo/index.html' }));
    await import('playground-elements');
    this.requestUpdate();
    this.show();
    await this.updateComplete;
    this.project.config = config;
  }

  show() {
    this.loading = false;
    this.showing = true;
  }
}

customElements.define('rh-playground', RhPlayground);
