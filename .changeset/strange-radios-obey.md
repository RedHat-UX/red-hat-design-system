---
"@rhds/elements": minor
---
Uses `@rhds/tokens` - Red Hat Design Tokens - version 2!

⚠️  if your pages directly override "crayon" colour values, (e.g. `--rh-color-red-50`)
then this is a breaking change, since the token names have changed.

However, if your project follows the theming guidelines and only overrides the
semantic tokens, then you should automatically receive the new colour values.
