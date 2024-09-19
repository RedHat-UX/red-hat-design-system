<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-4xl, 64px);
  }

  @container container (min-width: 567px) {
    .grid {
      grid-template-columns: 1fr 1fr;
    }
  }
</style>


## Style

Cards can be used in light and dark themes. They act as a blank canvas where
elements and styles can be placed inside.

<uxdot-example width-adjustment="600px">
  <img src="{{ '../card-style.svg' | url }}" alt="A breakdown of the parts of a card">
</uxdot-example>

## Theme
All card variants are available in light and dark theme.

### Light theme

<uxdot-example width-adjustment="784px">
  <img src="{{ '../card-theme-light.svg' | url }}" alt="Card in light theme">
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="784px">
  <img src="{{ '../card-theme-dark.svg' | url }}" alt="Card in dark theme">
</uxdot-example>

### Color

Cards are secondary layouts that shouldn’t command too much attention and blend in with whatever background they’re placed on. The card container is the only required element and it consists of a background color, rounded corners, and a thin border.

<div class="grid">
  <figure>
    <uxdot-example no-border color-palette="light">
      <rh-card>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a sollicitudin mauris tincidunt.</p>
        <rh-cta href="#">Call to action</rh-cta>
      </rh-card>
    </uxdot-example>
    <figcaption>
      A light gray card without a border can also be used as an alternate option.
    </figcaption>
  </figure>
  <figure>
    <uxdot-example no-border color-palette="light">
      <rh-card color-palette="lighter">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a sollicitudin mauris tincidunt.</p>
        <rh-cta href="#">Call to action</rh-cta>
      </rh-card>
    </uxdot-example>
    <figcaption>
      A light gray card with a light gray border can also be used as an alternate option.
    </figcaption>
  </figure>
  <figure>
    <uxdot-example no-border color-palette="dark">
      <rh-card>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a sollicitudin mauris tincidunt.</p>
        <rh-cta href="#">Call to action</rh-cta>
      </rh-card>
    </uxdot-example>
    <figcaption>
      A black card with a dark gray border is the most common use case in the dark theme.
    </figcaption>
  </figure>
  <figure>
    <uxdot-example no-border color-palette="dark">
      <rh-card color-palette="darker">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a sollicitudin mauris tincidunt.</p>
        <rh-cta href="#">Call to action</rh-cta>
      </rh-card>
    </uxdot-example>
    <figcaption>
      A dark gray card with a dark gray border can also be used as an alternate option.
    </figcaption>
  </figure>
</div>

### Layout

A card features header, body, and footer sections. Those sections should
include a limited amount of content to ensure that the card doesn’t become too
tall.

<div class="grid">
  <uxdot-example width-adjustment="360px">
    <img src="{{ '../card-layout-1.svg' | url }}" alt="Example of a card layout">
  </uxdot-example>

  <uxdot-example width-adjustment="360px">
    <img src="{{ '../card-layout-2.svg' | url }}" alt="Anatomy of a card layout">
  </uxdot-example>

</div>

### Header

The header section is required, it introduces what the content is and
shouldn’t be hidden.

### Body

The body section can include a headline, text, an icon, or sometimes an image.
The body section describes the content in more detail and shouldn’t be hidden.

### Footer

The footer section can include normal links or a call to action. It can be
hidden if necessary if there’s content included where a user can take an
action.


## Responsive design

### Breakpoints

Cards will get thinner or move below each other on smaller screens.

### Large screens

<uxdot-example width-adjustment="784px" variant="full" no-border alignment="left">
  <img src="{{ '../card-layout-desktop.svg' | url }}" alt="Card layout on desktop">
</uxdot-example>

### Small screens

<uxdot-example width-adjustment="360px" variant="full" no-border alignment="left">
  <img src="{{ '../card-layout-mobile.svg' | url }}" alt="Card layout on mobile">
</uxdot-example>

## Spacing

<rh-table>
{% spacerTokensTable
   caption='',
   headingLevel="3",
   tokens="--rh-space-lg, --rh-space-xl, --rh-space-2xl, --rh-space-3xl" %}
{% endspacerTokensTable %}
</rh-table>

### Container padding

Container padding defines how far away content is from the edges of the
component. When cards become wider, the container padding increases. When they
become thinner, the container padding decreases. <a
href="https://xd.adobe.com/view/a337ad48-4c5a-4e75-aec1-cc0cfe52098d-f664/">See more examples</a>.

### Desktop

<uxdot-example width-adjustment="360px">
  <img src="{{ '../card-spacing-desktop.svg' | url }}" alt="Card spacing on desktop">
</uxdot-example>


### Mobile

<uxdot-example width-adjustment="360px">
  <img src="{{ '../card-spacing-mobile.svg' | url }}" alt="Card spacing on mobile">
</uxdot-example>
