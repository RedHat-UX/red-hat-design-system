'use strict';

// As soon as the page loads toggle JS class
const $html = document.querySelector('html');
$html.classList.remove('no-js');
$html.classList.add('js');

window.addEventListener('load', () => {
  // Add a link to the cheat sheet in the nav if we're local
  if (window.location.hostname === 'localhost') {
    const $cheatSheetItem = document.createElement('li');
    $cheatSheetItem.classList.add('site-navigation__item');
    $cheatSheetItem.innerHTML = '<a href="/cheatsheet" class="site-navigation__link">Cheat sheet!</a>';
    document.querySelector('.site-navigation__wrapper').append($cheatSheetItem);
  }
});

// Dismissable alert

// eslint-disable-next-line no-unused-vars
// function closeBanner(target) {
//     document.getElementById(target).style.display = 'none';
// }

// Key under which name the cookie is saved
const alertName = 'alertconsent';
// The value could be used to store different levels of consent
const alertValue = 'dismissed';

function dismiss() {
  const date = new Date();
  // Alert is valid 1 year: now + (days x hours x minutes x seconds x milliseconds)
  date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
  // Set cookie
  document.cookie = `${alertName}=${alertValue};expires=${date.toUTCString()};path=/`;

  // You probably want to remove the banner
  document.querySelector('.js-alert-banner').remove();
}

// Get button element
const buttonElement = document.querySelector('.js-alert-dismiss');
// Maybe alert consent is not present
if (buttonElement) {
  // Listen on button click
  buttonElement.addEventListener('click', dismiss);
}
