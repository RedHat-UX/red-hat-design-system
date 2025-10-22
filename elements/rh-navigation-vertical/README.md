# Navigation Vertical
A vertical navigation list containing top-level navigation items and grouped navigation items, typically used in a side navigation pattern.

## Usage

```html
<rh-navigation-vertical>
  <rh-navigation-item href="/">Home</rh-navigation-item>
  <rh-navigation-vertical-list summary="Products">
    <rh-navigation-item href="/products/1">Product 1</rh-navigation-item>
    <rh-navigation-item href="/products/2">Product 2</rh-navigation-item>
    <rh-navigation-item href="/products/3">Product 3</rh-navigation-item>
    <rh-navigation-item href="/products/4">Product 4</rh-navigation-item>
  </rh-navigation-vertical-list>
  <rh-navigation-item href="/about">About</rh-navigation-item>
  <rh-navigation-item href="/contact">Contact</rh-navigation-item>
</rh-navigation-vertical>
```