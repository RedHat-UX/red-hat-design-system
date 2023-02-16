import '@rhds/elements/rh-audio-player/rh-audio-player.js';
const form = document.querySelector('form');
const player = document.querySelector('rh-audio-player#player');
const playerRTL = document.querySelector('rh-audio-player#rtl');
const transcript = document.querySelector('rh-audio-player-transcript#regular');
const transcriptRTL = document.querySelector('#rtl rh-audio-player-transcript#regular');
const detail = document.querySelector('rh-audio-player-transcript#detail');
const detailRTL = document.querySelector('#rtl rh-audio-player-transcript#detail');
const about = document.querySelector('rh-audio-player-about');
const aboutRTL = document.querySelector('#rtl rh-audio-player-about');
const subscribe = document.querySelector('rh-audio-player-subscribe');
const subscribeRTL = document.querySelector('#rtl rh-audio-player-subscribe');
const mediaseries = document.querySelector('[slot="series"]');
const mediaseriesRTL = document.querySelector('#rtl [slot="series"]');
const mediatitle = document.querySelector('[slot="title"]');
const mediatitleRTL = document.querySelector('#rtl [slot="title"]');
const { poster } = player;

if (form) {
  form.addEventListener('input', updateDemo);
}

function setLabel(panel, field) {
  const slot = panel.querySelector('[slot="heading"]');
  const text = field?.length > 0 ? field : '';
  if (slot) {
    slot.innerHTML = text || '';
  }
  if (text) {
    panel.label = text;
  }
}

/**
 * update audio player demo based on form selections
 **/
function updateDemo() {
  const colorPalette = ['cyan', 'light'].includes(form.palette.value) ?
    'light'
    : ['dark', 'purple-img'].includes(form.palette.value) ?
    'dark' : 'saturated';
  const hidden = form.rtl.checked ? player : playerRTL;
  const shown = !form.rtl.checked ? player : playerRTL;
  transcript.slot = transcriptRTL.slot = form.transcript.checked ? '' : 'transcript';
  detail.slot = detailRTL.slot = !form.transcript.checked ? '' : 'transcript';
  setLabel(transcript, form.transcript.checked);
  setLabel(detail, form.transcript.checked);
  setLabel(subscribe, form.subscribe.value);
  setLabel(about, form.about.value);
  setLabel(transcriptRTL, form.transcript.checked);
  setLabel(detailRTL, form.transcript.checked);
  setLabel(subscribeRTL, form.subscribe.value);
  setLabel(aboutRTL, form.about.value);
  player.poster = playerRTL.poster = !form.poster.checked || form.palette.value === 'purple-img' ? undefined : poster;
  mediaseries.innerHTML = mediaseriesRTL.innerHTML = form.series.value || '';
  mediatitle.innerHTML = mediatitleRTL.innerHTML = form.title.value || '';
  mediaseries.slot = mediaseriesRTL.slot = mediaseries.innerHTML.length > 0 ? 'series' : '';
  mediatitle.slot = mediatitleRTL.slot = mediatitle.innerHTML.length > 0 ? 'title' : '';
  player.mediaseries = playerRTL.mediaseries = mediaseriesRTL.innerHTML.length > 0 ? mediaseriesRTL.innerHTML : undefined;
  player.mediatitle = playerRTL.mediatitle = mediatitleRTL.innerHTML.length > 0 ? mediatitleRTL.innerHTML : undefined;
  player.mode = playerRTL.mode = form.mode.value;
  if (colorPalette === player.colorPalette) {
    const oldOn = player.colorPalette;
    player.colorPalette = playerRTL.colorPalette = oldOn === 'dark' ? 'light' : 'dark';
  }
  player.colorPalette = playerRTL.colorPalette = colorPalette;
  setTimeout(()=>{ player.expanded = playerRTL.expanded = !player.expanded; }, 10);
  setTimeout(()=>{ player.expanded = playerRTL.expanded = !player.expanded; }, 10);
  hidden.setAttribute('hidden', 'hidden');
  shown.removeAttribute('hidden');
}

if (form) { updateDemo(); }
