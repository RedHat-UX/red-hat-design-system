{% section %}
  ## Usage
  ### Variants
  There are several card variants that can be used for a variety of use cases.

  - #### Basic
    Use to display basic content or long paragraphs of text. Secondary and 
    Default calls to action may be used.
  - #### List
    Use to display a short amount of content using various list styles. 
    Secondary and Default calls to action may be used.
  - #### Data
    Use to display quick facts or short data points under a label. A Secondary 
    call to action may be used or not.
  - #### Logo
    Use to display a customer logo in a variety of arrangements. A call to 
    action is required, otherwise use a logo wall.
  - #### Bar
    Use to add a small icon and a label group to the header section. A larger 
    icon or a logo may be used.
  - #### Icon
    Use to add an icon to the basic style above the text. Secondary and Default 
    calls to action may be used.
  - #### Image
    Use to add an image to the basic style above the text. Secondary and Default 
    calls to action may be used.
  - #### Asset
    Use to display that an asset can be downloaded. An icon and label group or 
    text may be used to describe the asset.
  - #### Quote
    Use to display a short quote with attribution text. Logos, images, and a 
    Secondary call to action may be used or not.
  - #### Avatars
    Use to highlight a group of people who engage in an event. A label should be 
    included, but including text is optional.
  - #### Video
    Use to trigger a video that will play in a [Modal dialog]({{ 
    '/elements/dialog' }}). Different layout configurations may be used.
  - #### Pricing
    Use to outline the pricing and benefits of something. Elements may be 
    removed or rearranged depending on content needs.
  - #### Logo slider
    Use to display more content about a company when expanded on hover or tap. A 
    title and text should be included.
  - #### Name slider
    Use to display more content about a person when the tray expands. A title 
    and text should be included.
  {.multi-column--min-400-wide style="padding:0;list-style-type:none;margin-block:var(--rh-space-2xl) var(--rh-space-4xl);"}

  ### Content
  Cards have the potential to contain lots of content, like a combination of 
  text, links, images, multimedia, etc. Ensure content serves the use case, but 
  keep things simple at the same time. Don’t use too much content in one card, 
  distribute extra content to other cards or somewhere else on the page. A 
  [Sticky card]({{ '/patterns/sticky-card/' | url }}) is a kind of card that can 
  contain similar content, but it sticks to the side of a page and it’s always 
  present until a user dismisses it.

  ### Grouping
  Different card styles can sometimes be grouped together. They can be arranged 
  in a grid horizontally or vertically, depending on available space or screen 
  size. Be sure to only group cards together that have similar styles or 
  content. For example, grouping a basic card with a pricing card will look bad 
  because they’re not very similar.

  {% example palette="light",
             class="inline-flex centered",
             width=784,
             alt="Grouping of a card",
             src="../card-usage-grouping.svg" %}

  These cards can be grouped together because they have similar styles and 
  content {.footnote}

  ### Layout
  Cards are small layouts that should be arranged on a grid and not float 
  randomly in larger layouts. Cards have a minimum width of four columns and a 
  maximum width of six columns.

  ### Other components
  Cards can include complex components if necessary. For example, the 
  [Filter]({{ '/patterns/filter/' | url }}) pattern requires an Accordion or a 
  [Disclosure]({{ '/patterns/disclosure/' | url }}) to sort a content set. Don't 
  place any other complex components in card layouts.

  {% example palette="light",
             class="inline-flex centered",
             width=664,
             alt="Alternative card usage",
             src="../card-usage-other.svg" %}
{% endsection %}


{% section %}
  ## Best practices
  The minimum width of a card in any layout is four columns and the maximum 
  number of cards that can be used in a row is three.

  {% example palette="wrong",
             class="inline-flex centered",
             width=872,
             alt="Too many cards",
             src="../card-bestpractice-1.svg" %}

  Don’t use a primary call to action in any card unless the primary action of a 
  page is positioned inside of that card.

  {% example palette="wrong",
             class="inline-flex centered",
             width=360,
             alt="Card width error",
             src="../card-bestpractice-2.svg" %}

  Don’t use multiple calls to action in one card. Instead, distribute them to 
  other cards.

  {% example palette="wrong",
             class="inline-flex centered",
             width=360,
             alt="Multiple calls to action",
             src="../card-bestpractice-3.svg" %}
{% endsection %}


{% section %}
  ## Behavior
  ### Vertical height
  The vertical height of cards depends on how much content is placed inside. If 
  there are multiple cards in a row, the vertical height of each of them will be 
  determined by the tallest card. Don’t place inconsistent amounts of content in 
  cards, as this will impact how scannable the group will appear to users.

  {% example palette="light",
             class="inline-flex centered",
             width=784,
             alt="Card height behavior",
             src="../card-behavior-height.svg" %}

  ### Interactivity
  If a card contains only one link destination, the entire container and any 
  elements inside should all be interactive. Otherwise, each interactive element 
  should continue to be interactive, but not the card container.

  {% example palette="light",
             class="inline-flex centered",
             width=784,
             alt="Card interaction",
             src="../card-behavior-interaction.svg" %}
{% endsection %}

{% section %}
  ## Interaction states
  Since cards can consist of a variety of elements, refer to the specific 
  interaction states that are assigned to each style and component for more 
  information.
{% endsection %}

