import '@rhds/elements/rh-audio-player/rh-audio-player.js';

const root = document.querySelector('[data-demo="rh-audio-player"]')?.shadowRoot ?? document;

const form = root.querySelector('form');
const player = root.querySelector('rh-audio-player');
const transcript = root.querySelector('rh-audio-player-transcript#regular');
const detail = root.querySelector('rh-audio-player-transcript#detail');
const about = root.querySelector('rh-audio-player-about');
const subscribe = root.querySelector('rh-audio-player-subscribe');
const source = root.querySelector('source');
const mediaseries = player.querySelector('[slot="series"]');
const mediatitle = player.querySelector('[slot="title"]');
const { poster } = player;

form.addEventListener('input', sync);

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
    player.expanded = !player.expanded;
    player.expanded = !player.expanded;
  };
  player.on = on;
  player.setAttribute('class', formObj.palette);
  player.mode = formObj.mode;
  source.src = formObj.transcript ? './sample2.mp3' : './sample.mp3';
  transcript.slot = formObj.transcript ? '' : 'transcript';
  detail.slot = !formObj.transcript ? '' : 'transcript';
  setLabel(transcript, formObj?.transcript);
  setLabel(detail, formObj?.transcript);
  setLabel(subscribe, formObj?.subscribe);
  setLabel(about, formObj?.about);
  player.poster = !formObj.poster || formObj.palette === 'purple-img' ? undefined : poster;
  mediaseries.innerHTML = formObj?.series || '';
  mediatitle.innerHTML = formObj?.title || '';
  mediaseries.slot = mediaseries.innerHTML.length > 0 ? 'series' : '';
  mediatitle.slot = mediatitle.innerHTML.length > 0 ? 'title' : '';
  player.mediaseries = mediaseries.innerHTML.length > 0 ? mediaseries.innerHTML : undefined;
  player.mediatitle = mediatitle.innerHTML.length > 0 ? mediatitle.innerHTML : undefined;
}

sync();
