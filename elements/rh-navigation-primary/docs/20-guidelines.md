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
            <li>If more space is needed for content without cluttering the Primary Navigation</li>
            <li>Offer more content pertinent to a section that users are exploring</li>
            <li>Allow users to dig deeper into a specific topic</li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Writing content

### Text labels

Text labels need to quickly describe what content users can expect to see when something is selected. Try to write short and concise text labels.

<rh-table id="char-count">

  | Element            | Max number of items | Character count |
  |--------------------|---------------------|-----------------|
  | Primary Menu       | 5                   | 20              |
  | Cross-domain link  | 3                   | 15              |

</rh-table>

## Layout

### Primary menus

Primary menus organize high-level topics into sections. When expanded, each menu background spans the width of the browser window. Content is then organized into a maximum of 4 columns.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing four different columns to place content."
       src="../nav-primary-guidelines-layout-primary-menus-1.svg"
       width="1012"
       height="562">
</uxdot-example>

If the layout in a menu has been set to display 4 columns of content, even if 3 are visible, they will have the same width as if there are 4 columns of content visible.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing three different columns and a blank placeholder for the fourth column."
       src="../nav-primary-guidelines-layout-primary-menus-2.svg"
       width="1012"
       height="562">
</uxdot-example>

When including a [Card](/elements/card/) or [Tile](/elements/tile/), it will be arranged last.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded menu showing three columns and a placeholder for a tile or card in the fourth column"
       src="../nav-primary-guidelines-layout-primary-menus-3.svg"
       width="1012"
       height="478">
</uxdot-example>

### Utility menus

Utility menus organize secondary content like important user actions. The height and width of each menu is determined by the content inside. Content in utility menus can have a flexible size and layout, but should not occupy more than 3 grid columns.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with an expanded utility menu showing three columns taking up equal widths."
       src="../nav-primary-guidelines-layout-utility-menus.svg"
       width="1012"
       height="562">
</uxdot-example>

## Behavior

### Expanding menus

Expanded menus are visually identified by a 4px thick red accent border. When users hover over other collapsed menus, the accent border is gray. When a collapsed menu is selected, the caret icon rotates quickly and the previously expanded menu collapses. **Only 1 menu can be expanded at a time.**

<uxdot-example color-palette="lighter" no-border>
  <img alt="Two navs showing hover interactions (red underlines under menu buttons) of various elements"
       src="../nav-primary-guidelines-behavior-expanding-menus.svg"
       width="1012"
       height="234">
</uxdot-example>

### Collapsing menus

Menus can be collapsed by doing the following.

- Selecting the same primary or utility menu again
- Selecting anywhere inside of the overlay under the menu
- Pressing the <kbd>Escape</kbd> key

<uxdot-example color-palette="lighter" no-border>
  <img alt="A nav with an expanded menu with X's over the menu triggers and backdrop denoting what will close a menu."
       src="../nav-primary-guidelines-behavior-collapsing-menus.svg"
       width="1012"
       height="478">
</uxdot-example>

### Skip link

When users land on or refresh a page and then press the <kbd>Tab</kbd> key, the [Skip link](/elements/skip-link/) will appear on top of the primary navigation.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a skip link centered over top of the navigation."
       src="../nav-primary-guidelines-behavior-skip-link.svg"
       width="1012"
       height="86">
</uxdot-example>

### Sticky scrolling

The Primary navigation is always sticky on scroll on every page it is used on.

## Responsive design

Some elements disappear and the bar gets shorter as the Primary navigation gets smaller. To see more, go to the [Demos](/elements/primary-navigation/demos/) page.

<uxdot-example variant="full" color-palette="lightest" no-border>
  <img alt="Four primary navigations shown at various viewport sizes from large to small"
       src="../nav-primary-guidelines-responsive-design.svg"
       width="1140"
       height="416">
</uxdot-example>

## Best Practices

### Amount of content

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lighter" slot="image" no-border>
    <img alt="A primary nav with a skip link centered over top of the navigation."
         src="../nav-primary-guidelines-best-practice-1-do.svg"
         width="1012"
         height="88">
  </uxdot-example>
  <p>For all domains, use a comfortable amount of primary menus, cross-domain links, and utility menus so the Primary navigation does not feel cramped.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example variant="full" color-palette="lighter" slot="image" no-border>
    <img alt=""
         src="../nav-primary-guidelines-best-practice-1-dont.svg"
         width="1140"
         height="330">
  </uxdot-example>
  <p>Do not overload the Primary navigation with tons of primary menus or other elements.</p>
</uxdot-best-practice>
