## Style

A skip link is designed to be easily seen once a user navigates to it.


###  Anatomy

<figure>
  <uxdot-example width-adjustment="264px">
    <img src="../skip-link-anatomy.svg"
        alt="Anatomy image showing calls to action with various annotation numbers"
        width="264"
        height="123">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text label</li>
      <li>Container</li>
      <li>Border</li>
    </ol>
  </figcaption>
</figure>


## Color scheme
<a id="theme"></a>

A skip link appears the same in both light and dark color schemes.

<div class="grid sm-two-columns">
  <uxdot-example width-adjustment="220px">
    <img alt="Image of a skip link in a light scheme section"
         src="../overview.svg"
         width="220"
         height="56">
  </uxdot-example>

  <uxdot-example width-adjustment="220px" color-palette="darkest">
    <img alt="Image of a skip link in a dark scheme section"
         src="../overview.svg"
         width="220"
         height="56">
  </uxdot-example>
</div>


## Configuration

A skip link’s bottom corners have a border radius of 4px, which matches the border radius of the <a href="/elements/call-to-action/">call to action</a> element. The top corners have a border radius of 0px to keep the top edge flush with the top of the page.


## Placement

A skip link should be centered and aligned with the top edge at all viewport sizes. It also overlaps items at the top of the page.

<uxdot-example width-adjustment="1000px" variant="full" no-border alignment="left">
  <img alt="A skip link element at the top overlays the navigation header of redhat.com"
       src="../skip-link-placement.png"
       width="1000"
       height="174">
</uxdot-example>


## Space

<uxdot-example width-adjustment="220px">
  <img alt="A skip link element at the top overlays the navigation header of redhat.com"
       src="../skip-link-spacing.svg"
       width="220"
       height="56">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg, 2xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Focus

Because a skip link is in focus once it appears on the screen, the default and focus states are the same. The blue, 2px-wide border mimics the focus ring for other elements.

<uxdot-example width-adjustment="220px">
  <img alt="A skip link with blue text and a blue border around three sides"
       src="../skip-link-focus.svg"
       width="220"
       height="56">
</uxdot-example>


### Hover

<uxdot-example width-adjustment="220px">
  <img alt="A skip link's text is underlined on hover"
       src="../skip-link-hover-and-active.svg"
       width="220"
       height="56">
</uxdot-example>


### Active

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="220px">
  <img alt="A skip link's text is underlined when it's active"
       src="../skip-link-hover-and-active.svg"
       width="220"
       height="56">
</uxdot-example>
