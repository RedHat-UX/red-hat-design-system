## Style

A dialog is a floating container on top of a transparent backdrop. The container 
requires a backdrop so it can separate itself from the page underneath, this 
helps users focus on the dialog content.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img alt="Anatomy of a dialog with lots of annotations pointing to various parts"
         src="../dialog-anatomy.png"
         width="872"
         height="322">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Backdrop</li>
      <li>Container</li>
      <li>Close button</li>
      <li>Header section</li>
      <li>Body text section</li>
      <li>Footer section</li>
      <li>Container shadow</li>
    </ol>
  </figcaption>
</figure>

## Color scheme
<a id="theme"></a>

Dialog is available for the light color scheme only.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Light theme dialog"
       src="../dialog-theme-light.png"
       width="1000"
       height="322">
</uxdot-example>

## Configuration

The dialog container does not have a maximum height, but too much content in the 
body text section will cause scrolling.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="How a dialog container is constructed showing border radius, region, and scrolling details"
       src="../dialog-configuration.png"
       width="1000"
       height="640">
</uxdot-example>

## Space

The amount of space in a dialog reduces as breakpoints get smaller.

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="A dialog container on a large breakpoint with spacing between all elements"
       src="../dialog-space-breakpoint-large.png"
       width="1000"
       height="322">
</uxdot-example>

### Small breakpoints

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img alt="A dialog container on a small breakpoint with spacing between all elements"
       src="../dialog-space-breakpoint-small.png"
       width="360"
       height="640">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, xl, 2xl"
                           style="margin-block-start:var(--rh-space-xl);">
</uxdot-spacer-tokens-table>

## Interaction states

Interactive elements may be added to a dialog container, but very sparingly. If 
interactive elements are added, go to their element or pattern pages to view the 
interaction states.

### Hover

Control and inactive page number buttons have the same hover state. Truncation 
is not interactive so it has no hover state.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Light theme dialog hover state example"
       src="../dialog-interaction-state-hover.png"
       width="1000"
       height="322">
</uxdot-example>

<rh-table>

| Property             | Light theme |
|----------------------|-------------|
| Color - close button | \#151515    |

</rh-table>


### Focus

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Light theme dialog focus state example"
       src="../dialog-interaction-state-focus.png"
       width="1000"
       height="322">
</uxdot-example>

<rh-table>

| Property             | Light theme |
|----------------------|-------------|
| Color - close button | \#151515    |
| Color - focus ring   | \#0066cc    |

</rh-table>

### Active

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Light theme dialog active state example"
       src="../dialog-interaction-state-active.png"
       width="1000"
       height="322">
</uxdot-example>

<rh-table>

| Property             | Light theme |
|----------------------|-------------|
| Color - close button | \#151515    |
| Color - focus ring   | \#0066cc    |

</rh-table>



