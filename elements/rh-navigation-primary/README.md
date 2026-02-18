# Navigation Primary

Primary navigation provides a persistent bar for orienting users and
navigating across websites and domains. Use this element when a site
requires a global header for wayfinding across multiple sections or
domains. It allows grouping of primary links, dropdown menus, event
promotions, and utility actions into a single responsive bar. The element
MUST contain at least one `rh-navigation-primary-item` in the default slot
and SHOULD include an `accessible-label` when multiple navigation landmarks
exist on the page. The `logo` slot allows branding customization; when
overridden, the `logo-href` attribute will no longer function. Avoid
leaving the default slot empty, as this results in an inaccessible
hamburger menu.

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
