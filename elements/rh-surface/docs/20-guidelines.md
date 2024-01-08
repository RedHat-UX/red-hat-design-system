## Guidelines

Surface elements are used only when another container like card or blockquote would be inappropriate.

Avoid using surface inside of other containers. Use the appropriate `color-palette` on the container instead

<rh-surface class="sample" style="--columns:2;" color-palette="lightest">
{# {% sample columns=2, code="hidden" %} #}
  <rh-card>
    <h2 slot="header">⚠️ Avoid</h2>
    <rh-surface color-palette="dark">
      <p>Don't use surfaces inside of other containers</p>
    </rh-surface>
  </rh-card>

  <rh-card color-palette="dark">
    <h2 slot="header">✅ Good</h2>
    <p>Use the <code>color-palette</code> attribute on containers.</p>
  </rh-card>
  <pf-icon icon="circle-check" size="lg" class="do"></pf-icon>
  <pf-icon icon="circle-exclamation" size="lg" class="dont"></pf-icon>
{# {% endsample %} #}
</rh-surface>

<script type="module">
import '@rhds/elements/rh-surface/rh-surface.js';
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
pf-icon.do {
  color: var(--rh-color-green-50);
  justify-self: center;
}

pf-icon.dont {
  color: var(--rh-color-red-50);
  justify-self: center;
}
</style>
