## Usage

Use tabs to help users navigate information while staying on the same page. Text labels and content in the panel should be related so users know what to expect when they select each tab. Never force users to switch back and forth between tabs to complete a task.


### When to use tabs

Use tabs to organize lots of information into logical sections. Consider using an accordion if that information needs to be viewed simultaneously because using tabs is not suitable as it forces users to rely on short-term memory when switching back and forth. Using an accordion can also accommodate more sections with longer text labels whereas tabs should only display three or four sections with short text labels. Therefore, if viewing lots of sections of content simultaneously is critical to the user experience or if important information requires more focus and less clicking, use an accordion instead.


### Tabs vs. accordion

Tabs allow users to click through content one section at a time whereas an accordion allows users to view multiple sections of content simultaneously.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of tabs on top and an accordion below with two panels expanded"
       src="../tabs-vs-accordion.png"
       width="872"
       height="998">
</uxdot-example>


### Number of tabs

To reduce cognitive load and a cluttered user interface, avoid using more than three or four tabs.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with three tabs on top and box tabs with three tabs below"
       src="../tabs-number-of-tabs.png"
       width="872"
       height="242">
</uxdot-example>


## Variants

When choosing one variation over the other, consider where it is being used. If using tabs multiple times on one page, use one variation only.
<strong>Open tabs</strong> - use if you want to keep your design clean and maintain a minimal look and feel
<strong>Box tabs</strong> - use if your design includes a lot of boxes or you want to maintain the classic tabs look and feel

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs on top and box tabs below"
       src="../tabs-variations.png"
       width="872"
       height="246">
</uxdot-example>


### Orientation

When choosing one orientation over the other, consider the content in the panel, other elements in the layout, and how you want users to read the content:
- Horizontal tabs are placed in the middle of a container and offer users a <strong>top-to-bottom</strong> reading experience
- Vertical tabs are placed on the left side of a container and offer users a <strong>left-to-right</strong> reading experience

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of horizontal tabs on top and vertical tabs below"
       src="../tabs-orientation.png"
       width="872"
       height="712">
</uxdot-example>


### Alignment

If using horizontal tabs, the default orientation is left aligned, but center aligned is also an option.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with left and center alignment and box tabs with left and center alignment"
       src="../tabs-alignment.png"
       width="872"
       height="420">
</uxdot-example>


### Inset and tab panel spacing

An inset is used to ensure consistent alignment and padding between text labels, overflow buttons, and content in the panel.

<rh-alert state="info">
  <h4 slot="header">Helpful Tip</h4>
  <p>With horizontal tabs, there are two inset options. With vertical tabs, there is only one.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs showing detailed inset specs"
       src="../tabs-inset-open.png"
       width="872"
       height="791">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of box tabs showing detailed inset specs"
       src="../tabs-inset-box.png"
       width="872"
       height="791">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of vertical tabs showing detailed inset specs"
       src="../tabs-inset-vertical.png"
       width="872"
       height="535">
</uxdot-example>

Certain content layouts may require removing the inset. While this is not a default style, it is possible with custom CSS.

### Logos

In certain edge cases, logos can be used instead of text labels.

<uxdot-example color-palette="lightest" width-adjustment="669px">
  <img alt="Image of open tabs with small logos in place of text labels"
       src="../tabs-logos.png"
       width="669"
       height="273">
</uxdot-example>


## Tab panel

The panel is below or to the right of tabs. Use this area to place other elements or content like text, links, calls to action, and more. Text blocks should not exceed <code>750px</code> to maintain optimal readability.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>The Tabs element has no control over the panel in terms of content, layout, spacing, etc.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with a text block and a card"
       src="../tabs-tab-panel-1.png"
       width="872"
       height="325">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with a title and a wide card"
       src="../tabs-tab-panel-2.png"
       width="872"
       height="263">
</uxdot-example>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with a text block and a blockquote"
       src="../tabs-tab-panel-3.png"
       width="872"
       height="429">
</uxdot-example>


## Writing content

### Text labels

Text labels should be concise, scannable, and descriptive of content in the panel. They should not exceed more than two or three short words. If they do, work with a content strategist to shorten them.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with examples of adequate and long text labels"
       src="../tabs-text-labels.png"
       width="872"
       height="395">
</uxdot-example>


### Character count

In general, tabs should have three or four text labels maximum. Text labels should be short but descriptive.

Text labels should be short but descriptive.

<rh-table>

| Column count | Character count |
|--------------|-----------------|
| 3 to 4       | 20 to 30        |

</rh-table>


## Layout

### Horizontal tabs width

The divider line can be set to any width or be the same width as the list of tabs.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs with a stretched divider line on top and box tabs with a divider line constrained to the width of text labels below"
       src="../tabs-layout-horizontal-width.png"
       width="872"
       height="424">
</uxdot-example>


### Vertical tabs height

The divider line will become taller if the height of content in the panel exceeds the height of vertical tabs.

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of vertical tabs with a short amount of content in the panel on top and vertical tabs with a long amount of content in the panel below"
       src="../tabs-layout-vertical-height.png"
       width="872"
       height="692">
