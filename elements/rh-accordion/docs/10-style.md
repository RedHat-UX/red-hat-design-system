## Style 
Accordion panels include title text, a chevron icon, body text, and other content. When a panel is collapsed, only the top and bottom borders are visible. When a panel is expanded, all borders are visible including a thicker left border for emphasis.

### Anatomy 

<uxdot-example width-adjustment="872px">
  <img src="../accordion-anatomy.png" 
      alt="Anatomy of an accordion with lots of annotations pointing to various parts" 
      width="872" 
      height="755">
</uxdot-example>

1) Collapsed panel
2) Expanded panel
3) Title
4) Panel header region
5) Caret
6) Emphasis
7) Content
8) Panel body region
9) Accent slot
{.example-notes}

### Sizes 
There are two available sizes and the only difference is the title text size. You can use the Small size on large breakpoints, but not the Large size on small breakpoints due to the potential of long title text wrapping to more than two lines.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-sizes.png"
      alt="A large size accordion with text underneath saying ‘Large size’ and a small size accordion with text underneath saying ‘Small size’" 
      width="872"
      height="536">
</uxdot-example>

## Theme 
An accordion is available in both light and dark themes. The light theme expanded panel includes a box shadow, but the dark theme does not.
### Light theme 

<uxdot-example width-adjustment="872px">
  <img src="../accordion-theme-light.png" 
      alt="Light theme accordion with an expanded panel" 
      width="872" 
      height="213">
</uxdot-example>

### Dark theme 

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../accordion-theme-dark.png" 
      alt="Dark theme accordion with an expanded panel" 
      width="872"
      height="213">
</uxdot-example>

## Configuration

An expanded panel does not have a maximum height, but it may scroll if constrained by vertical space. The width of an accordion varies based on content and page layout. Title text and icons are horizontally aligned.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-configuration.png" 
      alt="How an accordion is constructed showing alignment, space, scrolling, and width details" 
      width="872" 
      height="356">
</uxdot-example>

### Accent slot

The accent slot can be positioned inline or below the panel's title. This can contain tags, badges, or other small elements with secondary information.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-accent-slot.png" 
      alt="Accordion panel with two tags in inline accent slot and an accordion with two tags below the title" width="872"
      height="221">
</uxdot-example>

### Nested panels 
Panels can be nested to help organize complex or granular sections of content.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-nested-panels.png" 
      alt="An accordion with an expanded panel and a nested expanded panel" 
      width="872"
      height="442">
</uxdot-example>

### Stacked panels 
Multiple panels can be expanded simultaneously even when nested.

<uxdot-example width-adjustment="872px">
  <img src="../accordion-stacked-panels.png" 
      alt="An accordion with one collapsed panel on top and two stacked expanded panels below"
      width="872"
      height="999">
</uxdot-example>  

## Space 

<uxdot-example width-adjustment="872px">
  <img src="../accordion-space.png" 
      alt="Accordion spacing within panels and in between elements like titles, body text, rules, and icons" width="872"
      height="1336">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg, xl, 3xl"></uxdot-spacer-tokens-table>

## Interaction states 
Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example width-adjustment="872px">
  <img src="../accordion-hover-theme-light.png" 
      alt="Light theme accordion with a hover state"
      width="872"
      height="213">
</uxdot-example>

<uxdot-example width-adjustment="872px" color-palette="darkest">
  <img src="../accordion-hover-theme-dark.png"
      alt="Dark theme accordion with a hover state" 
      width="872"
      height="213">
</uxdot-example>


<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
        <th scope="col" data-label="Dark theme">Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - panel header</td>
        <td data-label="Light theme">#F2F2F2</td>
        <td data-label="Dark theme">#292929</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Focus

<uxdot-example width-adjustment="872px">
  <img src="../accordion-focus-theme-light.png" 
      alt="Light theme accordion with a focus state" 
      width="872"
      height="213">
</uxdot-example>

<uxdot-example width-adjustment="872px" color-palette="darkest">
  <img src="../accordion-focus-theme-dark.png" 
      alt="Dark theme accordion with a focus state" 
      width="872"
      height="213">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
        <th scope="col" data-label="Dark theme">Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - panel header</td>
        <td data-label="Light theme">#F2F2F2</td>
        <td data-label="Dark theme">#292929</td>
      </tr>
      <tr>
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Active 

<uxdot-example width-adjustment="872px">
  <img src="../accordion-active-theme-light.png" 
      alt="Light theme accordion with an active state" 
      width="872"
      height="213">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="../accordion-active-theme-dark.png" 
      alt="Dark theme accordion with an active state" 
      width="872"
      height="213">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Light theme">Light theme</th>
        <th scope="col" data-label="Dark theme">Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - panel header</td>
        <td data-label="Light theme">#F2F2F2</td>
        <td data-label="Dark theme">#292929</td>
      </tr>
    </tbody>
  </table>
</rh-table>
