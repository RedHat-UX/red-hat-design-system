<style>
  figure {
    margin: 0;
  }
  figcaption ol {
    font-size: var(--rh-font-size-body-text-sm, 0.875rem);
    font-weight: var(--rh-font-weight-body-text-regular, 400);
    line-height: var(--rh-line-height-heading, 1.3);
    padding-inline-start: var(--rh-space-lg, 16px);
  }
  figure .example {
    margin-bottom: var(--rh-space-lg, 16px);
  }

  figure .example + figcaption {
    margin-bottom: var(--rh-space-4xl, 64px);
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-4xl, 64px);
  }

  .grid .example {
    width: 100%;
  }

  .grid .example + .example {
    margin-top: unset;
    margin-block-start: unset;
  }

  @media (min-width: 992px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>


## Styles

Website status is a combination of an icon and link within a very small card. It is designed to be understood immediately. Otherwise, a user can click on the link to learn more.

### Anatomy

<figure>
  <uxdot-example color-palette="darkest">
    <img src="../site-status-anatomy.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational'">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Icon</li>
      <li>Link</li>
      <li>Container</li>
    </ol>
  </figcaption>
</figure>


## Theme

Currently, Website status is only available in the dark theme. You may use Website status in the light theme if necessary. If you need a separate light version designed instead, [contact us](https://github.com/RedHat-UX/red-hat-design-system/discussions).


<div class="grid">
  <uxdot-example color-palette="darkest" width-adjustment="200px">
    <img src="../site-status-theme.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational on a dark background'">
  </uxdot-example>

  <uxdot-example width-adjustment="200px">
    <img src="../site-status-theme.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational on a light background'">
  </uxdot-example>
</div>


## Configuration

Website status has a fixed height and its width changes depending on the amount of link text. The icon and link are horizontally aligned to the card as well.

<uxdot-example color-palette="darkest" width-adjustment="448px">
  <img src="../site-status-configuration.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational' with fixed height, width and horizontal alignment indicators.">
</uxdot-example>


## Icons

Website status includes three icons that also indicate the severity of the status.

<uxdot-example color-palette="darkest" width-adjustment="707px">
  <img src="../site-status-icons.svg" alt="Three images of site status elements, one with a green checkmark and the text 'All systems operational', the second with a yellow exclamation point and the text 'Partial system outage', and the third with a red exclamation point and the text 'Major system outage'.">
</uxdot-example>


## Space

Space values remain the same at all viewport sizes.

<uxdot-example color-palette="darkest" width-adjustment="200px">
  <img src="../site-status-space.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational' with space indicators.">
</uxdot-example>

<uxdot-example variant="full" no-border alignment="left" width-adjustment="992px">
  <img src="../site-status-footer.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators.">
</uxdot-example>

<uxdot-example  variant="full" no-border alignment="left" width-adjustment="360px">
  <img src="../site-status-footer-mobile.svg" alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators at a small viewport size.">
</uxdot-example>


<rh-table>
{% spacerTokensTable 
    caption='',
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg, --rh-space-2xl, --rh-space-3xl" %}
{% endspacerTokensTable %}
</rh-table>


## Interaction states

Only the link is selectable and it should be underlined in all interaction states.

<uxdot-example color-palette="darkest" width-adjustment="728px">
  <img src="../site-status-interaction-states.svg" alt="Three images of a site status element with a green checkmark and the text 'All systems operational' first one displaying the mouse hover state, the second the keyboard state, the third a combination of hover and focus.">
</uxdot-example>
