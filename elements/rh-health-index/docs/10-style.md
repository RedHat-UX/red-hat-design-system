<style data-helmet>
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
  <uxdot-example color-palette="lightest" width-adjustment="752px">
    <img alt="Anatomy of 3 health index components. Annotation #1 is pointing to the letter grade and annotation #2 is pointing to the severity level."
         src="../style-anatomy.svg"
         width="638"
         height="82">
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

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="4 columns of health index components. Each column is a different size. Under each column, there is every letter grade and severity color."
       src="../style-variants.svg"
       width="802"
       height="334">
</uxdot-example>


## Color schemes
<a id="theme"></a>

Health index is available in both light and dark color schemes.

### Light scheme

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="Light scheme health index component examples."
       src="../style-theme-light.svg"
       width="793"
       height="38">
</uxdot-example>

<uxdot-example color-palette="lighter" width-adjustment="752px">
  <img alt="Light scheme health index component examples."
       src="../style-theme-light.svg"
       width="793"
       height="38">
</uxdot-example>

<uxdot-example color-palette="light" width-adjustment="752px">
  <img alt="Light scheme health index component examples."
       src="../style-theme-light.svg"
       width="793"
       height="38">
</uxdot-example>


### Dark scheme

<uxdot-example color-palette="dark" width-adjustment="752px">
  <img alt="Dark scheme health index component examples."
       src="../style-theme-dark.svg"
       width="793"
       height="38">
</uxdot-example>

<uxdot-example color-palette="darker" width-adjustment="752px">
  <img alt="Dark scheme health index component examples."
       src="../style-theme-dark.svg"
       width="793"
       height="38">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="752px">
  <img alt="Dark scheme health index component examples."
       src="../style-theme-dark.svg"
       width="793"
       height="38">
</uxdot-example>


## Configuration

Squares in the Default, Large, and Extra large variants are aligned horizontally.

<uxdot-example color-palette="lightest" width-adjustment="752px">
  <img alt="3 examples of health index component configurations. The small size is just 1 square, so it’s horizontally and vertically centered. The default, large, and extra large sizes are rows of squares, so they’re horizontally centered only."
       src="../style-configuration.svg"
       width="764"
       height="90">
</uxdot-example>


## Space

The spacer in the Default variant is the same for all viewport sizes.

<uxdot-example color-palette="lightest" width-adjustment="240px">
  <img alt="Health index component with a 16px spacer box in between a C letter grade and a row of severity squares. The active severity square is yellow."
       src="../style-space.svg"
       width="170"
       height="24">
</uxdot-example>


## States

### Severity level

Depending on the theme and chosen variant, each severity level can have different colors and font styling.

<uxdot-example color-palette="lightest" width-adjustment="715px">
  <img alt="Multiple light theme health index components at different sizes. Annotations 1 through 4 are pointing to various styling details as well as letter grades that have been enlarged."
       src="../style-severity-level-light.svg"
       width="715"
       height="227">
</uxdot-example>

<rh-table>
  <table>
    <caption>Annotations of the health index component's light theme examples in the figure above</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Variant</th>
        <th scope="col">Font weight</th>
        <th scope="col">Text color</th>
        <th scope="col">Fill color</th>
        <th scope="col">Stroke/Emphasis color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Small</td>
        <td>Regular</td>
        <td><code>green-70</code></td>
        <td><code>green-20</code></td>
        <td>Stroke: <code>green-60</code></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Default</td>
        <td>Regular</td>
        <td><code>gray-95</code></td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Large</td>
        <td>Medium</td>
        <td><code>gray-95</code></td>
        <td><code>red-10</code></td>
        <td>
          <ul class="list-flat">
            <li>Stroke: <code>red-70</code></li>
            <li>Emphasis: <code>red-70</code></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Extra large</td>
        <td>Medium</td>
        <td><code>gray-95</code></td>
        <td><code>red-10</code></td>
        <td>
          <ul class="list-flat">
            <li>Stroke: <code>red-70</code></li>
            <li>Emphasis: <code>red-70</code></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</rh-table>


<uxdot-example color-palette="darkest" width-adjustment="715px">
  <img alt="Multiple dark theme health index components at different sizes. Annotations 1 through 4 are pointing to various styling details as well as letter grades that have been enlarged.."
       src="../style-severity-level-dark.svg"
       width="715"
       height="227">
</uxdot-example>

<rh-table>
  <table>
    <caption>Annotations of the health index component's dark theme examples in the figure above</caption>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Variant</th>
        <th scope="col">Font weight</th>
        <th scope="col">Text color</th>
        <th scope="col">Fill color</th>
        <th scope="col">Stroke/Emphasis color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mini</td>
        <td>Regular</td>
        <td><code>white</code></td>
        <td><code>gray-95</code></td>
        <td>Stroke: <code>green-60</code></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Default</td>
        <td>Regular</td>
        <td><code>white</code></td>
        <td>N/A</td>
        <td>N/A</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Large</td>
        <td>Medium</td>
        <td><code>white</code></td>
        <td><code>gray-95</code></td>
        <td>
          <ul class="list-flat">
            <li>Stroke: <code>red-40</code></li>
            <li>Emphasis: <code>red-60</code></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td>4</td>
        <td>Extra large</td>
        <td>Medium</td>
        <td><code>white</code></td>
        <td><code>gray-95</code></td>
        <td>
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
