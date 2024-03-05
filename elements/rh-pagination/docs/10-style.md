## Style

Pagination is a horizontal row of square containers that include a control button or page number in the middle. A maximum of seven pages can be displayed before truncation and the appearance of the **page input field**. The page input field includes a text label, field, and link to the last page. Pagination with truncation **must** include a page input field so users can access hidden pages.

### Anatomy

<figure>
  <uxdot-example width-adjustment="794px">
    <img src="{{ '../pagination-anatomy.png' | url }}" alt="Image of pagination anatomy with lots of annotations">
  </uxdot-example>
  <figcaption>
    <ol>
      <li>First page</li>
      <li>Previous page</li>
      <li>Inactive page</li>
      <li>Active page</li>
      <li>Next page</li>
      <li>Last page</li>
      <li>Navigation controls</li>
      <li>Truncation</li>
      <li>Page input field</li>
      <li>Page numbers</li>
    </ol>
  </figcaption>
</figure>

## Sizes

There are two available sizes and the only difference is the Compact size does not display page numbers.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Compact size is best used when there are a lot of pages and the page input field is not needed.</p>
</rh-alert>

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-style-sizes.png' | url }}" alt="Image of three paginations; full size, full size with page input field, and compact size">
</uxdot-example>


## Theme

Pagination is available in both light and dark themes.

### Light theme

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-theme-light.png' | url }}" alt="Image of light theme pagination"> 
</uxdot-example>

### Dark theme

<uxdot-example color-palette="darkest" width-adjustment="794px">
  <img src="{{ '../pagination-theme-dark.png' | url }}" alt="Image of dark theme pagination">
</uxdot-example>


## Configuration

Pagination is a collection of navigation elements including controls, page numbers, and a page input field. The page input field can be horizontally or vertically centered with pagination. The amount and width of square containers is always the same. Each container is `50px x 50px`. In Full size pagination, there are 11 squares at `570px` combined width and in the Compact size, there are four squares at `206px` combined width.

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-configuration.png' | url }}" alt="Image of pagination construction; several pagination examples showing details like alignment, height, width, and more">
</uxdot-example>


### Active page

Styles for the active page are different from inactive pages so users can see their location. Active page styles do not apply to control buttons either because they are not page numbers.

<rh-alert state="info">
  <h3 slot="header">Helpful tip</h3>
  <p>Active page styles do not apply to the Compact size because there are no page numbers visible.</p>
</rh-alert>

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-active-page-theme-light.png' | url }}" alt="Image of two light theme paginations; one is showing an active page of 4 and the other one is showing an active page of 25">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="794px">
  <img src="{{ '../pagination-active-page-theme-dark.png' | url }}" alt="Image of two dark theme paginations; one is showing an active page of 4 and the other one is showing an active page of 25">
</uxdot-example>


## Space

Space values between elements are the same for both sizes and on all breakpoints.

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-space.png' | url }}" alt="Image of pagination spacing for all sizes and orientations">
</uxdot-example>

<rh-table>
  {% spacerTokensTable 
      caption='',
      headingLevel="4",
      tokens="--rh-space-xs, --rh-space-sm, --rh-space-md, --rh-space-xl,  --rh-space-2xl" %}
  {% endspacerTokensTable %}
</rh-table>


## Interaction states

Interactive elements include control and inactive page buttons, the page input field, and last page link.


### Hover

Control and inactive page number buttons have the same hover state. Truncation is not interactive so it has no hover state.

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-hover-theme-light.png' | url }}" alt="Image of light theme pagination hover states">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-hover-theme-dark.png' | url }}" alt="Image of dark theme pagination hover states">
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
        <td data-label="Property">Color - control - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive page - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - field - bottom border</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - last number link</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1F4</td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - last number</td>
        <td data-label="Light theme">Underline</td>
        <td data-label="Dark theme">Underline</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Focus

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-focus-theme-light.png' | url }}" alt="Image of light theme pagination focus states">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-focus-theme-dark.png' | url }}" alt="Image of dark theme pagination focus states">
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
        <td data-label="Property">Color - control - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive page - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - field - bottom border</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - last number link</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1F4</td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - last number</td>
        <td data-label="Light theme">Underline</td>
        <td data-label="Dark theme">Underline</td>
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

<uxdot-example width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-active-theme-light.png' | url }}" alt="Image of light theme pagination active states">
</uxdot-example>

<uxdot-example color-palette="darkest" width-adjustment="794px">
  <img src="{{ '../pagination-interaction-state-active-theme-dark.png' | url }}" alt="Image of dark theme pagination active states">
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
        <td data-label="Property">Color - control - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - inactive page - top border</td>
        <td data-label="Light theme">#4D4D4D</td>
        <td data-label="Dark theme">#C7C7C7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - field - bottom border</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
      <tr>
        <td data-label="Property">Color - last number link</td>
        <td data-label="Light theme">#004080</td>
        <td data-label="Dark theme">#BEE1F4</td>
      </tr>
      <tr>
        <td data-label="Property">Text decoration - last number</td>
        <td data-label="Light theme">Underline</td>
        <td data-label="Dark theme">Underline</td>
      </tr>
      <tr>
        <td data-label="Property">Color - focus ring</td>
        <td data-label="Light theme">#0066CC</td>
        <td data-label="Dark theme">#73BCF7</td>
      </tr>
    </tbody>
  </table>
</rh-table>
