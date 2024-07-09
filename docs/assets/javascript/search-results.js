import { html, render } from 'lit';
import { fuse } from '/assets/javascript/search-tokens.js';
import { tokens } from '@rhds/tokens/meta.js';
import '@rhds/elements/rh-badge/rh-badge.js';

const params = new URLSearchParams(location.search);
const searchTerm = params.get('s');
// since this is the results page, just search for the query param immediately
const searchResults = fuse.search(searchTerm)?.map(x => x.item);
const results = document.getElementById('results');
const resultsList = document.getElementById('results-list');
const categoryCtas = document.querySelectorAll('.token-category');
const categorySlugs = new Set([...categoryCtas].map(x => x.dataset.category));

function getCategories(token) {
  const categories = tokens.get(token)?.path?.filter(cat => categorySlugs.has(cat)) ?? [];
  // there is a mismatch between the token categories as specified
  // and the token categories as designed.
  // for example "line-height" is a top-level category in the token specification
  // but it is categorized under 'typography' in the designs
  return categories.map(category => {
    const slug = {
      'line-height': 'font',
    }[category] ?? category;
    const label = {
      font: 'typography',
    }[category] ?? category;
    return { slug, category, label };
  });
}

if (searchResults.length) {
  const resultsHTML = (numResults, term) =>
    html`
      <p>Showing ${numResults} results for "${term}"</p>
    `;

  render(searchResults?.map(({ label, value }) => html`
    <li>
      <a href="${value}">${label}</a>
      ${getCategories(label).map(({ slug, label }) => html`
        <a href="/tokens/${slug}/"><rh-badge>${label}</rh-badge></a>
      `)}
    </li>
  `), resultsList);

  render(resultsHTML(searchResults.length, searchTerm), results);


  results.hidden = false;
  resultsList.hidden = false;
} else if (searchTerm) {
  const noResultsHTML = term =>
    html`
      <p>No search results for "${term}"</p>
    `;

  render(noResultsHTML(searchTerm), results);
  results.hidden = false;
  resultsList.hidden = true;
}

// category bricks
for (const cta of categoryCtas) {
  // mark category cards which contain tokens in the search results
  const categoryHasTokenResults = !!searchResults?.find(({ label }) =>
    label.includes(cta.dataset.category));
  cta.variant = categoryHasTokenResults ? 'secondary' : 'brick';
}
