## `<rh-secondary-nav>` Red Hat Secondary Navigation

A non-primary navigation for product and subcategory navigation.

- Demo url: *project-localhost-here*`/components/secondary-nav/demo/`

[Docs pending]

## Installation
If using npm/bundlers:
```bash
npm install @rhds/elements
```
```js
import '@rhds/elements/rh-secondary-nav/rh-secondary-nav.js';
```
```html
<link rel="stylesheet" href="https://unpkg.com/@rhds/elements/elements/rh-secondary-nav/rh-secondary-nav-lightdom.css" />
```

Via CDN with import maps (_recommended_):
```html
<!--
  JSPM Generator Import Map
  Edit URL: https://generator.jspm.io/#Y2NhYGBkDM0rySzJSU1hcCjKSCnWT81JzU3NKyl2MNQz0DPQTUotSdQzNAUAgcdAtSsA
-->
<script type="importmap">
{
  "imports": {
    "@rhds/elements": "https://ga.jspm.io/npm:@rhds/elements@1.0.0-beta.15/rhds.min.js"
  },
  "scopes": {
    "https://ga.jspm.io/": {
      "@lit/reactive-element": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/reactive-element.js",
      "@lit/reactive-element/decorators/custom-element.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/custom-element.js",
      "@lit/reactive-element/decorators/event-options.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/event-options.js",
      "@lit/reactive-element/decorators/property.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/property.js",
      "@lit/reactive-element/decorators/query-all.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/query-all.js",
      "@lit/reactive-element/decorators/query-assigned-elements.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/query-assigned-elements.js",
      "@lit/reactive-element/decorators/query-assigned-nodes.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/query-assigned-nodes.js",
      "@lit/reactive-element/decorators/query-async.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/query-async.js",
      "@lit/reactive-element/decorators/query.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/query.js",
      "@lit/reactive-element/decorators/state.js": "https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/decorators/state.js",
      "@lrnwebcomponents/code-sample": "https://ga.jspm.io/npm:@lrnwebcomponents/code-sample@4.0.29/code-sample.js",
      "@patternfly/pfe-collapse/pfe-collapse-panel.js": 
      "https://ga.jspm.io/npm:@patternfly/pfe-collapse@2.0.0-next.2/pfe-collapse-panel.js",
      "@patternfly/pfe-core": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/core.js",
      "@patternfly/pfe-core/controllers/color-context.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/controllers/color-context.js",
      "@patternfly/pfe-core/controllers/logger.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/controllers/logger.js",
      "@patternfly/pfe-core/controllers/slot-controller.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/controllers/slot-controller.js",
      "@patternfly/pfe-core/decorators.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/decorators.js",
      "@patternfly/pfe-core/decorators/bound.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/decorators/bound.js",
      "@patternfly/pfe-core/decorators/observed.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/decorators/observed.js",
      "@patternfly/pfe-core/functions/deprecatedCustomEvent.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/functions/deprecatedCustomEvent.js",
      "@patternfly/pfe-core/functions/random.js": "https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.7/functions/random.js",
      "@patternfly/pfe-icon": "https://ga.jspm.io/npm:@patternfly/pfe-icon@2.0.0-next.3/pfe-icon.js",
      "@patternfly/pfe-modal": "https://ga.jspm.io/npm:@patternfly/pfe-modal@2.0.0-next.4/pfe-modal.js",
      "lit": "https://ga.jspm.io/npm:lit@2.2.8/index.js",
      "lit-element/lit-element.js": "https://ga.jspm.io/npm:lit-element@3.2.2/lit-element.js",
      "lit-html": "https://ga.jspm.io/npm:lit-html@2.2.7/lit-html.js",
      "lit-html/directives/class-map.js": "https://ga.jspm.io/npm:lit-html@2.2.7/directives/class-map.js",
      "lit-html/directives/if-defined.js": "https://ga.jspm.io/npm:lit-html@2.2.7/directives/if-defined.js",
      "lit-html/directives/style-map.js": "https://ga.jspm.io/npm:lit-html@2.2.7/directives/style-map.js",
      "lit-html/static.js": "https://ga.jspm.io/npm:lit-html@2.2.7/static.js",
      "lit/decorators.js": "https://ga.jspm.io/npm:lit@2.2.8/decorators.js",
      "lit/directives/class-map.js": "https://ga.jspm.io/npm:lit@2.2.8/directives/class-map.js",
      "lit/directives/if-defined.js": "https://ga.jspm.io/npm:lit@2.2.8/directives/if-defined.js",
      "lit/directives/style-map.js": "https://ga.jspm.io/npm:lit@2.2.8/directives/style-map.js",
      "lit/static-html.js": "https://ga.jspm.io/npm:lit@2.2.8/static-html.js",
      "tslib": "https://ga.jspm.io/npm:tslib@2.4.0/tslib.es6.js"
    }
  }
}
</script>

<!-- ES Module Shims: Import maps polyfill for modules browsers without import maps support (all except Chrome 89+) -->
<script async src="https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js" crossorigin="anonymous"></script>
```

