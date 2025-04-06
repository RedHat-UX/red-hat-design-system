## Style

Jump links are fixed on the page and follow a user as they scroll. It moves
them to a section of content when the corresponding link is selected. It looks
visually similar to <a href="../tabs">Open tabs</a>, the only difference is
the uppercase label on top.

<uxdot-example color-palette="lightest"
               width-adjustment="537px">
  <img alt="Jump links specs"
       src="../jump-links-style.svg"
       width="536"
       height="330">
</uxdot-example>


### Color scheme
<a id="theme"></a>

<uxdot-example color-palette="lightest"
               width-adjustment="385px">
  <img alt="Jump links theme light"
       src="../jump-links-theme-light.svg"
       width="383"
       height="300">
</uxdot-example>

<uxdot-example color-palette="darkest"
               width-adjustment="385px">
  <img alt="Jump links theme dark"
       src="../jump-links-theme-dark.svg"
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

<uxdot-example color-palette="lightest"
               width-adjustment="129px">
  <img alt="Jump links nested section"
       src="../jump-links-nested.svg"
       width="127"
       height="300">
</uxdot-example>


### Active indicator bar

A red indicator bar highlights what the active section is. It’s positioned on
top of the anchor line, not adjacent.

<uxdot-example color-palette="lightest"
               width-adjustment="206px">
  <img alt="Jump links active indicator bar"
       src="../jump-links-indicator.svg"
       width="206"
       height="189">
</uxdot-example>


## Responsive design

Jump links can be used on all screen sizes.


### Breakpoints

Jump links are displayed in layout on large screens, but on small screens it’s
wrapped in a disclosure which is collapsed until a user expands the panel.


### Desktop

<figure>
  <uxdot-example color-palette="lightest"
                 width-adjustment="992px">
    <img alt="Jump links on desktop"
         src="../jump-links-responsive-desktop.svg">
  </uxdot-example>
  <figcaption>On large screens, jump links are displayed in the layout</figcaption>
</figure>


### Tablet

<figure>
  <uxdot-example color-palette="lightest"
                 width-adjustment="768px">
    <img alt="Jump links on tablet"
         src="../jump-links-responsive-tablet.svg"
         width="768"
         height="217">
  </uxdot-example>
  <figcaption>Section links reduce in width as breakpoints get smaller</figcaption>
</figure>


### Mobile

<figure>
  <uxdot-example color-palette="lightest"
                 width-adjustment="360px">
    <img alt="Jump links on mobile"
         src="../jump-links-responsive-mobile.svg"
         width="360"
         height="640">
  </uxdot-example>
  <figcaption>On small screens, jump links are wrapped in a collapsed disclosure</figcaption>
</figure>


## Spacing

<uxdot-example color-palette="lightest"
               width-adjustment="385px">
  <img alt="Jump links spacing on desktop"
       src="../jump-links-spacing.svg"
       width="384"
       height="304">
</uxdot-example>

<uxdot-example color-palette="lightest"
               width-adjustment="872px">
  <img alt="Jump links spacing on mobile"
       src="../jump-links-spacing-2.svg"
       width="884"
       height="259">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="sm, md, lg, xl"></uxdot-spacer-tokens-table>
