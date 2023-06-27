
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

/** @param {HTMLFormElement} form */
export async function init(form) {
  const { search } = form.elements;
  const Fuse = await import('https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/dist/fuse.esm.js').then(m => m.default);
  const tokens = await import('@rhds/tokens').then(m =>
    Array.from(m.tokens.keys(), label => ({ label, value: getUrlWithHash(label) })));
  search.items = tokens;
  const fuse = new Fuse(tokens, { threshold: 0.4, keys: ['label', 'value'] });
  form.addEventListener('submit', e=>e.preventDefault());
  search.addEventListener('keyup', async function() {
    search.items = fuse.search(form.elements.search.value)?.map(x => x.item) ?? tokens;
  });
}

