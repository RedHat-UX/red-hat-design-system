# Icon
Icons represents general concepts and can support text as a decorative element.
The `<rh-icon>` element allows content and experience authors to add Red Hat icons 
of varying dimensions in the same area without shifting surrounding content.

## Usage

- When you want to supplement the meaning of text with a visual element
- When you need to represent a UI function with an approved Red Hat icon
- When you need an icon to occupy a certain amount of space


### Sets

[Icons come in 4 sets,](https://red-hat-icons.netlify.app/) standard (default), microns, UI, and social.


#### Standard Icon example

```html
<rh-icon icon="alert"></rh-icon>
```

#### Micron example

```html
<rh-icon set="microns" icon="checkbox-complete-fill"></rh-icon>
```

#### UI example

```html
<rh-icon set="ui" icon="check-circle-fill"></rh-icon>
```

#### Social example

```html
<rh-icon set="social" icon="facebook"></rh-icon>
```


## Loading

Icons load _lazily_ by default, meaning that the browser will not attempt to fetch and render the
icon until it scrolls into view. You can change this with the `loading` attribute;
see the [docs][docs] for more info.

[docs]: https://ux.redhat.com/elements/icon
[icon-sets]: https://ux.redhat.com/elements/icon/guidelines/
