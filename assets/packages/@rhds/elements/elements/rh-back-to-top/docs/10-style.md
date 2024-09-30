<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: var(--rh-space-2xl, 32px);
  }

  @container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

## Style

A back to top is a pill-shaped button that is anchored to the bottom right corner of a page.


###  Anatomy

<figure>
  <uxdot-example width-adjustment="140px">
    <img src="../back-to-top-anatomy.svg" alt="Back to top button with numerical annotations">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Container</li>
      <li>Text</li>
      <li>Icon</li>
    </ol>
  </figcaption>
</figure>


## Theme

The back to top button looks the same in light and dark themes.

<div class="grid">

  <uxdot-example width-adjustment="90px">
    <img src="../back-to-top.svg" alt="Back to top button with a blue background and white text against a white surface color">  
  </uxdot-example>

  <uxdot-example color-palette="darkest" width-adjustment="90px">
    <img src="../back-to-top.svg" alt="Back to top buttons that have a blue background and white text against a black surface color">
  </uxdot-example>

</div>


## Space

A back to top button has 4px of padding on the left and right, 8px of padding on the top and bottom, and a 4px gap between text and icon. The amount of space remains the same on all breakpoints.

<uxdot-example width-adjustment="106px">
  <img src="../back-to-top-space.svg" alt="Back to top button with block padding of 4px, inline padding of 8px, and a 4px gap between text and icon">
</uxdot-example>


## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.


### Hover

The background color of the button turns to a darker blue on hover. It also has a white border adjacent to the button and a dark blue outline adjacent to the border. This ensures contrast against all surface colors.

<uxdot-example width-adjustment="94px">
  <img src="../back-to-top-focus-hover-active.svg" alt="Back to top button with a dark blue background when a cursor hovers over it">
</uxdot-example>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="94px">
  <img src="../back-to-top-focus-hover-active.svg" alt="A back to top button with a dark blue background and a blue focus ring around it">
</uxdot-example>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="94px">
  <img src="../back-to-top-focus-hover-active.svg" alt="A back to top button with a dark blue background and a blue focus ring around it">
</uxdot-example>

