## Usage

Use a subnavigation when you want to provide users with granular navigation 
using only links.

### When to use a subnavigation

A subnavigation allows users to navigate between four or five related pages 
maximum. It is different than [tabs][tabs] because tabs allow users to switch 
between views on the same page whereas subnavigation links send users to other 
pages. A user might use the [primary navigation][navpri] or [secondary 
navigation][navsec] to access a high-level page and then use a subnavigation to 
browse through lower-level pages.

[tabs]: {{ '/elements/tabs/' | url }}
[navpri]: {{ '/elements/navigation-primary/' | url }}
[navsec]: {{ '/elements/navigation-secondary/' | url }}

### Subnavigation vs. other navigations

A subnavigation is a flat hierarchy whereas other navigations have deeper 
hierarchies with levels. Therefore, a subnavigation cannot include menus, only 
links. If your content requires a structure with more levels, use another 
navigation.

{% example palette="lightest",
           alt="",
           src="../subnav-vs-other-navs.png" %}

## Number of links

To reduce cognitive load and a cluttered user interface, avoid using more than 
four or five links.

{% example palette="lightest",
           alt="",
           src="../subnav-number-of-links.png" %}

## Inset

An inset is used to ensure consistent alignment and padding between headings, 
text labels, and overflow buttons.

{% example palette="lightest",
           alt="",
           src="../subnav-inset.png" %}

<hgroup>

  ## Writing content

  ## Link text labels

</hgroup>

Link text labels should be concise, scannable, and descriptive. They should not 
exceed more than two or three short words. If they do, work with a content 
strategist to shorten them.

{% example palette="lightest",
           alt="",
           src="../subnav-link-text-labels.png" %}

### Character count

A subnavigation should have four or five links maximum. However, if text labels 
are very short, more can be added.

| Link count | Character count |
| ---------- | --------------- |
| 6          | < 13            |
| 5          | 14 - 17         |
| 4          | 18 - 23         |

{.full-width}

## Layout

A subnavigation can be placed below the primary navigation or a heading.

{% example palette="lightest",
           alt="",
           src="../subnav-layout.png" %}

<hgroup>

  ## Behavior

  ### Current page indicator

</hgroup>

When a user is viewing a page, a red bottom border is visible. It will move as a 
user moves from page to page.

{% example palette="lightest",
           alt="",
           src="../subnav-current-page-indicator.png" %}

## Scrolling

A subnavigation is positioned below the primary navigation or a heading when the 
page loads. Similar to other navigations, when a user scrolls down, the primary 
navigation or heading disappears and the subnavigation becomes fixed to the top 
of the browser window. When a user scrolls back up, the subnavigation is 
positioned under the primary navigation or heading again.

### With primary navigation

{% example palette="lightest",
           alt="",
           src="../subnav-scrolling-primary-nav.png" %}

### With heading

{% example palette="lightest",
           alt="",
           src="../subnav-scrolling-heading.png" %}

### Overflow

If the number of links exceeds the container width or breakpoint, overflow 
buttons with chevron icons are added to each side so users can horizontally 
scroll to reveal hidden links.

{% example palette="lightest",
           alt="",
           src="../subnav-overflow.png" %}

#### Navigating overflow links

When the first link is active, the left overflow button is disabled. When the 
last link is active, the right overflow button is disabled. When a link that is 
cut off is selected, the list of links shifts so the selected link is in full 
view.

{% example palette="lightest",
           alt="",
           src="../subnav-navigating-overflow-links.png" %}

## Responsive design

Overflow buttons will appear within a subnavigation as soon as the width of 
links exceeds the width of the breakpoint. It is possible for overflow buttons 
to be hidden on small breakpoints if there are two links with very short text 
labels.

### Large breakpoints

{% example palette="lightest",
           alt="",
           src="../subnav-responsive-breakpoints-large.png" %}

### Small

{% example palette="lightest",
           alt="",
           src="../subnav-responsive-breakpoints-small.png" %}

<hgroup>

  ## Best practices

  ### Incorrect ordering

</hgroup>

Do not position the subnavigation above the primary navigation.

{% example palette="wrong",
           alt="",
           src="../subnav-best-practice-1.png" %}

### Not enough links

There should be at least two links minimum.

{% example palette="wrong",
           alt="",
           src="../subnav-best-practice-2.png" %}

### Too many links

Be careful about displaying too many links, some of them will become hidden even 
at large breakpoints.

{% example palette="wrong",
           alt="",
           src="../subnav-best-practice-3.png" %}

### Extra spacing

Do not add extra spacing or stretch the width of links.

{% example palette="wrong",
           alt="",
           src="../subnav-best-practice-4.png" %}

### Overflow buttons

Overflow buttons should not be visible if all links are visible.

{% example palette="wrong",
           alt="",
           src="../subnav-best-practice-5.png" %}

