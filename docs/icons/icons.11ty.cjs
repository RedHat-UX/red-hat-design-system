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
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--rh-space-sm);
        }
      </style>

      <h2 id="overview">Overview</h2>
      <p>Click the names of icons to copy their HTML code to your clipboard. To learn more about
         how to use icons in each set, visit <a href="/elements/icon/guidelines/">Guidelines for the
         icon element</a>. The icon element's page also has more information about
         <a href="/elements/icon/code/">implementing icons</a>.</p>

      <section>
        <h2 id="social-icons">Social Icons</h2>
        <ul class="icon-set">${this.renderIcons('social', icons)}</ul>
      </section>

      <section>
        <h2 id="standard-icons">Standard Icons</h2>
        <ul class="icon-set">${this.renderIcons('standard', icons)}</ul>
      </section>

      <section>
        <h2 id="ui-icons">UI Icons</h2>
        <ul class="icon-set">${this.renderIcons('ui', icons)}</ul>
      </section>

      <section>
        <h2 id="micron-icons">Microns</h2>
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
        <rh-icon set="${set}" icon="${icon}"></rh-icon>
        <rh-button accessible-label="Copy icon HTML for ${set} ${icon}"
                   variant="link">${icon}</rh-button>
      </li>
    `;
  }
};

