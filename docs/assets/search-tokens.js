const initialized = new WeakSet();
/** @param {HTMLFormElement} form */
export async function init(form) {
  if (!initialized.has(form)) {
    const pagefind = await import('/assets/pagefind/pagefind.js');
    await pagefind.filters();
    form.addEventListener('submit', e=>e.preventDefault());
    form.elements.search.addEventListener('keyup', async function() {
      const { results } = await pagefind.search(form.elements.search.value);
      const data = await Promise.all(results.slice(0, 10).map(async ({ id, data }) => ({ id, ...await data() })));
      const { render, html } = await import('/assets/packages/lit/index.js');
      const { repeat } = await import('/assets/packages/lit/directives/repeat.js');
      const { unsafeHTML } = await import('/assets/packages/lit/directives/unsafe-html.js');
      // console.log(data);
      render(html`
        <ol>${repeat(data ?? [], x => x.id, x => html`
          <li>
            <a href="${x.url}#${getHash(x)}">${x.meta.title}</a>
            <p>${unsafeHTML(x.excerpt)}</p>
          </li>`)}
        </ol>
      `, form.elements.output);
    });
    initialized.add(form);
  }
}
function getHash(x) {
  return x?.filters?.token?.find(x => x.startsWith('rh'));
}
