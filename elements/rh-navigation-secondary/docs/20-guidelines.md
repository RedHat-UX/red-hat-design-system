
## Usage

Use a secondary navigation to propagate important or related content across a series of pages. Users can better orient themselves if they see content that is organized around a specific topic at the top of a page.

### When to use a secondary navigation

A secondary navigation offers a way to propagate content that relates to a specific topic. For example, a secondary navigation can be used on a product page to organize content like use cases, variants, services, documentation, and more. This kind of content cannot live in the primary navigation because it is too specific to a product and it is also too much content in general to add to a single page. In this situation, a secondary navigation is helping content propagate across multiple pages instead of cluttering one page therefore negatively impacting the user experience.

### Primary vs. secondary navigation

The [primary navigation](../../navigation-primary) includes links to the most important pages across a domain. If content related to a specific topic needs to be organized somewhere, it should be added to a secondary navigation instead. This hierarchy can be demonstrated visually by the primary navigation being on top of a secondary navigation when a page loads.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-usage-vs-primary.png" alt="Image of a primary navigation stacked on top of a secondary navigation">
</uxdot-example>


## Writing content

### Slot 1 text 

If a secondary navigation is used on a product page, Slot 1 should display the product name as linked text. When writing content for Slot 1, consider the following:

- If product name text is long, it needs to break to two lines
- If product name text is short and there are fewer links and menus, it can remain on one line

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-slot-1-text.png" alt="Image of four secondary navigations showing how stacked product name text offers more space">
</uxdot-example>


### Slot 2 text

Slot 2 includes inline links, menus, and sometimes external links. The order of elements is decided by content strategists. When writing content for Slot 2, consider the following:
  
- A secondary navigation can become cluttered quickly if there are too many items
- Try to be short and concise when writing
- At least one menu or link should be included, but no more than five total
- Text will expand when translated to some languages

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-slot-2-text.png" alt="Image of two secondary navigations comparing an acceptable amount of links and menus">
</uxdot-example>


### Slot 3 text

Slot 3 is optional, but it can include interactive elements like a call to action. When writing content for Slot 3, consider the following:
  
- Try to be short and concise when writing
- Including a call to action will reduce the amount of space for Slot 2 elements
- A call to action <strong>does not</strong> stack to increase the amount of space
- Text will expand when translated to some languages

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-slot-3-text.png" alt="Image of two secondary navigations comparing the character counts of a call to action">
</uxdot-example>


### Maximum uses and character count

If there are fewer links and menus in Slot 2, text labels can be longer. If there are more links and menus, text labels need to be shorter to avoid cluttering.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Maximum uses"></th>
        <th scope="col" data-label="Maximum character count">Maximum character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Product name text</td>
        <td data-label="Maximum uses">1</td>
        <td data-label="Maximum character count">55</td>
      </tr>
      <tr>
        <td data-label="Element">Links and menus</td>
        <td data-label="Maximum uses">5 (total)</td>
        <td data-label="Maximum character count">25</td>
      </tr>
      <tr>
        <td data-label="Element">Call to action</td>
        <td data-label="Maximum uses">1</td>
        <td data-label="Maximum character count">20</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Expandable menu

Use the expandable menu to organize content in columns.

<rh-alert state="warning">
  <h3 slot="header">Warning</h3>
  <p>Do not use more than four columns, stack groups below other groups instead like in the examples below.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-usage-expandable-menu-columns-4.png" alt="Image of a secondary navigation with four columns of links">
</uxdot-example>

If content is organized in two columns, they will stretch to fill the empty space.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-usage-expandable-menu-columns-2.png" alt="Image of a secondary navigation with two columns of links">
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

<uxdot-example width-adjustment="872px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-current-page-indicator.png" alt="Image of two secondary navigations with red bars on top of different menus">
</uxdot-example>


### Scrolling with primary navigation

A secondary navigation is positioned below the primary navigation when the page loads. When a user scrolls down, the primary navigation disappears and the secondary navigation becomes fixed to the top of the browser window. When a user scrolls back up to the top, the secondary navigation is positioned under the primary navigation again.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-scrolling-primary-nav.png" alt="Image of primary and secondary navigations and their behaviors when scrolling">
</uxdot-example>

### Navigating between menus

