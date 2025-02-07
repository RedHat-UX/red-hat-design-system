## Style 

An announcement is a layout with various slots for content and images. Inline or background images may be included depending on the message or campaign.

## Anatomy

<figure>
  <uxdot-example variant="full" no-border>
    <img src="../announcement-anatomy.svg" alt="Anatomy of a announcement component with numbered annotations.">
  </uxdot-example>
  <figcaption>
    <ol style="font-size: var(--rh-font-size-body-text-sm, 0.875rem);">
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
  <img src="../announcement-theme-light.svg" alt="rh-announcement element on a light background">
</uxdot-example>

### Dark theme

<uxdot-example variant="full" no-border>
  <img src="../announcement-theme-dark.svg" alt="rh-announcement element on a dark background">
</uxdot-example>

### Changing the background color

An announcement background color can be changed, but ensure accessibility guidelines like color contrast are maintained.

<uxdot-example width-adjustment="1012px">
 <img src="../announcement-style-theme-change.svg" alt="An announcement component with a purple background and white text">
</uxdot-example>

### Icons

An announcement uses our [Icon](/elements/icon/) element and one icon from our repo.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="icon-preview">Icon preview</th>
        <th scope="col" data-label="icon-name">Icon name</th>
        <th scope="col" data-label="html-code">HTML code</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td data-label="icon-preview">
            <rh-icon set="microns" icon="close"></rh-icon>
          </td>
          <td data-label="icon-name">close</td>
          <td data-label="html-code">
            <code>&lt;rh-icon set=&quot;microns&quot; icon=&quot;close&quot;&gt;&lt;/rh-icon&gt;</code>
          </td>
        </tr>
    </tbody>
  </table>
</rh-table>

## Configuration

You may use the inline image slot two different ways within an announcement.

  - If you are using an inline image like a logo or icon, it has a max height of 48px
  - If you are using a more horizontal text logo, it should be around 20px - 25px tall

  <uxdot-example variant="full" no-border>
    <img src="../announcement-style-configuration.svg" alt="Two light announcements on a gray background. One has a 48px image and the other has a 20-25px textd logo.">
  </uxdot-example>

## Space

<uxdot-example variant="full" no-border>
 <img src="../announcement-style-space.svg" alt="Diagram of spacing for announcement at mobile, tablet and desktop viewports">
</uxdot-example>


## Interaction states

Refer to these documentation pages for interaction states.

  - [Button](/elements/button/)
  - [Call to action](elements/call-to-action/)
