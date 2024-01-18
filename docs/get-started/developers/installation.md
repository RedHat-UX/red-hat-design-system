---
layout: layout-with-subnav.njk
title: Installation
heading: Developers
tags:
  - developers
permalink: /get-started/developers/installation/index.html
order: 10
bodyClasses: element-docs
---

## How to install

To develop components or design system documentation, you must first install some required software, namely node.js. We use [nvm](https://github.com/nvm-sh/nvm) to ensure a uniform development environment.

### Step 1: Install node

**Fedora/RHEL users** should install nvm for bash directly from GitHub.

<rh-code-block>
  <script type="text/sample-javascript">
  curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
  </script>
</rh-code-block>

**Mac users** should install Homebrew. Go to the website or run this command (takes 5-10 minutes).

<rh-code-block>
  <script type="text/sample-javascript">
  /bin/bash -c "$(curl -fsSL
  https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  </script>
</rh-code-block>

Then use that to install `nvm`:

<rh-code-block>
  <script type="text/sample-javascript">
  brew install nvm
  </script>
</rh-code-block>

### Step 2: Clone the repository

Clone the repository and change the directory to it:

<rh-code-block>
  <script type="text/sample-javascript">
  git clone git@github.com:redhat-ux/red-hat-design-system
  cd red-hat-design-system
  </script>
</rh-code-block>

### Step 3: Install dependencies

Install the right node version using `nvm`, then install the `node_modules` dependencies:

<rh-code-block>
  <script type="text/sample-javascript">
  nvm use
  npm ci
  </script>
</rh-code-block>

## How to generate an element

Run the following command to begin the scaffolding process:

<rh-code-block>
  <script type="text/sample-javascript">
  npm run new
  </script>
</rh-code-block>

The generator will prompt you for the following:

What is the element tag name?

- Your element should be lower case and needs to contain at least one hyphen to adhere to the [Custom Elements](https://html.spec.whatwg.org/multipage/custom-elements.html) standard naming convention.
- Red Hat Design System elements should begin prefixed by `rh-`.  However if you are creating an element for use outside this project prefix your element as you see fit.

After answering the script will generate a bootstrapped element in the `elements/your-element` directory complete with a`demo` and `test` directory.

## Run the dev server

Run the dev server to develop components:

<rh-code-block>
  <script type="text/sample-javascript">
  npm start
  </script>
</rh-code-block>

This starts a local dev server at http://localhost:8000 and the 11ty dev server for the docs site at http://localhost:8080. Your changes will automatically refresh the browser window.

To run only the components dev server, first run the build, and then run the dev server:

<rh-code-block>
  <script type="text/sample-javascript">
  npm-run-dev
  </script>
</rh-code-block>

To run only the docs dev server, first run the build, then 11ty:

<rh-code-block>
  <script type="text/sample-javascript">
  npm run build
  npx eleventy --serve --incremental
  </script>
</rh-code-block>

{% feedback %}
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
{% endfeedback %}