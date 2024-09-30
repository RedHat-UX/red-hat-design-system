<style>
  .list-flat {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  rh-table caption {
    font-weight: var(--rh-font-weight-body-text-regular, 400);
    font-size: var(--rh-font-size-code-sm, 0.875rem);
  }
</style>

## Style

Health index is a combination of letter grades and severity colors. Severity colors communicate a positive or negative status. For example, green has a positive status and red has a negative status. To meet accessibility standards, letter grades are also used so that color is not the only element communicating the health of something. Health index does not include any interactive elements.

### Anatomy

<figure>
  <uxdot-example width-adjustment="752px">
    <img src="../style-anatomy.svg" alt="Anatomy of 3 health index components. Annotation #1 is pointing to the letter grade and annotation #2 is pointing to the severity level.">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Letter grade</li>
      <li>Severity level</li>
    </ol>
  </figcaption>
</figure>


### Variants

There are four available variants: `Small`, `Default`, `Large`, and `Extra large`. The only difference between the Large and Extra large variants is the size.

<uxdot-example width-adjustment="752px">
  <img src="../style-variants.svg" alt="4 columns of health index components. Each column is a different size. Under each column, there is every letter grade and severity color.">
</uxdot-example>


## Theme

Health index is available in both light and dark themes.

### Light theme

<uxdot-example width-adjustment="752px">
  <img src="../style-theme-light.svg" alt="Light theme health index component examples.">
</uxdot-example>

<uxdot-example color-palette="lighter" width-adjustment="752px">
  <img src="../style-theme-light.svg" alt="Light theme health index component examples.">
</uxdot-example>

<uxdot-example color-palette="light" width-adjustment="752px">
  <img src="../style-theme-light.svg" alt="Light theme health index component examples.">
</uxdot-example>


### Dark theme

<uxdot-example color-palette="dark" width-adjustment="752px">
  <img src="../style-theme-dark.svg" alt="Dark theme health index component examples.">
</uxdot-example>

<uxdot-example color-palette="darker" width-adjustment="752px">
  <img src="../style-theme-dark.svg" alt="Dark theme health index component examples.">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../style-theme-dark.svg" alt="Dark theme health index component examples.">
</uxdot-example>


## Configuration

Squares in the Default, Large, and Extra large variants are aligned horizontally.

<uxdot-example width-adjustment="752px">
  <img src="../style-configuration.svg" alt="3 examples of health index component configurations. The small size is just 1 square, so it’s horizontally and vertically centered. The default, large, and extra large sizes are rows of squares, so they’re horizontally centered only.">
</uxdot-example>


## Space

The spacer in the Default variant is the same for all viewport sizes.

<uxdot-example width-adjustment="240px">
  <img src="../style-space.svg" alt="Health index component with a 16px spacer box in between a C letter grade and a row of severity squares. The active severity square is yellow.">
</uxdot-example>


## States

### Severity level

Depending on the theme and chosen variant, each severity level can have different colors and font styling.

<uxdot-example width-adjustment="752px">
  <img src="../style-severity-level-light.svg" alt="Multiple light theme health index components at different sizes. Annotations 1 through 4 are pointing to various styling details as well as letter grades that have been enlarged.">
</uxdot-example>

<rh-table>
  <table>
    <caption>Annotations of the health index component's light theme examples in the figure above</caption>
    <thead>
      <tr>
        <th scope="col" data-label="#">#</th>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Text color">Text color</th>
        <th scope="col" data-label="Fill color">Fill color</th>
        <th scope="col" data-label="Stroke/Emphasis color">Stroke/Emphasis color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="#">1</td>
        <td data-label="Variant">Small</td>
        <td data-label="Font weight">Regular</td>
        <td data-label="Text color"><code>green-70</code></td>
        <td data-label="Fill color"><code>green-20</code></td>
        <td data-label="Stroke/Emphasis color">Stroke: <code>green-60</code></td>
      </tr>
      <tr>
        <td data-label="#">2</td>
        <td data-label="Variant">Default</td>
        <td data-label="Font weight">Regular</td>
        <td data-label="Text color"><code>gray-95</code></td>
        <td data-label="Fill color">N/A</td>
        <td data-label="Stroke/Emphasis color">N/A</td>
      </tr>
      <tr>
        <td data-label="#">3</td>
        <td data-label="Variant">Large</td>
        <td data-label="Font weight">Medium</td>
        <td data-label="Text color"><code>gray-95</code></td>
        <td data-label="Fill color"><code>red-10</code></td>
        <td data-label="Stroke/Emphasis color">
          <ul class="list-flat">
            <li>Stroke: <code>red-70</code></li>
            <li>Emphasis: <code>red-70</code></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="#">4</td>
        <td data-label="Variant">Extra large</td>
        <td data-label="Font weight">Medium</td>
        <td data-label="Text color"><code>gray-95</code></td>
        <td data-label="Fill color"><code>red-10</code></td>
        <td data-label="Stroke/Emphasis color">
          <ul class="list-flat">
            <li>Stroke: <code>red-70</code></li>
            <li>Emphasis: <code>red-70</code></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>


<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img src="../style-severity-level-dark.svg" alt="Multiple dark theme health index components at different sizes. Annotations 1 through 4 are pointing to various styling details as well as letter grades that have been enlarged..">
</uxdot-example>

<rh-table>
  <table>
    <caption>Annotations of the health index component's dark theme examples in the figure above</caption>
    <thead>
      <tr>
        <th scope="col" data-label="#">#</th>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Font weight">Font weight</th>
        <th scope="col" data-label="Text color">Text color</th>
        <th scope="col" data-label="Fill color">Fill color</th>
        <th scope="col" data-label="Stroke/Emphasis color">Stroke/Emphasis color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="#">1</td>
        <td data-label="Variant">Mini</td>
        <td data-label="Font weight">Regular</td>
        <td data-label="Text color"><code>white</code></td>
        <td data-label="Fill color"><code>gray-95</code></td>
        <td data-label="Stroke/Emphasis color">Stroke: <code>green-60</code></td>
      </tr>
      <tr>
        <td data-label="#">2</td>
        <td data-label="Variant">Default</td>
        <td data-label="Font weight">Regular</td>
        <td data-label="Text color"><code>white</code></td>
        <td data-label="Fill color">N/A</td>
        <td data-label="Stroke/Emphasis color">N/A</td>
      </tr>
      <tr>
        <td data-label="#">3</td>
        <td data-label="Variant">Large</td>
        <td data-label="Font weight">Medium</td>
        <td data-label="Text color"><code>white</code></td>
        <td data-label="Fill color"><code>gray-95</code></td>
        <td data-label="Stroke/Emphasis color">
          <ul class="list-flat">
            <li>Stroke: <code>red-40</code></li>
            <li>Emphasis: <code>red-60</code></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td data-label="#">4</td>
        <td data-label="Variant">Extra large</td>
        <td data-label="Font weight">Medium</td>
        <td data-label="Text color"><code>white</code></td>
        <td data-label="Fill color"><code>gray-95</code></td>
        <td data-label="Stroke/Emphasis color">
          <ul class="list-flat">
            <li>Stroke: <code>red-40</code></li>
            <li>Emphasis: <code>red-60</code></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Interactive

Health index includes only text and is not interactive.
