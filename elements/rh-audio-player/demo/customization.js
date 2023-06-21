import '@rhds/elements/rh-audio-player/rh-audio-player.js';
const form = document.querySelector('form');
const player = document.querySelector('rh-audio-player');
const { poster } = player;

/**
 * update audio player demo based on form selections
 */
function updateDemo() {
  const colorPalette = ['cyan', 'light'].includes(form.palette.value) ?
    'light' : 'dark';
  const colorClass = ['cyan', 'purple', 'purple-img'].includes(form.palette.value) ? form.palette.value : '';
  player.poster = !form.poster.checked || form.palette.value === 'purple-img' ? undefined : poster;
  player.layout = form.layout.value !== '' ? form.layout.value : undefined;
  if (colorPalette === player.colorPalette) {
    const oldOn = player.colorPalette;
    player.colorPalette = oldOn === 'dark' ? 'light' : 'dark';
  }
  player.setAttribute('class', colorClass);
  player.colorPalette = colorPalette;
  player.hasAccentColor = ['cyan', 'purple'].includes(form.palette.value);
  setTimeout(()=>{ player.expanded = !player.expanded; }, 10);
  setTimeout(()=>{ player.expanded = !player.expanded; }, 10);
}

if (form) {
  form.addEventListener('input', updateDemo);
  updateDemo();
}
