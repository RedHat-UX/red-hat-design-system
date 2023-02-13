import '@rhds/elements/rh-audio-player/rh-audio-player.js';

const root = document.querySelector('[data-demo="rh-audio-player"]')?.shadowRoot ?? document;

const form = root.querySelector('form');
const player = root.querySelector('rh-audio-player#player');
const spanish = root.querySelector('rh-audio-player[lang=es]');
const playerRTL = root.querySelector('rh-audio-player#rtl');
const transcript = root.querySelector('rh-audio-player-transcript#regular');
const transcriptRTL = root.querySelector('#rtl rh-audio-player-transcript#regular');
const detail = root.querySelector('rh-audio-player-transcript#detail');
const detailRTL = root.querySelector('#rtl rh-audio-player-transcript#detail');
const about = root.querySelector('rh-audio-player-about');
const aboutRTL = root.querySelector('#rtl rh-audio-player-about');
const subscribe = root.querySelector('rh-audio-player-subscribe');
const subscribeRTL = root.querySelector('#rtl rh-audio-player-subscribe');
const mediaseries = root.querySelector('[slot="series"]');
const mediaseriesRTL = root.querySelector('#rtl [slot="series"]');
const mediatitle = root.querySelector('[slot="title"]');
const mediatitleRTL = root.querySelector('#rtl [slot="title"]');
const { poster } = player;
spanish.microcopy = {
  'speed': 'Velocidad',
  'seek': 'Buscar',
  'play': 'Play',
  'pause': 'Pausa',
  'rewind': 'Rebobinar',
  'forward': 'Adelantar',
  'volume': 'Volumen',
  'mute': 'Silenciar el sonido',
  'unmute': 'Activar el sonido',
  'menu': 'Menú',
  'close': 'Cerrar'
};
spanish.querySelector('[slot=transcript]').microcopy = {
  'autoscroll': 'Desplazamiento automático',
  'download': 'Télécharger'
};
if (form) { form.addEventListener('input', sync); }

function sync() {
  const formData = new FormData(form);
  const formObj = Object.fromEntries(formData);
  const on = ['cyan', 'light'].includes(formObj.palette) ?
    'light'
    : ['dark', 'purple-img'].includes(formObj.palette) ?
    'dark' : 'saturated';
  const setLabel = (panel, field) => {
    const slot = panel.querySelector('[slot="heading"]');
    const text = field?.length > 0 ? field : '';
    if (slot) { slot.innerHTML = text || ''; }
    panel.label = text;
  };
  const hidden = formObj.rtl ? player : playerRTL;
  const shown = !formObj.rtl ? player : playerRTL;
  // source.src = formObj.transcript ? './sample2.mp3' : './sample.mp3';
  transcript.slot = transcriptRTL.slot = formObj.transcript ? '' : 'transcript';
  detail.slot = detailRTL.slot = !formObj.transcript ? '' : 'transcript';
  setLabel(transcript, formObj?.transcript);
  setLabel(detail, formObj?.transcript);
  setLabel(subscribe, formObj?.subscribe);
  setLabel(about, formObj?.about);
  setLabel(transcriptRTL, formObj?.transcript);
  setLabel(detailRTL, formObj?.transcript);
  setLabel(subscribeRTL, formObj?.subscribe);
  setLabel(aboutRTL, formObj?.about);
  player.poster = playerRTL.poster = !formObj.poster || formObj.palette === 'purple-img' ? undefined : poster;
  mediaseries.innerHTML = mediaseriesRTL.innerHTML = formObj?.series || '';
  mediatitle.innerHTML = mediatitleRTL.innerHTML = formObj?.title || '';
  mediaseries.slot = mediaseriesRTL.slot = mediaseries.innerHTML.length > 0 ? 'series' : '';
  mediatitle.slot = mediatitleRTL.slot = mediatitle.innerHTML.length > 0 ? 'title' : '';
  player.mediaseries = playerRTL.mediaseries = mediaseriesRTL.innerHTML.length > 0 ? mediaseriesRTL.innerHTML : undefined;
  player.mediatitle = playerRTL.mediatitle = mediatitleRTL.innerHTML.length > 0 ? mediatitleRTL.innerHTML : undefined;
  player.mode = playerRTL.mode = formObj.mode;
  if (on === player.on) {
    const oldOn = player.on;
    player.on = playerRTL.on = oldOn === 'dark' ? 'light' : 'dark';
  }
  player.on = playerRTL.on = on;
  player.setAttribute('class', formObj.palette);
  playerRTL.setAttribute('class', formObj.palette);
  setTimeout(()=>{ player.expanded = playerRTL.expanded = !player.expanded; }, 10);
  setTimeout(()=>{ player.expanded = playerRTL.expanded = !player.expanded; }, 10);
  hidden.setAttribute('hidden', 'hidden');
  shown.removeAttribute('hidden');
}

if (form) { sync(); }
