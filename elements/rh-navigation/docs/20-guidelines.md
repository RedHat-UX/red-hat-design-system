## Usage

### Primary navigation

The primary navigation is used for wayfinding on all Red Hat web properties. 
It should include the most important content a visitor needs or might be 
looking for.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-usage-intro.png" alt="Primary navigation - usage">
</uxdot-example>


### Full-width expandable tray

Menus will trigger an expandable tray when selected and include content or 
tasks that are specific to the website in which it is used. Use the expandable 
tray to organize a large amount of content in two, three, or four columns.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not use more than 4 columns in a full-width expandable tray, consider 
  using a component like [Tabs](/elements/tabs/) instead for 
  more organization options.</p>
</rh-alert>


<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../full-width-tray-4-columns.png" alt="Primary navigation - full-width expandable tray (four columns)">
</uxdot-example>

If content is organized in less than four columns, containers will stretch to fill the columns.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../full-width-tray-3-columns.png" alt="Primary navigation - full-width expandable tray (three columns)">
</uxdot-example>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../full-width-tray-2-columns.png" alt="Primary navigation - full-width expandable tray (two columns)">
</uxdot-example>


### Fixed-width expandable tray

Sometimes a small amount of content can be placed in a fixed-width expandable 
tray and the size of this expandable tray depends on the amount of content. 
Utilities are not able to leverage fixed-width expandable trays at this time.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Do not use more than 2 columns to organize content in a fixed-width 
  expandable tray, consider using a full-width expandable tray instead.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../fixed-width-tray.png" alt="Primary navigation - fixed-width expandable tray">
</uxdot-example>


### Menu slots

There is no maximum number of menu slots, but be conscious of space when 
adding menus especially when the text is translated to other languages.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../menu-slots.png" alt="Primary navigation - menu slots">
</uxdot-example>


### Components in an expandable tray

Use a component like [Tabs](/elements/tabs) to 
organize a very large amount of content that would exceed four columns. If the 
Tabs component is used, it will change to a nested [Accordion]({{ 
'/elements/accordion' | url }}) on small breakpoints.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Red Hat data analysis has shown that displaying 3 tabs performs better than 
  displaying 5 tabs.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../components-in-tray-desktop.png" alt="Primary navigation - components in an expandable tray (desktop)">
</uxdot-example>

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../components-in-tray-mobile.png" alt="Primary navigation - components in an expandable tray (mobile)">
</uxdot-example>


### Utilities

The primary navigation includes utilities which are slots for actions or tools 
for global navigation (search for something, change the language, log in to 
your account, etc.). They may trigger an expandable tray when selected, but 
not all do. They are also customizable depending on specific audience needs or 
goals.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The maximum number of utilities is 4 with the option of adding a fifth when 
  included as part of a personalized experience.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-utilities.png" alt="Primary navigation - utilities">
</uxdot-example>


### Utility ordering

The order of some utilities can be customized or even removed, but not all.

- The Account utility should always be visible on both large and small 
  breakpoints
- The Search and Account utilities should always be visible on large 
  breakpoints
- If a new utility is included as a part of a personalized experience, it 
  should be first
- If no personalized experiences are active, the Search utility should be 
  first and the Account utility should be last
- If a new utility requires a custom-designed icon, contact the [Brand 
  team](mailto:brand@redhat.com)

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../utility-ordering.png" alt="Primary navigation - utility ordering">
</uxdot-example>


### Menus and utilities on small breakpoints

When breakpoints become smaller, menus and most utilities will become hidden 
to reduce visual crowding. The Account utility should always be visible on any 
breakpoint.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../menus-utilities-small-breakpoints.png" alt="Primary navigation - menus and utilities on small breakpoints">
</uxdot-example>


## Website examples

### redhat.com

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../example-rhdc.png" alt="Primary navigation - redhat.com example">
</uxdot-example>


### Developer

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../example-developer.png" alt="Primary navigation - Developer example">
</uxdot-example>


### Hybrid Cloud

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../example-hybrid-cloud.png" alt="Primary navigation - Hybrid Cloud example">
</uxdot-example>


## Behavior

### Scrolling

The primary navigation is always sticky when scrolling on all devices and 
breakpoints.


### Menus

On hover, menu text will display a red bar and gray arrow indicating an 
expandable tray will be triggered if selected.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-menus.png" alt="Primary navigation - menus">
</uxdot-example>


### Utility menus vs. links

Some utilities leverage the expandable tray pattern or function as links.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../utility-menus-vs-links.png" alt="Primary navigation - utility menus vs. links">
</uxdot-example>


