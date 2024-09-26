## Style

Elements in the primary navigation are high in contrast so they stand out to 
visitors and meet accessibility guidelines. The primary navigation looks 
similar in style to the [Footer](/elements/footer) for a 
consistent user experience across websites.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-style-intro.png" alt="Primary navigation - style">
</uxdot-example>


### Anatomy

The primary navigation is divided into **three zones** where content can be 
placed. Each zone may include custom content and elements in certain zones 
will collapse or become hidden completely as breakpoints get smaller. 
**It is required to use all three zones.**

- **Zone 1** - Website logo
- **Zone 2** - Menus
- **Zone 3** - Utilities

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>The website logo in Zone 1 should direct visitors to a home page when selected.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../primary-nav-anatomy.png" alt="Primary navigation - anatomy">
</uxdot-example>


#### Website logo

A branded logo corresponding to the website in which the primary navigation 
is used. It will direct a visitor to the website home page when selected.

#### Menus

Text that triggers an expandable tray when selected. The content within is 
specific to one website and does not appear d in the same format on other 
websites.

#### Utilities

Actions or tools that display content within an expandable tray when 
triggered or function as links. They can be unique to one website or global 
across many websites.


### Expandable tray

When menu text in Zone 2 is selected, an **expandable tray** will appear. 
It is divided into three parts and is styled the same across all primary 
navigation instances.

1. **Tab** - visually informs a visitor of what menu they selected
1. **Tray** - the area to place content, links, etc.
1. **Overlay** - separates tray content from website content underneath

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../expandable-tray.png" alt="Primary navigation - expandable tray">
</uxdot-example>


### Expandable tray tab

When the expandable tray tab appears, text and icon colors are reversed. A tab 
with a white background and red bar will also appear behind content.

<rh-alert state="info">
  <h4 slot="header">Helpful tip</h4>
  <p>Menu text displays a gray arrow on hover to indicate that an expandable tray will appear when triggered.</p>
</rh-alert>

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../expandable-tray-tab.png" alt="Primary navigation - expandable tray tab">
</uxdot-example>


### Layout

The primary navigation spans the entire width of the browser window on all 
breakpoints.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../layout-desktop.png" alt="Primary navigation - layout (desktop)">
</uxdot-example>

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../layout-mobile.png" alt="Primary navigation - layout (mobile)">
</uxdot-example>


### Left-to-right languages

When content is translated to other left-to-right languages, the primary 
navigation maintains the same layout and text size.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../languages-left-to-right.png" alt="Primary navigation - left-to-right languages">
</uxdot-example>


### Right-to-left languages

When content is translated to a right-to-left language like Hebrew, the text 
size increases so visual subtleties of unique characters are easier to notice.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../languages-right-to-left.png" alt="Primary navigation - right-to-left languages">
</uxdot-example>


## Responsive design

### Large breakpoints

Both menus and utilities are visible in the primary navigation on large 
breakpoints.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../breakpoints-large.png" alt="Primary navigation - large breakpoints">
</uxdot-example>


### Medium breakpoints

As breakpoints become smaller, menus will collapse into a utility and 
accordion. **This includes full-width and fixed-width expandable 
trays.** On tablet breakpoints, a menu utility replaces the horizontal 
list of menus and maintains the same position for a smoother transition from 
large to small breakpoints.

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../breakpoints-medium.png" alt="Primary navigation - medium breakpoints">
</uxdot-example>


### Small breakpoints

On small breakpoints, the menus and most of the utilities collapse into a menu 
and accordion.

<uxdot-example width-adjustment="576px" variant="full" alignment="left" no-border>
  <img src="../breakpoints-small.png" alt="Primary navigation - small breakpoints">
</uxdot-example>


## Best practices

### Content overload

Do not overload the primary navigation with too many menus and utilities.

<uxdot-example width-adjustment="1000px" danger >
  <img src="../best-practice-1.png" alt="Primary navigation - best practice 1">
</uxdot-example>


### Using icons alone

Do not rely on icons alone to accurately represent content or actions, 
ambiguity will not help visitors find what they need.

<uxdot-example width-adjustment="1000px" danger >
  <img src="../best-practice-2.png" alt="Primary navigation - best practice 2">
</uxdot-example>


### Change spacing

Do not change the spacing between menus and utilities.

<uxdot-example width-adjustment="1000px" danger >
  <img src="../best-practice-3.png" alt="Primary navigation - best practice 3">
</uxdot-example>


### Hiding menus and utilities

Do not hide menus and utilities on large breakpoints.

<uxdot-example width-adjustment="1000px" danger >
  <img src="../best-practice-4.png" alt="Primary navigation - best practice 4">
</uxdot-example>


### Mixing expandable trays

Do not mix the full-width and fixed-width expandable trays within the same 
menu group.

<uxdot-example width-adjustment="1000px" danger >
  <img src="../best-practice-5.png" alt="Primary navigation - best practice 5">
</uxdot-example>


## Spacing

The primary navigation uses [spacers](/foundations/spacing) to define space values 
between elements.

### Extra large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../spacing-extra-large.png" alt="Primary navigation - Spacing for extra large breakpoints">
</uxdot-example>


### Large breakpoints

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../spacing-large.png" alt="Primary navigation - Spacing for large breakpoints">
</uxdot-example>


### Medium breakpoints

<uxdot-example width-adjustment="768px" variant="full" alignment="left" no-border>
  <img src="../spacing-medium.png" alt="Primary navigation - Spacing for medium breakpoints">
</uxdot-example>


### Small breakpoints

<uxdot-example width-adjustment="360px" variant="full" alignment="left" no-border>
  <img src="../spacing-small.png" alt="Primary navigation - Spacing for small breakpoints">
</uxdot-example>


### Fixed-width expandable tray

<uxdot-example width-adjustment="1000px" variant="full" alignment="left" no-border>
  <img src="../spacing-fixed-width-tray.png" alt="Primary navigation - Spacing for the fixed-width expandable tray">
</uxdot-example>
