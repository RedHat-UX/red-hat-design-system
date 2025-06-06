By default, `<rh-skeleton>` inserts the following content into its shadowdom:

```html
<p aria-busy="true" class="visually-hidden">
  Loading...
</p>
```

The `Loading...` text above resides in the default slot. If multiple `<rh-skeleton>` elements exist on the page, it's recommended to customize this text. 

Similarly, be careful not to repeat this text. In some cases, you may want to slot an empty `<span>` into `<rh-skeleton>` to remove the default `Loading...` text.