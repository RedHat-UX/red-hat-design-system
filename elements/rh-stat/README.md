# Stat
A statistic showcases a data point or quick fact in a way that visually stands out. It consists of a number/percentage and body text in its simplest form. It can also include an icon, title, and a call to action.

## Usage
A statistic is used by wrapping html elements with an `rh-stat` element as slots in order to format the data in the desired manner.  

At a minimum an `rh-stat` should be a `title` and a `statistic`, but a user can also slot in an `icon` and / or a `description` into the element.   

##  Installation

If using npm/bundlers:
```bash
npm install @rhds/elements
```

Then once installed, import it to your application:

```js
import '@rhds/elements/rh-stat/rh-stat.js';
```
## Usage

### Basic Statistic 
```html
<rh-stat top="statistic">
    <span slot="title">Example Title</span>
    <span slot="statistic">Example Statistic</span>
</rh-stat>
```

### Statistic With An Icon 
```html
<rh-stat top="statistic">
    <pf-icon slot="icon" icon="rh-atom"></pf-icon>
    <span slot="title">Example Title</span>
    <span slot="statistic">Example Statistic</span>
</rh-stat>
```

### Statistic With A Description
```html
<rh-stat top="statistic">
    <span slot="title">Example Title</span>
    <span slot="description">Example Description.</span>
    <span slot="statistic">Example Statistic</span>
</rh-stat>
```

### Statistic With Both An Icon And A Description 
```html
<rh-stat top="statistic">
    <pf-icon slot="icon" icon="rh-atom"></pf-icon>
    <span slot="title">Example Title</span>
    <span slot="description">Example Description.</span>
    <span slot="statistic">Example Statistic</span>
</rh-stat>
```
