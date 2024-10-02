<style data-helmet>
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

  figure rh-card + figcaption {
    margin-block-start: var(--rh-space-xl, 24px);
  }

  .promo-spacing figure:not(:first-of-type) {
    margin-block-start: var(--rh-space-4xl, 64px);
  }
  .promo-spacing figcaption {
    font-size: var(--rh-font-size-body-text-sm, 0.875rem);
    margin-block-start: var(--rh-space-lg, 16px);
  }
</style>


## Style

Cards can be used in light and dark themes. They act as a blank canvas where
elements and styles can be placed inside.

<uxdot-example width-adjustment="600px">
  <img src="../card-style.svg" alt="A breakdown of the parts of a card">
</uxdot-example>

## Theme
All card variants are available in light and dark theme.

### Light theme

<uxdot-example width-adjustment="784px">
  <img src="../card-theme-light.svg" alt="Card in light theme">
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="784px">
  <img src="../card-theme-dark.svg" alt="Card in dark theme">
</uxdot-example>

### Color

Cards are secondary layouts that shouldn’t command too much attention and blend 
in with whatever background they’re placed on. The card container is the only 
required element and it consists of a background color, rounded corners, and a 
thin border.

<div class="grid">
  <figure>
    <uxdot-example no-border color-palette="light">
      <rh-card>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend elit sed est egestas, a sollicitudin mauris tincidunt.</p>
        <rh-cta href="#">Call to action</rh-cta>
      </rh-card>
    </uxdot-example>
    <figcaption>
      A white card with a light gray border is the most common use case in the light theme.
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
    <img src="../card-layout-1.svg" alt="Example of a card layout">
  </uxdot-example>

  <uxdot-example width-adjustment="360px">
    <img src="../card-layout-2.svg" alt="Anatomy of a card layout">
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
  <img src="../card-layout-desktop.svg" alt="Card layout on desktop">
</uxdot-example>

### Small screens

<uxdot-example width-adjustment="360px" variant="full" no-border alignment="left">
  <img src="../card-layout-mobile.svg" alt="Card layout on mobile">
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
become thinner, the container padding decreases.

### Desktop

<uxdot-example width-adjustment="360px">
  <img src="../card-spacing-desktop.svg" alt="Card spacing on desktop">
</uxdot-example>


### Mobile

<uxdot-example width-adjustment="360px">
  <img src="../card-spacing-mobile.svg" alt="Card spacing on mobile">
</uxdot-example>

## Variants

### Promo

Promos are available in four different configurations.

#### Standard promo

A Standard promo also has a subtle border, but it uses the `Lighter` or `Darker` surface color. It does not have an image slot and the call to action appears either to the left or right of the text.

<uxdot-example>
  <img src="../card-variants-promo-standard.svg" alt="Standard promo with placeholder text">
</uxdot-example>

#### Featured promo

A Featured promo uses the `Lightest` or `Darkest` surface color with a subtle border. An image can appear on the left or right side of a promo, but a featured promo can also omit an image.

<uxdot-example>
  <img src="../card-variants-promo-featured.svg" alt="Featured promo with placeholder text and image">
</uxdot-example>

#### Full-width promo

A Full-width promo bleeds to the left and right edges of the screen. It does not have a border. Similarly to a featured promo, a full-width promo can use either the `Lightest` or `Darkest` surface color, and it can have no image or an image positioned to the left or right of the text.

<uxdot-example variant="full">
  <img src="../card-variants-promo-full-width.svg" alt="Full-width promo with placeholder text and image">
</uxdot-example>

#### Narrow promo

A Narrow promo can fit into a section or container smaller than 296 pixels. It moves an image in any type of promo below the body text and call to action. This is also the configuration used on phone viewports for a featured, standard promo, or full-width promo.

<uxdot-example width-adjustment="752px">
  <img src="../card-variants-promo-narrow.svg" alt="Narrow promo versions with featured promo and standard promo">
</uxdot-example>

### Theme

#### Promo

The standard promo uses the `Lighter` (in light theme) and `Darker` (in dark theme) surface colors.

<uxdot-example>
  <img src="../card-theme-promo-standard.svg" alt="Standard Promo's in light and dark themes">
</uxdot-example>

The featured and full-width promos use the `Lightest` and `Darkest` surface colors for light and dark theme, respectively.

<uxdot-example no-border variant="full">
  <img src="../card-theme-promo-featured-full-width.svg" alt="Featured and full-width Promo's in light and dark themes">
</uxdot-example>

### Responsive Design

#### Promo

When promos are viewed on phone viewports or added to small containers, they will use the [Narrow promo](/elements/card/style/#narrow-promo) configuration.

### Spacing

#### Promo

Except for narrow promos, spacing within the other promo configurations is a little different from Card.

<uxdot-example class="promo-spacing" alignment="left">
  <figure>
    <img src="../card-spacing-promo-standard.svg" alt="Standard promo with spacing annotations. 48px on all sides and 24px to the left of the CTA.">
    <figcaption>Standard promo</figcaption>
  </figure>
  <figure>  
    <img src="../card-spacing-promo-featured.svg" alt="Featured promo with spacing annotations. 48px on all sides. 32px between the copy and image. 16px after the heading and 24px above the CTA.">
    <figcaption>Featured promo</figcaption>
  </figure>
  <figure>
    <img src="../card-spacing-promo-full-width.svg" alt="Full-width promo with spacing annotations. 32px between the image and body copy.">
    <figcaption>Full-width promo</figcaption>
  </figure>
  <figure>
    <div style="max-width: 360px;">
      <img src="../card-spacing-promo-narrow.svg" alt="Narrow promo with spacing annotations. 32px on all sides and 24px above the CTA.">
    </div>
    <figcaption>Narrow promo</figcaption>
  </figure>
</uxdot-example>
