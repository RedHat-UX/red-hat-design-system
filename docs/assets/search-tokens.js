import Fuse from 'fuse.js';
import { tokens } from '@rhds/tokens';

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

const tokenUrls = Array.from(tokens.keys(), label => ({ label, value: getUrlWithHash(label) }));
const fuse = new Fuse(tokenUrls, { threshold: 0.4, keys: ['label', 'value'] });

/** @param {HTMLFormElement} form */
export async function init(form) {
  const { search } = form.elements;
  search.items = tokenUrls;
  form.addEventListener('submit', e => e.preventDefault());
  search.addEventListener('input', async function() {
    const searchResults = fuse.search(search.value)?.map(x => x.item);
    search.items = searchResults ?? tokenUrls;
    for (const card of document.querySelectorAll('.token-category')) {
      // mark category cards which contain tokens in the search results
      card.classList.toggle('found', !!searchResults?.some(({ label }) =>
        label.includes(card.dataset.category)));
    }
  });
}

