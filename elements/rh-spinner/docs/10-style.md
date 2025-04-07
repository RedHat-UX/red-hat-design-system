## Style

A spinner is an animated line segment that follows a track and may include an 
optional text label.

### Anatomy

<figure>
  <uxdot-example width-adjustment="299px" color-palette="lightest">
    <img alt="Anatomy of a spinner with annotations; number 1 is pointing to the track, number 2 is pointing to the indicator, and number 3 is pointing to the optional text label"
         src="../spinner-anatomy.png"
         width="299"
         height="103">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Track</li>
      <li>Indicator</li>
      <li>Optional text label</li>
    </ol>
  </figcaption>
</figure>


## Sizes

A spinner comes in large, medium, and small sizes. Each size includes an 
optional text label on the bottom.

<uxdot-example color-palette="lightest" width-adjustment="472px">
  <img alt="Small size, medium size, and large size spinners with their text labels below"
       src="../spinner-sizes.png"
       width="472"
       height="103">
</uxdot-example>



<rh-table>

| Size   | Element         | Current value        |
|--------|-----------------|----------------------|
| Small  | Text label size | `14px`<br>`0.875rem` |
| Medium | Text label size | `16px`<br>`1.0rem`   |
| Large  | Text label size | `18px`<br>`1.125rem` |

</rh-table>


## Color scheme
<a id="theme"></a>

A spinner is available in both light and dark color schemes.

### Light scheme
<a id="light-theme"></a>

<uxdot-example color-palette="lightest" width-adjustment="251px">
  <img alt="Light scheme spinner"
       src="../spinner-theme-light.png"
       width="251"
       height="103">
</uxdot-example>


### Dark scheme
<a id="dark-theme"></a>

<uxdot-example color-palette="darkest" width-adjustment="251px">
  <img alt="Dark scheme spinner"
       src="../spinner-theme-dark.png"
       width="251"
       height="103">
</uxdot-example>


## Configuration

### Container

A spinner is centered horizontally and vertically within a container and the 
viewport by default. This demonstrates that the whole container is loading 
rather than one specific area.

<uxdot-example width-adjustment="872px" color-palette="lightest">
  <img alt="Diagram of how a spinner should be horizontally and vertically centered within a container no matter its size or if a text label is included or not"
       src="../spinner-configuration-container.png"
       width="872"
       height="359">
</uxdot-example>


### Button

If a small size spinner is used within a button, it can be positioned to the 
left of the text as if it were an icon.

<uxdot-example color-palette="lightest" width-adjustment="107px">
  <img alt="Button with a small size spinner icon to the left as if it were an icon"
       src="../spinner-configuration-button.png"
       width="107"
       height="36">
</uxdot-example>


## Space

<uxdot-example color-palette="lightest" width-adjustment="632px">
  <img alt="Spacing between all spinner sizes and their text labels"
       src="../spinner-space.png"
       width="632"
       height="103">  
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

A spinner is intentionally not operable or navigable and has no interaction 
states.
