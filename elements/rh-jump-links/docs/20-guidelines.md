
## Usage

### Content

Jump links are used to help a user navigate through large sections of content. 
Blocks of content that use jump links should be displayed in full and not 
hidden in other components, unless absolutely necessary. Sections that contain 
additional content can include nested sections for better organization. Nested 
sections shouldn’t be visible under a parent section by default, they’re 
displayed when a user scrolls past them or if they select the specific parent 
section link.

### Character count

The label and section links should have fewer characters. The recommended maximum character count for the elements of jump links are listed below and include spaces.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Label</td>
        <td data-label="Character count">18</td>
      </tr>
      <tr>
        <td data-label="Element">Section links</td>
        <td data-label="Character count">30</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Positioning

Jump links are placed on the left edge of the grid on large screens so content 
can scroll freely on the right without interruption. Ensure there’s ample 
space between jump links and the content.

<uxdot-example>
  <img src="../jump-links-positioning.svg" alt="Jump links positioning" />
</uxdot-example>


## Best practices

Jump links should contain at least two section links.

<uxdot-example width-adjustment="129px" danger>
  <img src="../jump-links-best-practices-1.svg" alt="Jump links not enough links issue" />
</uxdot-example>

Don’t include section links that are really long, they can be customized to be 
shorter when added to a group of jump links.

<uxdot-example width-adjustment="361px" danger>
  <img src="../jump-links-best-practices-2.svg" alt="Jump links too long titles" />
</uxdot-example>


Don’t overload jump links with too many section links, but including lots 
of nested section links is acceptable.

<uxdot-example width-adjustment="146px" danger>
  <img src="../jump-links-best-practices-3.svg" alt="Jump links too many top level links issue" />
</uxdot-example>


Don’t nest section links within nested section links.

<uxdot-example width-adjustment="141px" danger>
  <img src="../jump-links-best-practices-4.svg" alt="Jump links nesting issue" />
</uxdot-example>


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

<uxdot-example width-adjustment="872px">
  <img src="../jump-links-behavior-mobile.svg" alt="Jump links on mobile" />
</uxdot-example>


## Interaction states

  Jump links have the same interaction states as vertical [Open tabs]({{ 
  '/elements/tabs/' | url }}).


### Tab order

For accessibility, jump links are required to be focused. Any interactive 
elements above jump links will be focused first until jump links stick to the 
top edge of content. Once jump links come into view and are persistent, the 
first section link is focused and the tab order becomes top to bottom.

<uxdot-example width-adjustment="872px">
  <img src="../jump-links-tab-order.svg" alt="Jump links tab order" />
</uxdot-example>


