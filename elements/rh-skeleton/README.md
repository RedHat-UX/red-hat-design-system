# Skeleton

Skeleton provides placeholder content that mimics the structure and layout of actual content while it loads. It displays an animated placeholder to give users a preview of what's coming and reduce perceived loading time.

## Usage

Use skeleton when you want to show users the structure of content that's loading, especially for text, images, and structured layouts. Skeleton works best for content that has a predictable structure and layout.

### Basic skeleton

```html
<rh-skeleton></rh-skeleton>
```

### Sizes and types

`<rh-skeleton>` has two different attributes with specific values:

- `size`
    - Values are `xs` through `6xl`.
        - Non-text skeletons only have `sm`, `md`, and `lg` sizes.
    - Eg: `<rh-skeleton size="lg"></rh-skeleton>`
- `type`
    - Values are: `text`, `circle`, `square`, `rectangle`
    - Eg: `<rh-skeleton type="circle"></rh-skeleton>`

### Customizing the loading text placeholder

By default, `<rh-skeleton>` places some visually hidden text, "Loading...", into the default slot of this component.

If you want to customize this text, you can slot in alternate content. You may want to do this if you have multiple skeletons on a page to denote which content is loading where.

```html
<rh-skeleton>
  Loading card content...
</rh-skeleton>

...

<rh-skeleton>
  Loading disclosure content...
</rh-skeleton>
```

Read the [official documentation](https://ux.redhat.com/elements/skeleton/) for `<rh-skeleton>`.
