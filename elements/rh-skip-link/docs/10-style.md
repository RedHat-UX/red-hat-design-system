<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-2xl, 32px);
  }

  @container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

## Style

A skip link is designed to be easily seen once a user navigates to it.


###  Anatomy

<figure>
  <uxdot-example width-adjustment="264px">
    <img src="../skip-link-anatomy.svg" alt="Anatomy image showing calls to action with various annotation numbers">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text label</li>
      <li>Container</li>
      <li>Border</li>
    </ol>
  </figcaption>
</figure>


## Theme

A skip link appears the same in both light and dark themes.

<div class="grid">
  <uxdot-example width-adjustment="220px">
    <img src="../skip-link.svg" alt="Image of a skip link in a light theme section">
  </uxdot-example>

  <uxdot-example width-adjustment="220px" color-palette="darkest">
    <img src="../skip-link.svg" alt="Image of a skip link in a dark theme section">
  </uxdot-example>
</div>


## Configuration

A skip link’s bottom corners have a border radius of 4px, which matches the border radius of the <a href="/elements/call-to-action/">call to action</a> element. The top corners have a border radius of 0px to keep the top edge flush with the top of the page.


## Placement

A skip link should be centered and aligned with the top edge at all viewport sizes. It also overlaps items at the top of the page.

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img src="../skip-link-placement.png" alt="A skip link element at the top overlays the navigation header of redhat.com">
</uxdot-example>


## Space

<uxdot-example width-adjustment="220px">
  <img src="../skip-link-spacing.svg" alt="A skip link element at the top overlays the navigation header of redhat.com">
</uxdot-example>


<rh-table>
{% spacerTokensTable 
    caption='',
    headingLevel="3",
    tokens="--rh-space-lg, --rh-space-2xl" %}
{% endspacerTokensTable %}
</rh-table>


## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Focus

Because a skip link is in focus once it appears on the screen, the default and focus states are the same. The blue, 2px-wide border mimics the focus ring for other elements.

<uxdot-example width-adjustment="220px">
  <img src="../skip-link-focus.svg" alt="A skip link with blue text and a blue border around three sides">
</uxdot-example>


### Hover

<uxdot-example width-adjustment="220px">
  <img src="../skip-link-hover-and-active.svg" alt="A skip link's text is underlined on hover">
</uxdot-example>


### Active

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="220px">
  <img src="../skip-link-hover-and-active.svg" alt="A skip link's text is underlined when it's active">
</uxdot-example
