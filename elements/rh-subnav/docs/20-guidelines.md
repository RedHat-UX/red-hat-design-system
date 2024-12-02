## Usage

Use a subnavigation when you want to provide users with granular navigation 
using only links.

### When to use a subnavigation

A subnavigation allows users to navigate between four or five related pages 
maximum. It is different than [tabs][tabs] because tabs allow users to switch 
between views on the same page whereas subnavigation links send users to other 
pages. A user might use the [primary navigation][navpri] or [secondary 
navigation][navsec] to access a high-level page and then use a subnavigation to 
browse through lower-level pages.

[tabs]: /elements/tabs/
[navpri]: /elements/navigation-primary/
[navsec]: /elements/navigation-secondary/


### Subnavigation vs. other navigations

A subnavigation is a flat hierarchy whereas other navigations have deeper 
hierarchies with levels. Therefore, a subnavigation cannot include menus, only 
links. If your content requires a structure with more levels, use another 
navigation.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-vs-other-navs.png"
        alt="Image of the primary navigation, secondary navigation, and subnavigation being compared"
        width="872"
        height="441">
</uxdot-example>


### Number of links

To reduce cognitive load and a cluttered user interface, avoid using more than 
four or five links.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-number-of-links.png"
        alt="Image of a subnavigation with five short link text labels"
        width="872"
        height="89">
</uxdot-example>


### Inset

An inset is used to ensure consistent alignment and padding between headings, 
text labels, and overflow buttons.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-inset.png"
        alt="Image of three desktop and one mobile subnavigations with various inset values"
        width="872"
        height="1131">
</uxdot-example>


## Writing content

### Link text labels

Link text labels should be concise, scannable, and descriptive. They should not 
exceed more than two or three short words. If they do, work with a content 
strategist to shorten them.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-link-text-labels.png"
        alt="Image of two subnavigations; one with short text labels and one with long text labels"
        width="872"
        height="242">
</uxdot-example>


### Character count

A subnavigation should have four or five links maximum. Text labels should be short but descriptive. The recommended maximum character count for the elements of a subnavigation are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
        <th scope="col" data-label="Word count">Word count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Link</td>
        <td data-label="Character count">20</td>
        <td data-label="Word count">2 to 3</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Layout

A subnavigation can be placed below the primary navigation or a heading.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../subnav-layout.png"
        alt="Image of subnavigations positioned below the primary navigation and a heading"
        width="1000"
        height="739">
</uxdot-example>


## Behavior

### Current page indicator

When a user is viewing a page, a red bottom border is visible. It will move as a 
user moves from page to page.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-current-page-indicator.png"
        alt="Image of a desktip and mobile subnavigation showing with the current page indicator visible"
        width="872"
        height="178">
</uxdot-example>


### Scrolling

A subnavigation is positioned below the primary navigation or a heading when the 
page loads. Similar to other navigations, when a user scrolls down, the primary 
navigation or heading disappears and the subnavigation becomes fixed to the top 
of the browser window. When a user scrolls back up, the subnavigation is 
positioned under the primary navigation or heading again.

### With primary navigation

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../subnav-scrolling-primary-nav.png"
        alt="Image of a subnavigation and how it behaves when scrolling under the primary navigation"
        width="1000"
        height="463">
</uxdot-example>


### With heading

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../subnav-scrolling-heading.png"
        alt="Image of a subnavigation and how it behaves when scrolling under a heading"
        width="1000"
        height="575">
</uxdot-example>


### Overflow

If the number of links exceeds the container width or breakpoint, overflow 
buttons with chevron icons are added to each side so users can horizontally 
scroll to reveal hidden links.

<uxdot-example width-adjustment="872px">
  <img src="../subnav-overflow.png"
        alt="Image of a desktop subnavigation with no overflow buttons and two mobile subnavigations with overflow buttons visible"
        width="872"
        height="235">
</uxdot-example>


### Navigating overflow links

