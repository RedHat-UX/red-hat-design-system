import { Renderer } from '../../../../eleventy.config.ts';
import { dedent } from '../../../_plugins/tokensHelpers';

const html = String.raw; // for editor highlighting

export default class Feedback extends Renderer {
  async render({
    doc,
    title,
    pfeconfig,
    relatedItems,
  }) {
    pfeconfig ??= await import('@patternfly/pfe-tools/config.js').then(x => x.getPfeConfig());
    const name = doc?.tagName ?? this.slugify(title);
    const related = [...new Set(relatedItems?.[name] ?? [])].map(x => {
      const slug = this.getTagNameSlug(x);
      return {
        name: x,
        url: slug === x ? `/patterns/${slug}` : `/elements/${slug}`,
        text: pfeconfig.aliases[x] || this.deslugify(slug),
      };
    }).sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
    return dedent(html`
      <script type="module" data-helmet>
        import '@uxdot/elements/uxdot-feedback.js';
      </script>
      <uxdot-feedback>${!related.length ? html`
        <h2>Other libraries</h2>
        <p>To learn more about our other libraries, visit the <a href="/get-started/">getting started page</a>.</p>` : html`
        <h2>Related elements or patterns</h2>
        <ul id="related-items-list">${related.map(item => html`
          <li>
            <a href="${item.url}">${item.text}</a>
          </li>`).join('')}
        </ul>`}
      </uxdot-feedback>
    `).replaceAll('\n+', '\n');
  }
};

