<style>
  @container host (min-width: 768px) {
    #primary-vs-secondary td:first-child,
    #char-count td {
      width: 33%;
    }
  }
</style>

## Guidelines

Use the primary navigation to organize high-level content and important user actions.

### Primary vs. secondary navigation

Here is guidance on when to use the primary vs. secondary navigation.

<rh-table id="primary-vs-secondary">
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element" style="width: 25%;">Element</th>
        <th scope="col" data-label="When to use">When to use</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Primary navigation</td>
        <td data-label="When to use">
          <ul>
            <li>Provide persistent access to high-level content across domains</li>
            <li>Outline the fundamental structure of a website</li>
            <li>Organize the most important user actions</li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="Element">Secondary navigation</td>
        <td data-label="When to use">
          <ul>
            <li>If more space is needed for content without cluttering the primary navigation</li>
            <li>Offer more content pertinent to a section that users are exploring</li>
            <li>Allow users to dig deeper into a specific topic</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Writing content

## Menu text labels

Menus need to quickly describe to users what content they can expect to see when expanded. Try to write short and concise menu text labels.

### Element and character counts

<rh-table id="char-count">

  | Element            | Max number      | Character count |
  |--------------------|-----------------|-----------------|
  | Primary Menu       | 6               | 20              |
  | Cross-domain link  | 3               | 15              |
  | Utility menu       | 3               | 10              |

</rh-table>

## Expandable menus

Users can expand and collapse any menu whenever they want. Every menu is collapsed by default and users are only able to expand one menu at a time.

### Primary menus

Content in primary menus is organized using a 4-column grid within a fixed width container.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing four different columns to place content."
       src="../nav-primary-guidelines-menu-primary-a.svg"
       width="1012"
       height="478">
</uxdot-example>

When using a [card](/elements/card/) or [tile](/elements/tile/), it should be arranged last.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing three different columns and a fourth shorter column for a card or tile."
       src="../nav-primary-guidelines-menu-primary-b.svg"
       width="1012"
       height="478">
</uxdot-example>

Grid column width does not change if there are less than 4 columns of content.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing two columns taking up half the space of the open menu."
       src="../nav-primary-guidelines-menu-primary-c.svg"
       width="1012"
       height="478">
</uxdot-example>

### Utility menus

Content in utility menus can have a flexible size and layout, but should not occupy more than 3 grid columns.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded utility menu showing three columns taking up equal widths."
       src="../nav-primary-guidelines-menu-utility.svg"
       width="1012"
       height="478">
</uxdot-example>

## Behavior

### Sticky scrolling

The primary navigation is always sticky on scroll on every page it is used on.

### Expanding menus

Expanded menus are indicated by a [Hybrid style](/elements/navigation-primary/style/#hybrid-style) gradient border. When users hover over another menu, there are subtle visual changes (see [Interaction states](/elements/navigation-primary/style/#interaction-states)). When another menu is selected, the caret icon rotates, and the previously expanded menu collapses. Only 1 menu can be expanded at a time.

<uxdot-example color-palette="lighter" no-border>
  <img alt="Two navs showing hover interactions of various elements"
       src="../nav-primary-guidelines-behavior-browsing-menus.svg"
       width="1012"
       height="478">
</uxdot-example>

### Collapsing menus

Menus can be collapsed by doing the following.

- Selecting the same primary or utility menu again
- Selecting anywhere inside of the overlay
- Pressing the <kbd>Escape</kbd> key

<uxdot-example color-palette="lighter" no-border>
  <img alt="A nav with an expanded menu with X's over the menu triggers and backdrop denoting what will close a menu."
       src="../nav-primary-guidelines-collapsing-menus.svg"
       width="1012"
       height="478">
</uxdot-example>

### Responsive design

Some elements collapse or disappear as the primary navigation gets smaller.

<rh-table>

  | Viewport range | Result                                               |
  | -------------- | -----------------------------------------------------|
  | <1920px        | Utility menu text labels disappear                   |
  | <1680px        | Cross-domain links disappear                         |
  | <1440px        | Red Hat logo becomes the hat                         |
  | <1200px        | Primary menus collapse into mega menu with accordion |
  | <992px         | Mega menu text label disappears                      |
  | <576px         | For you utility menu disappears                      |

</rh-table>

### Skip link

When users land on or refresh a page and then press the <kbd>Tab</kbd> key, the [Skip link](/elements/skip-link/) will appear on top of the primary navigation.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a skip link centered over top of the navigation."
       src="../nav-primary-guidelines-behavior-skip-link.svg"
       width="1012"
       height="86">
</uxdot-example>

## Best Practices

### Content overload

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lighter" slot="image" no-border>
    <img alt="A primary nav with a skip link centered over top of the navigation."
         src="../nav-primary-guidelines-best-practice-1-do.svg"
         width="1012"
         height="86">
  </uxdot-example>
  <p>Limit the amount of primary menus to 5 or 6 max and the number of utility menus to 3 max.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lighter" slot="image" no-border>
    <img alt=""
         src="../nav-primary-guidelines-best-practice-1-dont.svg"
         width="1012"
         height="86">
  </uxdot-example>
  <p>Do not overload the primary navigation with additional primary and utility menus.</p>
</uxdot-best-practice>
