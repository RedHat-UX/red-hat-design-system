## Style

Primary navigation includes our brand logo or hat and groups of menus and links in a container that spans the width of the browser window.

### Anatomy

<figure>
  <uxdot-example color-palette="lighter" no-border>
    <img src="../nav-primary-style-anatomy.svg"
        alt="Anatomy of primary navigation with numbered annotations pointing to various parts. Top left is the logo. The primary nav items follow on the right. then the secondary items are right aligned."
        width="1012"
        height="370">
  </uxdot-example>
  <figcaption>
     <ol>
       <li>Hat or logo</li>
       <li>Primary menus</li>
       <li>Cross-domain links</li>
       <li>Utility menus</li>
     </ol>
  </figcaption>
</figure>

## Color scheme

Primary navigation is available in both light and dark color schemes.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>It is recommended to match color schemes. For example, if you use lots of dark scheme elements, use the dark scheme primary navigation.</p>
</rh-alert>

### Light scheme

<uxdot-example color-palette="lightest" variant="full" no-border>
  <img alt="Primary nav in a light scheme which means it has a white background"
       src="../nav-primary-style-scheme-light.svg"
       width="1140"
       height="94">
</uxdot-example>

### Dark scheme

<uxdot-example variant="full" no-border>
  <img alt="Primary nav in a dark scheme which means it has a dark or black background"
       src="../nav-primary-style-scheme-dark.svg"
       width="1140"
       height="94">
</uxdot-example>

## Menus

### Primary menus

Primary menus organize high-level topics into sections. When expanded, all menu backgrounds span the width of the browser window. Content is then organized within a fixed width container.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a full width expanded primary menu with a placeholder showing where end users would put menu content."
       src="../nav-primary-style-menus-primary.svg"
       width="1012"
       height="478">
</uxdot-example>


### Utility menus

Utility menus organize secondary content like important user actions. The height and width of each menu is determined by the content inside. Some menus may have a different size than others.

<uxdot-example color-palette="lighter" no-border>
  <img alt="A primary nav with a one-third width expanded utility nav showing where content should be placed."
       src="../nav-primary-style-menus-utility.svg"
       width="1012"
       height="478">
</uxdot-example>

## Space

<uxdot-example color-palette="lighter" no-border>
  <img alt="Primary nav has 32px of inline padding, 24 px of padding-block, 32px between each link. On mobile, the horizontal padding decreases to 16px."
       src="../nav-primary-style-space-a.svg"
       width="1012"
       height="654">
</uxdot-example>

<uxdot-example color-palette="lighter" no-border>
  <img alt="Expanded dropdown menus have 32px of padding on the top and bottom of the expanded menu."
       src="../nav-primary-style-space-b.svg"
       width="1012"
       height="654">
</uxdot-example>

## Interaction states

### Hover

Certain elements have specific hover states.

- The primary menu bottom border changes to gray
- Links change color and display a dashed underline
- The utility menu background changes to gray
- The utility menu border changes to a [Hybrid style](/elements/navigation-primary/style/#hybrid-style) gradient

<uxdot-example color-palette="lighter" no-border>
  <img alt="Two navigations. The first shows a cursor hovering over the first item and a gray border underneath. The second shows two hover states. A link with an underline and a utility nav trigger with a darker background and hybrid style border."
       src="../nav-primary-style-interaction-states-hover.svg"
       width="1012"
       height="228">
</uxdot-example>

### Focus

There is one difference between hover and focus states.

- The primary menu bottom border changes to a Hybrid style gradient

<uxdot-example color-palette="lighter" no-border>
  <img alt="All interactive items on focus recieve the hover state plus a blue focus ring surrounding the entire trigger."
       src="../nav-primary-style-interaction-states-focus.svg"
       width="1012"
       height="228">
</uxdot-example>

### Active

Primary and utility menus display subtle visual changes.

- The caret icon rotates and points up instead of down
- The utility menu border becomes 1px thicker

<uxdot-example color-palette="lighter" no-border>
  <img alt="Two navs showing active states. The blue focus ring exists alongside the points outlined above."
       src="../nav-primary-style-interaction-states-active.svg"
       width="1012"
       height="228">
</uxdot-example>

### Hybrid style

Some interaction state properties leverage Hybrid style, our new system of visual elements.

Learn more about Hybrid style in the [Brand standards](https://www.redhat.com/en/about/brand/standards) section.
