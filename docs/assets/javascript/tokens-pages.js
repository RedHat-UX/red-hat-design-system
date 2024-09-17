import '/assets/javascript/elements/uxdot-copy-button.js';
import '@rhds/elements/rh-card/rh-card.js';
import { ContextChangeEvent } from '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

document.addEventListener('change', function(event) {
  if (event instanceof ContextChangeEvent) {
    updateSwatches();
  }
});

const swatches = document.querySelectorAll('.swatches .swatch');
async function updateSwatches() {
  const tinycolor = await import('tinycolor2').then(x => x.default);
  for (const swatch of swatches) {
    const value = getComputedStyle(swatch).getPropertyValue('--swatch-color');
    const color = tinycolor(value);
    const isDark = color.isDark();
    const isLight = color.isLight();
    swatch.classList.toggle('isDark', isDark);
    swatch.classList.toggle('isLight', isLight);
  }
}

updateSwatches();

