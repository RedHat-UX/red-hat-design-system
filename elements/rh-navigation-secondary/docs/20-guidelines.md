
## Usage

Use a secondary navigation to propagate important or related content across a series of pages. Users can better orient themselves if they see content that is organized around a specific topic at the top of a page.

### When to use a secondary navigation

A secondary navigation offers a way to propagate content that relates to a specific topic. For example, a secondary navigation can be used on a product page to organize content like use cases, variants, services, documentation, and more. This kind of content cannot live in the primary navigation because it is too specific to a product and it is also too much content in general to add to a single page. In this situation, a secondary navigation is helping content propagate across multiple pages instead of cluttering one page therefore negatively impacting the user experience.

### Primary vs. secondary navigation

The [primary navigation](../../navigation-primary) includes links to the most important pages across a domain. If content related to a specific topic needs to be organized somewhere, it should be added to a secondary navigation instead. This hierarchy can be demonstrated visually by the primary navigation being on top of a secondary navigation when a page loads.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of a primary navigation stacked on top of a secondary navigation"
       src="../nav-secondary-usage-vs-primary.png"
       width="872"
       height="286">
</uxdot-example>


## Writing content

### Slot 1 text 

If a secondary navigation is used on a product page, Slot 1 should display the product name as linked text. When writing content for Slot 1, consider the following:

- If product name text is long, it needs to break to two lines
- A product name should not be so long that it breaks to three lines
- If product name text is short and there are fewer links and menus, it can remain on one line

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of four secondary navigations showing how stacked product name text offers more space"
       src="../nav-secondary-guidelines-slot-1-text.png"
       width="1000"
       height="440">
</uxdot-example>


### Slot 2 text

Slot 2 includes inline links, menus, and sometimes external links. The order of elements is decided by content strategists. When writing content for Slot 2, consider the following:
  
- A secondary navigation can become cluttered quickly if there are too many items
- Try to be short and concise when writing
- At least one menu or link should be included, but no more than five total
- Text will expand when translated to some languages

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of two secondary navigations comparing an acceptable amount of links and menus"
       src="../nav-secondary-guidelines-slot-2-text.png"
       width="1000"
       height="212">
</uxdot-example>


### Slot 3 text

Slot 3 is optional, but it can include interactive elements like a call to action. When writing content for Slot 3, consider the following:
  
- Try to be short and concise when writing
- Including a call to action will reduce the amount of space for Slot 2 elements
- A call to action <strong>does not</strong> stack to increase the amount of space
- Text will expand when translated to some languages

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of two secondary navigations comparing the character counts of a call to action"
       src="../nav-secondary-guidelines-slot-3-text.png"
       width="1000"
       height="212">
</uxdot-example>


### Maximum uses and character count

If there are fewer links and menus in Slot 2, text labels can be longer. If there are more links and menus, text labels need to be shorter to avoid cluttering.

<rh-table>

| Element           |           | Maximum character count |
|-------------------|-----------|-------------------------|
| Product name text | 1         | 55                      |
| Links and menus   | 5 (total) | 25                      |
| Call to action    | 1         | 20                      |

</rh-table>

## Expandable menu

Use the expandable menu to organize content in columns.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>Do not use more than four columns, stack groups below other groups instead like in the examples below.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of a secondary navigation with four columns of links"
       src="../nav-secondary-usage-expandable-menu-columns-4.png"
       width="1000"
       height="736">
</uxdot-example>

If content is organized in two columns, they will stretch to fill the empty space.

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of a secondary navigation with two columns of links"
       src="../nav-secondary-usage-expandable-menu-columns-2.png"
       width="1000"
       height="453">
</uxdot-example>


### Expandable menu content 

The expandable menu includes content like text, links, calls to action, and more. When adding content to an expandable menu, follow these guidelines:

- Try to be short and concise when writing
- Do not stack lots of links in the same column
- Use only one call to action variant
- Put the most important content in the upper left corner because when content stacks, it will be on top
- Be mindful of how text changes size when translated to some languages


## Behavior

### Current page indicator 

When a user is viewing a page that is part of the secondary navigation information architecture, a red top border is visible. In the example below, a user is viewing both the *Overview* page and a page within the *Product variants* menu. External links do not display the red top border (except on hover) because they open links in a new tab or window instead.

<uxdot-example color-palette="lightest" width-adjustment="872px" variant="full" alignment="left" no-border>
  <img alt="Image of two secondary navigations with red bars on top of different menus"
       src="../nav-secondary-guidelines-current-page-indicator.png"
       width="872"
       height="212">
</uxdot-example>


### Scrolling with primary navigation

