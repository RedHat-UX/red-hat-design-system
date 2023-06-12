## Usage
Use tabs to help users navigate information while staying on the same page. Text labels and content in the panel should be related so users know what to expect when they select each tab. Never force users to switch back and forth between tabs to complete a task.
### When to use tabs
Use tabs to organize lots of information into logical sections. Consider using an accordion if that information needs to be viewed simultaneously because using tabs is not suitable as it forces users to rely on short-term memory when switching back and forth. Using an accordion can also accommodate more sections with longer text labels whereas tabs should only display three or four sections with short text labels. Therefore, if viewing lots of sections of content simultaneously is critical to the user experience or if important information requires more focus and less clicking, use an accordion instead.
### Tabs vs. accordion
Tabs allow users to click through content one section at a time whereas an accordion allows users to view multiple sections of content simultaneously.

{% example palette="light", alt="Image of tabs on top and an accordion below with two panels expanded", src="../tabs-vs-accordion.png" %}

### Number of tabs
To reduce cognitive load and a cluttered user interface, avoid using more than three or four tabs.

{% example palette="light", alt="Image of open tabs with three tabs on top and box tabs with three tabs below", src="../tabs-number-of-tabs.png" %}

## Variations
When choosing one variation over the other, consider where it is being used. If using tabs multiple times on one page, use one variation only.
<strong>Open tabs</strong> - use if you want to keep your design clean and maintain a minimal look and feel
<strong>Box tabs</strong> - use if your design includes a lot of boxes or you want to maintain the classic tabs look and feel

{% example palette="light", alt="Image of open tabs on top and box tabs below", src="../tabs-variations.png" %}

### Orientation
When choosing one orientation over the other, consider the content in the panel, other elements in the layout, and how you want users to read the content:
Horizontal tabs are placed in the middle of a container and offer users a <strong>top-to-bottom</strong> reading experience
Vertical tabs are placed on the left side of a container and offer users a <strong>left-to-right</strong> reading experience

{% example palette="light", alt="Image of horizontal tabs on top and vertical tabs below", src="../tabs-orientation.png" %}

### Alignment
If using horizontal tabs, the default orientation is left aligned, but center aligned is also an option.

{% example palette="light", alt="Image of open tabs with left and center alignment and box tabs with left and center alignment", src="../tabs-alignment.png" %}

### Inset
An inset is used to ensure consistent alignment and padding between text labels, overflow buttons, and content in the panel.

{% alert state="info", title="Helpful Tip" %} With horizontal tabs, there are two inset options. With vertical tabs, there is only one. {% endalert %}

{% example palette="light", alt=" Image of open tabs showing detailed inset specs", src="../tabs-inset-open.png" %}

{% example palette="light", alt="Image of box tabs showing detailed inset specs", src="../tabs-inset-box.png" %}

{% example palette="light", alt="Image of vertical tabs showing detailed inset specs", src="../tabs-inset-vertical.png" %}

### Logos
In certain edge cases, logos can be used instead of text labels.

{% example palette="light", alt="Image of open tabs with small logos in place of text labels", src="../tabs-logos.png" %}

## Tab panel
The panel is below or to the right of tabs. Use this area to place other elements or content like text, links, calls to action, and more. Text blocks should not exceed <code>750px</code> to maintain optimal readability.

{% alert state="warning", title="Warning" %} The Tabs element has no control over the panel in terms of content, layout, spacing, etc. {% endalert %}

{% example palette="light", alt="Image of open tabs with a text block and a card", src="../tabs-tab-panel-1.png" %}

{% example palette="light", alt="Image of open tabs with a title and a wide card", src="../tabs-tab-panel-2.png" %}

{% example palette="light", alt="Image of open tabs with a text block and a blockquote", src="../tabs-tab-panel-3.png" %}

## Writing content
### Text labels
Text labels should be concise, scannable, and descriptive of content in the panel. They should not exceed more than two or three short words. If they do, work with a content strategist to shorten them.

{% example palette="light", alt="Image of open tabs with examples of adequate and long text labels", src="../tabs-text-labels.png" %}

### Character count
In general, tabs should have three or four text labels maximum. However, if text labels are <strong>very short</strong>, more can be added.

| Tab count {style="width: 50%;"} | Character count |
| ------------------------------- | --------------- |
| 6                               | < 13            |
| 5                               | 14 - 17         |
| 4                               | 18 - 23         |

## Layout
### Horizontal tabs width
The divider line can be set to any width or be the same width as the list of tabs.

{% example palette="light", alt="Image of open tabs with a stretched divider line on top and box tabs with a divider line constrained to the width of text labels below", src="../tabs-layout-horizontal-width.png" %}

### Vertical tabs height
The divider line will become taller if the height of content in the panel exceeds the height of vertical tabs.

{% example palette="light", alt="Image of vertical tabs with a short amount of content in the panel on top and vertical tabs with a long amount of content in the panel below", src="../tabs-layout-vertical-height.png" %}

### Card
Tabs can be used in a card if the layout is wide enough and there are fewer tabs.

{% example palette="light", alt="Image of open tabs in a card with only two tabs", src="../tabs-layout-card.png" %}

## Behavior
### Overflow
If the number of tabs exceeds the container width or breakpoint, overflow buttons with chevron icons are added to each side so users can horizontally scroll to reveal hidden tabs.

{% alert state="warning", title="Warning" %} Long text labels will make overflow buttons appear sooner, try and write text labels as short as possible. {% endalert %}

{% example palette="light", alt="Image of open tabs at various widths showing overflow buttons on top and box tabs at various widths showing overflow buttons below", src="../tabs-behavior-overflow.png" %}

### Navigating overflow tabs
When the first tab is active, the left overflow button is disabled. When the last tab is active, the right overflow button is disabled. When a tab that is cut off is selected, the list of tabs shifts so the selected tab is in full view.

{% example palette="light", alt="Image of selecting a cut off tab and the list of tabs shifting to reveal the selected tab in full vie", src="../tabs-behavior-navigating-overflow-tabs.png" %}

## Responsive design
### Large breakpoints

{% example palette="light", alt="Image of horizontal and vertical tabs on desktop and tablet breakpoints", src="../tabs-responsive-design-breakpoints-large.png" %}

### Small breakpoints
Vertical tabs switch to horizontal tabs with overflow buttons on small breakpoints.

{% example palette="light", alt="Image of tabs with overflow buttons on small breakpoints", src="../tabs-responsive-design-breakpoints-small.png" %}

## Best practices
### Not enough tabs
There should be at least two tabs minimum.

{% example palette="light", alt="Image of horizontal open and box tabs with one tab each which is incorrect usage", src="../tabs-best-practice-1.png" %}

### Too many tabs
Be careful about displaying too many tabs, some of them will become hidden even at large breakpoints.

{% example palette="light", alt="Image of horizontal tabs with five tabs and overflow buttons which is incorrect usage", src="../tabs-best-practice-2.png" %}

### Extra spacing
Do not add extra spacing or stretch the width of tabs.

{% example palette="light", alt="Image of horizontal tabs with three tabs that are stretched which is incorrect usage", src="../tabs-best-practice-3.png" %}

### Overflow buttons
Overflow buttons should not be visible if all tabs are visible.

{% example palette="light", alt="Image of horizontal tabs with three visible tabs and overflow buttons which is incorrect usage", src="../tabs-best-practice-4.png" %}