## Questions and Feedback
Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread](https://github.com/orgs/RedHat-UX/discussions/categories/q-a) here on GitHub. The Design Systems team will help 


## Example

```html
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">
    Red Hat Ansible Automation Platform
  </a>
  <ul slot="nav">
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-secondary-nav-menu slot="menu">
          <rh-secondary-nav-menu-section>
            <h3 slot="header" id="ansible-platform">
              <a href="#">Why Red Hat Ansible Automation Platforms</a>
            </h3>
            <ul slot="links" aria-labelledby="ansible-platform">
              <li>
                <a href="https://www.ansible.com/integrations">Integrations <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/success-stories">Custom success stories</a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/what-is-ansible">What is ansible <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/overview/it-automation">Why choose Red Hat for automation?</a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/topics/automation/why-choose-red-hat-for-automation">Edge automation with Red Hat Ansible Automation Platform</a>
              </li>
            </ul>
            <rh-cta slot="cta">
              <a href="#">Section Level CTA</a>
            </rh-cta>
          </rh-secondary-nav-menu-section>
          <rh-secondary-nav-menu-section>
            <h3 slot="header">
              <a href="#">Additional Features</a>
            </h3>
            <ul slot="links">
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/automation-execution-environments">Automation execution environments</a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/automation-controller">Automation controller</a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-mesh">Automation mesh <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/ansible-content-collections">Ansible Content Collections</a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-hub">Automation Hub <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-analytics">Red Hat Insights for Red Hat Ansible Automation Platform <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-services-catalog">Automation services catalog <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/content-tools">Ansible content tools <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
              </li>
            </ul>
            <rh-cta slot="cta">
              <a href="#">Section Level CTA</a>
            </rh-cta>
          </rh-secondary-nav-menu-section>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
     <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-secondary-nav-menu slot="menu">
          <ul>
            <li>
              <a href="https://www.ansible.com/integrations/cloud">Cloud Automation <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases/edge">Edge Automation <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases/network-automation">Network Automation <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases">See all <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a>
            </li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
     </li>
    <li><a href="https://docs.ansible.com/">Documentation</a></li>
  </ul>
  <rh-cta slot="cta">
    <a href="https://www.redhat.com/en/technologies/management/ansible/get-started">Get started</a>
  </rh-cta>
</rh-secondary-nav>
```

## `<rh-secondary-nav>` 

### Slots

| Name | Description | Required | Example |
|------|-------------|----------|---------| 
| **logo** | Navigation title or product name | Yes | `<a slot="logo" href="#" >...</a>` |
| **nav** | Unordered list of hyperlinks | Yes | `<ul slot="nav">...</ul>` |
| **cta** | Call to action component | No | `<rh-cta slot="cta">...</rh-cta>` |

### Attributes
| Name | Value | Description | Required | Example |
|------|-------|-------------|----------|---------| 
| **role** | navigation | Ensures an accessible experience before or on failed upgrade | Yes |  `<rh-secondary-nav role="navigation">` |
| **color-palette** | "lighter" (default),  "darker" | Sets the color theme for the navigation | No | `<rh-secondary-nav color-palette="darker">` |

### CSS Parts
| Name | Description |
|------|-------------|
| **nav** | Override nav element styles |
| **container** | Override grid container styles |
| **cta** | Override cta wrapper container styles |

### CSS Custom Properties

| Name | Default Value |
|------|-------------|
| `--rh-secondary-nav-logo-max-width` | `10em` |
| `--rh-secondary-nav-z-index` | `102` | 
| `--rh-secondary-nav-overlay-z-index` | `-1` |


### Minimum example

```html
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-secondary-nav>
```

## `<rh-secondary-nav-dropdown>`

An `optional` component which replaces an href in the unordered list in the nav slot of the parent `rh-secondary-nav` and is used with it's companion component `<rh-secondary-nav-menu>`

### Slots
| Name | Description | Required | Example |
|------|-------------|----------|---------|
| **link** | Link to upgrade to a dropdown | Yes | `<a slot="link" href="#">Dropdown</a>` |
| **menu** | rh-secondary-nav-menu component | Yes | `<rh-secondary-nav-menu slot="menu">...</rh-secondary-nav-menu>` |


### CSS Parts
| Name | Description |
|------|-------------|
| **container** | Override wrapper container styles |

## `<rh-secondary-nav-menu>` 

### Slots
| Name | Description | Required | Example |
|------|-------------|----------|---------|
| **default** | Default slot | Yes | `<rh-secondary-nav-menu><ul>...</ul></rh-secondary-nav-menu>` |
-  The default slot should be used with either a `<rh-secondary-nav-menu-section>` or an `<ul>` or `<ol>` list of links


### Attributes

| Name | Value | Required | Example |
|------|-------------|----------|---------|
| **layout** | `fixed-width`, `full-width` (default) | No | `<rh-secondary-nav-menu>Content</rh-secondary-nav-menu>` |

-  The `fixed-width` menu layout only uses the horizontal space in which it's content needs.
- The `full-width` layout style menu spans the entire horizontal space of the viewport.

### CSS Custom Properties

| Name | Default Value |
|------|-------------|
| `--rh-secondary-nav-menu-section-grid` | `repeat(auto-fit, minmax(15.5em, 1fr))` | 
| `--rh-secondary-nav-menu-section-grid-gap` | `2em` |
| `--rh-secondary-nav-menu-content-max-width` | `1136px` |

### CSS Parts
| Name | Description |
|------|-------------|
| **full-width** | Override wrapper container styles for full-width menus |
| **fixed-width**| Override wrapper container styles for fixed-width menus |
| **sections** | Override wrapper container styles for menu content |

### Minimum example
```html
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li>
      <rh-secondary-nav-dropdown>
        <a slot="link">Link 2</a>
        <rh-secondary-nav-menu slot="menu" layout="fixed-width"> <!-- layout attribute optional -->
          <ul>
            <li><a href="#">Link 2.1</a></li>
            <li><a href="#">Link 2.2</a></li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-secondary-nav>
```

## `<rh-secondary-nav-menu-section>` 

### Slots
| Name | Description | Required | Example |
|------|-------------|----------|---------|
| **header** | Header element describing the sibling list | Yes | `<h3 slot="header">List Title</h3>` |
| **links** |  Unordered list of hyperlinks | Yes | `<ul slot="links">...</ul>` |
| **cta** | Call to action component | No | `<rh-cta slot="cta">...</rh-cta>` |

### CSS Parts
| Name | Description |
|------|-------------|
| **container** | Override wrapper container styles for menu-section content |


### Minimum example
```html
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li>
      <rh-secondary-nav-dropdown>
        <a slot="link">Link 2</a>
        <rh-secondary-nav-menu slot="menu" layout="fixed-width"> <!-- layout attribute optional -->
          <rh-secondary-nav-menu-section>
            <h3 slot="header">Title of Links</h3>
            <ul slot="links">
              <li><a href="#">Link 2.1</a></li>
              <li><a href="#">Link 2.2</a></li>
            </ul>
          </rh-secondary-nav-menu>
        <rh-secondary-nav-menu-section>
      </rh-secondary-nav-dropdown>
    </li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-secondary-nav>
```
