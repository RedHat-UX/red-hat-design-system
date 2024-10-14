## Style

A secondary navigation is a group of links and menus placed in a bar container that spans the width of the browser window.
  
### Anatomy

A secondary navigation is divided into three slots, it is not required to use all three slots.

- Slot 1 - includes primary elements like product logo text
- Slot 2 - includes secondary elements like links and menus
- Slot 3 - includes tertiary elements like a call to action (optional)

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-slots.png"
        alt="Image of a gray secondary navigation background with dotted line boxes that say slot 1, slot 2, and slot 3 from left to right"
        width="872"
        height="98">
</uxdot-example>


### Using slots

Slots are defined areas where content can be inserted, each slot includes a specific type of content.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Slot number">Slot number</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Slot number">Slot 1</td>
        <td data-label="Use case">Includes a linked logo or text that directs users to a main page or home page</td>
      </tr>
      <tr>
        <td data-label="Slot number">Slot 2</td>
        <td data-label="Use case">Includes navigation elements like inline links, menus, and external links</td>
      </tr>
      <tr>
        <td data-label="Slot number">Slot 3</td>
        <td data-label="Use case">May include interactive elements like a call to action</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Slots and breakpoints

On small breakpoints, navigation elements in Slot 2 will collapse into an accordion within a menu. Optional elements in Slot 3 will be placed below the accordion or hidden completely.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-slots-and-breakpoints.png"
        alt="Image of four secondary navigations; two large ones and two small ones with dotted line boxes around each slot and labels that say slot 1, slot 2, and slot 3"
        width="872"
        height="748">
</uxdot-example>

### Using the expandable menu

The expandable menu is an area where content can be placed like text, links, calls to action, and more. The menu requires a backdrop so it can separate itself from the page underneath, this helps users focus on the menu content.

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
        <td data-label="Property">Color - backdrop</td>
        <td data-label="Current value">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Opacity - background</td>
        <td data-label="Current value">50%</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Theme

A secondary navigation is available in both light and dark themes. The light theme background includes a box shadow whereas the dark theme background includes a gray bottom border.

### Light theme

The light theme secondary navigation should be used in environments with a lighter look and feel. The box shadow is always visible unless covered by an expanded menu.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-theme-light.png"
        alt="Image of a light theme secondary navigation"
        width="872"
        height="98">
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
        <td data-label="Property">Color - all text and chevron icons</td>
        <td data-label="Light theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - bar background</td>
        <td data-label="Light theme">#F2F2F2</td>
      </tr>
      <tr>
        <td data-label="Property">Box shadow - bar background</td>
        <td data-label="Light theme">0 2px 4px 0 rgba(21, 21, 21, 0.2)</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Dark theme

The dark theme secondary navigation should be used in environments with a darker look and feel. The gray bottom border is always visible unless covered by an expanded menu.

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../nav-secondary-style-theme-dark.png"
        alt="Image of a dark theme secondary navigation"
        width="872"
        height="98">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Dark theme">Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Color - all text and chevron icons</td>
        <td data-label="Dark theme">#FFFFFF</td>
      </tr>
      <tr>
        <td data-label="Property">Color - bar background</td>
        <td data-label="Dark theme">#383838</td>
      </tr>
      <tr>
        <td data-label="Property">Box shadow - bar background</td>
        <td data-label="Dark theme">#4D4D4D</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Configuration

A secondary navigation spans the entire width of a browser window on all breakpoints. It has a fixed height of <code>86px</code> on large breakpoints and a fixed height of <code>80px</code> on small breakpoints even if Slot 1 text is only one line. Content in all slots is horizontally centered with the background.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-configuration.png"
        alt="Image of a secondary navigation construction; several examples showing details like spacing, alignment, height, width, and more"
        width="872"
        height="802">
</uxdot-example>

### Expandable menu styles

An expandable menu includes content like text, links, calls to action, and more. The menu tab, panel, and backdrop have the same styles on all breakpoints.

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-expandable-menu-styles.png"
        alt="Image of two stacked secondary navigations with menus expanded; one for large breakpoints and the other for small breakpoints"
        width="872"
        height="1125">
