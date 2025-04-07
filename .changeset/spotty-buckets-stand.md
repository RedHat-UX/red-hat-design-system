---
"@rhds/elements": minor
---

✨ Added `<rh-navigation-primary>`.

The Primary navigation allows users to orient themselves and successfully move through web experiences. It is persistent on every page to ensure a consistent user experience across our systems of website

```html
<rh-navigation-primary>
  <rh-navigation-primary-item variant="dropdown"
                              summary="AI">
    AI dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown"
                              summary="Hybrid Cloud">
    Hybrid Cloud dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown"
                              summary="Products">
    Products dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown"
                              summary="Learn">
    Learn dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item variant="dropdown"
                              summary="Partners">
    Partners dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="links">
    <a href="https://developers.redhat.com/">Developers</a>
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="links">
    <a href="https://docs.redhat.com/en">Docs</a>
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="links">
    <a href="https://access.redhat.com/support">Support</a>
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns"
                              variant="dropdown"
                              hide-at="sm"
                              summary="Search">
    Search dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns"
                              variant="dropdown"
                              hide-at="sm"
                              summary="For you">
    For you dropdown content
  </rh-navigation-primary-item>

  <rh-navigation-primary-item slot="dropdowns"
                              variant="dropdown"
                              summary="My Red Hat">
    My Red Hat dropdown content
  </rh-navigation-primary-item>
</rh-navigation-primary>
```
