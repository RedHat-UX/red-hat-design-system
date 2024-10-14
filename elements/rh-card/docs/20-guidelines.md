<style data-helmet>
  .card-grid {
    margin-block-end: var(--rh-space-4xl, 64px);
  }

  .card-grid rh-card {
    height: auto;

  .card-grid rh-card h4 {
    margin-block: 0;
  }

  .card-grid rh-card::part(body) {
    margin-block: 0;
  }

  .card-grid rh-card::part(footer) {
    display: none;
  }
</style>

## Usage


Cards are used to display basic content or long paragraphs of text. Secondary and 
Default calls to action may be used.

<rh-alert state="info">

  For examples of patterns which use or modify Card,
  see the [card patterns page](/patterns/card).

</rh-alert>


### Patterns

There are several card patterns that can be used for a variety of use cases. To learn more, visit the <a href="/patterns/card/">Card patterns page</a>.

<div class="card-grid grid xs-two-columns md-three-columns">
  <rh-card>
    <h4 slot="header">Basic</h4>
    <p>
      Use to display basic content or long paragraphs of text. Secondary and 
      Default calls to action may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">List</h4>
    <p>
      Use to display a short amount of content using various list styles. 
      Secondary and Default calls to action may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Data</h4>
    <p>
      Use to display quick facts or short data points under a label. A Secondary 
      call to action may be used or not.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Logo</h4>
    <p>
      Use to display a customer logo in a variety of arrangements. A call to 
      action is required, otherwise use a logo wall.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Bar</h4>
    <p>
      Use to add a small icon and a label group to the header section. A larger 
      icon or a logo may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Icon</h4>
    <p>
      Use to add an icon to the basic style above the text. Secondary and Default 
      calls to action may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Image</h4>
    <p>
      Use to add an image to the basic style above the text. Secondary and Default 
      calls to action may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Asset</h4>
    <p>
      Use to display that an asset can be downloaded. An icon and label group or 
      text may be used to describe the asset.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Quote</h4>
    <p>
      Use to display a short quote with attribution text. Logos, images, and a 
      Secondary call to action may be used or not.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Avatars</h4>
    <p>
      Use to highlight a group of people who engage in an event. A label should be 
      included, but including text is optional.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Video</h4>
    <p>
      Use to trigger a video that will play in a [Modal dialog]({{ 
      '/elements/dialog' }}). Different layout configurations may be used.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Pricing</h4>
    <p>
      Use to outline the pricing and benefits of something. Elements may be 
      removed or rearranged depending on content needs.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Logo slider</h4>
    <p>
      Use to display more content about a company when expanded on hover or tap. A 
      title and text should be included.
    </p>
  </rh-card>

  <rh-card>
    <h4 slot="header">Name slider</h4>
    <p>
      Use to display more content about a person when the tray expands. A title 
      and text should be included.
    </p>
  </rh-card>

</div>


### Content

Cards have the potential to contain lots of content, like a combination of 
text, links, images, multimedia, etc. Ensure content serves the use case, but 
keep things simple at the same time. Don’t use too much content in one card, 
distribute extra content to other cards or somewhere else on the page. A 
[Sticky card](/patterns/sticky-card/) is a kind of card that can 
contain similar content, but it sticks to the side of a page and it’s always 
present until a user dismisses it.

### Character count

The recommended maximum character count for the elements of a card are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element" style="width: 50%">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Title</td>
        <td data-label="Character count">20</td>
      </tr>
      <tr>
        <td data-label="Element">Headline</td>
        <td data-label="Character count">50</td>
      </tr>
      <tr>
        <td data-label="Element">Body text</td>
        <td data-label="Character count">165</td>
      </tr>
      <tr>
        <td data-label="Element">Footer</td>
        <td data-label="Character count">55</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Grouping

Different card styles can sometimes be grouped together. They can be arranged 
in a grid horizontally or vertically, depending on available space or screen 
size. Be sure to only group cards together that have similar styles or 
content. For example, grouping a basic card with a pricing card will look bad 
because they’re not very similar.

<uxdot-example width-adjustment="784px">
  <img src="../card-usage-grouping.svg"
        alt="Grouping of a card"
        width="784"
        height="513">
</uxdot-example>

These cards can be grouped together because they have similar styles and 
content {.footnote}

### Layout

Cards are small layouts that should be arranged on a grid and not float 
randomly in larger layouts. Cards have a minimum width of four columns and a 
maximum width of six columns.

### Other components

Cards can include complex components if necessary. For example, the 
[Filter](/patterns/filter/) pattern requires an Accordion or a 
[Disclosure](/patterns/disclosure/) to sort a content set. Don't 
place any other complex components in card layouts.

<uxdot-example width-adjustment="664px">
  <img src="../card-usage-other.svg"
        alt="Alternative card usage"
        width="664"
        height="513">
</uxdot-example>

## Variants

### Promo

A promo should display content related to the current experience but isn’t tied to the flow which the user is reading. It was established as a variant of card because it is also a container that uses similar patterns.

#### Standard promo

A standard promo should contain only a heading and a call to action, which allows its content to stay separate from the rest of the page without being too prominent.

#### Featured promo

A featured promo can contain a heading, additional body copy, call to action, and an image. This allows it to stand out more and give more information than a standard promo.

#### Full-width promo

A full-width promo is more interruptive than the other configurations. It’s best used on pages that have section bands.

#### Narrow promo

A narrow promo can be used if the promo content needs to fit in a small area, like in a sidebar.

## Best practices

### Card width

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img src="../card-best-practices-width-do.svg"
          alt="Three cards in a row"
          width="1012"
          height="187">
  </uxdot-example>
  <p>In a 12-column layout, use a minimum width of four columns for a card. The maximum number of cards that should be used in a row is three.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="1012px" slot="image">
    <img src="../card-best-practices-width-dont.svg"
          alt="Four cards in a row"
          width="1012"
          height="187">
  </uxdot-example>
  <p>Do not make cards narrower than 4 columns. This may not give enough space for content within the card.</p>
</uxdot-best-practice>

### Call to action variants in cards

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../card-best-practices-cta-variants-do.svg"
            alt="Card with a default call to action"
            width="360"
            height="223">
    </uxdot-example>
    <p>Use secondary or default calls to action in most cards.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../card-best-practices-cta-variants-dont.svg"
            alt="Card with a primary call to action"
            width="360"
            height="252">
    </uxdot-example>
    <p>Do not use a primary call to action in any card unless the primary action for the whole page is positioned inside of that card.</p>
  </uxdot-best-practice>
</div>

### Number of calls to actions in cards

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../card-best-practices-cta-number-do.svg"
            alt="Card with a secondary call to action and a default call to action"
            width="360"
            height="303">
    </uxdot-example>
    <p>Use up to two calls to action in a card. They can be two different variants.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="360px" slot="image">
      <img src="../card-best-practices-cta-number-dont.svg"
            alt="Card with three call to actions"
            width="360"
            height="354">
    </uxdot-example>
    <p>Do not use more than two calls to action in a card. This could make it harder for the user to understand what action to take next.</p>
  </uxdot-best-practice>
</div>

### Promo

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="546px" slot="image">
      <img src="../card-best-practices-promo-do.svg"
            alt="One featured promo below lorem ipsum text"
            width="546"
            height="312">
    </uxdot-example>
    <p>Because promo is used for special promotional content only, promos should typically appear individually.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="546px" slot="image">
      <img src="../card-best-practices-promo-dont.svg"
            alt="Three narrow promos in a group"
            width="546"
            height="312">
    </uxdot-example>
    <p>Do not group multiple promos together as if they were a regular card group.</p>
  </uxdot-best-practice>
</div>

## Behavior

### Vertical height

The vertical height of cards depends on how much content is placed inside. If 
there are multiple cards in a row, the vertical height of each of them will be 
determined by the tallest card. Don’t place inconsistent amounts of content in 
cards, as this will impact how scannable the group will appear to users.

<uxdot-example width-adjustment="784px">
  <img src="../card-behavior-height.svg"
        alt="Card height behavior"
        width="784"
        height="536">
</uxdot-example>

### Interactivity

If a card contains only one link destination, the entire container and any 
elements inside should all be interactive. Otherwise, each interactive element 
should continue to be interactive, but not the card container.

<uxdot-example width-adjustment="784px">
  <img src="../card-behavior-interaction.svg"
        alt="Card interaction"
        width="786"
        height="335">
</uxdot-example>

## Interaction states

Since cards can consist of a variety of elements, refer to the specific 
interaction states that are assigned to each style and component for more 
information.
