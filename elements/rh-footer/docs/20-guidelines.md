## Usage

Use a footer to provide users with additional supporting content and show them 
they are using an official Red Hat website. The footer is the last or lowest 
element in a layout or user interface and is persistently displayed across all 
screens of the user experience.

## Variants

A footer is divided into two parts, the **Website-specific** footer and the 
**Universal** footer.

### Website-specific footer 

Most of the content in the website-specific footer can be customized.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-variant-website-specific.png"
        alt="Image of the website-specific footer showing regions that can and cannot be customized"
        width="968"
        height="596">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Region">Region</th>
        <th scope="col" data-label="Customizable">Customizable</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Region">Website logo</td>
        <td data-label="Customizable">Yes</td>
        <td data-label="Use case">Custom logo of the website where the footer is used</td>
      </tr>
      <tr>
        <td data-label="Region">Social media links</td>
        <td data-label="Customizable">Yes</td>
        <td data-label="Use case">Links to specific social media pages</td>
      </tr>
      <tr>
        <td data-label="Region">Navigation links</td>
        <td data-label="Customizable">Yes</td>
        <td data-label="Use case">Navigation links based on specific information architecture</td>
      </tr>
      <tr>
        <td data-label="Region">Custom message</td>
        <td data-label="Customizable">Yes</td>
        <td data-label="Use case">Custom message to introduce or describe the website</td>
      </tr>
      <tr>
        <td data-label="Region">Red Hat message</td>
        <td data-label="Customizable">No</td>
        <td data-label="Use case">Message about Red Hat that is the same across all websites</td>
      </tr>
      <tr>
        <td data-label="Region">Extra content</td>
        <td data-label="Customizable">Yes</td>
        <td data-label="Use case">Extra content, top task, or call to action (optional)</td>
      </tr>
      <tr>
        <td data-label="Region">Language switcher</td>
        <td data-label="Customizable">No</td>
        <td data-label="Use case">Menu that allows users to switch the language</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Universal footer

Content in the universal footer is always the same across all websites.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-variant-universal.png"
        alt="Image of the universal footer showing only one region that cannot be customized"
        width="968"
        height="200">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Region">Region</th>
        <th scope="col" data-label="Customizable">Customizable</th>
        <th scope="col" data-label="Use case">Use case</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Region">Navigation links</td>
        <td data-label="Customizable">No</td>
        <td data-label="Use case">Links for global pages, Summit, and legal information</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Layout

### Browser window

A footer spans the entire width of the browser window at all breakpoints.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-browser-window.png"
        alt="Image of a footer in a layout spanning the width of the browser window"
        width="968"
        height="1036">
</uxdot-example>


### Universal footer

The universal footer can be used by itself on orphan pages or pages that do not 
fit a specific information architecture like landing pages, minisites, etc. The 
Red Hat fedora always links to redhat.com.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Using the universal footer by itself is acceptable, but never use the website-specific footer by itself.</p>
</rh-alert>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-universal-footer.png"
        alt="Image of the universal footer by itself"
        width="968"
        height="200">
</uxdot-example>

### Other web properties

The footer was designed to be applied to all Red Hat web properties. The layout 
is flexible enough to accommodate grids, elements, text, and more.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-other-web-properties.png" alt="Image of the footer on a Customer Portal website">
</uxdot-example>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-customer-portal.png"
        alt="Image of a footer on a Customer Portal website"
        width="968"
        height="775">
</uxdot-example>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-developer.png"
        alt="Image of a footer on a Developer website"
        width="968"
        height="800">
</uxdot-example>

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-layout-partner-connect.png"
        alt="Image of a footer on a Partner Connect website"
        width="968"
        height="833">
</uxdot-example>


## Behavior

### Columns

If the website-specific footer includes a lot of content, columns can be added 
below the first row of columns.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-behavior-columns-two-rows.png"
        alt="Image of a footer with four columns of links in one row and two columns in the second row"
        width="968"
        height="796">
</uxdot-example>

If the website-specific footer includes less content, columns will stretch to 
fill the empty space.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-behavior-columns-less-content.png"
        alt="Image of a footer with only two columns of links in one row"
        width="968"
        height="796">
</uxdot-example>


If the number of columns changes, social media links will shift position to 
remain aligned to the left edge of the last column.

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-behavior-columns-social-media-icons.png"
        alt="Image of a footer with three columns of links showing an example of social media icons shifting"
        width="968"
        height="754">
</uxdot-example>

## Responsive design

### Large breakpoints

