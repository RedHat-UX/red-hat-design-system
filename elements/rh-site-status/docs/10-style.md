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
  {% example palette="darkest", 
    alt="Image of a site status element with a green checkmark and the text 'All systems operational'",
    src="../site-status-anatomy.svg"
  %}
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
{% example palette="darkest", 
    alt="Image of a site status element with a green checkmark and the text 'All systems operational on a dark background'",
    src="../site-status-theme.svg"
  %}

{% example palette="lightest", 
    alt="Image of a site status element with a green checkmark and the text 'All systems operational on a light background'",
    src="../site-status-theme.svg"
  %}  
</div>

## Configuration

Website status has a fixed height and its width changes depending on the amount of link text. The icon and link are horizontally aligned to the card as well.

{% example palette="darkest", 
  alt="Image of a site status element with a green checkmark and the text 'All systems operational' with fixed height, width and horizontal alignment indicators.",
  src="../site-status-configuration.svg"
%}

## Icons

Website status includes three icons that also indicate the severity of the status.

{% example palette="darkest", 
  alt="Three images of site status elements, one with a green checkmark and the text 'All systems operational', the second with a yellow exclamation point and the text 'Partial system outage', and the third with a red exclamation point and the text 'Major system outage'.",
  src="../site-status-icons.svg" 
%}

## Space

Space values remain the same at all viewport sizes.

{% example palette="darkest", 
  alt="Image of a site status element with a green checkmark and the text 'All systems operational' with space indicators.",
  src="../site-status-space.svg"
%}

{% example palette="none", 
  alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators.",
  src="../site-status-footer.svg"
%}

{% example palette="none", 
  alt="Image of a site status element with a green checkmark and the text 'All systems operational' in a footer element with space indicators at a small viewport size.",
  src="../site-status-footer-mobile.svg"%}


## Interaction states

Only the link is selectable and it should be underlined in all interaction states.

{% example palette="darkest", 
  alt="Three images of a site status element with a green checkmark and the text 'All systems operational' first one displaying the mouse hover state, the second the keyboard state, the third a combination of hover and focus.",
  src="../site-status-interaction-states.svg"
%}

