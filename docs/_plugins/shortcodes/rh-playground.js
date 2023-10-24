import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

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
    activeTab: { state: true },
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
    this.activeTab;
  }

  render() {
    const { showing, loading } = this;
    const demos = Object.entries(this.project?.config.files ?? {})
      .filter(([, { contentType }]) => contentType.startsWith('text/html'))
      .map(([filename, { label }]) => ({ filename, label }));
    const activeIndex = Math.max(0, demos.findIndex(x => x.filename === this.activeTab?.dataset.filename));
    return html`
      <div id="snippet" class="${classMap({ showing, loading })}">
        <slot></slot>
        <rh-spinner>Loading demo...</rh-spinner>
      </div>
      <rh-button ?hidden="${showing}" @click="${this.load}">Load Demo</rh-button>
      <playground-project ?hidden="${!showing}"
                          @filesChanged="${() => this.requestUpdate()}">
        <rh-tabs @expand="${this.onTab}"
                 .activeIndex="${activeIndex}">${demos.map(({ filename, label }) => html`
          <rh-tab slot="tab"
                  data-filename="${filename}">${label}</rh-tab>`)}
        </rh-tabs>
        <playground-file-editor @click="${this.onChange}" @keydown="${this.onChange}"></playground-file-editor>
        <playground-preview></playground-preview>
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
    this.activeTab = event.tab;
  }

  onChange(event) {
    this.switch((event.target).filename);
  }

  switch(filename) {
    if (filename && this.preview && this.fileEditor) {
      this.preview.htmlFile = filename;
      this.fileEditor.filename = filename;
    }
  }

  async load() {
    this.loading = true;
    this.switch('demo/index.html');
    const { configure } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    configure(this.project);
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
