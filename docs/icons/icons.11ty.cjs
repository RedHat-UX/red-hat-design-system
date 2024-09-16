// for editor highlighting
const html = String.raw;

module.exports = class IconsPage {
  async data() {
    return {
      permalink: '/icons/index.html',
      layout: 'layouts/pages/basic.njk',
      title: 'Icons',
      hasToc: true,
      icons: await import('@rhds/icons'),
    };
  }

  render({ icons }) {
    return html`
      <script type="module" src="icons.js" data-helmet></script>

      <style data-helmet>
        .icon-set {
          padding: 0;
          list-style-type: none;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(95px, auto));
          gap: var(--rh-space-sm);
        }
      </style>

      <p>Click icons to copy their HTML elements</p>

      <section>
        <h2 id="social-icons">Social Icons</h2>
        <p>These icons represent or link to social media companies</p>
        <ul class="icon-set">${this.renderIcons('social', icons)}</ul>
      </section>

      <section>
        <h2 id="standard-icons">Standard Icons</h2>
        <p>Use these icons as graphics, and at large sizes</p>
        <rh-alert state="warning">Avoid using these for UI elements like buttons</rh-alert>
        <ul class="icon-set">${this.renderIcons('standard', icons)}</ul>
      </section>

      <section>
        <h2 id="ui-icons">UI Icons</h2>
        <p>Use these icons in UI controls like buttons and form fields</p>
        <ul class="icon-set">${this.renderIcons('ui', icons)}</ul>
      </section>

      <section>
        <h2 id="micron-icons">Microns</h2>
        <p>Microns is a funny word</p>
        <ul class="icon-set">${this.renderIcons('microns', icons)}</ul>
      </section>
    `;
  }

  renderIcons(set, icons) {
    return Array.from(icons[set].keys(), icon => this.renderIcon({ icon, set })).join('');
  }

  renderIcon({ set, icon }) {
    return html`
      <li>
        <rh-button accessible-label="Copy icon HTML for ${set} ${icon}"
                   icon="${icon}"
                   icon-set="${set}"
                   variant="link">${icon}</rh-button>
      </li>
    `;
  }
};

