# Navigation Primary

Primary navigation provides a persistent bar for orienting users and
navigating across websites and domains. Use this element when a site
requires a global header for wayfinding across multiple sections or
domains. It allows grouping of primary links, dropdown menus, event
promotions, and utility actions into a single responsive bar. The element
must contain at least one `rh-navigation-primary-item` in the default slot
and should include an `accessible-label` when multiple navigation landmarks
exist on the page. The `logo` slot accepts an inline `svg`, `img`, or
`picture` element for branding customization. Slotted logos are automatically
wrapped in a link; use `logo-href` to set its destination and `logo-label` to
set its accessible name. Avoid leaving the default slot empty, as this results
in an inaccessible hamburger menu.

## Usage

```html
<rh-navigation-primary>
  <rh-navigation-primary-item variant="dropdown">
    <span slot="summary">Item 1</span>
    Item 1 Content 
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown">
    <span slot="summary">Item 2</span>
    Item 2 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown">
    <span slot="summary">Item 3</span>
    Item 3 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown">
    <span slot="summary">Item 4</span>
    Item 4 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown">
    <span slot="summary">Item 5</span>
    Item 5 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="links">Link 1</rh-navigation-primary-item>
  <rh-navigation-primary-item slot="links">Link 2</rh-navigation-primary-item>
  <rh-navigation-primary-item slot="links">Link 3</rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns" variant="dropdown">
    <span slot="summary">Item 6</span>
    Item 6 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns" variant="dropdown">
    <span slot="summary">Item 7</span>
    Item 7 Content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns" variant="dropdown">
    <span slot="summary">Item 8</span>
    Item 8 Content
  </rh-navigation-primary-item>  
</rh-navigation-primary>
```

## Search

Use the `search` slot with an item whose `variant` is `search` to
reserve space for search content in the navigation. Below a 992px container
width the navigation shows a search toggle in the utility cluster; activating
it displays the slotted content in a dropdown panel below the bar, full width
up to 576px and sized to its slotted content on wider containers, and the panel
is closed by default. At 992px and above the content is placed
inline and open, before the utility menus, and the toggle is hidden. When a
search region is present, primary menu items collapse into the hamburger below
1440px, because the inline search takes space in the bar. Set `summary` on the
search item for non-English locales; it labels the toggle.

```html
<rh-navigation-primary>
  <!-- primary items, event, links, and utility items -->

  <rh-navigation-primary-item slot="search" variant="search">
    <!-- search content -->
  </rh-navigation-primary-item>
</rh-navigation-primary>
```
