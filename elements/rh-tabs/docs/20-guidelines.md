## Usage

Use tabs to help users navigate information while staying on the same page. Text labels and content in the panel should be related so users know what to expect when they select each tab. Never force users to switch back and forth between tabs to complete a task.


### When to use tabs

Use tabs to organize lots of information into logical sections. Consider using an accordion if that information needs to be viewed simultaneously because using tabs is not suitable as it forces users to rely on short-term memory when switching back and forth. Using an accordion can also accommodate more sections with longer text labels whereas tabs should only display three or four sections with short text labels. Therefore, if viewing lots of sections of content simultaneously is critical to the user experience or if important information requires more focus and less clicking, use an accordion instead.


### Tabs vs. accordion

Tabs allow users to click through content one section at a time whereas an accordion allows users to view multiple sections of content simultaneously.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-vs-accordion.png' | url }}" alt="Image of tabs on top and an accordion below with two panels expanded">
</uxdot-example>


### Number of tabs

To reduce cognitive load and a cluttered user interface, avoid using more than three or four tabs.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-number-of-tabs.png' | url }}" alt="Image of open tabs with three tabs on top and box tabs with three tabs below">
</uxdot-example>


## Variants

When choosing one variation over the other, consider where it is being used. If using tabs multiple times on one page, use one variation only.
<strong>Open tabs</strong> - use if you want to keep your design clean and maintain a minimal look and feel
<strong>Box tabs</strong> - use if your design includes a lot of boxes or you want to maintain the classic tabs look and feel

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-variations.png' | url }}" alt="Image of open tabs on top and box tabs below">
</uxdot-example>


### Orientation

When choosing one orientation over the other, consider the content in the panel, other elements in the layout, and how you want users to read the content:
- Horizontal tabs are placed in the middle of a container and offer users a <strong>top-to-bottom</strong> reading experience
- Vertical tabs are placed on the left side of a container and offer users a <strong>left-to-right</strong> reading experience

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-orientation.png' | url }}" alt="Image of horizontal tabs on top and vertical tabs below">
</uxdot-example>


### Alignment

If using horizontal tabs, the default orientation is left aligned, but center aligned is also an option.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-alignment.png' | url }}" alt="Image of open tabs with left and center alignment and box tabs with left and center alignment">
</uxdot-example>


### Inset and tab panel spacing

An inset is used to ensure consistent alignment and padding between text labels, overflow buttons, and content in the panel.

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>With horizontal tabs, there are two inset options. With vertical tabs, there is only one.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-inset-open.png' | url }}" alt="Image of open tabs showing detailed inset specs">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-inset-box.png' | url }}" alt="Image of box tabs showing detailed inset specs">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-inset-vertical.png' | url }}" alt="Image of vertical tabs showing detailed inset specs">
</uxdot-example>

Certain content layouts may require removing the inset. While this is not a default style, it is possible with custom CSS.

### Logos

In certain edge cases, logos can be used instead of text labels.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-logos.png' | url }}" alt="Image of open tabs with small logos in place of text labels">
</uxdot-example>


## Tab panel

The panel is below or to the right of tabs. Use this area to place other elements or content like text, links, calls to action, and more. Text blocks should not exceed <code>750px</code> to maintain optimal readability.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>The Tabs element has no control over the panel in terms of content, layout, spacing, etc.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-tab-panel-1.png' | url }}" alt="Image of open tabs with a text block and a card">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-tab-panel-2.png' | url }}" alt="Image of open tabs with a title and a wide card">
</uxdot-example>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-tab-panel-3.png' | url }}" alt="Image of open tabs with a text block and a blockquote">
</uxdot-example>


## Writing content

### Text labels

Text labels should be concise, scannable, and descriptive of content in the panel. They should not exceed more than two or three short words. If they do, work with a content strategist to shorten them.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-text-labels.png' | url }}" alt="Image of open tabs with examples of adequate and long text labels">
</uxdot-example>


### Character count

In general, tabs should have three or four text labels maximum. Text labels should be short but descriptive.