When the first link is active, the left overflow button is disabled. When the 
last link is active, the right overflow button is disabled. When a link that is 
cut off is selected, the list of links shifts so the selected link is in full 
view.

<uxdot-example width-adjustment="544px">
  <img src="../subnav-navigating-overflow-links.png"
        alt="Image of selecting a cut off link and the list of links shifting to reveal the selected link in full view"
        width="544"
        height="178">
</uxdot-example>


## Responsive design

Overflow buttons will appear within a subnavigation as soon as the width of 
links exceeds the width of the breakpoint. It is possible for overflow buttons 
to be hidden on small breakpoints if there are two links with very short text 
labels.

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../subnav-responsive-breakpoints-large.png"
        alt="Image of subnavigations on large breakpoints"
        width="1000"
        height="146">
</uxdot-example>

### Small breakpoints

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="../subnav-responsive-breakpoints-small.png"
        alt="Image of subnavigations on small breakpoints"
        width="576"
        height="235">
</uxdot-example>


## Best practices

### Navigation order

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img src="../subnav-best-practices-nav-order-do.svg" 
        alt="Subnavigation positioned below primary nav"
        width="1012"
        height="134">
  </uxdot-example>

  <p>Subnavigation should always appear below the primary navigation.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="../subnav-best-practices-nav-order-dont.svg" 
        alt="Subnavigation positioned above primary nav"
        width="1012"
        height="134">
  </uxdot-example>

  <p>Do not position the subnavigation above the primary navigation.</p>
</uxdot-best-practice>

### Minimum number of links

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" width-adjustment="418px">
      <img src="../subnav-best-practices-min-links-do.svg"
            alt="Subnavigation with two links"
            width="418"
            height="56">
    </uxdot-example>
    <p>There should be at least two links in subnavigation.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" width-adjustment="418px">
      <img src="../subnav-best-practices-min-links-dont.svg"
            alt="Subnavigation with one link"
            width="418"
            height="56">
    </uxdot-example>
    <p>Do not add only one subnavigation link.</p>
  </uxdot-best-practice>
</div>

### Maximum number of links

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img src="../subnav-best-practices-max-links-do.svg" 
        alt="Subnavigation at a large breakpoint with five links"
        width="1012"
        height="56">
  </uxdot-example>

  <p>There is no specific maximum number of links, but use a reasonable number of links.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="../subnav-best-practices-max-links-dont.svg" 
        alt="Subnavigation at a large breakpoint with more than eight links and with visible overflow buttons"
        width="1012"
        height="56">
  </uxdot-example>

  <p>Avoid displaying too many links. Some will become hidden, even at large breakpoints.</p>
</uxdot-best-practice>

### Spacing and width

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img src="../subnav-best-practices-spacing-width-do.svg" 
        alt="Subnavigation with links using default spacing"
        width="1012"
        height="56">
  </uxdot-example>

  <p>Retain the default spacing and width of each subnavigation link.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="../subnav-best-practices-spacing-width-dont.svg" 
        alt="Subnavigation with links that use extra spacing on the left and right"
        width="1012"
        height="56">
  </uxdot-example>

  <p>Do not add extra spacing or stretch the width of links.</p>
</uxdot-best-practice>

### Overflow buttons

<uxdot-best-practice variant="do">
  <uxdot-example slot="image" width-adjustment=568px">
    <img src="../subnav-best-practices-overflow-buttons-do.svg" 
        alt="Subnavigation with at least three links in a smaller viewport with overflow buttons"
        width="568"
        height="56">
  </uxdot-example>

  <p>Use overflow buttons if not all of the links can fit.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example slot="image" width-adjustment="1012px">
    <img  src="../subnav-best-practices-overflow-buttons-dont.svg" 
        alt="Subnavigation with two short links in a smaller viewport with overflow buttons"
        width="1012"
        height="56">
  </uxdot-example>

  <p>Do not make overflow buttons visible if all links can comfortably fit and are visible.</p>
</uxdot-best-practice>