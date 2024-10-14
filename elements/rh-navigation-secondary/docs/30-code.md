### System Integration

#### Current page indicator

When a user is viewing a page that is part of the secondary navigation 
information architecture, a red top border is visible. If the current active 
page is part of a dropdown menu, that dropdown is highlighted with the same top 
border to indicate it contains the current page. For more details on how to use 
this current page indicator, refer to the [design 
guidelines](../guidelines/#current-page-indicator) for current page indicator.

To enable this indicator style, implementation should apply the 
`aria-current="page"` attribute to the current page link.

```html rh-code-block
<a href="/" aria-current="page">Current page being viewed</a>
```

The `rh-navigation-secondary` element does not apply the 
`aria-current="page"` attribute itself. The responsibility for 
keeping track of which link is currently active falls on the content management 
system or application.  The element checks for the presence of this attribute 
and applies the current page indicator style to nav links and dropdown menus 
when the active page is within a dropdown menu.
