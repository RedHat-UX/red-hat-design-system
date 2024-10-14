# Badge
A badge is used to annotate other information with numerical content.

## Usage
To provide context to your badge, it is highly encouraged that you also include an aria-label attribute in your markup.

### Default
```html
<rh-badge number="1" aria-label="1 new message">1</rh-badge>
```

### Add threshold
In the example, '11' would appear as '10+' on the badge because of the threshold set at '10'.

```html
<rh-badge threshold="10" number="11">11</rh-badge>
```

### Add state
This adds a background color to the badge to indicate state.

State options: 'info', 'success', 'moderate', 'important', 'critical'

```html
<rh-badge number="1" state="success">1</rh-badge>
```
