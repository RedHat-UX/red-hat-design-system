## Style

A dialog is a floating container on top of a transparent backdrop. The container 
requires a backdrop so it can separate itself from the page underneath, this 
helps users focus on the dialog content.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="{{ '../dialog-anatomy.png' | url }}" alt="Anatomy of a dialog with lots of annotations pointing to various parts">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Backdrop</li>
      <li>Container</li>
      <li>Close button</li>
      <li>Header section</li>
      <li>Body text section</li>
      <li>Footer section</li>
      <li>Container shadow</li>
    </ol>
  </figcaption>
</figure>

## Theme

A dialog is available in the light theme only.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-theme-light.png' | url }}" alt="Light theme dialog">
</uxdot-example>

## Configuration

The dialog container does not have a maximum height, but too much content in the 
body text section will cause scrolling.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-configuration.png' | url }}" alt="How a dialog container is constructed showing border radius, region, and scrolling details">
</uxdot-example>

## Space

The amount of space in a dialog reduces as breakpoints get smaller.

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-space-breakpoint-large.png' | url }}" alt="A dialog container on a large breakpoint with spacing between all elements">
</uxdot-example>

### Small breakpoints

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-space-breakpoint-small.png' | url }}" alt="A dialog container on a small breakpoint with spacing between all elements">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
    headingLevel="4",
    tokens="--rh-space-md, --rh-space-lg,  --rh-space-xl, --rh-space-2xl",
    style="margin-block-start:var(--rh-space-xl);" %}{% endspacerTokensTable %}
</rh-table>

## Interaction states

Interactive elements may be added to a dialog container, but very sparingly. If 
interactive elements are added, go to their element or pattern pages to view the 
interaction states.

### Hover

Control and inactive page number buttons have the same hover state. Truncation 
is not interactive so it has no hover state.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-interaction-state-hover.png' | url }}" alt="Light theme dialog hover state example">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - close button</td>
        <td data-label="Light theme">#151515</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Focus

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-interaction-state-focus.png' | url }}" alt="Light theme dialog focus state example">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - close button</td>
        <td data-label="Light theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066cc</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Active

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../dialog-interaction-state-active.png' | url }}" alt="Light theme dialog active state example">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - close button</td>
        <td data-label="Light theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066cc</td>
      </tr>
    </tbody>
  </table>
</rh-table>



