---
"@rhds/elements": major
---

`<rh-avatar>`: removed the deprecated `updatePattern()` method. Generated patterns continue to update automatically when `name` or `pattern` changes.

Before:

```js
avatar.updatePattern();
```

After:

```js
avatar.name = 'Grace Hopper';
avatar.pattern = 'squares';
```
