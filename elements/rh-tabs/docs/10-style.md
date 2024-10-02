
## Style

Tabs are used to group related content allowing users to navigate a view without leaving the page) Each tab is a text label placed in a visible or invisible container. There are two variants in two orientations and some of the styles and padding shift slightly depending on which variant is used.

### Anatomy

<figure>
  <uxdot-example width-adjustment="872px">
    <img src="../tabs-anatomy.png"
        alt="Image of tabs anatomy showing horizontal and vertical open tabs and box tabs with lots of annotations"
        width="872"
        height="1093">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Active tab</li>
      <li>Active tab accent</li>
      <li>Inactive tab</li>
      <li>Divider line</li>
      <li>Content area</li>
      <li>Overflow button - left</li>
      <li>Overflow button - right</li>
      <li>Inactive tab surface</li>
    </ol>
  </figcaption>
</figure>

### Variants

There are two available variants. Open tabs has a more understated style whereas Box tabs has a more traditional style.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-variants.png" alt="Image of open tabs on top and box tabs below">
</uxdot-example>


### Orientations

There are two available orientations and the only difference is padding.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-orientation.png"
        alt="Image of horizontal, vertical, and tabs with overflow buttons showing padding spacers"
        width="872"
        height="712">
</uxdot-example>


## Theme

Both variants and orientations are available in both light and dark themes.


### Light theme

<uxdot-example width-adjustment="872px">
  <img src="../tabs-theme-light.png"
        alt="Image of light theme tabs"
        width="872"
        height="709">
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
        <td data-label="Property">Color - active tab text</td>
        <td data-label="Light theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active tab accent</td>
        <td data-label="Light theme">#EE0000</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active tab surface (Box tabs only)</td>
        <td data-label="Light theme">#FFFFFF</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive tab text</td>
        <td data-label="Light theme">#4D4D4D</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive tab surface (Box tabs only)</td>
        <td data-label="Light theme">#F2F2F2</td>
      </tr>
      <tr>
        <td data-label="Property">Color - disabled chevron icon</td>
        <td data-label="Light theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active chevron icon</td>
        <td data-label="Light theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - chevron button surface</td>
        <td data-label="Light theme">#FFFFFF</td>
      </tr>
      <tr>
        <td data-label="Property">Border width - active tab and chevron button accent</td>
        <td data-label="Light theme">4px</td>
      </tr>
      <tr>
        <td data-label="Property">Border width - divider line and borders</td>
        <td data-label="Light theme">1px</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-theme-dark.png"
        alt="Image of dark theme tabs"
        width="872"
        height="709">
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
        <td data-label="Property">Color - active tab text</td>
        <td data-label="Dark theme">#FFFFFF</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active tab accent</td>
        <td data-label="Dark theme">#FF542E</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active tab surface (Box tabs only)</td>
        <td data-label="Dark theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive tab text</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive tab surface (Box tabs only)</td>
        <td data-label="Dark theme">#292929</td>
      </tr>
      <tr>
        <td data-label="Property">Color - disabled chevron icon</td>
        <td data-label="Dark theme">#707070</td>
      </tr>
      <tr>
        <td data-label="Property">Color - active chevron icon</td>
        <td data-label="Dark theme">#FFFFFF</td>
      </tr>
      <tr>
        <td data-label="Property">Color - chevron button surface</td>
        <td data-label="Dark theme">#151515</td>
      </tr>
      <tr>
        <td data-label="Property">Border width - active tab and chevron button accent</td>
        <td data-label="Dark theme">4px</td>
      </tr>
      <tr>
        <td data-label="Property">Border width - divider line and borders</td>
        <td data-label="Dark theme">1px</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Configuration

The panel for both orientations of tabs does not have a maximum height and should not scroll.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-configuration.png"
        alt="Image of horizontal and vertical tabs construction; several examples showing details like alignment, height, width, and more"
        width="872"
        height="668">
</uxdot-example>


### Overflow buttons

Overflow buttons are containers with chevron icons that are added to tabs on small breakpoints.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-configuration-overflow-buttons.png"
        alt="Image of horizontal and vertical tabs with overflow buttons showing padding spacers"
        width="544"
        height="232">
</uxdot-example>


## Space

Box tabs are separated by a 1px divider.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-space-open.png"
        alt="Image of open tabs spacing for all sizes and orientations"
        width="872"
        height="289">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-space-box.png"
        alt="Image of box tabs spacing for all sizes and orientations"
        width="872"
        height="388">
</uxdot-example>

<rh-table>
{% spacerTokensTable headline="", caption='', headingLevel="4", tokens="--rh-space-md, --rh-space-lg, --rh-space-2xl" %} {% endspacerTokensTable %}
</rh-table>


## Interaction states

Interactive elements include inactive tabs and overflow buttons.


### Hover - Open tabs

Inactive tabs and overflow buttons have the same hover state.

<uxdot-example width-adjustment="872px">
  <img src="../tabs-open-interaction-state-hover-theme-light.png"
        alt="Image of light theme open tabs hover states"
        width="872"
        height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-open-interaction-state-hover-theme-dark.png"
        alt="Image of dark theme open tabs hover states"
        width="872"
        height="289">
</uxdot-example>


### Hover - Box tabs

<uxdot-example width-adjustment="872px">
  <img src="../tabs-box-interaction-state-hover-theme-light.png"
        alt="Image of light theme box tabs hover states"
        width="872"
        height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-box-interaction-state-hover-theme-dark.png"
        alt="Image of dark theme box tabs hover states"
        width="872"
        height="356">
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
        <td data-label="Property">Color - accent</td>
        <td data-label="Light theme">#707070</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - text and chevron icon</td>
        <td data-label="Light theme">#FFFFFF</td>
        <td data-label="Dark theme">#151515</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Focus - Open tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-open-interaction-state-focus-theme-light.png"
        alt="Image of light theme open tabs focus states"
        width="872"
        height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-open-interaction-state-focus-theme-dark.png"
        alt="Image of dark theme open tabs focus states"
        width="872"
        height="289">
</uxdot-example>


### Focus - Box tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-box-interaction-state-focus-theme-light.png"
        alt="Image of light theme box tabs focus states"
        width="872"
        height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-box-interaction-state-focus-theme-dark.png"
        alt="Image of dark theme box tabs focus states"
        width="872"
        height="356">
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


### Active - Open tabs
<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-open-interaction-state-active-theme-light.png"
        alt="Image of light theme open tabs active states"
        width="872"
        height="289">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-open-interaction-state-active-theme-dark.png"
        alt="Image of dark theme open tabs active states"
        width="872"
        height="289">
</uxdot-example>


### Active - Box tabs

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>The Active state has the same styles as the Hover state.</p> 
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="../tabs-box-interaction-state-active-theme-light.png"
        alt="Image of light theme box tabs active states"
        width="872"
        height="356">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="872px">
  <img src="../tabs-box-interaction-state-active-theme-dark.png"
        alt="Image of dark theme box tabs active states"
        width="872"
        height="356">
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
