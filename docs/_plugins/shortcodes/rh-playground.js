import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';

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
    activeIndex: { state: true },
    demos: { state: true },
    filename: { state: true },
  };

  constructor() {
    super();
    /** Is the demo code loading? */
    this.loading = false;
    /** Is the demo displayed? */
    this.showing = false;
    this.project; // ?: PlaygroundProject | null;
    this.tabBar; // ?: PlaygroundTabBar | null;
    this.fileEditor; // ?: PlaygroundFileEditor | null;
    this.preview; // ?: PlaygroundPreview | null;
    this.filename;
    this.activeIndex;
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
        <rh-tabs @expand="${this.onTab}"
                 active-index="${ifDefined(this.activeIndex)}">${this.demos.map(({ label }) => html`
          <rh-tab slot="tab">${label}</rh-tab>`)}
        </rh-tabs>
        <playground-file-editor .htmlFile="${this.filename}"
                                @click="${this.onChange}"
                                @keydown="${this.onChange}"></playground-file-editor>
        <playground-preview .htmlFile="${this.filename}"></playground-preview>
      </playground-project>
    `;
  }

  firstUpdated() {
    this.project = this.shadowRoot?.querySelector('playground-project');
    this.tabBar = this.shadowRoot?.querySelector('playground-tab-bar');
    this.fileEditor = this.shadowRoot?.querySelector('playground-file-editor');
    this.preview = this.shadowRoot?.querySelector('playground-preview');
    if (this.project && this.tabBar && this.fileEditor && this.preview) {
      this.tabBar.project = this.project;
      this.fileEditor.project = this.project;
      this.preview.project = this.project;
    }
  }

  onTab(event) {
    this.switch(event.tab.dataset.filename);
  }

  onChange(event) {
    this.switch((event.target).filename);
  }

  switch(filename) {
    this.filename = filename ?? undefined;
    if (this.filename) {
      this.activeIndex = this.demos.findIndex(x => x.filename === this.filename);
    }
  }

  async load() {
    this.loading = true;
    this.switch('demo/index.html');
    const { configure } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    configure(this.project);
    this.demos = Object.entries(this.project?.config.files ?? {})
      .filter(([, { contentType }]) => contentType.startsWith('text/html'))
      .map(([filename, { label }]) => ({ filename, label }));
    this.activeIndex = this.demos.findIndex(x => x.filename === this.filename);
    await import('playground-elements');
    this.requestUpdate();
    this.show();
  }

  show() {
    this.loading = false;
    this.showing = true;
  }
}

customElements.define('rh-playground', RhPlayground);
