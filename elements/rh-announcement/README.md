# Announcement
Rh-announcement is a short banner that conveys an important message, such as promoting an event or advertising an organizational or product announcement.

## Usage

### Slots

`image`

- This slot can be used to add an image element such as a logo 

`cta`

- This slot expects a rh-cta component

`Anonymous Slot`

- Any text content to be displayed in the banner will go in this slot, generally within a p tag.


### Attributes

`dismissible`

- If this attribute is added, a close button will appear in the top right corner. Clicking this will hide the banner.

`smallimg`

- On screens smaller than 769px, larger images (where image height >= image width) will move above the text and the text will center align. This attribute can be added to override this functionality and keep the image left aligned

### Basic Announcement Banner

```html
<rh-announcement>
    <img src="https://placehold.co/120x40?text=logo" slot="image" alt="LOGO" width="120" height="40">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <rh-cta slot="cta">
        <a href="#">Learn More</a>
    </rh-cta>
</rh-announcement>
```

### Announcement Banner using attributes
- dismissible
- dark color pallette
- smallimg attribute to override image appearing above text on mobile

```html
<rh-announcement dismissible smallimg color-palette="dark">
    <img src="https://placehold.co/120x40?text=logo" slot="image" alt="LOGO" width="120" height="40">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <rh-cta slot="cta">
        <a href="#">Learn More</a>
    </rh-cta>
</rh-announcement>
```