<uxdot-example width-adjustment="968px" variant="full" alignment="left" no-border>
  <img src="../footer-responsive-large-breakpoints.png"
        alt="Image of a large breakpoint footer"
        width="968"
        height="796">
</uxdot-example>


### Small breakpoints

Columns will collapse to an accordion as breakpoints get smaller and other 
content will also get rearranged.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>At small breakpoints, the horizontal rule between the logo, icons, and columns is no longer visible.</p>
</rh-alert>

<uxdot-example width-adjustment="768px" variant="full" alignment="left" no-border>
  <img src="../footer-responsive-small-breakpoints-a.png"
        alt="Image of a tablet breakpoint footer"
        width="768"
        height="1070">
</uxdot-example>

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../footer-responsive-small-breakpoints-b.png"
        alt="Image of a mobile breakpoint footer"
        width="360"
        height="1285">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Breakpoint">Breakpoint</th>
        <th scope="col" data-label="Range">Range</th>
        <th scope="col" data-label="Content layout">Content layout</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="Breakpoint">Desktop, large</td>
        <td data-label="Range">> 1680px</td>
        <td data-label="Content layout">Columns</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Desktop, medium</td>
        <td data-label="Range">1440px - 1679px</td>
        <td data-label="Content layout">Columns</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Desktop, small</td>
        <td data-label="Range">1200px - 1439px</td>
        <td data-label="Content layout">Columns</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Tablet, large</td>
        <td data-label="Range">992px - 1199px</td>
        <td data-label="Content layout">Columns</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Tablet, small</td>
        <td data-label="Range">768px - 991px</td>
        <td data-label="Content layout">Accordion</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Mobile, large</td>
        <td data-label="Range">576px - 767px</td>
        <td data-label="Content layout">Accordion</td>
      </tr>
      <tr>
        <td data-label="Breakpoint">Mobile, small</td>
        <td data-label="Range">< 575px</td>
        <td data-label="Content layout">Accordion</td>
      </tr>
    </tbody>
  </table>
</rh-table>

## Best practices

### Order

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="992px" slot="image">
    <img src="../footer-best-practices-order-do.svg"
          alt="Website-specific footer above the universal footer"
          width="992"
          height="741">
  </uxdot-example>
  <p>Keep the website-specific footer on top.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="992px" slot="image">
    <img src="../footer-best-practices-order-dont.svg"
          alt="Universal footer above the website-specific footer"
          width="992"
          height="741">
  </uxdot-example>
  <p>Do not reverse the order of the website-specific footer and the universal footer.</p>
</uxdot-best-practice>

### Using accordions

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="360px" slot="image">
    <img src="../footer-best-practices-using-accordions-do.svg"
          alt="Four accordions in a website-specific footer at a 360 pixel breakpoint"
          width="360"
          height="1106">
  </uxdot-example>
  <p>Organize footer links in accordions for small breakpoints only.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="992px" slot="image">
    <img src="../footer-best-practices-using-accordions-dont.svg"
          alt="Four accordions in a website-specific footer at a 992 pixel breakpoint"
          width="992"
          height="635">
  </uxdot-example>
  <p>Do not replace columns with an accordion if there is still adequate space.</p>
</uxdot-best-practice>

### Footer types

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example width-adjustment="295px" slot="image">
      <img src="../footer-best-practices-footer-types-do.svg"
            alt="Wireframe of a webpage that shows both the website-specific footer and universal footer"
            width="295"
            height="360">
    </uxdot-example>
    <p>The universal footer should always be present, even if there’s a website-specific footer.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example width-adjustment="295px" slot="image">
      <img src="../footer-best-practices-footer-types-dont.svg"
            alt="Wireframe of a webpage that includes only the website-specific footer"
            width="295"
            height="360">
    </uxdot-example>
    <p>Do not use the website-specific footer without the universal footer.</p>
  </uxdot-best-practice>
</div>

### Universal footer

<uxdot-best-practice variant="do">
  <uxdot-example width-adjustment="992px" slot="image">
    <img src="../footer-best-practices-universal-footer-do.svg"
          alt="Universal footer with gray logo, left-aligned links and text, and copyright information"
          width="992"
          height="178">
  </uxdot-example>
  <p>The universal footer should look the same across all Red Hat websites.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example width-adjustment="992px" slot="image">
    <img src="../footer-best-practices-universal-footer-dont.svg"
          alt="Universal footer with red logo, right-aligned links and text, and no copyright information"
          width="992"
          height="134">
  </uxdot-example>
  <p>Do not create your own custom universal footer by changing, deleting, or rearranging any elements.</p>
</uxdot-best-practice>
