---
"@rhds/elements": patch
---

`rh-accordion` is being updated to fix the styling for right-to-left texts.  We are using logical properties to determine the position of the border on the header and panel elements.  We are also including a check inside the component for the nearest element that sets direction and applying these styles for the header icon rotation. 

This will improve the user experience with languages that write from right to left.
