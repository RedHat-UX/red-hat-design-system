<style data-helmet>
  uxdot-example div,
  uxdot-example rh-surface {
    padding: var(--rh-space-xl, 24px);
  }
</style>

## Guidelines

Surface elements are used only when another container like card or blockquote would be inappropriate.

Avoid using surface inside of other containers. Use the appropriate `color-palette` on the container instead

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      <h2>⚠️ Avoid</h2>
      <rh-surface color-palette="dark">
        <p>Don't use surfaces inside of other containers</p>
      </rh-surface>
    </rh-card>
  </uxdot-best-practice>
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="darkest">
      <h2>✅ Good</h2>
      <div>
        <p>Use the <code>color-palette</code> attribute on containers.</p>
      </div>
    </rh-card>
  </uxdot-best-practice>
</div>

<script type="module">
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-card/rh-card.js';
</script>


