import { Renderer, type GlobalData } from '#eleventy.config';
import { dedent } from '#11ty-plugins/tokensHelpers.js';
import type { ElementDocsPageData } from '#11ty-plugins/element-docs.js';

const html = String.raw; // for editor highlighting

interface Data {
  title: string;
  relatedItems: Record<string, string[]>;
  doc: ElementDocsPageData;
}

export default class Feedback extends Renderer<Data> {
  async render({ doc, title, relatedItems, pfeconfig }: Data & GlobalData) {
    const name = doc?.tagName ?? this.slugify(title);
    const related = [...new Set((relatedItems?.[name] ?? []) as string[])].map(x => {
      const slug = this.getTagNameSlug(x);
      return {
        name: x,
        url: slug === x ? `/patterns/${slug}` : `/elements/${slug}`,
        text: pfeconfig.aliases?.[x] || this.deslugify(slug),
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

