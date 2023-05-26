{% section %}
  ## Usage
  Use a secondary navigation to propagate important or related content across a series of pages. Users can better orient themselves if they see content that is organized around a specific topic at the top of a page.

  ### When to use a secondary navigation
  A secondary navigation offers a way to propagate content that relates to a specific topic. For example, a secondary navigation can be used on a product page to organize content like use cases, variants, services, documentation, and more. This kind of content cannot live in the primary navigation because it is too specific to a product and it is also too much content in general to add to a single page. In this situation, a secondary navigation is helping content propagate across multiple pages instead of cluttering one page therefore negatively impacting the user experience.

  ### Primary vs. secondary navigation
  The [primary navigation](../../navigation-primary) includes links to the most important pages across a domain. If content related to a specific topic needs to be organized somewhere, it should be added to a secondary navigation instead. This hierarchy can be demonstrated visually by the primary navigation being on top of a secondary navigation when a page loads.

  {% example palette="light",
      alt="Image of a primary navigation stacked on top of a secondary navigation",
      src="../nav-secondary-usage-vs-primary.png" %}

  ## Writing content
  ### Slot 1 text 
  If a secondary navigation is used on a product page, Slot 1 should display the product name as linked text. When writing content for Slot 1, consider the following:

   - If product name text is long, it needs to break to two lines
   - If product name text is short and there are fewer links and menus, it can remain on one line

  ![Image of four secondary navigations showing how stacked product name text offers more space][nav-secondary-guidelines-slot-1-text] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Slot 2 text
  Slot 2 includes inline links, menus, and sometimes external links. The order of elements is decided by content strategists. When writing content for Slot 2, consider the following:
  
   - A secondary navigation can become cluttered quickly if there are too many items
   - Try to be short and concise when writing
   - At least one menu or link should be included, but no more than five total
   - Text will expand when translated to some languages

  ![Image of two secondary navigations comparing an acceptable amount of links and menus][nav-secondary-guidelines-slot-2-text] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Slot 3 text
  Slot 3 is optional, but it can include interactive elements like a call to action. When writing content for Slot 3, consider the following:
   
   - Try to be short and concise when writing
   - Including a call to action will reduce the amount of space for Slot 2 elements
   - A call to action <strong>does not</strong> stack to increase the amount of space
   - Text will expand when translated to some languages

  ![Image of two secondary navigations comparing the character counts of a call to action][nav-secondary-guidelines-slot-3-text] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Maximum uses and character count
  If there are fewer links and menus in Slot 2, text labels can be longer. If there are more links and menus, text labels need to be shorter to avoid cluttering.

  | Element {style="width: 33%"} | Maximum uses {style="width: 33%"} | Maximum character count |
  | ---------------------------- | --------------------------------- | ----------------------- |
  | Product name text            | 1                                 | 55                      |
  | Links and menus              | 5 (total)                         | 25                      |
  | Call to action               | 1                                 | 20                      |

{% endsection %}

{% section %}

  ## Expandable menu
  Use the expandable menu to organize content in columns.

  {% alert state="warning", title="Warning" %}
    Do not use more than four columns, stack groups below other groups instead like in the examples below.
  {% endalert %}

  ![Image of a secondary navigation with four columns of links][nav-secondary-usage-expandable-menu-columns-4] {style="margin-block: var(--rh-space-2xl, 32px);"}

  If content is organized in two columns, they will stretch to fill the empty space.

  ![Image of a secondary navigation with two columns of links][nav-secondary-usage-expandable-menu-columns-2] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Expandable menu content 
  The expandable menu includes content like text, links, calls to action, and more. When adding content to an expandable menu, follow these guidelines:

   - Try to be short and concise when writing
   - Do not stack lots of links in the same column
   - Use only one call to action variant
   - Put the most important content in the upper left corner because when content stacks, it will be on top
   - Be mindful of how text changes size when translated to some languages

{% endsection %}

{% section %}

  ## Behavior

  ### Current page indicator 
  When a user is viewing a page that is part of the secondary navigation **information architecture**, a red top border is visible. In the example below, a user is viewing both the *Overview* page and a page within the *Product variants* menu. External links do not display the red top border (except on hover) because they open links in a new tab or window instead.

  ![Image of two secondary navigations with red bars on top of different menus][nav-secondary-guidelines-current-page-indicator] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Scrolling with primary navigation
  A secondary navigation is positioned below the primary navigation when the page loads. When a user scrolls down, the primary navigation disappears and the secondary navigation becomes fixed to the top of the browser window. When a user scrolls back up to the top, the secondary navigation is positioned under the primary navigation again.

  ![Image of primary and secondary navigations and their behaviors when scrolling][nav-secondary-guidelines-scrolling-primary-nav] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Navigating between menus
  Only one menu can be expanded at a time and there is no animation when navigating from one menu to the next.

  {% alert state="info", title="Helpful tip" %}
    The default state of the menu caret is pointing down. When a menu is expanded, the caret points up.
  {% endalert %}

  {% example palette="light",
    alt="Image of three secondary navigations with different menus selected",
    src="../nav-secondary-guidelines-navigating-menus.png" %}

  ### Scrolling with menu expanded 
  If the height of the menu is **shorter** than the viewport height, content should scroll underneath the backdrop.

  ![Image of secondary navigation showing the scrolling behavior when the menu panel is shorter than the viewport height][nav-secondary-guidelines-scrolling-menu-expanded-a] {style="margin-block: var(--rh-space-2xl, 32px);"}

  If the height of the menu is **taller** than the viewport height, scroll is trapped within the panel until the menu is collapsed.

  ![Image of secondary navigation showing the scrolling behavior when the menu panel is taller than the viewport height][nav-secondary-guidelines-scrolling-menu-expanded-b] {style="margin-block: var(--rh-space-2xl, 32px);"}

