// for editor highlighting
const html = String.raw;

module.exports = class IconsPage {
  async data() {
    return {
      permalink: '/foundations/iconography/index.html',
      layout: 'layouts/pages/has-toc.njk',
      title: 'Iconography',
      order: 25,
      icons: await import('@rhds/icons'),
      tags: [
        'foundations',
      ],
    };
  }

  async render({ icons }) {
    return html`
      <script type="module" src="icons.js" data-helmet></script>

      <style data-helmet>
        .icon-set {
          padding: 0;
          list-style-type: none;
          display: flex;
          align-items: start;
          align-content: start;
          gap: var(--rh-space-2xl);
          flex-wrap: wrap;
          & li {
            display: flex;
            width: 163.33px;
            flex-direction: column;
            flex-shrink: 0;
            align-items: start;
            gap: var(--rh-space-md);
            & rh-button::part(button) {
              text-align: start;
            }
            & rh-icon {
              margin-inline-start: var(--rh-space-lg);
            }
          }
        }
      </style>

      <h2 id="overview">Overview</h2>
      <p>Click the names of icons to copy their HTML code to your clipboard. To learn more about
         how to use icons in each set, visit <a href="/elements/icon/guidelines/">Guidelines for the
         icon element</a>. The icon element's page also has more information about
         <a href="/elements/icon/code/">implementing icons</a>.</p>

      <section>
        <h2 id="standard-icons">Standard icons</h2>
        <ul class="icon-set">${this.#renderIcons('standard', icons)}</ul>
      </section>

      <section>
        <h2 id="ui-icons">UI icons</h2>
        <ul class="icon-set">${this.#renderIcons('ui', icons)}</ul>
      </section>

      <section>
        <h2 id="micron-icons">Microns</h2>
        <ul class="icon-set">${this.#renderIcons('microns', icons)}</ul>
      </section>

      <section>
        <h2 id="social-icons">Social icons</h2>
        <ul class="icon-set">${this.#renderIcons('social', icons)}</ul>
      </section>

      ${await this.renderFile('./docs/_includes/partials/component/feedback.html', 'njk')}
    `;
  }

  #renderIcons(set, icons) {
    return Array.from(icons[set].keys(), icon => this.#renderIcon({ icon, set })).join('');
  }

  #renderIcon({ set, icon }) {
    return html`
      <li>
        <rh-icon set="${set}" icon="${icon}"></rh-icon>
        <rh-button accessible-label="Copy icon HTML for ${set} ${icon}"
                   variant="link">${icon}</rh-button>
      </li>
    `;
  }
};

