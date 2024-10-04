<style data-helmet>
  #example {
    padding: var(--rh-space-2xl);
  }
</style>

## Overview

{{ tagName | getElementDescription }}

<rh-surface id="example" color-palette="darkest">
  <div class="grid sm-three-columns">
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

