---
"@rhds/elements": minor
---

✨ Added `<rh-secondary-nav>`.

A non-primary navigation for products and subcategory pages.

```html
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li>
      <rh-secondary-nav-dropdown>
        <a slot="link">Link 2</a>
        <rh-secondary-nav-menu slot="menu">
          <rh-secondary-nav-menu-section>
            <h3 slot="header">Title of Links</h3>
            <ul slot="links">
              <li><a href="#">Link 2.1</a></li>
              <li><a href="#">Link 2.2</a></li>
            </ul>
          </rh-secondary-nav-menu-section>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-secondary-nav>
```

lib: renamed `RHDSScreenSizeController` to `ScreenSizeController`.
lib: updated `matchMedia()` breakpoints in `ScreenSizeController` to use 
`min-width` values for standard breakpoints

