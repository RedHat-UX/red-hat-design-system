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

## Usage

Use health index to communicate the health or security of something using letter grades and severity levels.

## Variants

There are four available variants: `Small`, `Default`, `Large`, and `Extra large`. Each variant has an associated level of emphasis.


<uxdot-example width-adjustment="752px">
  <img src="../guidelines-variants.svg" alt="A row of health index components with emphasis descriptions under each size. Small is low, default is medium, large is high, and extra large is highest.">
</uxdot-example>

<rh-table>
  <table>
    <caption>When to use each variant of health index</caption>
    <thead>
      <tr>
        <th scope="col" data-label="Variant">Variant</th>
        <th scope="col" data-label="Emphasis">Emphasis</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Variant">Small</td>
        <td data-label="Emphasis">Low</td>
        <td data-label="Use case">Use to quickly and simply display a health grade if there is lots of text or other content nearby</td>
      </tr>
      <tr>
        <td data-label="Variant">Default</td>
        <td data-label="Emphasis">Medium</td>
        <td data-label="Use case">Use to display a health grade <strong>without showing</strong> other possible colors and grades</td>
      </tr>
      <tr>
        <td data-label="Variant">Large</td>
        <td data-label="Emphasis">High</td>
        <td data-label="Use case">Use to display a health grade <strong>while showing</strong> other possible colors and grades</td>
      </tr>
      <tr>
        <td data-label="Variant">Extra Large</td>
        <td data-label="Emphasis">Highest</td>
        <td data-label="Use case">Use to display a health grade <strong>while showing</strong> other possible colors and grades</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Severity levels

When health index shows a grade of “A” and the severity level color is green, the experience associated with the index is healthy or in its optimal state. It is important to note that both the letter grade and color are included as indicators, as you should not rely solely on color.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The Ecosystem Catalog team is using a health index to grade the security of their container images. <a href="https://catalog.redhat.com/software/containers/openshift3/ose-pod/57ea8d029c624c035f96f424?architecture=amd64&image=630e82fc80cc9b32912f31e7&container-tabs=security">Read their documentation</a> to learn more about how they are calculating grades.</p>
</rh-alert>


<uxdot-example width-adjustment="640px">
  <img src="../guidelines-severity-levels.svg" alt="A 3 by 3 grid of small size health index components. Each row has letter grades A, C, and F. Under each letter grade is text that describes a safe, at risk, or vulnerable state.">
</uxdot-example>


## Layout

Health index should always be placed near helpful text or other content that explains it. This context should be available to all users, including those using assistive technologies. Without context, a user might interpret health index only as colored boxes with letters.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not use health index without text or other contextual content.</p>
</rh-alert>


### Stacked

Health index can be stacked with other content. In such cases, we recommend using the Small variant, as it does not take focus away from surrounding information.

<uxdot-example width-adjustment="120px">
  <img src="../guidelines-layout-stacked.svg" alt="A small size health index component with a letter grade A at the bottom of a stack of text.">
</uxdot-example>


### Inline

Health index can also be inserted inline with text and components. In such cases, we recommend using the Large or Extra large variants to maintain equal hierarchy among elements.

<uxdot-example width-adjustment="752px">
  <img src="../guidelines-layout-inline.svg" alt="An extra large size health index component with a letter grade F in between a heading, body text, and a call to action.">
</uxdot-example>


## Best practices

### Letter grades and color consistency

Letter grades and severity level colors are designed to work together. Mixing them up will cause users to be confused as to what the health of something actually is.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="176px" slot="image">
      <img src="../guidelines-best-practice-1-do.svg" alt="Small, default, and large size health index components displaying correct letter grades and severity colors.">
    </uxdot-example>
    <p>Keep letter grades and severity level colors consistent.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="176px" slot="image">
      <img src="../guidelines-best-practice-1-dont.svg" alt="Small, default, and large size health index components displaying incorrect letter grades and severity colors.">
    </uxdot-example>
    <p>Do not mix up letter grades and severity level colors.</p>
  </uxdot-best-practice>
</div>


### Theming

Light theme components are designed only to work in the light theme, and dark theme components are designed to work only in the dark theme.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="darkest" width-adjustment="176px" slot="image">
      <img src="../guidelines-best-practice-2-do.svg" alt="Dark theme small, default, and large size health index components.">
    </uxdot-example>
    <p>Use the correct components in the correct theme.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="darkest" width-adjustment="176px" slot="image">
      <img src="../guidelines-best-practice-2-dont.svg" alt="Light theme small, default, and large size health index components used incorrectly in the dark theme.">
    </uxdot-example>
    <p>Do not use components from one theme in another theme.</p>
  </uxdot-best-practice>
</div>


### Mixing variants

Each variant is unique and designed to meet a specific user need.

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="176px" slot="image">
      <img src="../guidelines-best-practice-3-do.svg" alt="Small, default, and large size health index components displaying correct letter grades and severity colors.">
    </uxdot-example>
    <p>Use the available variants as intended.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="278px" slot="image">
      <img src="../guidelines-best-practice-3-dont.svg" alt="Large size health index component displaying extra text and an incorrect combination of styles.">
    </uxdot-example>
    <p>Do not combine variants or add other elements like text.</p>
  </uxdot-best-practice>
</div>
