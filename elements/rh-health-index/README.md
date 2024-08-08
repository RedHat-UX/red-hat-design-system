# Health Index
Health index grades the health or security level of something.

## Usage
Use the Health Index element to display a health or security grade (A–F) of something.

At a minimum an `rh-health-index` element should have a `grade=""` attribute with a value of A–F along with a matching grade letter in the slot.

### Default
```html
<rh-health-index grade="A">A</rh-health-index>
```

### Sizes

- Small = `sm`
- Default (i.e., Medium) = `md`
- Large = `lg`
- Extra Large = `xl`

#### Small

```html
<rh-health-index size="sm" grade="A">A</rh-health-index>
```

#### Large

```html
<rh-health-index size="lg" grade="A">A</rh-health-index>
```

#### Extra Large

```html
<rh-health-index size="xl" grade="A">A</rh-health-index>
```