{% endsection %}

{% section %}

  ## Responsive design
  As breakpoints get smaller, Slot 2 will collapse into an accordion within a menu instead.
  
  ### Slot 2 visible

  ![Image of secondary navigations; one has a menu collapsed and the other has a menu expanded, but both have slot 2 visible on large breakpoints][nav-secondary-guidelines-responsive-slot-2-visible] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Slot 2 hidden 

  ![Image of secondary navigations; slot 2 on small breakpoints is not visible unless the menu is expanded][nav-secondary-guidelines-responsive-slot-2-hidden] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Breakpoints

  | Breakpoint {style="width: 25%;"} | Range {style="width: 25%;"} | Slot 2 status {style="width: 25%;"} | Left and right padding |
  | ------------------------------- | --------------------------- | ---------------------------------- | --------------------- |
  | Desktop, large                  | > 1680px                    | Visible                            | 64px       |
  | Desktop, medium                 | 1440px - 1679px             | Visible                            | 64px       |
  | Desktop, small                  | 1200px - 1439px             | Visible                            | 32px       |
  | Tablet, large                   | 992px - 1199px              | Hidden, one menu only              | 32px       |
  | Tablet, small                   | 768px - 991px               | Hidden, one menu only              | 32px       |
  | Mobile, large                   | 576px - 767px               | Hidden, one menu only              | 16px       |
  | Mobile, small                   | < 575px                     | Hidden, one menu only              | 16px       |

  {style="width: 100%"}

{% endsection %}

{% section %}

  ## Best practices
  
  ### Incorrect ordering
  Do not position the secondary navigation above the primary navigation.

  ![Image of a secondary navigation on top of a primary navigation which is incorrect usage][nav-secondary-best-practice-1] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Theme mismatch
  Do not use a dark theme secondary navigation in light environments and vice versa.

  ![Image of a dark theme secondary navigation in a light theme environment which is incorrect usage][nav-secondary-best-practice-2] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Content overload
  Do not use too many links or menus in Slot 2.

  ![Image of a secondary navigation with way more than five links and menus which is incorrect usage][nav-secondary-best-practice-3] {style="margin-block: var(--rh-space-2xl, 32px);"}

  ### Adding slots
  Do not add more slots than provided, three is the maximum.

  ![Image of a secondary navigation with four dotted line boxes for slots which is incorrect usage][nav-secondary-best-practice-4] {style="margin-block: var(--rh-space-2xl, 32px);"}
  
  ### Slot 1 text
  Slot 1 text should never break to three lines.

  ![Image of a secondary navigation, but the product name logo in slot 1 is three lines which is incorrect usage][nav-secondary-best-practice-5] {style="margin-block: var(--rh-space-2xl, 32px);"}
  
  ### Missing navigation
  At least one link or menu in Slot 2 must be visible.

  ![Image of a secondary navigation with no links or menus in slot 2 which is incorrect usage][nav-secondary-best-practice-6] {style="margin-block: var(--rh-space-2xl, 32px);"}

{% endsection %}

[nav-secondary-guidelines-slot-1-text]: {{ '../nav-secondary-guidelines-slot-1-text.png' | url }}
[nav-secondary-guidelines-slot-2-text]: {{ '../nav-secondary-guidelines-slot-2-text.png' | url }}
[nav-secondary-guidelines-slot-3-text]: {{ '../nav-secondary-guidelines-slot-3-text.png' | url }}
[nav-secondary-usage-expandable-menu-columns-4]: {{ '../nav-secondary-usage-expandable-menu-columns-4.png' | url }}
[nav-secondary-usage-expandable-menu-columns-2]: {{ '../nav-secondary-usage-expandable-menu-columns-2.png' | url }}
[nav-secondary-guidelines-current-page-indicator]: {{ '../nav-secondary-guidelines-current-page-indicator.png' | url }}
[nav-secondary-guidelines-scrolling-primary-nav]: {{ '../nav-secondary-guidelines-scrolling-primary-nav.png' | url }}
[nav-secondary-guidelines-scrolling-menu-expanded-a]: {{ '../nav-secondary-guidelines-scrolling-menu-expanded-a.png' | url }}
[nav-secondary-guidelines-scrolling-menu-expanded-b]: {{ '../nav-secondary-guidelines-scrolling-menu-expanded-b.png' | url }}
[nav-secondary-guidelines-responsive-slot-2-visible]: {{ '../nav-secondary-guidelines-responsive-slot-2-visible.png' | url }}
[nav-secondary-guidelines-responsive-slot-2-hidden]: {{ '../nav-secondary-guidelines-responsive-slot-2-hidden.png' | url }}
[nav-secondary-best-practice-1]: {{ '../nav-secondary-best-practice-1.png' | url }}
[nav-secondary-best-practice-2]: {{ '../nav-secondary-best-practice-2.png' | url }}
[nav-secondary-best-practice-3]: {{ '../nav-secondary-best-practice-3.png' | url }}
[nav-secondary-best-practice-4]: {{ '../nav-secondary-best-practice-4.png' | url }}
[nav-secondary-best-practice-5]: {{ '../nav-secondary-best-practice-5.png' | url }}
[nav-secondary-best-practice-6]: {{ '../nav-secondary-best-practice-6.png' | url }}