{% section %}
  ## Guidelines

  ### Usage
  The Secondary navigation is used to connect a series of pages together. It should be used as a supporting navigation component and not on its own.

  {% alert state="warning", title="Warning" %}
    Websites that require only one navigation should use the primary navigation.
  {% endalert %}

  ![Secondary navigation - usage]({{ '../secondary-nav-usage.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ### Product name text stacking
  If the secondary navigation is used to connect product-like pages, Zone 1 should display the product name in the form of linked text. If this text is short enough and there are fewer menus and links, it can remain on one line.

  {% alert state="warning", title="Warning" %}
    Do not truncate product name text or break it to three lines except in extreme cases on small breakpoints.
  {% endalert %}

  ![Secondary navigation - product name text stacking (two lines)]({{ '../product-name-text-stacking-2-lines.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  In some rare cases, if product name text is extremely long, it will naturally break to three lines on small breakpoints.

  ![Secondary navigation - product name text stacking (three lines)]({{ '../product-name-text-stacking-3-lines.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  This extremely small breakpoint example is 320px.

  ### Navigation slots
  Use Zone 2 to place navigation elements like menus and links. Typically, they are positioned on the left side next to Zone 1. The specific order of menus and links is up to content strategists.

  ![Secondary navigation - navigation slots]({{ '../navigation-slots.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ### Writing navigation content
  Navigation elements provide options for visitors to browse through relevant content. Be aware of the following when writing content for Zone 2:

  - **At least one** menu or link should be included
  - **A maximum of five** menus and links can be included if the text is short
  - It is best to write all text as short as possible
  - If product name text or a call to action is included, they can sometimes have lots of characters
  - If a call to action is included, it will not stack to make room for more text
  - Text will more than likely expand when translated to other languages

  {% alert state="warning", title="Warning" %}
    Featuring too many menus and links can lead to visual crowding and [choice paralysis](https://www.shopify.com/partners/blog/choice-paralysis){target="_blank"} for visitors.
  {% endalert %}

  ![Secondary navigation - navigation content]({{ '../navigation-content.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  | Element           | Maximum slots | Maximum characters |
  | ----------------- | ------------- | ------------------ |
  | Product name text | 1             | N/A                |
  | Menus and links   | 5             | 25*                |
  | Call to action    | 1             | 20                 |

  *If there are fewer menus and links in Zone 2, more characters can be written; if there are more menus and links, fewer characters can be written{style="color:var(--rh-color-black-600, #6a6e73); font-size: var(--rh-font-size-body-text-sm, 0.875rem);"}

  ### Expandable tray
  Use the expandable tray to organize content in two, three, or four columns. Positioning a call to action under a column of text will ensure that both elements will remain in the same arrangement when stacked on small breakpoints.

  {% alert state="warning", title="Warning" %}
    Do not use more than four columns in the expandable tray, consider reducing the amount of content instead.
  {% endalert %}

  ![Secondary navigation - expandable tray (four columns)]({{ '../expandable-tray-4-columns.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  If content is organized in fewer than four columns, the containers will stretch to fill the empty space.

  ![Secondary navigation - expandable tray (two columns)]({{ '../expandable-tray-2-columns.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ### Writing expandable tray content
  The expandable tray allows visitors to see a larger amount of relevant content. Elements that may be used include text, links, calls to action, and horizontal rules. Be aware of the following when writing content for the expandable tray:

  - It is best to write all text as short as possible
  - Do not stack lots of links in the same column
  - Do not use too many different call to action variants
  - Text will more than likely expand when translated to other languages
  - All text will stack on small breakpoints, so content positioned towards the left will be on top

  {% alert state="warning", title="Warning" %}
    Featuring too much content can lead to [choice paralysis](https://www.shopify.com/partners/blog/choice-paralysis){target="_blank"} and visitors not seeing key information because they have to scroll.
  {% endalert %}

  ![Secondary navigation - expandable tray content (desktop)]({{ '../expandable-tray-content-desktop.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 1000px;"}

  ![Secondary navigation - expandable tray content (mobile)]({{ '../expandable-tray-content-mobile.png' | url }}) {style="margin-block:var(--rh-space-2xl, 32px);--inline-img-max-width: 376px;"}

{% endsection %}


{% section %}

  ## Best practices

  ### Incorrect ordering
  Do not position the secondary navigation above the primary navigation.

  {% example palette="wrong",
           width=1000,
           alt="Secondary navigation - best practice 1",
           src="../best-practice-1.png",
           style="padding-inline: 0" %}

  ### Theme mismatch
  Do not use the dark theme secondary navigation in environments with light elements and vice versa.

  {% example palette="wrong",
           width=1000,
           alt="Secondary navigation - best practice 2",
           src="../best-practice-2.png",
           style="padding-inline: 0" %}

  ### Content overload
  Do not place too many navigation elements in Zone 2.

  {% example palette="wrong",
           width=1000,
           alt="Secondary navigation - best practice 3",
           src="../best-practice-3.png",
           style="padding-inline: 0" %}

  ### Adding or removing zones
  Do not add more zones than provided.

  {% example palette="wrong",
           width=1000,
           alt="Secondary navigation - best practice 4",
           src="../best-practice-4.png",
           style="padding-inline: 0" %}

  ### Product name text on three lines
  Do not allow product name text to break to three lines on large breakpoints.

  {% example palette="wrong",
           width=1000,
           alt="Secondary navigation - best practice 5",
           src="../best-practice-5.png",
           style="padding-inline: 0" %}

{% endsection %}