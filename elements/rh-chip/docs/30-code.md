## Importing chip vs. chip group

If using `<rh-chip-group>`, change the import from `rh-chip.js` to `rh-chip-group.js`:


```diff rhcodeblock
- import '@rhds/elements/rh-chip/rh-chip.js';
+ import '@rhds/elements/rh-chip/rh-chip-group.js';
```

Users can import `rh-chip-group.js` to gain access to both elements. If you're only using chip, save some bytes by only importing `rh-chip.js`.
