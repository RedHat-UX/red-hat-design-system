{% renderInstallation lightdomcss=true%}{% endrenderInstallation %}

### System Integration

#### Current page indicator

When a user is viewing a page that is part of the secondary navigation information architecture, a red top border is visible.  If the active page is contained in a dropdown menu, the dropdown is marked with this top border current page indicator.  See the [design guidelines for current page indicator](../guidelines/#current-page-indicator) for more information.  

In order to maintain flexibility of integration with various systems, the logic and css for the current page indicator is not controlled by the secondary navigation component itself.  Instead, the component can be styled with the system's selector of choice.

The following code example shows how to style the current page indicator using a <code>current</code> class. The example contains styles needed for both the light and dark variant. 

```css
rh-navigation-secondary [slot="nav"] li > a.current,
rh-navigation-secondary-dropdown a.current {
    border-block-start-color: var(--rh-color-brand-red-on-light, #ee0000);
}

rh-navigation-secondary[color-palette="dark"] [slot="nav"] li > a.current,
rh-navigation-secondary[color-palette="dark"] rh-navigation-secondary-dropdown a.current {
    border-block-start-color: var(--rh-color-brand-red-on-dark, #ff442b);
}
```

Your content management system or application integration will need to control the template logic of placing the <code>current</code> class  on the appropriate <code><a></code> element in the nav.

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-dropdown' %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-menu' %}{% endrenderCodeDocs %}

{% renderCodeDocs for='rh-navigation-secondary-menu-section' %}{% endrenderCodeDocs %}


