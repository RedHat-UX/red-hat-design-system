import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-button/rh-button.js';

/** @this {HTMLElement}*/
async function copyTab() {
  const tooltip = this.closest('rh-tooltip');
  const { content } = tooltip;
  const tabs = this.closest('rh-tabs');
  const panels = tabs.querySelectorAll('rh-tab-panel');
  const activePanel = panels[tabs.activeIndex];
  await navigator.clipboard.writeText(activePanel.textContent);
  tooltip.content = 'Copied!';
  await new Promise(r => setTimeout(r, 5000));
  tooltip.content = content;
}

document.querySelector('rh-tabs rh-button[variant=link]')?.addEventListener('click', copyTab);
