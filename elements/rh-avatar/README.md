# Avatar
An Avatar is a placeholder graphic for a photo or an image that is placed to the 
left or on top of text.

## Usage

An avatar can be used in light and dark themes. They feature a circular 
silhouette icon and are always grouped with text, like attribution or some kind 
of descriptor.

```html
<rh-avatar name="Grace Hopper"
           subtitle="Rear Admiral"
           src="hopper.jpg"></rh-avatar>
```

Text is positioned to the right or centered below an avatar. Add the 
`layout="block"` attribute to place the text below the image.

```html
<rh-avatar name="Alan Turing"
           subtitle="Cryptographer"
           layout="block"></rh-avatar>
```

An Avatar will provide a fallback image if no `src` is provided. You may 
optionally set the `pattern` attribute to either `"squares"` or `"triangles"` to 
generate a fallback image from the name, instead.

```html
<rh-avatar name="Haskell Curry"
           subtitle="Computer Scientist"
           pattern="squares"></rh-avatar>
```

An avatar should not be used without text unless absolutely necessary in the 
right context, like in the navigation. In those cases, use the `plain` attribute 
to visually hide the text. You must still provide at least a name.

```html
<rh-avatar name="Alonzo Church"
           subtitle="Inventor of the Lambda Calculus"
           plain></rh-avatar>
```

An avatar's subtitle can contain links. In those cases, slot the links directly, 
rather than as children of a container, so that they are styled correctly.

```html
<rh-avatar>George Boole
  <span slot="subtitle">Professor of Mathematics, </span>
  <a slot="subtitle" href="https://www.wikiwand.com/en/Queen's_College,_Cork">Queen's College, Cork</a>
</rh-avatar>
```
