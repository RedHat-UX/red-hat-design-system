import { html, render } from 'lit';
import { fuse } from '/assets/search-tokens.js';

const params = new URLSearchParams(location.search);
const searchTerm = params.get('s');
// since this is the results page, just search for the query param immediately
const searchResults = fuse.search(searchTerm)?.map(x => x.item);
const results = document.getElementById('results');
const resultsList = document.getElementById('results-list');

if (searchResults.length) {
  const resultsHTML = (numResults, term) =>
    html`
      <p>Showing ${numResults} results for "${term}"</p>
    `;

  render(searchResults?.map(({ label, value }) => html`
    <li><a href="${value}">${label}</a></li>
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
for (const brick of document.querySelectorAll('.token-category')) {
  // mark category cards which contain tokens in the search results
  const categoryTokens = searchResults?.filter(({ label }) =>
    label.includes(brick.dataset.category)) ?? [];
  brick.classList.toggle('found', !!categoryTokens.length);
}
