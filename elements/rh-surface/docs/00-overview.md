## Overview

{{ tagName | getElementDescription }}

<rh-surface class="sample" style="--columns:3;" color-palette="darkest">
{# {% sample columns=3, code="show", colorPalette="darkest" %} #}
  <rh-blockquote>
    <p>Surface is used to provide a theme to children</p>
  </rh-blockquote>
  <rh-card color-palette="dark">
    <h2 slot="header">Containers</h2>
    <p>Children inherit their parent's <code>theme</code></p>
  </rh-card>
  <rh-spinner>Loading...</rh-spinner>
{# {% endsample %} #}
</rh-surface>

<script type="module">
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-blockquote/rh-blockquote.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';
import '@rhds/elements/rh-card/rh-card.js';
</script>

{# these styles replicate work done in docs:samples pr. remove once merged #}
<style>
.sample {
  display: grid;
  padding: var(--rh-space-4xl);
  :host(.compact) & {
    padding: var(--rh-space-2xl);
  }
  border-radius: var(--rh-border-radius-default);
  border: var(--rh-border-width-sm) solid var(--rh-color-border-subtle-on-light);
  gap: var(--rh-space-md);
  grid-template-columns: repeat(var(--columns, 1), 1fr);
  :host(.dont) & {
    border-color: var(--rh-color-red-500);
  }
  @media (min-width: 992px) { /* --rh-media-md */
    padding: var(--rh-space-7xl);
    gap: var(--rh-space-lg);
  }
}
</style>
