// for editor highlighting
const html = String.raw;

module.exports = class IconsPage {
  async data() {
    return {
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

      <section id="social-icons">
        <h2>Social Icons</h2>
        <ul class="icon-set">${this.renderIcons('social', icons)}</ul>
      </section>

      <section id="standard-icons">
        <h2>Standard Icons</h2>
        <ul class="icon-set">${this.renderIcons('standard', icons)}</ul>
      </section>

      <section id="ui-icons">
        <h2>UI Icons</h2>
        <ul class="icon-set">${this.renderIcons('ui', icons)}</ul>
      </section>

      <section id="micron-icons">
        <h2>Microns</h2>
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

