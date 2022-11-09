# Spinner
Spinner consists of an animated circle and sometimes a text label, and it indicates that a section is loading.

## Usage

### Best Practices
Use spinner when the content of the loading section can’t be represented by a skeleton.

Avoid using spinner when loading will likely take longer than 10 seconds.

### Default/Large Spinner
```html
<rh-spinner></rh-spinner>
```

### Medium Spinner
```html
<rh-spinner size="md"></rh-spinner>
```

### Small Spinner
```html
<rh-spinner size="sm"></rh-spinner>
```

### Slot
There's one slot for loading text.