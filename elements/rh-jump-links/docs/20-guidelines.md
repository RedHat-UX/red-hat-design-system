## General usage

In general, use jump links as a sticky or persistent navigation to help users 
move through sections of content without scrolling.

## Vertical vs. horizontal 

There are two available orientations that offer several benefits and risks.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col">Orientation</th>
        <th scope="col">Benefits</th>
        <th scope="col">Risks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vertical</td>
        <td>
          <ul>
            <li>Flexible placement</li>
            <li>Does not cover other content when scrolling</li>
            <li>Can display lots of headings with lots of words</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Less visually prominent</li>
            <li>Layout can get narrow and show lots of lines</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>Horizontal</td>
        <td>
          <ul>
            <li>More visually prominent</li>
            <li>Spans the entire page width</li>
            <li>Layout does not change</li>
          </ul>
        </td>
        <td>
          <ul>
            <li>Less flexible placement</li>
            <li>Sometimes covers other content when scrolling</li>
            <li>On small screens, some jump links are not visible</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Writing content

### Title text

The title should always be included and should default to "Jump to section" if 
something else is not provided. Use sentence case only and limit title text to 
`25` characters max.

<hgroup>

## Layout

### Placement

</hgroup>

Vertical jump links are place on the left side of content by default and aligned 
to the top edge. However, in situations where there is already and element on 
the left side like a menu, jump links can be placed on the right side of 
content.

{#
<uxdot-example>
  insert placement graphic 1 here
</uxdot-example>
<uxdot-example>
  insert placement graphic 2 here
</uxdot-example>
#}

### Mobile

On small screens, both vertical and horizontal jump links collapse into a 
disclosure which is always located above content. When the disclosure is 
expanded, jump links are displayed and any page content below is pushed down.

{#
<uxdot-example>
  insert mobile graphic 1 here
</uxdot-example>
#}

<hgroup>

## Behavior

### Order of operations

</hgroup>

When a page loads, both vertical and horizontal jump links are anchored to the 
top edge of content or a container before becoming sticky. There are a few 
things that can happen from here:

- The first section on top is highlighted with a thick red border
- When a user selects a jump link, they are moved down to their chosen section
- The new active section is highlighted
- When a user selects another jump link, they are moved up or down
- When a user scrolls, active sections are highlighted as they pass by

### Nested jump links

Nested jump links are indented under the parent section. They are hidden by 
default and become visible when the parent section becomes active by a user 
clicking on it or scrolling to it. They can be individually selected, but only 
one level max is recommended.

<rh-alert state="info">
  <p>Only the vertical orientation can display nested jump links.</p>
</rh-alert>

{#
<uxdot-example>
  insert nested jump links graphic
</uxdot-example>
#}


{# TODO:

### Scrolling on backgrounds

## Responsive design

### Vertical

### Horizontal

### Disclosure

## Best practices

### No title

### Long headings

### Max number of jump links
#}





{# OLD DOCS:

Jump links are used to help a user navigate through large sections of content.
Blocks of content that use jump links should be displayed in full and not
hidden in other components, unless absolutely necessary. Sections that contain
additional content can include nested sections for better organization. Nested
sections shouldn’t be visible under a parent section by default, they’re
displayed when a user scrolls past them or if they select the specific parent
section link.

### Character count

The label and section links should have fewer characters. The recommended
maximum character count for the elements of jump links are listed below and
include spaces.

<rh-table>

 | Element       | Character count |
 | ------------- | --------------- |
 | Label         | 18              |
 | Section links | 30              |

</rh-table>


### Positioning

Jump links are placed on the left edge of the grid on large screens so content
can scroll freely on the right without interruption. Ensure there’s ample
space between jump links and the content.

<uxdot-example color-palette="lightest">
  <img alt="Jump links positioning"
       src="../jump-links-positioning.svg"
       width="1000"
       height="193">
</uxdot-example>


## Best practices

Jump links should contain at least two section links.

<uxdot-example color-palette="lightest"
               width-adjustment="129px"
               danger>
  <img alt="Jump links not enough links issue"
       src="../jump-links-best-practices-1.svg"
       width="127"
       height="115">
</uxdot-example>

Don’t include section links that are really long, they can be customized to be
shorter when added to a group of jump links.

<uxdot-example color-palette="lightest"
               width-adjustment="361px"
               danger>
  <img alt="Jump links too long titles"
       src="../jump-links-best-practices-2.svg"
       width="360"
       height="189">
</uxdot-example>


Don’t overload jump links with too many section links, but including lots
of nested section links is acceptable.

<uxdot-example color-palette="lightest"
               width-adjustment="146px"
               danger>
  <img alt="Jump links too many top level links issue"
       src="../jump-links-best-practices-3.svg"
       width="146"
       height="358">
</uxdot-example>


Don’t nest section links within nested section links.

<uxdot-example color-palette="lightest"
               width-adjustment="141px"
               danger>
  <img alt="Jump links nesting issue"
       src="../jump-links-best-practices-4.svg"
       width="140"
       height="374">
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
use jump links in a mobile layout, so it’s wrapped in a
[Disclosure](/patterns/disclosure/) and anchored above the content instead. It
becomes persistent when a user scrolls past the top edge of the content.

<uxdot-example color-palette="lightest"
               width-adjustment="872px">
  <img alt="Jump links on mobile"
       src="../jump-links-behavior-mobile.svg"
       width="884"
       height="259" />
</uxdot-example>


## Interaction states

Jump links have the same interaction states as vertical
[Open tabs](/elements/tabs/).


### Tab order

For accessibility, jump links are required to be focused. Any interactive
elements above jump links will be focused first until jump links stick to the
top edge of content. Once jump links come into view and are persistent, the
first section link is focused and the tab order becomes top to bottom.

<uxdot-example color-palette="lightest"
               width-adjustment="872px">
  <img alt="Jump links tab order"
       src="../jump-links-tab-order.svg"
       width="871"
       height="195" />
</uxdot-example>

#}
