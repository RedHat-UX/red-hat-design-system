## Style 

An announcement is a layout with various slots for content and images. Inline or background images may be included depending on the message or campaign.

## Anatomy

<figure>
  <uxdot-example variant="full" no-border>
    <img alt="Anatomy of a announcement component with numbered annotations."
         src="../announcement-anatomy.svg">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Background image</li>
      <li>Inline image</li>
      <li>Body text</li>
      <li>Call to action</li>
      <li>Close button</li>
    </ol>
  </figcaption>
</figure>

## Theme

An announcement is available in both light and dark themes.

### Light theme

<uxdot-example variant="full" no-border>
  <img alt="rh-announcement element on a light background"
       src="../announcement-theme-light.svg">
</uxdot-example>

### Dark theme

<uxdot-example variant="full" no-border>
  <img alt="rh-announcement element on a dark background"
       src="../announcement-theme-dark.svg">
</uxdot-example>

### Changing the background color

An announcement background color can be changed, but ensure accessibility guidelines like color contrast are maintained.

<uxdot-example width-adjustment="1012px">
 <img alt="An announcement component with a purple background and white text"
      src="../announcement-style-theme-change.svg">
</uxdot-example>

### Icons

An announcement uses our [Icon](/elements/icon/) element and one icon from our repo.

<rh-table>

| Icon preview | Icon name | HTML code                                        |
|--------------|-----------|--------------------------------------------------|
|              | close     | `<rh-icon set="microns" icon="close"></rh-icon>` |

</rh-table>

## Configuration

You may use the inline image slot two different ways within an announcement.

  - If you are using an inline image like a logo or icon, it has a max height of 48px
  - If you are using a more horizontal text logo, it should be around 20px - 25px tall

  <uxdot-example variant="full" no-border>
    <img alt="Two light announcements on a gray background. One has a 48px image and the other has a 20-25px textd logo."
         src="../announcement-style-configuration.svg">
  </uxdot-example>

## Space

<uxdot-example variant="full" no-border>
  <img alt="Diagram of spacing for announcement at mobile, tablet and desktop viewports"
       src="../announcement-style-space.svg">
</uxdot-example>


## Interaction states

Refer to these documentation pages for interaction states.

  - [Button](/elements/button/)
  - [Call to action](elements/call-to-action/)
