## `<rh-navigation-secondary>` Red Hat Secondary Navigation

A non-primary navigation for product and subcategory navigation.

- Demo: https://ux.redhat.com/components/navigation-secondary/demo/

## Installation
If using npm/bundlers:

```bash
npm install @rhds/elements
```

```js
import '@rhds/elements/rh-navigation-secondary/rh-navigation-secondary.js';
```

```html
<link rel="stylesheet" href="node_modules/@rhds/elements/elements/rh-navigation-secondary/rh-navigation-secondary-lightdom.css" />
```

## Questions and Feedback
Questions? Comments? Feedback? Need help installing or implementing?
Please [open a discussion thread](https://github.com/orgs/RedHat-UX/discussions/categories/q-a) here on GitHub. The Design Systems team will help 

## Example

```html
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo">
    Red Hat Ansible Automation Platform
  </a>
  <ul slot="nav">
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-navigation-secondary-menu slot="menu">
          <rh-navigation-secondary-menu-section>
            <h3 slot="header" id="ansible-platform">
              <a href="#">Why Red Hat Ansible Automation Platforms</a>
            </h3>
            <ul slot="links" aria-labelledby="ansible-platform">
              <li>
                <a href="https://www.ansible.com/integrations">Integrations 
                <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/success-stories">Custom success stories</a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/what-is-ansible">What is ansible <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
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
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section>
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
                <a href="https://www.ansible.com/products/automation-mesh">Automation mesh <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
              <li>
                <a href="https://www.redhat.com/en/technologies/management/ansible/ansible-content-collections">Ansible Content Collections</a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-hub">Automation Hub <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-analytics">Red Hat Insights for Red Hat Ansible Automation Platform <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/products/automation-services-catalog">Automation services catalog <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
              <li>
                <a href="https://www.ansible.com/content-tools">Ansible content tools <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
              </li>
            </ul>
            <rh-cta slot="cta">
              <a href="#">Section Level CTA</a>
            </rh-cta>
          </rh-navigation-secondary-menu-section>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
     <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-navigation-secondary-menu slot="menu">
          <ul>
            <li>
              <a href="https://www.ansible.com/integrations/cloud">Cloud Automation <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases/edge">Edge Automation <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases/network-automation">Network Automation <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
            </li>
            <li>
              <a href="https://www.ansible.com/use-cases">See all <pf-icon icon="new-window" color="info" size="sm"></pf-icon></a>
            </li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
     </li>
    <li><a href="https://docs.ansible.com/">Documentation</a></li>
  </ul>
  <rh-cta slot="cta">
    <a href="https://www.redhat.com/en/technologies/management/ansible/get-started">Get started</a>
  </rh-cta>
</rh-navigation-secondary>
```

## `<rh-navigation-secondary>` 

### Slots

| Name | Description | Required | Example |
|------|-------------|----------|---------| 
| **logo** | Navigation title or product name | Yes | `<a slot="logo" href="#" >...</a>` |
| **nav** | Unordered list of hyperlinks | Yes | `<ul slot="nav">...</ul>` |
| **cta** | Call to action component | No | `<rh-cta slot="cta">...</rh-cta>` |

### Attributes
| Name | Value | Description | Required | Example |
|------|-------|-------------|----------|---------| 
| **role** | navigation | Ensures an accessible experience before or on failed upgrade | Yes |  `<rh-navigation-secondary role="navigation">` |
| **color-palette** | "lighter" (default),  "dark" | Sets the color theme for the navigation | No | `<rh-navigation-secondary color-palette="dark">` |

### CSS Parts
| Name | Description |
|------|-------------|
| **nav** | Override nav element styles |
| **container** | Override grid container styles |
| **cta** | Override cta wrapper container styles |

### CSS Custom Properties

| Name | Default Value |
|------|-------------|
| `--rh-navigation-secondary-logo-max-width` | `10em` |
| `--rh-navigation-secondary-z-index` | `102` | 
| `--rh-navigation-secondary-overlay-z-index` | `-1` |


### Minimum example

```html
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-navigation-secondary>
```

## `<rh-navigation-secondary-dropdown>`

An `optional` component which replaces an href in the unordered list in the nav slot of the parent `rh-navigation-secondary` and is used with it's companion component `<rh-navigation-secondary-menu>`

### Slots
| Name | Description | Required | Example |
|------|-------------|----------|---------|
| **link** | Link to upgrade to a dropdown | Yes | `<a slot="link" href="#">Dropdown</a>` |
| **menu** | rh-navigation-secondary-menu component | Yes | `<rh-navigation-secondary-menu slot="menu">...</rh-navigation-secondary-menu>` |


### CSS Parts
| Name | Description |
|------|-------------|
| **container** | Override wrapper container styles |

## `<rh-navigation-secondary-menu>` 

### Slots
| Name | Description | Required | Example |
|------|-------------|----------|---------|
| **default** | Default slot | Yes | `<rh-navigation-secondary-menu><ul>...</ul></rh-navigation-secondary-menu>` |
-  The default slot should be used with either a `<rh-navigation-secondary-menu-section>` or an `<ul>` or `<ol>` list of links


### Attributes

| Name | Value | Required | Example |
|------|-------------|----------|---------|
| **layout** | `fixed-width`, `full-width` (default) | No | `<rh-navigation-secondary-menu>Content</rh-navigation-secondary-menu>` |

-  The `fixed-width` menu layout only uses the horizontal space in which it's content needs.
- The `full-width` layout style menu spans the entire horizontal space of the viewport.

### CSS Custom Properties

| Name | Default Value |
|------|-------------|
| `--rh-navigation-secondary-menu-section-grid` | `repeat(auto-fit, minmax(15.5em, 1fr))` | 
| `--rh-navigation-secondary-menu-section-grid-gap` | `2em` |
| `--rh-navigation-secondary-menu-content-max-width` | `1136px` |

### CSS Parts
| Name | Description |
|------|-------------|
| **full-width** | Override wrapper container styles for full-width menus |
| **fixed-width**| Override wrapper container styles for fixed-width menus |
| **sections** | Override wrapper container styles for menu content |

### Minimum example
```html
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a slot="link">Link 2</a>
        <rh-navigation-secondary-menu slot="menu" layout="fixed-width"> <!-- layout attribute optional -->
          <ul>
            <li><a href="#">Link 2.1</a></li>
            <li><a href="#">Link 2.2</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-navigation-secondary>
```

## `<rh-navigation-secondary-menu-section>` 

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
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo">Logo</a>
  <ul slot="nav">
    <li><a href="#">Link 1</a></li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a slot="link">Link 2</a>
        <rh-navigation-secondary-menu slot="menu" layout="fixed-width"> <!-- layout attribute optional -->
          <rh-navigation-secondary-menu-section>
            <h3 slot="header">Title of Links</h3>
            <ul slot="links">
              <li><a href="#">Link 2.1</a></li>
              <li><a href="#">Link 2.2</a></li>
            </ul>
          </rh-navigation-secondary-menu>
        <rh-navigation-secondary-menu-section>
      </rh-navigation-secondary-dropdown>
    </li>
    <li><a href="#">Link 3</a></li>
  </ul>
</rh-navigation-secondary>
```
