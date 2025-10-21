# Navigation Link
A styled link that can be used as a child of navigation elements.

## Usage

### Primary navigation

```html
<rh-navigation-primary>
  <rh-navigation-link href="/" current-page>Home</rh-navigation-link>
  <rh-navigation-link href="/about">About</rh-navigation-link>
  <rh-navigation-link href="/contact">Contact</rh-navigation-link>
</rh-navigation-primary>
```

### Secondary navigation
```html
<rh-navigation-secondary>
  <ul slot="nav">
    <li><rh-navigation-link href="/" current-page>Home</rh-navigation-link></li>
    <li><rh-navigation-link href="/about">About</rh-navigation-link></li>
    <li><rh-navigation-link href="/contact">Contact</rh-navigation-link></li>
  </ul>
</rh-navigation-secondary>
```

### Subnav navigation

```html
<rh-subnav>
  <rh-navigation-link href="/" current-page>Home</rh-navigation-link>
  <rh-navigation-link href="/about">About</rh-navigation-link>
  <rh-navigation-link href="/contact">Contact</rh-navigation-link>
</rh-subnav>
```

### Vertical navigation

```html
<rh-navigation-vertical>
  <rh-navigation-link href="/" current-page>Home</rh-navigation-link>
  <rh-navigation-link href="/about">About</rh-navigation-link>
  <rh-navigation-link href="/contact">Contact</rh-navigation-link>
</rh-navigation-vertical>
```