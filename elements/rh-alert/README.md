# Alert
An Alert is a banner used to notify a user about a change in status or communicate other information. It can be generated with or without a user triggering an action first.

## Usage
An alert is used by wrapping html elements with an `rh-alert` element as slots in order to format the data in the desired manner.  

An alert consists of the following slots:

`Header`
- Header text for the alert, appears at the top of the alert. 

`Actions`
- Buttons that can be used to perform an action from the alert, such as closing or accepting the alert.

`Anonymous Slot`
- This is the text that is inserted into the state to be displayed in the main content body. 

##  Installation

If using npm/bundlers:
```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-alert';
```
## Usage

### Basic Alert 
```html
<rh-alert state="default">
    <h3 slot="header">Default</h3>
    <p>Example Alert</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
</rh-alert>
```

### Info Alert (also available `success`, `warning`, `danger`, and `error`)
```html
<rh-alert state="info">
    <h3 slot="header">Info</h3>
    <p>Example Alert</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
</rh-alert>
```

### Inline Alert 
```html
<rh-alert variant>
    <h3 slot="header">Default</h3>
    <p>Example Alert</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
</rh-alert>
```

### Toast Alert
```html
<rh-alert toast>
    <h3 slot="header">Default</h3>
    <p>Example Alert</p>
    <button slot="actions" data-action="dismiss">Dismiss</button>
    <button slot="actions" data-action="confirm">Confirm</button>
</rh-alert>
```