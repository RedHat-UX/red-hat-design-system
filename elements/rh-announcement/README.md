# Announcement

Announcement is a short banner that conveys an important message, such as 
promoting an event or advertising an organizational or product announcement.

## Usage

### Slots

`image`

- This slot can be used to add an image element such as a logo 

`cta`

- This slot expects a rh-cta component

`Anonymous Slot`

- Any text content to be displayed in the banner will go in this slot, generally 
  within a p tag.

### Attributes

`dismissable`

- If this attribute is added, a close button will appear in the top right 
  corner. Clicking this will hide the banner.

### Basic Announcement Banner

```html
<rh-announcement>
  <img slot="image"
       alt="summit logo"
       src="/images/summit.png">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>
```

### Announcement Banner using attributes
- dismissable
- dark color pallette

```html
<rh-announcement dismissable color-palette="dark">
  <img slot="image"
       alt="summit logo"
       src="/images/summit.png">
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>
```