</uxdot-example>


### Card

Tabs can be used in a card if the layout is wide enough and there are fewer tabs.

<uxdot-example color-palette="lightest" width-adjustment="480px">
  <img alt="Image of open tabs in a card with only two tabs"
       src="../tabs-layout-card.png"
       width="480"
       height="384">
</uxdot-example>


## Behavior

### Overflow

If the number of tabs exceeds the container width or breakpoint, overflow buttons with chevron icons are added to each side so users can horizontally scroll to reveal hidden tabs.

<rh-alert state="warning">
  <h4 slot="header">Warning</h4>
  <p>Long text labels will make overflow buttons appear sooner, try and write text labels as short as possible.</p>
</rh-alert>

<uxdot-example color-palette="lightest" width-adjustment="872px">
  <img alt="Image of open tabs at various widths showing overflow buttons on top and box tabs at various widths showing overflow buttons below"
       src="../tabs-behavior-overflow.png"
       width="872"
       height="602">
</uxdot-example>


### Navigating overflow tabs

When the first tab is active, the left overflow button is disabled. When the last tab is active, the right overflow button is disabled. When a tab that is cut off is selected, the list of tabs shifts so the selected tab is in full view.

<uxdot-example color-palette="lightest" width-adjustment="544px">
  <img alt="Image of selecting a cut off tab and the list of tabs shifting to reveal the selected tab in full view"
       src="../tabs-behavior-navigating-overflow-tabs.png"
       width="544"
       height="178">
</uxdot-example>


## Responsive design

### Large breakpoints

<uxdot-example color-palette="lightest" width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img alt="Image of horizontal and vertical tabs on desktop and tablet breakpoints"
       src="../tabs-responsive-design-breakpoints-large.png"
       width="1000"
       height="578">
</uxdot-example>


### Small breakpoints

Vertical tabs switch to horizontal tabs with overflow buttons on small breakpoints.

<uxdot-example color-palette="lightest" width-adjustment="576px" variant="full" alignment="left" no-border>
  <img alt="Image of tabs with overflow buttons on small breakpoints"
       src="../tabs-responsive-design-breakpoints-small.png"
       width="576"
       height="146">
</uxdot-example>


## Best practices

### Minimum number of tabs

<div class="grid sm-two-columns">
  <uxdot-best-practice variant="do">
    <uxdot-example color-palette="lightest" width-adjustment="426px" slot="image">
      <img alt="Groups of two tabs shown in the open and box variants"
           src="../tabs-best-practices-not-enough-tabs-do.svg"
           width="426"
           height="176">
    </uxdot-example>
    <p>There should always be at least two tabs.</p>
  </uxdot-best-practice>

  <uxdot-best-practice variant="dont">
    <uxdot-example color-palette="lightest" width-adjustment="426px" slot="image">
      <img alt="One tab shown in the open and box variants"
           src="../tabs-best-practices-not-enough-tabs-dont.svg"
           width="426"
           height="176">
    </uxdot-example>
    <p>Do not use only one tab.</p>
  </uxdot-best-practice>
</div>

### Using many tabs

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Group of five box tabs at a large breakpoint"
         src="../tabs-best-practices-many-tabs-do.svg"
         width="1012"
         height="56">
  </uxdot-example>

  <p>Use a reasonable number of tabs.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Group of six box tabs that overflow at a large breakpoint"
         src="../tabs-best-practices-many-tabs-dont.svg"
         width="1012"
         height="56">
  </uxdot-example>

  <p>Do not use too many tabs. In the horizontal orientation, be aware that including a lot of tabs may mean that the overflow layout will be triggered.</p>
</uxdot-best-practice>

### Spacing and width

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Group of three tabs using the open variant's default styles"
         src="../tabs-best-practices-spacing-do.svg"
         width="1012"
         height="56">
  </uxdot-example>

  <p>Retain the default spacing for tabs.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="1012px">
    <img alt="Group of three open variant tabs using very large padding"
         src="../tabs-best-practices-spacing-dont.svg"
         width="1012"
         height="56">
  </uxdot-example>

  <p>Do not add extra spacing or stretch the width of tabs.</p>
</uxdot-best-practice>

### Overflow buttons

<uxdot-best-practice variant="do">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="568px">
    <img alt="Group of three open variant tabs flanked by overflow buttons"
         src="../tabs-best-practices-overflow-buttons-do.svg"
         width="568"
         height="56">
  </uxdot-example>

  <p>Use overflow buttons if not all of the tabs can fit.</p>
</uxdot-best-practice>

<uxdot-best-practice variant="dont">
  <uxdot-example color-palette="lightest" slot="image" width-adjustment="568px">
    <img alt="Group of two open variant tabs flanked by overflow buttons"
         src="../tabs-best-practices-overflow-buttons-dont.svg"
         width="568"
         height="56">
  </uxdot-example>

  <p>Do not make overflow buttons visible if all tabs can comfortably fit.</p>
</uxdot-best-practice>
