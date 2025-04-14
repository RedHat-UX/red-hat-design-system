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

## Layout

### Placement

Vertical jump links are place on the left side of content by default and aligned
to the top edge. However, in situations where there is already and element on
the left side like a menu, jump links can be placed on the right side of
content.

<uxdot-example color-palette="lightest">
    <img src="../jump-links-guidelines-layout-placement-A.svg"
        alt="Jump links on the left with gray blocks representing content in another column on the right."
        width="1012"
        height="384">
</uxdot-example>

<uxdot-example color-palette="lightest">
    <img src="../jump-links-guidelines-layout-placement-B.svg"
        alt="Three column layout with a menu or element on the left, content in the middle, and jump links on the right."
        width="1012"
        height="344">
</uxdot-example>

### Mobile

On small screens, both vertical and horizontal jump links collapse into a
disclosure which is always located above content. When the disclosure is
expanded, jump links are displayed and any page content below is pushed down.

<uxdot-example color-palette="lightest">
    <img src="../jump-links-guidelines-layout-mobile.svg"
        alt="Two jump links screens shown in mobile viewports. The left has a collapsed disclosure with jump links inside. The right has an expanded disclosure with visible jump links inside the disclosure."
        width="800"
        height="640">
</uxdot-example>

## Behavior

### Order of operations

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
  <h4 slot="header">Helpful tip</h4>
  <p>Only the vertical orientation can display nested jump links.</p>
</rh-alert>

<uxdot-example color-palette="lightest">
    <img src="../jump-links-guidelines-nested-jump-links.svg"
        alt="Two sets of jump links. The left shows the third jump link collapsed. The right shows the third jump link with its nested jump links under it."
        width="332"
        height="360">
</uxdot-example>


### Scrolling on backgrounds

If jump links are scrolling on top of different background or surface colors,
the jump links container needs to have a background color to avoid color
contrast issues. If jump links are scrolling on top of a uniform color, no
background is needed. Follow these specs as well:

- Use a background color that generally matches the color scheme of the rest of
the page
- The border radius must use `--rh-border-radius-default` token
- Padding on all sides must use the `--rh-space-lg` token

<uxdot-example color-palette="lightest">
    <img src="../jump-links-guidelines-configuration-container-background.svg"
        alt="Two sets of jump links. On the left, jump links on a gray background. On the right, sticky jump links scrolling between a gray and black rear background with a white background applied to the jump links."
        width="1012"
        height="304">
</uxdot-example>

## Responsive design

### Vertical

Vertical jump links can occupy a specific amount of space like a number of grid
columns. However, longer text meands more line breaks.

<uxdot-example color-palette="lightest" no-border variant="full">
    <img src="../jump-links-guidelines-responsive-design-vertical.svg"
        alt="Two sets of jump links and content displayed over top of a 12 column grid. The top links are shown at desktop viewports and the jump link text doesn't wrap. The bottom jump links are shown at tablet viewports and the jump link text wraps 1-3 lines."
        width="1136"
        height="736">
</uxdot-example>

### Horizontal

Horizontal jump links span the entire page width. However, if the container is
not wide enough to display everything, overflow buttons will appear.

<uxdot-example color-palette="lightest" no-border variant="full">
    <img src="../jump-links-guidelines-responsive-design-horizontal.svg"
        alt="Three sets of horizontal jump links. The top jump links shown a a desktop viewport. The middle shows a tablet viewport without overflow or scroll arrows. The last jump links have overflow or scroll arrows to scroll horizontally."
        width="1136"
        height="400">
</uxdot-example>

### Disclosure

To save space, vertical jump links collapse into a
[disclosure](/elements/disclosure/) element at specific screen sizes.

Learn more about the [Disclosure](/elements/disclosure/) element.

<rh-table>

 | Orientation | Collapse into disclosure |
 | ----------- | ------------------------ |
 | Vertical    | `991px` and below        |
 | Horizontal  | `767px` and below        |

</rh-table>

## Best practices

### No title

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-1-do.svg"
        alt="Jump links with a custom title at the top"
        width="418"
        height="240">
    </uxdot-example>
    <p>Write a custom title or uses the default which is "Jump to section".</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-1-dont.svg"
        alt="Jump links without a custom title at the top"
        width="418"
        height="240">
    </uxdot-example>
    <p>Do not hide the title or else it might be confusing to users what this</p>
  </uxdot-best-practice>
</div>

### Long headings

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-2-do.svg"
        alt="A jump links title and a sole four word jump link"
        width="418"
        height="288">
    </uxdot-example>
    <p>Write short headings to that short jump links are created</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="caution">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-2-dont.svg"
        alt="Jump links where the third jump link is a sentence instead of a few words as the link"
        width="418"
        height="288">
    </uxdot-example>
    <p>Be aware that long headings will create event longer jump links.</p>
  </uxdot-best-practice>
</div>

### Max number of jump links

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-3-do.svg"
        alt="Two sets of jump links. The left jump links set has five items. The right has five outer items and two nested items under the third jump link."
        width="418"
        height="320">
    </uxdot-example>
    <p>Include a max of eight jump links or use nesting</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example slot="image" color-palette="lightest">
      <img src="../jump-links-guidelines-best-practice-3-dont.svg"
        alt="A set of jump links with 22 different jump links."
        width="418"
        height="320">
    </uxdot-example>
    <p>Don't overload jump links with too many parent section links.</p>
  </uxdot-best-practice>
</div>
