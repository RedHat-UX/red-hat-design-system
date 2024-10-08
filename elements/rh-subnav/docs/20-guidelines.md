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

### Incorrect ordering

Do not position the subnavigation above the primary navigation.

<uxdot-example width-adjustment="872px" danger>
  <img src="../subnav-best-practice-1.png"
        alt="Image of a subnavigation above the primary navigation, which is incorrect usage"
        width="872"
        height="129">
</uxdot-example>


### Not enough links

There should be at least two links minimum.

<uxdot-example width-adjustment="872px" danger>
  <img src="../subnav-best-practice-2.png"
        alt="Image of a subnavigation with only one link, which is incorrect usage"
        width="872"
        height="57">
</uxdot-example>


### Too many links

Be careful about displaying too many links, some of them will become hidden even 
at large breakpoints.

<uxdot-example width-adjustment="872px" danger>
  <img src="../subnav-best-practice-3.png"
        alt="Image of a subnavigation with seven links and overflow buttons, which is incorrect usage"
        width="872"
        height="57">
</uxdot-example>


### Extra spacing

Do not add extra spacing or stretch the width of links.

<uxdot-example width-adjustment="872px" danger>
  <img src="../subnav-best-practice-4.png"
        alt="Image of a subnavigation with stretched links, which is incorrect usage"
        width="872"
        height="57">
</uxdot-example>


### Overflow buttons

Overflow buttons should not be visible if all links are visible.

<uxdot-example width-adjustment="872px" danger>
  <img src="../subnav-best-practice-5.png"
        alt="Image of a subnavigation with only two links and overflow buttons, which is incorrect usage"
        width="872"
        height="57">
</uxdot-example>
