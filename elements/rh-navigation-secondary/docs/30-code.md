{% renderInstallation lightdomcss=true%}{% endrenderInstallation %}

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-dropdown' %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-menu' %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-menu-section' %}{% endrenderCodeDocs %}

## System Integration Patterns

### Current page indicator

When a user is viewing a page that is part of the secondary navigation information architecture, a red top border is visible.  If the page is contained in a dropdown menu, the dropdown is marked with this current page indicator.  See the [design guidelines for current page indicator](../guidelines/#current-page-indicator) for more information.  

In order to maintain flexibility of integration with various systems, the current page indicator is not controlled by the secondary navigation component itself.  Instead, the component can be styled with a selector of choice.

The following code example shows how to style the current page indicator using the `current` class. The example contains styles needed for both the light and dark variant. 

```css
rh-navigation-secondary-dropdown a.current {
    border-block-start-color: var(--rh-color-brand-red-on-light, #ee0000);
}

rh-navigation-secondary-dropdown[color-palette="dark"] a.current {
    border-block-start-color: var(--rh-color-brand-red-on-dark, #ff442b);
}
```

Your content management system or application integration will need to control the logic of knowing when to make a dropdown `current` if a link contained in it is currently active.  
