## Style

An avatar is a placeholder graphic, custom photo, or generated image. It can 
be used by itself, but it is often paired with detailed text about the user 
including their full name, job title, and company.

### Anatomy

<figure>
  <uxdot-example width-adjustment="239px">
    <img src="../avatar-anatomy.png" 
        alt="Anatomy of an avatar group with numbered annotations"
        width="239"
        height="100">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>Thumbnail</li>
      <li>Job details text</li>
    </ol>
  </figcaption>
 </figure>

## Variants

The Default variant is visible when a user has not uploaded a **custom image** 
(like a photo). Once they do, what they provided replaces the gray thumbnail. 
If they choose not to, a colored pattern will be generated instead based on 
their name. A specific name is linked to the same pattern, so thumbnails can 
stay static without storing lots of generated images.

<uxdot-example width-adjustment="651px">
  <img src="../avatar-variations.png" 
      alt="Image of all avatar groups including default, photo, green squares, purple squares, and blue triangles"
      width="651"
      height="487">
</uxdot-example>

### Plain

The avatar thumbnail can be used on its own in places like 
[accordions](https://ux.redhat.com/elements/accordion/), 
[cards](https://ux.redhat.com/elements/card/), navigations, tables, and more.

<uxdot-example width-adjustment="576px">
  <img src="../avatar-plain.png" 
    alt="Image of a row of only avatar thumbnails"
    width="576"
    height="64">
</uxdot-example>

### Link

Links can be applied to full name or job details text.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not apply links to full name <strong>and</strong> job details text at the same time.</p>
</rh-alert>

<uxdot-example width-adjustment="706px">
  <img src="../avatar-links.png" 
      alt="Image of two avatar groups; one has the full name linked and the other has the company name linked"
      width="706"
      height="64">
</uxdot-example>

## Theme

All avatar variants are available in both light and dark themes.

### Light and dark themes

<uxdot-example width-adjustment="239px">
  <img src="../avatar-theme-light.png" 
    alt="Image of a light theme avatar group"
    width="239"
    height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="239px">
  <img src="../avatar-theme-dark.png" 
      alt="Image of a dark theme avatar group"
      width="239"
      height="64">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Light theme">Light theme</th>
        <th scope="col" data-label="Dark theme">Dark theme</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Element">Color - job details text</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Configuration

The default size of the avatar thumbnail is `64px x 64px` and the avatar 
thumbnail and job details text are horizontally centered. To see alignment 
examples, go to the 
[Guidelines](https://ux.redhat.com/elements/avatar/guidelines/) page.

<uxdot-example width-adjustment="463px">
  <img src="../avatar-configuration.png" 
      alt="Image of two avatar groups showing specs like height, width, and centering/alignment"
      width="463"
      height="89">
</uxdot-example>

### Job details text

Job details text has specific styles applied to it.

<uxdot-example width-adjustment="546px">
  <img src="../avatar-job-details-text.png" 
      alt="Image of two avatar groups showing only job details text left justified and center justified"
      width="546"
      height="39">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Property">Property</th>
        <th scope="col" data-label="Current Value">Current Value</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Property">Font weight - full name</td>
        <td data-label="Current Value">Medium</td>
      </tr>
      <tr>
        <td data-label="Property">Font weight - job title and company name</td>
        <td data-label="Current Value">Regular</td>
      </tr>
      <tr>
        <td data-label="Property">Font style - company name</td>
        <td data-label="Current Value">Italic</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Space
 
Space values are the same for all variants and on all breakpoints.

<uxdot-example width-adjustment="570px">
  <img src="../avatar-space.png" 
      alt="Image of all avatar groups with spacing values in between"
      width="570"
      height="440">
</uxdot-example>

<uxdot-spacer-tokens-table tokens="lg"></uxdot-spacer-tokens-table>

## Interaction states

Interaction states are visual representations used to communicate the status of an element or pattern.

### Hover

<uxdot-example width-adjustment="293px">
  <img src="../avatar-interaction-state-hover-theme-light.png" 
      alt="Image of light theme avatar group hover states"
      width="293"
      height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img src="../avatar-interaction-state-hover-theme-dark.png" 
      alt="Image of dark theme avatar group hover states"
      width="293"
      height="64">
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
        <td data-label="Property">Color - full name text</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1FA</td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - full name text</td>
        <td data-label="Light theme">Underline</td>
        <td data-label="Dark theme">Underline</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Focus

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


<uxdot-example width-adjustment="293px">
  <img src="../avatar-interaction-state-focus-theme-light.png" 
      alt="Image of light theme avatar group focus states"
      width="293"
      height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img src="../avatar-interaction-state-focus-theme-dark.png" 
      alt="Image of dark theme avatar group focus states"
      width="293"
      height="64">
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
  <h4 slot="header">Helpful tip</h4>
  <p>The Active state has the same styles as the Hover state.</p>
</rh-alert>

<uxdot-example width-adjustment="293px">
  <img src="../avatar-interaction-state-active-theme-light.png" 
      alt="Image of light theme avatar group active states"
      width="293"
      height="64">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="293px">
  <img src="../avatar-interaction-state-active-theme-dark.png" 
      alt="Image of dark theme avatar group active states"
      width="293"
      height="64">
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
        <td data-label="Property">Color - full name text</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1FA</td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - full name text</td>
        <td data-label="Light theme">Underline</td>
        <td data-label="Dark theme">Underline</td>
      </tr>
    </tbody>
  </table>
</rh-table>


