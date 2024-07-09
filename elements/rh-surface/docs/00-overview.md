<style>
rh-surface {
  padding: var(--rh-space-2xl, 32px);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--rh-space-2xl, 32px);
}

@container container (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>


## Overview

{{ tagName | getElementDescription }}


<rh-surface color-palette="darkest">
  <div class="grid">
    <rh-blockquote>
      <p>Surface is used to provide a theme to children</p>
    </rh-blockquote>
    <rh-card>
      <h2 slot="header">Containers</h2>
      <p>Children inherit their parent's <code>theme</code></p>
    </rh-card>
    <rh-spinner>Loading...</rh-spinner>
  </div>
</rh-surface>


<script type="module">
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-blockquote/rh-blockquote.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';
import '@rhds/elements/rh-card/rh-card.js';
</script>

