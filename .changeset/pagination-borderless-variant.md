---
"@rhds/elements": minor
---

Add borderless variant to rh-pagination and deprecate open variant

- Add support for `variant="borderless"` as new preferred API for transparent pagination styles
- Deprecate `variant="open"` with console warning for backward compatibility  
- Update documentation and demos to use "borderless" terminology
- Reserve "open" attribute for disclosure/details elements per native browser API