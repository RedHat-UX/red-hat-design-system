const initialized = new WeakSet();
/** @param {HTMLFormElement} form */
export async function init(form) {
  if (!initialized.has(form)) {
    const Fuse = await import('https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js').then(m => m.default);
    // const TOKENS = await import('/assets/packages/@rhds/tokens/js/tokens.js').then(m => m.tokens);
    const TOKENS = await import('@rhds/tokens').then(m => m.tokens);
    const { render, html } = await import('lit/index.js');
    const { repeat } = await import('lit/directives/repeat.js');
    const fuse = new Fuse(Array.from(TOKENS.entries()).map(([token, value]) => ({ token, value })), {
      keys: [
        'token',
        'value',
      ]
    });
    form.addEventListener('submit', e=>e.preventDefault());
    form.elements.search.addEventListener('keyup', async function() {
      const results = fuse.search(form.elements.search.value);
      render(html`
        <ol>${repeat(results ?? [], x => x.refIndex, x => html`
          <li>
            <a href="${getUrlWithHash(x.item.token)}">${x.item.token}</a>
          </li>`)}
        </ol>
      `, form.elements.output);
    });
    initialized.add(form);
  }
}


/**
 * **START**
 * `--rh-`
 * named capture group 1 `category`:
 * > Either `box-shadow` or **WORD** (_>= 1x_)
 * `-`
 * **ANY** (_>= 0x_)
 * **END**
 */
const TOKEN_NAME_RE = /^--rh-(?<category>box-shadow|\w+)-.*$/;

function getUrlWithHash(tokenName) {
  const { category = '' } = tokenName.match(TOKEN_NAME_RE)?.groups ?? {};
  // https://ux.redhat.com/tokens/box-shadow/#rh-box-shadow-md
  return `/tokens/${category}/#${tokenName.replace('--', '')}`;
}