Only one menu can be expanded at a time and there is no animation when navigating from one menu to the next.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The default state of the menu caret is pointing down. When a menu is expanded, the caret points up.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-guidelines-navigating-menus.png" alt="Image of three secondary navigations with different menus selected">
</uxdot-example>


### Scrolling with menu expanded 

If the height of the menu is **shorter** than the viewport height, content should scroll underneath the backdrop.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-scrolling-menu-expanded-a.png" alt="Image of secondary navigation showing the scrolling behavior when the menu panel is shorter than the viewport height">
</uxdot-example>

If the height of the menu is **taller** than the viewport height, scroll is trapped within the panel until the menu is collapsed.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-scrolling-menu-expanded-b.png" alt="Image of secondary navigation showing the scrolling behavior when the menu panel is taller than the viewport height">
</uxdot-example>


## Responsive design

As breakpoints get smaller, Slot 2 will collapse into an accordion within a menu instead.


### Slot 2 visible

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-responsive-slot-2-visible.png" alt="Image of secondary navigations; one has a menu collapsed and the other has a menu expanded, but both have slot 2 visible on large breakpoints">
</uxdot-example>


### Slot 2 hidden 

<uxdot-example width-adjustment="784px" variant="full" alignment="left" no-border>
  <img src="../nav-secondary-guidelines-responsive-slot-2-hidden.png" alt="Image of secondary navigations; slot 2 on small breakpoints is not visible unless the menu is expanded">
</uxdot-example>


### Breakpoints

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Breakpoint">Breakpoint</th>
        <th scope="col" data-label="Range">Range</th>
        <th scope="col" data-label="Slot 2 status">Slot 2 status</th>
        <th scope="col" data-label="Left and right padding">Left and right padding</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Breakpoint">Desktop, large</td>
        <td data-label="Range">> 1680px</td>
        <td data-label="Slot 2 status">Visible</td>
        <td data-label="Left and right padding">64px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Desktop, medium</td>
        <td data-label="Range">1440px - 1679px</td>
        <td data-label="Slot 2 status">Visible</td>
        <td data-label="Left and right padding">64px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Desktop, small</td>
        <td data-label="Range">1200px - 1439px</td>
        <td data-label="Slot 2 status">Visible</td>
        <td data-label="Left and right padding">32px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Tablet, large</td>
        <td data-label="Range">992px - 1199px</td>
        <td data-label="Slot 2 status">Hidden, one menu only</td>
        <td data-label="Left and right padding">32px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Tablet, small</td>
        <td data-label="Range">768px - 991px</td>
        <td data-label="Slot 2 status">Hidden, one menu only</td>
        <td data-label="Left and right padding">32px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Mobile, large</td>
        <td data-label="Range">576px - 767px</td>
        <td data-label="Slot 2 status">Hidden, one menu only</td>
        <td data-label="Left and right padding">16px</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Mobile, small</td>
        <td data-label="Range">< 575px</td>
        <td data-label="Slot 2 status">Hidden, one menu only</td>
        <td data-label="Left and right padding">16px</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Best practices
  
### Incorrect ordering

Do not position the secondary navigation above the primary navigation.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-1.png" alt="Image of a secondary navigation on top of a primary navigation which is incorrect usage">
</uxdot-example>


### Theme mismatch

Do not use a dark theme secondary navigation in light environments and vice versa.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-2.png" alt="Image of a dark theme secondary navigation in a light theme environment which is incorrect usage">
</uxdot-example>


### Content overload

Do not use too many links or menus in Slot 2.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-3.png" alt="Image of a secondary navigation with way more than five links and menus which is incorrect usage">
</uxdot-example>


### Adding slots

Do not add more slots than provided, three is the maximum.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-4.png" alt="Image of a secondary navigation with four dotted line boxes for slots which is incorrect usage">
</uxdot-example>

  
### Slot 1 text

Slot 1 text should never break to three lines.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-5.png" alt="Image of a secondary navigation, but the product name logo in slot 1 is three lines which is incorrect usage">
</uxdot-example>

  
### Missing navigation

At least one link or menu in Slot 2 must be visible.

<uxdot-example width-adjustment="872px" danger>
  <img src="../nav-secondary-best-practice-6.png" alt="Image of a secondary navigation with no links or menus in slot 2 which is incorrect usage">
</uxdot-example>
