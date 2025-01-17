### Correcting pagination colors

If `<rh-pagination>` is not displaying the correct theme colors as defined on the [Style](/elements/pagination/style/#theme) page, wrap the pagination in a [`<rh-surface>` element](/elements/surface):

```html rh-code-block
<rh-surface color-palette="lightest">
  <rh-pagination>
    <ol>
      <li><a href="#">1</a></li>
      <li><a href="#2">2</a></li>
      <!-- ...pagination links... -->
    </ol>
  </rh-pagination>
</rh-surface>
```