A secondary navigation is positioned below the primary navigation when the page loads. When a user scrolls down, the primary navigation disappears and the secondary navigation becomes fixed to the top of the browser window. When a user scrolls back up to the top, the secondary navigation is positioned under the primary navigation again.

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of primary and secondary navigations and their behaviors when scrolling"
       src="../nav-secondary-guidelines-scrolling-primary-nav.png"
       width="1000"
       height="554">
</uxdot-example>

### Navigating between menus

Only one menu can be expanded at a time and there is no animation when navigating from one menu to the next.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The default state of the menu caret is pointing down. When a menu is expanded, the caret points up.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of three secondary navigations with different menus selected"
       src="../nav-secondary-guidelines-navigating-menus.png"
       width="872"
       height="326">
</uxdot-example>


### Scrolling with menu expanded 

If the height of the menu is **shorter** than the viewport height, content should scroll underneath the backdrop.

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of secondary navigation showing the scrolling behavior when the menu panel is shorter than the viewport height"
       src="../nav-secondary-guidelines-scrolling-menu-expanded-a.png"
       width="1000"
       height="668">
</uxdot-example>

If the height of the menu is **taller** than the viewport height, scroll is trapped within the panel until the menu is collapsed.

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of secondary navigation showing the scrolling behavior when the menu panel is taller than the viewport height"
       src="../nav-secondary-guidelines-scrolling-menu-expanded-b.png"
       width="1000"
       height="760">
</uxdot-example>


## Responsive design

As breakpoints get smaller, Slot 2 will collapse into an accordion within a menu instead.


### Slot 2 visible

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of secondary navigations; one has a menu collapsed and the other has a menu expanded, but both have slot 2 visible on large breakpoints"
       src="../nav-secondary-guidelines-responsive-slot-2-visible.png"
       width="1000"
       height="550">
</uxdot-example>


### Slot 2 hidden 

<uxdot-example color-palette="lightest" width-adjustment="784px" variant="full" alignment="left" no-border>
  <img alt="Image of secondary navigations; slot 2 on small breakpoints is not visible unless the menu is expanded"
       src="../nav-secondary-guidelines-responsive-slot-2-hidden.png"
       width="784"
       height="731">
</uxdot-example>


### Breakpoints

<rh-table>

| Breakpoint      | Range           | Slot 2 status         | Left and right padding |
|-----------------|-----------------|-----------------------|------------------------|
| Desktop, large  | &gt; 1680px     | Visible               | 64px                   |
| Desktop, medium | 1440px - 1679px | Visible               | 64px                   |
| Desktop, small  | 1200px - 1439px | Visible               | 32px                   |
| Tablet, large   | 992px - 1199px  | Hidden, one menu only | 32px                   |
| Tablet, small   | 768px - 991px   | Hidden, one menu only | 32px                   |
| Mobile, large   | 576px - 767px   | Hidden, one menu only | 16px                   |
| Mobile, small   | &lt; 575px      | Hidden, one menu only | 16px                   |

</rh-table>


## Best practices
  
### Navigation order

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../secondary-nav-best-practices-nav-order-do.svg"
            alt="Primary navigation above a secondary navigation"
            width="482"
            height="152">
    </uxdot-example>
    <p>The secondary navigation always appears below primary navigation when both are used.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../secondary-nav-best-practices-nav-order-dont.svg"
            alt="Secondary navigation above primary navigation"
            width="482"
            height="152">
    </uxdot-example>
    <p>Do not position the secondary navigation above the primary navigation.</p>
  </uxdot-best-practice>
</div>

### Theme matching

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../secondary-nav-best-practices-theme-do.svg"
            alt="Light theme secondary navigation used on a snippet of a light theme page"
            width="482"
            height="200">
    </uxdot-example>
    <p>Use a light theme secondary navigation in a light theme environment and vice versa.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="482px" slot="image">
      <img src="../secondary-nav-best-practices-theme-dont.svg"
            alt="Light theme secondary navigation used on a snippet of a dark theme page"
            width="482"
            height="200">
    </uxdot-example>
    <p>Do not use a light theme secondary navigation in a dark environment and vice versa.</p>
  </uxdot-best-practice>
</div>

### Number of slots

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="482px" slot="image">
    <img src="../secondary-nav-best-practices-slot-number-do.svg"
          alt="Secondary navigation with three slots"
          width="482"
          height="79">
  </uxdot-example>
  <p>Three is the maximum number of slots.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="482px" slot="image">
    <img src="../secondary-nav-best-practices-slot-number-dont.svg"
          alt="Secondary navigation with four slots"
          width="482"
          height="79">
  </uxdot-example>
  <p>Do not add more slots than the three provided.</p>
</uxdot-best-practice>
