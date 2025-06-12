# Progress Steps

Progress Steps is a component that displays a sequence of steps in a process, showing the current status of each step. It's useful for guiding users through multi-step processes like wizards, forms, or configuration flows.

## Usage

### Horizontal Orientation (Default)
```html
<rh-progress-steps>
  <rh-progress-step
    state="complete"
    label="Step 1"
    description="This step is complete"
  ></rh-progress-step>
  
  <rh-progress-step
    state="active"
    label="Step 2"
    description="Currently working on this step"
  ></rh-progress-step>
  
  <rh-progress-step
    state="inactive"
    label="Step 3"
    description="This step is not yet started"
  ></rh-progress-step>
</rh-progress-steps>
```

### Vertical Orientation
```html
<rh-progress-steps orientation="vertical">
  <rh-progress-step
    state="complete"
    label="Step 1"
    description="This step is complete"
  ></rh-progress-step>
  
  <rh-progress-step
    state="active"
    label="Step 2"
    description="Currently working on this step"
  ></rh-progress-step>
  
  <rh-progress-step
    state="inactive"
    label="Step 3"
    description="This step is not yet started"
  ></rh-progress-step>
</rh-progress-steps>
```

## States

The `rh-progress-step` component supports six states:

- `inactive`: Step has not been started (default)
- `active`: Step is currently being worked on
- `complete`: Step has been completed successfully
- `warn`: Step has a warning that needs attention
- `fail`: Step has failed and needs to be retried
- `custom`: Step uses a custom icon and state

## Custom Icons

You can use custom icons for the `custom` state:

```html
<rh-progress-step
  state="custom"
  label="Custom Step"
  description="Using a custom icon"
  custom-icon="info-circle"
  custom-icon-set="microns"
></rh-progress-step>
```

## Properties

### rh-progress-steps

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| orientation | String | 'horizontal' | The direction of the steps ('horizontal' or 'vertical') |

### rh-progress-step

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| state | String | 'inactive' | The current state of the step |
| label | String | '' | The label text for the step |
| description | String | '' | Optional description text |
| customIcon | String | '' | Icon name for custom state |
| customIconSet | String | 'ui' | Icon set for custom state ('ui' or 'microns') |

<div id="overview-image-description" class="visually-hidden">
  Example progress-steps element
</div>