### Stacking

When an [Announcement]({{ '/patterns/announcement' | 
url }}) component is used, the primary navigation is positioned below it.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-stacking.png" alt="Primary navigation - stacking">
</uxdot-example>

### Scrolling with expandable tray

If the height of the expandable tray is shorter than the viewport, content 
will scroll underneath.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../scrolling-with-tray-1.png" alt="Primary navigation - scrolling with expandable tray">
</uxdot-example>

If the height of the expandable tray is taller than the viewport, the tray 
will scroll instead.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Be careful with featuring too much content because visitors may not see key 
  information if they have to scroll.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../scrolling-with-tray-2.png" alt="Primary navigation - scrolling with expandable tray">
</uxdot-example>


### Navigating between expandable trays

Only one expandable tray can be visible at a time and there is no animation 
when navigating from one tray to the next.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../navigating-between-trays.png" alt="Primary navigation - navigating between expandable trays">
</uxdot-example>


### Collapsing the expandable tray

Clicking or tapping anywhere outside of the expandable tray should collapse 
it. Pressing the **esc** key should collapse the expandable tray 
as well.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../collapsing-expandable-tray.png" alt="Primary navigation - collapsing the expandable tray">
</uxdot-example>


### Additional behaviors

Keep in mind the following additional behaviors:

- The expandable tray should not collapse or expand without user input by 
  mouse or keyboard
- Scrolling while the expandable tray is visible should not close the tray


## Interaction states

### Default

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../interaction-state-default.png" alt="Primary navigation - default interaction state">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="State">State</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Styling">Styling</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="State">Default</td>
        <td data-label="Element">Menu text</td>
        <td data-label="Styling">RH Text Regular, 16pt / 24 (1.5) /#fff</td>
      </tr>
      <tr>
        <td data-label="State">Default</td>
        <td data-label="Element">Utility icon</td>
        <td data-label="Styling">#fff</td>
      </tr>
      <tr>
        <td data-label="State">Default</td>
        <td data-label="Element">Utility text</td>
        <td data-label="Styling">RH Text Regular, 12pt / 18 (1.5) /#fff</td>
      </tr>
    </tbody>
  </table>
</rh-table>

### Hover

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../interaction-state-hover.png" alt="Primary navigation - hover interaction state">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="State">State</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Styling">Styling</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="State">Hover</td>
        <td data-label="Element">Menu and utility top bar</td>
        <td data-label="Styling">#e00, 3px thickness</td>
      </tr>
      <tr>
        <td data-label="State">Hover</td>
        <td data-label="Element">Arrow below menu text</td>
        <td data-label="Styling">#6a6e73</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Focus

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../interaction-state-focus.png" alt="Primary navigation - focus interaction state">
</uxdot-example>

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The focus state carries over styles from the hover state and also adds a 
  focus indicator.</p>
</rh-alert>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="State">State</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Styling">Styling</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="State">Focus</td>
        <td data-label="Element">Logo, menu, and utility focus indicator</td>
        <td data-label="Styling">#fff, dashed, 1px border width</td>
      </tr>
      <tr>
        <td data-label="State">Focus</td>
        <td data-label="Element">Menu and utility top bar</td>
        <td data-label="Styling">#e00, 3px thickness</td>
      </tr>
    </tbody>
  </table>
</rh-table>


### Active

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../interaction-state-active.png" alt="Primary navigation - active interaction state">
</uxdot-example>

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="State">State</th>
        <th scope="col" data-label="Element">Element</th>
        <th scope="col" data-label="Styling">Styling</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td data-label="State">Active</td>
        <td data-label="Element">Tab top bar</td>
        <td data-label="Styling">#e00, 3px thickness</td>
      </tr>
      <tr>
        <td data-label="State">Active</td>
        <td data-label="Element">Tab background</td>
        <td data-label="Styling">#fff</td>
      </tr>
      <tr>
        <td data-label="State">Active</td>
        <td data-label="Element">Menu text</td>
        <td data-label="Styling">RH Text Regular, 16pt / 24 (1.5) /#151515</td>
      </tr>
      <tr>
        <td data-label="State">Active</td>
        <td data-label="Element">Arrow below menu text</td>
        <td data-label="Styling">#6a6e73</td>
      </tr>
    </tbody>
  </table>
</rh-table>


## Accessibility

### Focus order

A logical focus order helps visitors **understand and operate** Red Hat web 
properties. Elements need to receive focus in an order that preserves meaning, 
therefore the focus order should make sense and not jump around randomly.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../focus-order.png" alt="Primary navigation - focus order">
</uxdot-example>
