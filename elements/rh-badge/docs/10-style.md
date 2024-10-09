## Style 
A badge is number text on a pill background used to reflect the count of something.

### Anatomy 

<figure>
  <uxdot-example width-adjustment="102px">
    <img src="../badge-anatomy.svg" 
        alt="Anatomy of a badge with annotations; number 1 is pointing to the container and number 2 is pointing to the counter number"
        width="102"
        height="18">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Container</li>
      <li>Counter number</li>
    </ol>
  </figcaption>
</figure>

## Theme 

A badge is available in light and dark theme.

### Light theme

<uxdot-example width-adjustment="272px">
  <img src="../badge-theme-light.svg" 
      alt="Light theme badges"
      width="272"
      height="18">
</uxdot-example>

### Dark theme

<uxdot-example width-adjustment="272px" color-palette="darkest">
  <img src="../badge-theme-dark.svg" 
      alt="Dark theme badges"
      width="272"
      height="18">
</uxdot-example>

## Configuration 

All badges have the same height and border radius.

<uxdot-example width-adjustment="350px">
  <img src="../badge-configuration.svg" 
      alt="How a badge is constructed showing border radius and height details"
      width="350"
      height="35">
</uxdot-example>


## Space and width 

<uxdot-example width-adjustment="238px">
  <img src="../badge-space-and-width.svg" 
      alt="Badge spacing and minimum width"
      width="238"
      height="49">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-md" %}
{% endspacerTokensTable %}
</rh-table>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Current value">Current value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Minimum width</td>
        <td data-label="Current value">--rh-length-2xl</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Interaction states

A badge contains only text and is not interactive.