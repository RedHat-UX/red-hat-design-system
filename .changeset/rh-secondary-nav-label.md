---
"@rhds/elements": major
---
`<rh-secondary-nav>`: removed the `main` boolean attribute in favour of 
`aria-label`.

If before you used the `main` boolean attribute to set the `aria-label` of the 
shadow navigation, now, just use `aria-label` on the host.

BEFORE:
```html
<rh-secondary-nav role="navigation">
  <!-- shadow label for nav is "secondary" -->
</rh-secondary-nav>
<rh-secondary-nav role="navigation" main>
  <!-- shadow label for nav is "main" -->
</rh-secondary-nav>
```

AFTER:
```html
<rh-secondary-nav role="navigation">
  <!-- shadow label for nav is "secondary" -->
</rh-secondary-nav>
<rh-secondary-nav role="navigation" aria-label="Hlavná">
  <!-- shadow label for nav is "Hlavná" -->
</rh-secondary-nav>
```
