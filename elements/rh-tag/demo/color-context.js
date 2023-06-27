import '@rhds/elements/lib/elements/rh-context-provider/rh-context-provider.js';

const form = document.querySelector('form');
const provider = document.getElementById('context-provider');

const palettes = ['darkest', 'darker', 'dark', 'light', 'lighter', 'lightest'];

form.addEventListener('input', sync);

function sync() {
  provider.setAttribute('color-palette', palettes[form.range.value]);
}

sync();
