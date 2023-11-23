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

  {% sample code='hidden' %}
  <rh-card>
    <img slot="header"
         id="fedora"
         alt="red fedora angled over cubicle wall corner"
         src="../fedora.jpg">
    <svg viewBox="0 0 200 64"
         xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="64" rx="3" transform="translate(522 690)" fill="#f0f0f0"/>
      <path d="M1.246,0H7.854V-.952H2.324V-9.8H1.246ZM8.96-3.416A3.384,3.384,0,0,0,9.865-.935,3.384,3.384,0,0,0,12.278.14,3.389,3.389,0,0,0,14.707-.926a3.389,3.389,0,0,0,.917-2.49A3.365,3.365,0,0,0,14.7-5.895a3.365,3.365,0,0,0-2.427-1.049,3.359,3.359,0,0,0-2.41,1.058A3.359,3.359,0,0,0,8.96-3.416ZM14.6-3.4a2.412,2.412,0,0,1-.594,1.816,2.412,2.412,0,0,1-1.728.814,2.4,2.4,0,0,1-1.715-.82A2.4,2.4,0,0,1,9.982-3.4a2.421,2.421,0,0,1,.583-1.816,2.421,2.421,0,0,1,1.717-.83,2.424,2.424,0,0,1,1.728.825A2.424,2.424,0,0,1,14.6-3.4ZM20.356.1a2.759,2.759,0,0,0,2.17-1V.224c0,1.148-.672,1.75-1.9,1.75a4.449,4.449,0,0,1-2.17-.63l-.434.784a5.318,5.318,0,0,0,2.66.714c1.848,0,2.87-.924,2.87-2.632V-6.832H22.54v.868a2.82,2.82,0,0,0-2.128-.952,3.329,3.329,0,0,0-2.351,1.079A3.329,3.329,0,0,0,17.192-3.4,3.308,3.308,0,0,0,18.04-.987,3.308,3.308,0,0,0,20.356.1ZM18.214-3.416a2.428,2.428,0,0,1,.631-1.812,2.428,2.428,0,0,1,1.749-.788,2.462,2.462,0,0,1,1.932.91v3.4a2.36,2.36,0,0,1-1.932.91,2.44,2.44,0,0,1-1.753-.8,2.44,2.44,0,0,1-.627-1.821Zm7.2,0a3.384,3.384,0,0,0,.9,2.48A3.384,3.384,0,0,0,28.728.14,3.389,3.389,0,0,0,31.157-.926a3.389,3.389,0,0,0,.917-2.49,3.365,3.365,0,0,0-.919-2.479,3.365,3.365,0,0,0-2.427-1.049,3.359,3.359,0,0,0-2.41,1.058,3.359,3.359,0,0,0-.908,2.47Zm5.642.014a2.412,2.412,0,0,1-.6,1.819,2.412,2.412,0,0,1-1.733.813,2.4,2.4,0,0,1-1.719-.819A2.4,2.4,0,0,1,26.428-3.4a2.421,2.421,0,0,1,.583-1.816,2.421,2.421,0,0,1,1.717-.83,2.424,2.424,0,0,1,1.732.823A2.424,2.424,0,0,1,31.052-3.4Z" transform="translate(606 727)" fill="#6a6e73"/>
    </svg>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit aliquet mauris, in consequat</p>
    <rh-cta slot="footer">
      <a href="#">Call to action</a>
    </rh-cta>
  </rh-card>
  <rh-card>
    <svg xmlns="http://www.w3.org/2000/svg"
         slot="header"
         viewBox="0 0 784 513">
      <defs>
        <clipPath id="clip-path">
          <path id="Rectangle" d="M2.99,0h352.8a2.99,2.99,0,0,1,2.99,2.989v199.3H0V2.989A2.99,2.99,0,0,1,2.99,0Z" transform="translate(360 222)" fill="none"/>
        </clipPath>
      </defs>
      <g transform="translate(320 535)">
        <g  transform="translate(0.526 0.714)" clip-path="url(#clip-path)">
          <image width="687" height="229" xlink:href="#fedora"/>
        </g>
        <g transform="translate(508 292)">
          <circle id="Ellipse" cx="32" cy="32" r="32" fill="#fff" opacity="0.25"/>
          <path id="Path" d="M44,32,24,42V22Z" fill="#fff"/>
        </g>
      </g>
    </svg>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit aliquet mauris, in consequat</p>
    <rh-cta variant="secondary" slot="footer">
      <a href="#">Call to action</a>
    </rh-cta>
  </rh-card>
  <pf-icon icon="circle-check" size="lg" class="do"></pf-icon>
  <pf-icon icon="circle-check" size="lg" class="do"></pf-icon>
  {% endsample %}

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


## Interaction states
  Since cards can consist of a variety of elements, refer to the specific 
  interaction states that are assigned to each style and component for more 
  information.

