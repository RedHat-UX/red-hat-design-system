import { LitElement, html, css } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

import '@rhds/elements/rh-button/rh-button.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';

class RhPlayground extends LitElement {
  static properties = {
  /** Is the demo code loading? */
    loading: { type: Boolean, state: true },
    /** Is the demo displayed? */
    showing: { type: Boolean, state: true },
    tagName: { attribute: 'tag-name' },
  };

  project;
  tabBar;
  fileEditor;
  preview;

  static styles = css`
    :host {
      max-heignt: 785px;
      position: relative;
      display: block;
    }
    ::slotted(pre) {
      margin: 0 !important;
      margin-block-end: -36px !important;
    }
    [hidden],
    div.showing {
      display: none !important;
    }
    div {
      max-height: 785px;
      overflow-y: scroll;
    }
    rh-button {
      position: absolute;
      inset-block-end: 5px;
      inset-inline-end: 5px;
      display: block;
    }
    rh-spinner {
      opacity: 0;
      transition: opacity 0.5s ease;
      position: sticky;
      inset-block: 0 40%;
      inset-inline: 41%;
    }
    .loading rh-spinner {
      opacity: 1;
    }
    .loading ::slotted(pre) {
      opacity: .3;
    }
  `;

  render() {
    const { showing, loading } = this;
    return html`
      <div id="snippet" class="${classMap({ showing, loading })}">
        <slot></slot>
        <rh-spinner>Loading demo...</rh-spinner>
      </div>
      <rh-button ?hidden="${showing}" @click="${this.load}">Load Demo</rh-button>
      <playground-project ?hidden="${!showing}">
        <playground-tab-bar @click="${this.onChange}"></playground-tab-bar>
        <playground-file-editor @click="${this.onChange}" @keydown="${this.onChange}"></playground-file-editor>
        <playground-preview></playground-preview>
      </playground-project>
    `;
  }

  firstUpdated() {
    this.project = this.shadowRoot.querySelector('playground-project');
    this.tabBar = this.shadowRoot.querySelector('playground-tab-bar');
    this.fileEditor = this.shadowRoot.querySelector('playground-file-editor');
    this.preview = this.shadowRoot.querySelector('playground-preview');
    this.tabBar.project = this.project;
    this.fileEditor.project = this.project;
    this.preview.project = this.project;
  }

  onChange(event) {
    const filename = event.target === this.tabBar ? event.target._activeFileName : event.target.fileName;
    this.switch(filename);
  }

  switch(filename) {
    this.preview.htmlFile = filename;
    this.fileEditor.filename = filename;
  }

  async load() {
    this.loading = true;
    this.switch('demo/index.html');
    const { configure } = await import(`/assets/playgrounds/${this.tagName}-playground.js`);
    configure(this.project);
    await import('https://unpkg.com/playground-elements?module');
    this.show();
  }

  show() {
    this.loading = false;
    this.showing = true;
  }
}

customElements.define('rh-playground', RhPlayground);
