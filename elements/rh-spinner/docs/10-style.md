## Style

A spinner is an animated line segment that follows a track and may include an 
optional text label.

### Anatomy

<figure>
  <uxdot-example width-adjustment="299px">
    <img src="../spinner-anatomy.png"
        alt="Anatomy of a spinner with annotations; number 1 is pointing to the track, number 2 is pointing to the indicator, and number 3 is pointing to the optional text label"
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

<uxdot-example width-adjustment="472px">
  <img src="../spinner-sizes.png"
        alt="Small size, medium size, and large size spinners with their text labels below"
        width="472"
        height="103">
</uxdot-example>



<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Size">Size</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Current value">Current value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Size">Small</td>
        <td data-label="Element">Text label size</td>
        <td data-label="Current value"><code>14px</code><br><code>0.875rem</code></td>
      </tr>
      <tr>
        <td data-label="Size">Medium</td>
        <td data-label="Element">Text label size</td>
        <td data-label="Current value"><code>16px</code><br><code>1.0rem</code></td>
      </tr>
      <tr>
        <td data-label="Size">Large</td>
        <td data-label="Element">Text label size</td>
        <td data-label="Current value"><code>18px</code><br><code>1.125rem</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Theme

A spinner is available in both light and dark themes.

### Light theme

<uxdot-example width-adjustment="251px">
  <img src="../spinner-theme-light.png"
        alt="Light theme spinner"
        width="251"
        height="103">
</uxdot-example>


### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="251px">
  <img src="../spinner-theme-dark.png"
        alt="Dark theme spinner"
        width="251"
        height="103">
</uxdot-example>


## Configuration

### Container

A spinner is centered horizontally and vertically within a container and the 
viewport by default. This demonstrates that the whole container is loading 
rather than one specific area.

<uxdot-example width-adjustment="872px">
  <img src="../spinner-configuration-container.png"
        alt="Diagram of how a spinner should be horizontally and vertically centered within a container no matter its size or if a text label is included or not"
        width="872"
        height="359">
</uxdot-example>


### Button

If a small size spinner is used within a button, it can be positioned to the 
left of the text as if it were an icon.

<uxdot-example width-adjustment="107px">
  <img src="../spinner-configuration-button.png"
        alt="Button with a small size spinner icon to the left as if it were an icon"
        width="107"
        height="36">
</uxdot-example>


## Space

<uxdot-example width-adjustment="632px">
  <img src="../spinner-space.png"
        alt="Spacing between all spinner sizes and their text labels"
        width="632"
        height="103">  
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

A spinner is intentionally not operable or navigable and has no interaction 
states.
