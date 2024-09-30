<script type="module" src="/assets/javascript/elements/uxdot-best-practice.js"></script>

<style>

uxdot-example div,
uxdot-example rh-surface {
  padding: var(--rh-space-xl, 24px);
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--rh-space-lg, 16px);
}

.grid uxdot-best-practice:not(:first-of-type) {
  margin-block-start: var(--rh-space-lg, 16px);
}

@container container (min-width: 768px) {
  .grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--rh-space-2xl, 32px);
  }
}
</style>

## Guidelines

Surface elements are used only when another container like card or blockquote would be inappropriate.

Avoid using surface inside of other containers. Use the appropriate `color-palette` on the container instead

<div class="grid">
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


