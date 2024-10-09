## Style

A button is clickable text or an icon that triggers an action on the page or in 
the background. Depending on the action, content, and hierarchy, a button can be 
used on its own or grouped with other buttons.

### Anatomy

<figure>
  <uxdot-example width-adjustment="428px">
    <img src="../button-anatomy.png"
        alt="Anatomy image of buttons with numbered annotations"
        width="428"
        height="94">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Text</li>
      <li>Container</li>
      <li>Border</li>
      <li>Text only</li>
      <li>Icon</li>
      <li>Icon background</li>
      <li>Icon only</li>
    </ol>
  </figcaption>
</figure>

## Theme

Buttons are available in both light and dark themes.

### Light and dark themes

<uxdot-example width-adjustment="494px">
  <img src="../button-theme-light.png"
        alt="Image of light theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons"
        width="494"
        height="124">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="494px">
  <img src="../button-theme-dark.png"
        alt="Image of dark theme Danger, Primary, Secondary, Tertiary, Link, Play, and Close buttons"
        width="494"
        height="124">
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
        <td data-label="Property">Color - Danger button text</td>
        <td data-label="Light theme"><code>#FFFFFF</code></td>
        <td data-label="Dark theme"><code>#151515</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Danger button surface</td>
        <td data-label="Light theme"><code>#C9190B</code></td>
        <td data-label="Dark theme"><code>#FF542E</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Primary button text</td>
        <td data-label="Light theme"><code>#FFFFFF</code></td>
        <td data-label="Dark theme"><code>#FFFFFF</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Primary button surface</td>
        <td data-label="Light theme"><code>#0066CC</code></td>
        <td data-label="Dark theme"><code>#0066CC</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Secondary button text and border</td>
        <td data-label="Light theme"><code>#0066CC</code></td>
        <td data-label="Dark theme"><code>#2B9AF3</code></td>
      </tr>
      <tr>
        <td data-label="Property">Border width - Secondary button</td>
        <td data-label="Light theme"><code>1px</code></td>
        <td data-label="Dark theme"><code>1px</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Tertiary button text and border</td>
        <td data-label="Light theme"><code>#151515</code></td>
        <td data-label="Dark theme"><code>#FFFFFF</code></td>
      </tr>
      <tr>
        <td data-label="Property">Border width - Tertiary button</td>
        <td data-label="Light theme"><code>1px</code></td>
        <td data-label="Dark theme"><code>1px</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Link button text</td>
        <td data-label="Light theme"><code>#0066CC</code></td>
        <td data-label="Dark theme"><code>#2B9AF3</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Play button background</td>
        <td data-label="Light theme"><code>#151515</code></td>
        <td data-label="Dark theme"><code>#FFFFFF</code></td>
      </tr>
      <tr>
        <td data-label="Property">Opacity - Play button background</td>
        <td data-label="Light theme"><code>50%</code></td>
        <td data-label="Dark theme"><code>25%</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Close button</td>
        <td data-label="Light theme"><code>#4D4D4D</code></td>
        <td data-label="Dark theme"><code>#C7C7C7</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>
    
## Configuration

All buttons with a container have the same height and border radius, but the 
width varies based on the amount of content. Buttons in a row are all 
horizontally centered. When a Play button is placed on an image, it is both 
horizontally and vertically centered and stays the same size no matter how big 
or small the image gets.

<uxdot-example width-adjustment="818px">
  <img src="../button-configuration.png"
        alt="Image of buttons and various specs like border radius, height, icon size, width, alignment, placement, and more"
        width="818"
        height="386">
</uxdot-example>

## Space

Space values are the same on all breakpoints for the following buttons. To see 
space values when buttons are grouped, go to the [Guidelines](./guidelines) page.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Buttons include a custom <code>6px</code> spacer, do not use it anywhere else.</p>
</rh-alert>

<uxdot-example width-adjustment="721px">
  <img src="../button-space.png"
        alt="Image of Danger, Primary, Secondary, Tertiary, Link, and Close buttons with spacing values in between"
        width="721"
        height="68">
</uxdot-example>

<rh-table>
{% spacerTokensTable 
  headline="",
  caption='',
  headingLevel="4",
  tokens="--rh-space-sm, --rh-space-md, --rh-space-lg" %}
{% endspacerTokensTable %}
</rh-table>

## Interaction states

Interaction states are visual representations used to communicate the status of 
an element or pattern.

### Hover

<uxdot-example width-adjustment="495px">
  <img src="../button-interaction-state-hover-theme-light.png"
        alt="Image of light theme button hover states"
        width="495"
        height="124">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="495px">
  <img src="../button-interaction-state-hover-theme-dark.png"
        alt="Image of dark theme button hover states"
        width="495"
        height="124">
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
        <td data-label="Property">Color - Danger button surface</td>
        <td data-label="Light theme"><code>#A30000</code></td>
        <td data-label="Dark theme"><code>#FF8266</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Primary button surface</td>
        <td data-label="Light theme"><code>#004080</code></td>
        <td data-label="Dark theme"><code>#004080</code></td>
      </tr>
      <tr>
        <td data-label="Property">Border width - Secondary button</td>
        <td data-label="Light theme"><code>2px</code></td>
        <td data-label="Dark theme"><code>2px</code></td>
      </tr>
      <tr>
        <td data-label="Property">Border width - Tertiary button</td>
        <td data-label="Light theme"><code>2px</code></td>
        <td data-label="Dark theme"><code>2px</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Link button text</td>
        <td data-label="Light theme"><code>#004080</code></td>
        <td data-label="Dark theme"><code>#73BCF7</code></td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - Link button text</td>
        <td data-label="Light theme"><code>Underline</code></td>
        <td data-label="Dark theme"><code>Underline</code></td>
      </tr>
      <tr>
        <td data-label="Property">Opacity - Play button background</td>
        <td data-label="Light theme"><code>75%</code></td>
        <td data-label="Dark theme"><code>50%</code></td>
      </tr>
      <tr>
        <td data-label="Property">Color - Close button</td>
        <td data-label="Light theme"><code>#151515</code></td>
        <td data-label="Dark theme"><code>#FFFFFF</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Focus

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Focus state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="530px">
  <img src="../button-interaction-state-focus-theme-light.png"
        alt="Image of light theme button focus states"
        width="530"
        height="128">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="530px">
  <img src="../button-interaction-state-focus-theme-dark.png"
        alt="Image of dark theme button focus states"
        width="530"
        height="128">
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
        <td data-label="Light theme"><code>#0066CC</code></td>
        <td data-label="Dark theme"><code>#73BCF7</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Active

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="530px">
  <img src="../button-interaction-state-active-theme-light.png"
        alt="Image of light theme button active states"
        width="530"
        height="128">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="530px">
  <img src="../button-interaction-state-active-theme-dark.png"
        alt="Image of dark theme button active states"
        width="530"
        height="128">
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
        <td data-label="Property"> Color - focus ring </td>
        <td data-label="Light theme"><code>#0066CC</code></td>
        <td data-label="Dark theme"><code>#73BCF7</code></td>
      </tr>
    </tbody>
  </table>
</rh-table>