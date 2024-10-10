const html = String.raw; // for editor highlighting

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param str indented string
 */
function dedent(str) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

module.exports = class Feedback {
  render({ doc, title, pfeconfig, relatedItems }) {
    const name = doc?.tagName ?? this.slugify(title);
    const related = [...new Set(relatedItems?.[name] ?? [])].map(x => {
      const slug = this.getTagNameSlug(x, pfeconfig);
      return {
        name: x,
        url: slug === x ? `/patterns/${slug}` : `/elements/${slug}`,
        text: pfeconfig.aliases[x] || this.deslugify(slug),
      };
    }).sort((a, b) => a.text < b.text ? -1 : a.text > b.text ? 1 : 0);
    return dedent(html`
      <script type="module" data-helmet>
        import '/assets/javascript/elements/uxdot-feedback.js';
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

