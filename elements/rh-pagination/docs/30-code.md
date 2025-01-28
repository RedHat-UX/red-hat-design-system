### Displaying correct pagination colors

In order for pagination to be styled correctly, each `<rh-pagination>` must be wrapped in a container element which supports the `color-palette` attribute, such as the [`<rh-surface>` element](/elements/surface).

<rh-alert state="alternate">
  <h4 slot="header">Developer note</h4>
  
  The requirement to wrap `<rh-pagination>`s with color palette containers could be relaxed in the future with advancements in browser themeing APIs.

</rh-alert>
