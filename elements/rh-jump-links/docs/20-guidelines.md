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


### Scrolling on backgrounds

If jump links are scrolling on top of different background or surface colors,
the jump links container needs to have a background color to avoid color
contrast issues. If jump links are scrolling on top of a uniform color, no
background is needed. Follow these specs as well:

- Use a background color that generally matches the color scheme of the rest of
the page
- The border radius must use `--rh-border-radius-default` token
- Padding on all sides must use the `--rh-space-lg` token

{#
<uxdot-example>
  insert scrolling on backgrounds graphic
</uxdot-example>
#}

<hgroup>

## Responsive design

### Vertical

</hgroup>

Vertical jump links can occupy a specific amount of space like a number of grid
columns. However, longer text meands more line breaks.

{#
<uxdot-example>
  insert vertical responsive graphic
</uxdot-example>
#}

### Horizontal

Horizontal jump links span the entire page width. However, if the container is
not wide enough to display everything, overflow buttons will appear.

{#
<uxdot-example>
  insert horizontal responsive graphic
</uxdot-example>
#}

### Disclosure

To save space, vertical jump links collapse into a
[disclosure](/elements/disclosure/) element at specific screen sizes.

<rh-table>

 | Orientation | Collapse into disclosure |
 | ----------- | ------------------------ |
 | Vertical    | `991px` and below        |
 | Horizontal  | `767px` and below        |

</rh-table>

<hgroup>

## Best practices

### No title

</hgroup>

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      {# insert do 1 svg #}
    </uxdot-example>
    <p>Write a custom title or uses the default which is "Jump to section".</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      {# insert dont 1 svg #}
    </uxdot-example>
    <p>Do not hide the title or else it might be confusing to users what this
       element does.</p>
  </uxdot-best-practice>
</div>

### Long headings

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      {# insert do 2 svg #}
    </uxdot-example>
    <p>Write short headings to that short jump links are created</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="caution">
    <uxdot-example slot="image">
      {# insert dont 2 svg #}
    </uxdot-example>
    <p>Be aware that long headings will create event longer jump links.</p>
  </uxdot-best-practice>
</div>

### Max number of jump links


<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image">
      {# insert do 3 svg #}
    </uxdot-example>
    <p>Include a max of eight jump links or use nesting</p>
  </uxdot-best-practice>
  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image">
      {# insert dont 3 svg #}
    </uxdot-example>
    <p>Don't overload jump links with too many parent section links.</p>
  </uxdot-best-practice>
</div>
