
## Usage

### Content
  Jump links are used to help a user navigate through large sections of content. 
  Blocks of content that use jump links should be displayed in full and not 
  hidden in other components, unless absolutely necessary. Sections that contain 
  additional content can include nested sections for better organization. Nested 
  sections shouldn’t be visible under a parent section by default, they’re 
  displayed when a user scrolls past them or if they select the specific parent 
  section link.

### Positioning

  Jump links are placed on the left edge of the grid on large screens so content 
  can scroll freely on the right without interruption. Ensure there’s ample 
  space between jump links and the content.

  ![Jump links positioning]({{ '../jump-links-positioning.svg' | 
  url }}) {.inline-flex .centered}


## Best practices

  Jump links should contain at least two section links.

  {% example palette="wrong",
             width=129,
             class="inline-flex centered",
             alt="Jump links not enough links issue",
             src="../jump-links-best-practices-1.svg" %}

  Don’t include section links that are really long, they can be customized to be 
  shorter when added to a group of jump links.

  {% example palette="wrong",
             width=361,
             class="inline-flex centered",
             alt="Jump links too long titles",
             src="../jump-links-best-practices-2.svg" %}

  Don’t overload jump links with too many section links, but including lots 
  of nested section links is acceptable.

  {% example palette="wrong",
             width=146,
             class="inline-flex centered",
             alt="Jump links too many top level links issue",
             src="../jump-links-best-practices-3.svg" %}

  Don’t nest section links within nested section links.

  {% example palette="wrong",
             width=141,
             class="inline-flex centered",
             alt="Jump links nesting issue",
             src="../jump-links-best-practices-4.svg" %}



## Behavior

### Positioning
  When a page loads, jump links are anchored to the top edge of content that it 
  applies to before it becomes persistent.

### Active section
  When a page loads, jump links are anchored to the top edge of content that it 
  applies to before it becomes persistent.

### Selecting sections
  When a user selects a section link, the content moves up or down and lands on 
  the top edge of the section they chose. The red indicator bar highlights the 
  active section link and the link changes color before the section comes into 
  view.

### Mobile
  Jump links can be used on large and small screens. There’s not enough space to 
  use jump links in a mobile layout, so it’s wrapped in a [Disclosure]({{ 
  '/patterns/disclosure/' | url }}) and anchored above the content instead. It 
  becomes persistent when a user scrolls past the top edge of the content.

  {% example palette="light",
             width=872,
             class="inline-flex centered",
             alt="Jump links on mobile",
             src="../jump-links-behavior-mobile.svg" %}


## Interaction states

  Jump links have the same interaction states as vertical [Open tabs]({{ 
  '/elements/tabs/' | url }}).

### Tab order
  For accessibility, jump links are required to be focused. Any interactive 
  elements above jump links will be focused first until jump links stick to the 
  top edge of content. Once jump links come into view and are persistent, the 
  first section link is focused and the tab order becomes top to bottom.

  {% example palette="light",
             width=872,
             class="inline-flex centered",
             alt="Jump links tab order",
             src="../jump-links-tab-order.svg" %}

