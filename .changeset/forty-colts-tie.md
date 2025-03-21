---
"@rhds/elements": minor
---
`<rh-footer>`: social link element can now take an `href` attribute instead of a slotted link. The previous behaviour will still work.

Before:

```html

<rh-footer-social-link slot="social-links"
                       icon="linkedin"><a href="https://www.linkedin.com/company/red-hat"
                                          data-analytics-region="social-links-exit"
                                          data-analytics-category="Footer|social-links"
                                          data-analytics-text="LinkedIn">LinkedIn</a></rh-footer-social-link>
```

After:
```html
  <rh-footer-social-link slot="social-links"
                         icon="linkedin"
                         href="https://www.linkedin.com/company/red-hat"
                         data-analytics-region="social-links-exit"
                         data-analytics-category="Footer|social-links"
                         data-analytics-text="LinkedIn"
                         accessible-label="LinkedIn"></rh-footer-social-link>
```
