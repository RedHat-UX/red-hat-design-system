# Tag
An inline-block element component that provides a distinct visual style for metadata in a UI. 

## Usage

Default
```html
<rh-tag>
    Default Tag
</rh-tag>
```

Color fill
```html
<rh-tag color="red">
    Red Tag
</rh-tag>
```

With an attribute icon
```html
<rh-tag color="red" icon="circle-info">
    Red Tag
</rh-tag>
```

With an slotted icon
```html
<rh-tag color="red">
    Red Tag
    <rh-icon slot="icon" icon="like-fill" set="ui"></rh-icon>
</rh-tag>
```
