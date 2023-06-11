// As soon as the page loads toggle JS class
const $html = document.querySelector('html');
$html.classList.remove('no-js');
$html.classList.add('js');

// Add a link to the cheat sheet in the nav if we're local
if (window.location.hostname === 'localhost') {
  const $cheatSheetItem = document.createElement('li');
  $cheatSheetItem.classList.add('site-navigation__item');
  $cheatSheetItem.innerHTML = '<a href="/cheatsheet" class="site-navigation__link">Cheat sheet!</a>';
  document.querySelector('.site-navigation__wrapper').append($cheatSheetItem);
}

// Dismissable alert
//
// Key under which name the cookie is saved
const alertName = 'alertconsent';
// The value could be used to store different levels of consent
const alertValue = 'dismissed';

document.querySelector('.js-alert-dismiss')?.addEventListener('click', function dismiss() {
  const date = new Date();
  // Alert is valid 1 year: now + (days x hours x minutes x seconds x milliseconds)
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  // Set cookie
  document.cookie = `${alertName}=${alertValue};expires=${date.toUTCString()};path=/`;

  // You probably want to remove the banner
  document.querySelector('.js-alert-banner').remove();
});
