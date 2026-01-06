## Importing Chip vs. Chip Group

If users are only using `<rh-chip>`, use the import specified above.

If users are using `<rh-chip-group>`, change the import from `rh-chip.js` to `rh-chip-group.js`:

```diff rhcodeblock
- import '@rhds/elements/rh-chip/rh-chip.js';
+ import '@rhds/elements/rh-chip/rh-chip-group.js';
```

`rh-chip-group.js` imports `rh-chip.js` internally. There's no need to import `rh-chip.js` if using chip group.
