---
"@rhds/elements": patch
---

Inline links should show a dashed underline, provided they are not in a navigation element or accompanied by visual clues that indicate interactivity. The following changes were made to adhere to our inline link styling guidelines.

Updated CSS to allow slotted `<a>` elements to display underlines in `<rh-avatar>` and `<rh-table>`.

Removed underlines from linked text in `<rh-breadcrumbs>`.

Updated or added underline styles for:

  - `<rh-footer>`: Links that show an underline only on hover now show a dashed underline, instead of a solid one. Links in `<rh-footer-block>` show an underline in the default state.
  - `<rh-pagination>`: An underline was added only for the last page link.
  - `<rh-skip-link>`: Skip link's hover state uses a dashed underline, instead of a solid underline, now.
