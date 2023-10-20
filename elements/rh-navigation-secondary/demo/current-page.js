import '@rhds/elements/rh-button/rh-button.js';

const nav = document.querySelector('rh-navigation-secondary [slot="nav"]');
const links = nav.querySelectorAll('a');

const [firstLink] = links;
const lastLink = [...links].pop();

const currentPageText = document.querySelector('#currentPageText');

const firstLinkButton = document.querySelector('rh-button#first-link');
const lastLinkButton = document.querySelector('rh-button#last-link');
const nextLinkButton = document.querySelector('rh-button#next-link');
const prevLinkButton = document.querySelector('rh-button#prev-link');

// on load set the current page to the first link using aria-current="page"
firstLink.setAttribute('aria-current', 'page');
currentPageText.textContent = firstLink.textContent;

firstLinkButton.addEventListener('click', () => {
  resetCurrentPageIndex();
  firstLink.setAttribute('aria-current', 'page');
  currentPageText.textContent = firstLink.textContent;
});

lastLinkButton.addEventListener('click', () => {
  resetCurrentPageIndex();
  lastLink.setAttribute('aria-current', 'page');
  currentPageText.textContent = lastLink.textContent;
});

nextLinkButton.addEventListener('click', () => {
  const currentPageIndex = resetCurrentPageIndex();
  const nextPage = links[currentPageIndex + 1] ?? firstLink;
  // if there is no next page, set the next page to the first page
  if (!nextPage) {
    links[0].setAttribute('aria-current', 'page');
  } else {
    // set the next page to the current page
    nextPage.setAttribute('aria-current', 'page');
  }
  currentPageText.textContent = nextPage.textContent;
});

prevLinkButton.addEventListener('click', () => {
  const currentPageIndex = resetCurrentPageIndex();
  const prevPage = links[currentPageIndex - 1] ?? lastLink;
  // if there is no next page, set the next page to the first page
  if (!prevPage) {
    links[0].setAttribute('aria-current', 'page');
  } else {
    // set the next page to the current page
    prevPage.setAttribute('aria-current', 'page');
  }
  currentPageText.textContent = prevPage.textContent;
});

function resetCurrentPageIndex() {
  // get the current page
  const currentPage = nav.querySelector('[aria-current="page"]');
  // get the index of the current page
  const currentPageIndex = Array.from(links).indexOf(currentPage);
  // remove the current page
  currentPage.removeAttribute('aria-current');
  return currentPageIndex;
}
