---
"@rhds/elements": minor
---
`<rh-alert>`: added `actions` and `persistent: true` options for toasts.

```js
RhAlert.toast({
  message: 'Toast!',
  persistent: true,
  actions: [
    { text: 'Confirm', action: 'confirm' },
    { text: 'dismiss', action: 'dismiss' }
  ],
});
```

