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

`dismissable`

- If this attribute is added, a close button will appear in the top right corner. Clicking this will hide the banner.

`smallimg`

- On screens smaller than 769px, larger images (where image height >= image width) will move above the text and the text will center align. This attribute can be added to override this functionality and keep the image left aligned

### Basic Announcement Banner

```html
<rh-announcement>
  <svg slot="image"
       width="80"
       height="48"
       role="img"
       aria-label="Sample image">
    <rect fill="var(--rh-color-border-interactive-on-light, #0066cc)"
      fill-opacity="0.1"
      stroke="var(--rh-color-border-interactive-on-light, #0066cc)"
      stroke-width="2px"
      width="100%"
      height="100%"
      stroke-dasharray="4 4">
    </rect>
    <text x="17"
          y="30"
          style="font-family: var(--rh-font-family-code, RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace); font-size: var(--rh-font-size-body-text-md, 1rem);"
          fill="var(--rh-color-blue-50, #0066CC)">
            Image
    </text>
  </svg>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>
```

### Announcement Banner using attributes
- dismissable
- dark color pallette
- smallimg attribute to override image appearing above text on mobile

```html
<rh-announcement dismissable smallimg color-palette="dark">
  <svg slot="image"
       width="80"
       height="48"
       role="img"
       aria-label="Sample image">
    <rect fill="var(--rh-color-border-interactive-on-light, #0066cc)"
      fill-opacity="0.1"
      stroke="var(--rh-color-border-interactive-on-light, #0066cc)"
      stroke-width="2px"
      width="100%"
      height="100%"
      stroke-dasharray="4 4">
    </rect>
    <text x="17"
          y="30"
          style="font-family: var(--rh-font-family-code, RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace); font-size: var(--rh-font-size-body-text-md, 1rem);"
          fill="var(--rh-color-blue-50, #0066CC)">
            Image
    </text>
  </svg>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>
```
