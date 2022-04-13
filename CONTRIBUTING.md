## Prerequisites

To develop components or design system documentation, you must first install 
some required software, namely node.js. We use [nvm](https://github.com/nvm-sh/nvm)
to ensure a uniform development environment.

### Install Node
[Install homebrew](https://brew.sh/), then use that to install nvm
```bash
brew install nvm
```

### Clone the Repository

Then change directory to it

```bash
git clone git@github.com:redhat-ux/red-hat-design-system
cd red-hat-design-system
```

### Install Dependencies
Install the right node version, followed by the `node_modules` dependencies

```bash
nvm use
npm ci
```

## Generate an element
```bash
npm init @patternfly/element
```

## Run the demo
Run the dev server to develop components. Your changes will automatically refresh
the browser window.

```bash
npm run start
```

## Run the docs site
Run the 11ty build in watch mode to develop the design system docs.

```bash
npm run watch:docs
```
