
## Style

Jump links are fixed on the page and follow a user as they scroll. It moves
them to a section of content when the corresponding link is selected. It looks
visually similar to <a href="../tabs">Open tabs</a>, the only difference is
the uppercase label on top.

<uxdot-example width-adjustment="537px">
  <img src="../jump-links-style.svg"
        alt="Jump links specs"
        width="536"
        height="330">
</uxdot-example>


### Theme

<uxdot-example width-adjustment="385px">
  <img src="../jump-links-theme-light.svg"
        alt="Jump links theme light"
        width="383"
        height="300">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="385px">
  <img src="../jump-links-theme-dark.svg"
        alt="Jump links theme dark"
        width="383"
        height="300">
</uxdot-example>


### Label

Jump links display a label at the top indicating there are section links that
a user can select. This label isn’t interactive.


### Section links

Jump links feature links that float to the right of an anchor line, they
represent the different sections that are available to select.


### Nested section links

Sections that contain lots of content can be broken into nested sections for
better organization and hierarchy. Nested section links are positioned under
their parent section link and indented slightly. There are guidelines about
how many section links can be included, but no guidelines about how many
nested section links can be included.

<uxdot-example width-adjustment="129px">
  <img src="../jump-links-nested.svg"
        alt="Jump links nested section"
        width="127"
        height="300" />
</uxdot-example>


### Active indicator bar

A red indicator bar highlights what the active section is. It’s positioned on
top of the anchor line, not adjacent.

<uxdot-example width-adjustment="206px">
  <img src="../jump-links-indicator.svg"
        alt="Jump links active indicator bar"
        width="206"
        height="189" />
</uxdot-example>


## Responsive design

Jump links can be used on all screen sizes.


### Breakpoints

Jump links are displayed in layout on large screens, but on small screens it’s
wrapped in a disclosure which is collapsed until a user expands the panel.


### Desktop

<figure>
  <uxdot-example width-adjustment="992px">
    <img src="../jump-links-responsive-desktop.svg" alt="Jump links on desktop" style="">
  </uxdot-example>
  <figcaption>On large screens, jump links are displayed in the layout</figcaption>
</figure>


### Tablet

<figure>
  <uxdot-example width-adjustment="768px">
    <img src="../jump-links-responsive-tablet.svg"
        alt="Jump links on tablet"
        width="768"
        height="217">
  </uxdot-example>
  <figcaption>Section links reduce in width as breakpoints get smaller</figcaption>
</figure>


### Mobile

<figure>
  <uxdot-example width-adjustment="360px">
    <img src="../jump-links-responsive-mobile.svg"
        alt="Jump links on mobile"
        width="360"
        height="640">
  </uxdot-example>
  <figcaption>On small screens, jump links are wrapped in a collapsed disclosure</figcaption>
</figure>


## Spacing

<uxdot-example width-adjustment="385px">
  <img src="../jump-links-spacing.svg"
        alt="Jump links spacing on desktop"
        width="384"
        height="304" />
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="../jump-links-spacing-2.svg"
        alt="Jump links spacing on mobile"
        width="884"
        height="259" />
</uxdot-example>

<uxdot-spacer-tokens-table tokens="sm, md, lg, xl"></uxdot-spacer-tokens-table>
