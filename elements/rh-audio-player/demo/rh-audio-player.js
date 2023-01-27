import '@rhds/elements/rh-audio-player/rh-audio-player.js';

const root = document.querySelector('[data-demo="rh-audio-player"]')?.shadowRoot ?? document;

const form = root.querySelector('form');
const player = root.querySelector('rh-audio-player');
const mediaseries = player.querySelector('[slot="series"]');
const mediatitle = player.querySelector('[slot="title"]');
const { poster } = player;

form.addEventListener('input', sync);

function sync() {
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  player.on = formObj.dark ? 'dark' : 'light';
  player.mode = formObj.mode;
  player.poster = !formObj.poster ? undefined : poster;
  player.setAttribute('class', formObj.cssvar);

  mediaseries.innerHTML = formObj?.series || '';
  mediatitle.innerHTML = formObj?.title || '';
}

sync();
