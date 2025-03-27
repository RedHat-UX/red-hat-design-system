<style data-helmet>
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: var(--rh-space-4xl, 64px);
    @container container (min-width: 567px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  figure rh-card + figcaption {
    margin-block-start: var(--rh-space-xl, 24px);
  }

  .promo-spacing {
    & figure:not(:first-of-type) {
      margin-block-start: var(--rh-space-4xl, 64px);
    }

    & figcaption {
      font-size: var(--rh-font-size-body-text-sm, 0.875rem);
      margin-block-start: var(--rh-space-lg, 16px);
    }
  }
</style>


## Style

Cards can be used in light and dark themes. They act as a blank canvas where
elements and styles can be placed inside.

<uxdot-example color-palette="lightest" width-adjustment="600px">
  <img src="../card-style.svg"
        alt="A breakdown of the parts of a card"
        width="600"
        height="502">
</uxdot-example>

## Color scheme
<a id="theme"></a>

All card variants are available for light and dark color schemes.

### Light background

<uxdot-example color-palette="lightest" width-adjustment="784px">
  <img src="../card-background-light.svg"
        alt="Card on light background"
        width="752"
        height="507">
</uxdot-example>

### Dark background

<uxdot-example color-palette="darkest" width-adjustment="784px">
  <img src="../card-background-dark.svg"
        alt="Card on dark background"
        width="752"
        height="507">
</uxdot-example>

Cards can also set any of the six [color palettes](/theming/color-palettes/), to 
create an emphasized or contrasting section of the page. [Promo](#promo) cards
can only use the `Lightest` or `Darkest` color palettes, while [standard 
promo](#standard-promo) cards can only use the `Lighter` or `Darker` color 
palettes.

### Color

Cards are secondary layouts that shouldn’t command too much attention. Instead 
they should blend in with whatever background they’re placed on. The card 
container is the only required element and it consists of a background color, 
rounded corners, and a thin border.

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
  <uxdot-example color-palette="lightest" width-adjustment="360px">
    <img src="../card-layout-1.svg"
         alt="Example of a card layout"
         width="360"
         height="502">
  </uxdot-example>

  <uxdot-example color-palette="lightest" width-adjustment="360px">
    <img src="../card-layout-2.svg"
         alt="Anatomy of a card layout"
         width="360"
         height="502">
  </uxdot-example>

</div>

#### Header

The header section is required, it introduces what the content is and
shouldn’t be hidden.

#### Body

The body section can include a headline, text, an icon, or sometimes an image.
The body section describes the content in more detail and shouldn’t be hidden.

#### Footer

The footer section can include normal links or a call to action. It can be
hidden if necessary if there’s content included where a user can take an
action.

## Responsive design

### Breakpoints

Cards will get thinner or move below each other on smaller screens.

### Large screens

<uxdot-example color-palette="lightest" width-adjustment="784px" variant="full" no-border alignment="left">
  <img src="../card-layout-desktop.svg"
       alt="Card layout on desktop"
       width="1000"
       height="320">
</uxdot-example>

### Small screens

<uxdot-example color-palette="lightest" width-adjustment="360px" variant="full" no-border alignment="left">
  <img src="../card-layout-mobile.svg"
       alt="Card layout on mobile"
       width="360"
       height="640">
</uxdot-example>

## Spacing

<uxdot-spacer-tokens-table tokens="lg, xl, 2xl, 3xl"></uxdot-spacer-tokens-table>

### Container padding

Container padding defines how far away content is from the edges of the
component. When cards become wider, the container padding increases. When they
become thinner, the container padding decreases.

### Desktop

<uxdot-example color-palette="lightest" width-adjustment="360px">
  <img src="../card-spacing-desktop.svg"
       alt="Card spacing on desktop"
       width="360"
       height="502">
</uxdot-example>

### Mobile

<uxdot-example color-palette="lightest" width-adjustment="360px">
  <img src="../card-spacing-mobile.svg"
       alt="Card spacing on mobile"
       width="360"
       height="640">
</uxdot-example>

## Promo

Promo cards are available in four different configurations: standard, featured, 
full-width, and narrow.

### Configurations

#### Standard promo

A standard promo has a subtle border, but it uses the `Lighter` or `Darker` 
surface color. It does not have an image slot and the call to action appears 
either to the left or right of the text.

<uxdot-example color-palette="lightest" width-adjustment="1012px">
  <img src="../card-variants-promo-standard.svg"
       alt="Standard promo with placeholder text"
       width="1012"
       height="123">
</uxdot-example>

#### Featured promo

A featured promo uses the `Lightest` or `Darkest` surface color with a subtle 
border. An image can optionally appear on the left or right side of a promo.

<uxdot-example color-palette="lightest" width-adjustment="1012px">
  <img src="../card-variants-promo-featured.svg"
       alt="Featured promo with placeholder text and image"
       width="1012"
       height="249">
</uxdot-example>

#### Full-width promo

A full-width promo bleeds to the left and right edges of the screen. It does not 
have a border. Similarly to a featured promo, a full-width promo can use either 
the `Lightest` or `Darkest` surface color, and it can have no image or an image 
positioned to the left or right of the text.

<uxdot-example color-palette="lightest" width-adjustment="1012px" variant="full">
  <img src="../card-variants-promo-full-width.svg"
       alt="Full-width promo with placeholder text and image"
       width="1012"
       height="254">
</uxdot-example>

#### Narrow promo

A Narrow promo can fit into a section or container smaller than 296 pixels. It 
moves an image in any type of promo below the body text and call to action. This 
is also the configuration used on phone viewports for a featured, standard 
promo, or full-width promo.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img src="../card-variants-promo-narrow.svg"
       alt="Narrow promo versions with featured promo and standard promo"
       width="752"
       height="401">
</uxdot-example>

### Color scheme
<a id="theme-1"></a>

The standard promo can set the `Lighter` or `Darker` color palettes. It can
appear on either light or dark backgrounds.

<uxdot-example width-adjustment="1012px">
  <img src="../card-theme-promo-standard.svg"
       alt="Standard Promo's in light and dark themes"
       width="1012"
       height="294">
</uxdot-example>

The featured and full-width promos can set the `Lightest` and `Darkest` color 
palettes, and can appear on either light or dark backgrounds.

<uxdot-example color-palette="lightest" width-adjustment="1140" no-border variant="full">
  <img src="../card-theme-promo-featured-full-width.svg"
       alt="Featured and full-width Promo's in light and dark themes"
       width="1140"
       height="1187">
</uxdot-example>

### Responsive Design

When promos are viewed on phone viewports or added to small containers, they 
will use the [Narrow promo](/elements/card/style/#narrow-promo) configuration.

### Spacing

Except for narrow promos, spacing within the other promo configurations is a 
little different from Card.

<uxdot-example color-palette="lightest" class="promo-spacing" alignment="left">
  <figure>
    <img src="../card-spacing-promo-standard.svg"
         alt="Standard promo with spacing annotations. 48px on all sides and 24px to the left of the CTA."
         width="1018"
         height="123">
    <figcaption>Standard promo</figcaption>
  </figure>
  <figure>
    <img src="../card-spacing-promo-featured.svg"
         alt="Featured promo with spacing annotations. 48px on all sides. 32px between the copy and image. 16px after the heading and 24px above the CTA."
         width="1018"
         height="249">
    <figcaption>Featured promo</figcaption>
  </figure>
  <figure>
    <img src="../card-spacing-promo-full-width.svg"
         alt="Full-width promo with spacing annotations. 32px between the image and body copy."
         width="1018"
         height="158">
    <figcaption>Full-width promo</figcaption>
  </figure>
  <figure>
    <div style="max-width: 360px;">
      <img src="../card-spacing-promo-narrow.svg"
           alt="Narrow promo with spacing annotations. 32px on all sides and 24px above the CTA."
           width="360"
           height="401">
    </div>
    <figcaption>Narrow promo</figcaption>
  </figure>
</uxdot-example>
