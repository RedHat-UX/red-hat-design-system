---
"@rhds/elements": major
---

`<rh-dialog>`: the `overlay` CSS shadow part has been removed. Users who want to customize the overlay should refer to our [theming documentation](https://ux.redhat.com/theming/customizing/).

  Before:

  ```css
  rh-dialog::part(overlay) {
  background-color: #260710e7;
  }
  ```

  After:

  ```css
  rh-dialog.theme-ai {
  --ai-darker: #260710;
  --rh-color-surface-darker: var(--ai-darker);
  }
  ```
