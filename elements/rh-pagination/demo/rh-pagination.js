import '@rhds/elements/rh-pagination/rh-pagination.js';
// TODO: rh-button
import '@patternfly/pfe-button';

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);

for (const element of $$('rh-pagination')) {
  element.addEventListener('click', event => {
    const link = event.composedPath().find(x => x instanceof HTMLAnchorElement);
    if (link) {
      event.preventDefault();
      history.pushState(null, link.innerText, link.href);
      element.requestUpdate();
    }
  });
}

$('#add')?.addEventListener('click', function() {
  const link = document.createElement('a');
  const item = document.createElement('li');
  item.append(link);
  const i = $$('rh-pagination li').length + 1;
  link.href = `#${i}`;
  link.textContent = i;
  $('rh-pagination ol').append(item);
  $('rh-pagination').requestUpdate();
});

$('#remove')?.addEventListener('click', function() {
  $('rh-pagination li:last-child')?.remove?.();
});
