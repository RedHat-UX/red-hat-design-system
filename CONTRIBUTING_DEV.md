# Developing the Red Hat Design System

## Prerequisites

To develop components or design system documentation, you must first install
some required software, namely node.js. We use [nvm](https://github.com/nvm-sh/nvm)
to ensure a uniform development environment.

### Install Node
Fedora/RHEL users should install `nvm` for bash directly from GitHub

```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

Mac users should [Install homebrew](https://brew.sh/), then use that to install `nvm`:

```bash
brew install nvm
```

### Clone the Repository

Then change directory to it:

```bash
git clone git@github.com:redhat-ux/red-hat-design-system
cd red-hat-design-system
```

### Install Dependencies
Install the right node version using `nvm`, then install the `node_modules` dependencies:

```bash
nvm use
npm ci
```

## Generate an Element

RHDS uses tools and libraries from  [`@patternfly/patternfly-elements`](https://github.com/patternfly/patternfly-elements).
Use the PatternFly Elements generator to scaffold an element:

```bash
npm init @patternfly/element
```

## Run the Dev Server
Run the dev server to develop components. Your changes will automatically refresh the browser
window:

```bash
npm start
```

## Run the Docs Site
Run the 11ty build in watch mode to develop the design system docs.

```bash
npm run watch:docs
```
