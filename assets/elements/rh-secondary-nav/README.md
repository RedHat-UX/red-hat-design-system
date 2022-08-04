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

-->
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
            <ul slot="links" aria-labelledby="ansible-platform"">
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
            <pfe-cta slot="cta">
              <a href="#">Section Level CTA</a>
            </pfe-cta>
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
            <pfe-cta slot="cta">
              <a href="#">Section Level CTA</a>
            </pfe-cta>
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
  <pfe-cta slot="cta">
    <a href="https://www.redhat.com/en/technologies/management/ansible/get-started">Get started</a>
  </pfe-cta>
</rh-secondary-nav>
```

## `<rh-secondary-nav>` 

### Slots

| Name | Description | Required | Example |
|------|-------------|----------|---------| 
| **logo** | Navigation title or product name | Yes | `<a slot="logo" href="#" >...</a>` |
| **nav** | Unordered list of hyperlinks | Yes | `<ul slot="nav">...</ul>` |
| **cta** | Call to action component | No | `<pfe-cta slot="cta">...</pfe-cta>` |

### Attributes
| Name | Value | Description | Required | Example |
|------|-------|-------------|----------|---------| 
| **role** | navigation | Ensures an accessible experience before or on failed upgrade | Yes |  `<rh-secondary-nav role="navigation">` |


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
| **cta** | Call to action component | No | `<pfe-cta slot="cta">...</pfe-cta>` |

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