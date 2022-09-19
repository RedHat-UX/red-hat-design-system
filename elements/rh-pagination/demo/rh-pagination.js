import '@rhds/elements/rh-pagination/rh-pagination.js';

for (const element of document.querySelectorAll('rh-pagination')) {
  element.addEventListener('click', event => {
    const link = event.composedPath().find(x => x instanceof HTMLAnchorElement);
    if (link) {
      event.preventDefault();
      history.pushState(null, link.innerText, link.href);
      element.querySelector('[aria-current]')?.removeAttribute?.('aria-current');
      link.setAttribute('aria-current', 'page');
      element.requestUpdate();
    }
  });
}