Text labels should be short but descriptive.

<rh-table>
  <table>
    <thead>
      <tr>
        <th scope="col" data-label="Column count">Column count</th>
        <th scope="col" data-label="Character count">Character count</th>
      </tr>
    </thead>
    <tbody>
        <tr>
          <td data-label="Column count">3 to 4</td>
          <td data-label="Character count">20 to 30</td>
        </tr>
    </tbody>
  </table>
</rh-table>


## Layout

### Horizontal tabs width

The divider line can be set to any width or be the same width as the list of tabs.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-layout-horizontal-width.png' | url }}" alt="Image of open tabs with a stretched divider line on top and box tabs with a divider line constrained to the width of text labels below">
</uxdot-example>


### Vertical tabs height

The divider line will become taller if the height of content in the panel exceeds the height of vertical tabs.

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-layout-vertical-height.png' | url }}" alt="Image of vertical tabs with a short amount of content in the panel on top and vertical tabs with a long amount of content in the panel below">
</uxdot-example>


### Card

Tabs can be used in a card if the layout is wide enough and there are fewer tabs.

<uxdot-example width-adjustment="480px">
  <img src="{{ '../tabs-layout-card.png' | url }}" alt="Image of open tabs in a card with only two tabs">
</uxdot-example>


## Behavior

### Overflow

If the number of tabs exceeds the container width or breakpoint, overflow buttons with chevron icons are added to each side so users can horizontally scroll to reveal hidden tabs.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Long text labels will make overflow buttons appear sooner, try and write text labels as short as possible.</p>
</rh-alert>

<uxdot-example width-adjustment="872px">
  <img src="{{ '../tabs-behavior-overflow.png' | url }}" alt="Image of open tabs at various widths showing overflow buttons on top and box tabs at various widths showing overflow buttons below">
</uxdot-example>


### Navigating overflow tabs

When the first tab is active, the left overflow button is disabled. When the last tab is active, the right overflow button is disabled. When a tab that is cut off is selected, the list of tabs shifts so the selected tab is in full view.

<uxdot-example width-adjustment="544px">
  <img src="{{ '../tabs-behavior-navigating-overflow-tabs.png' | url }}" alt="Image of selecting a cut off tab and the list of tabs shifting to reveal the selected tab in full view">
</uxdot-example>


## Responsive design

### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="{{ '../tabs-responsive-design-breakpoints-large.png' | url }}" alt="Image of horizontal and vertical tabs on desktop and tablet breakpoints">
</uxdot-example>


### Small breakpoints

Vertical tabs switch to horizontal tabs with overflow buttons on small breakpoints.

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="{{ '../tabs-responsive-design-breakpoints-small.png' | url }}" alt="Image of tabs with overflow buttons on small breakpoints">
</uxdot-example>


## Best practices

### Not enough tabs

There should be at least two tabs minimum.

<uxdot-example width-adjustment="872px" danger>
  <img src="{{ '../tabs-best-practice-1.png' | url }}" alt="Image of horizontal open and box tabs with one tab each which is incorrect usage">
</uxdot-example>


### Too many tabs

Be careful about displaying too many tabs, some of them will become hidden even at large breakpoints.

<uxdot-example width-adjustment="872px" danger>
  <img src="{{ '../tabs-best-practice-2.png' | url }}" alt="Image of horizontal tabs with five tabs and overflow buttons which is incorrect usage">
</uxdot-example>


### Extra spacing

Do not add extra spacing or stretch the width of tabs.

<uxdot-example width-adjustment="872px" danger>
  <img src="{{ '../tabs-best-practice-3.png' | url }}" alt="Image of horizontal tabs with three tabs that are stretched which is incorrect usage">
</uxdot-example>


### Overflow buttons

Overflow buttons should not be visible if all tabs are visible.

<uxdot-example width-adjustment="872px" danger>
  <img src="{{ '../tabs-best-practice-4.png' | url }}" alt="Image of horizontal tabs with three visible tabs and overflow buttons which is incorrect usage">
</uxdot-example>
