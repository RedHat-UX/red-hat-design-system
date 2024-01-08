## Guidelines

Surface elements are used only when another container like card or blockquote would be inappropriate.

Avoid using surface inside of other containers. Use the appropriate `color-palette` on the container instead

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