</uxdot-example>

### Slot text labels

Slot 1 and Slot 2 text elements have specific styles applied to them.

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>Slot 3 usually includes a Call to action. To see Call to action styles, visit the <a href="/elements/call-to-action">Call to action</a> page.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-style-text-labels.png"
        alt="Image of four stacked secondary navigations; two are light theme and two are dark theme, both with dotted line boxes and labels that say slot 1 and slot 2"
        width="872"
        height="430">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Large breakpoints">Large breakpoints</th>
        <th scope="col" data-label="Small breakpoints">Small breakpoints</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Slot 1 - font family</td>
        <td data-label="Large breakpoints">Red Hat Display</td>
        <td data-label="Small breakpoints">Red Hat Display</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 1 - font size</td>
        <td data-label="Large breakpoints">18px <br> 1.125rem</td>
        <td data-label="Small breakpoints">16px <br> 1.0rem</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 1 - font weight</td>
        <td data-label="Large breakpoints">Medium</td>
        <td data-label="Small breakpoints">Medium</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 1 - line height</td>
        <td data-label="Large breakpoints">1.5 (27)</td>
        <td data-label="Small breakpoints">1.5 (24)</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 1 - letter spacing</td>
        <td data-label="Large breakpoints">0.4px <br> 0.025rem</td>
        <td data-label="Small breakpoints">0.4px <br> 0.025rem</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 2 - font family</td>
        <td data-label="Large breakpoints">Red Hat Text</td>
        <td data-label="Small breakpoints">Red Hat Text</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 2 - font size</td>
        <td data-label="Large breakpoints">16px <br> 1.0rem</td>
        <td data-label="Small breakpoints">16px <br> 1.0rem</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 2 - font weight</td>
        <td data-label="Large breakpoints">Regular</td>
        <td data-label="Small breakpoints">Regular</td>
      </tr>
      <tr>
        <td data-label="Property">Slot 2 - line height</td>
        <td data-label="Large breakpoints">1.5 (24)</td>
        <td data-label="Small breakpoints">1.5 (24)</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Space

The amount of space in a secondary navigation remains about the same on all breakpoints.

### Large breakpoints

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-space-breakpoints-large.png"
        alt="Image of secondary navigation spacing values on large breakpoints"
        width="1000"
        height="582">
</uxdot-example>


### Small breakpoints  

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-space-breakpoints-small.png"
        alt="Image of secondary navigation spacing values on small breakpoints"
        width="984"
        height="714">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="md, lg, 2xl"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-hover-theme-light.png"
        alt="Image of light theme secondary navigation hover states"
        width="872"
        height="238">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-hover-theme-dark.png"
        alt="Image of dark theme secondary navigation hover states"
        width="872"
        height="238">
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
        <td data-label="Property">Color - Slot 1 text</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - Slot 2 top border</td>
        <td data-label="Light theme">#EE0000</td>
        <td data-label="Dark theme">#FF542E</td>
      </tr>
      <tr>
        <td data-label="Property">Border width - Slot 2 top border</td>
        <td data-label="Light theme">4px</td>
        <td data-label="Dark theme">4px</td>
      </tr>
      <tr>
        <td data-label="Property">Color - call to action text</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1F4</td>
      </tr>
      <tr>
        <td data-label="Property">Color - menu tab background</td>
        <td data-label="Light theme">#FFFFFF</td>
        <td data-label="Dark theme">#151515</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Focus

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p> 
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-focus-theme-light.png"
        alt="Image of light theme secondary navigation focus states"
        width="872"
        height="212">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-focus-theme-dark.png"
        alt="Image of dark theme secondary navigation focus states"
        width="872"
        height="212">
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
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Active

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-active-theme-light.png"
        alt="Image of light theme secondary navigation active states"
        width="872"
        height="212">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../nav-secondary-interaction-state-active-theme-dark.png"
        alt="Image of dark theme secondary navigation active states"
        width="872"
        height="212">
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
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
    </tbody>
  </table>
</rh-table>
