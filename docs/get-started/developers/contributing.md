---
layout: layouts/pages/basic.njk
title: Contributing
heading: Developers
tags:
  - developers
hasToc: true
subnav:
  collection: sortedDevelopers
  order: 40
importElements:
  - rh-code-block
  - rh-tag
---

<style>
  rh-code-block + rh-code-block {
    margin-block-start: var(--rh-spacer-2xl, 32px);
  }
</style>

## Install Project

A quick start guide for installing the local development tools needed for contributing to the Red Hat Design System.

1. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) for your system.
2. [Install Node Version Manager](https://github.com/nvm-sh/nvm) for your system.  
3. Clone the Red Hat Design System repository from Github.

    <rh-code-block>
      <script type="text/x-shellscript">git clone git@github.com:RedHat-UX/red-hat-design-system.git</script>
    </rh-code-block>

4. Navigate into your project folder

    <rh-code-block>
      <script type="text/x-shellscript">cd red-hat-design-system</script>
    </rh-code-block>

5. Run [Node Version Manager's](https://github.com/nvm-sh/nvm) `use` command to switch to the projects [Node](https://nodejs.org/en) version.

    <rh-code-block>
      <script type="text/x-shellscript">nvm use</script>
    </rh-code-block>

    If prompted, follow the instructions for installing specific version of Node [used by this project](https://github.com/RedHat-UX/red-hat-design-system/blob/main/.nvmrc) on your system, which will look similar to the following: 
    
    > `You need to run "nvm install v20.10.0" to install it before using it.`

6. Install project dependencies, run `npm ci`

    <rh-code-block>
      <script type="text/x-shellscript">npm ci</script>
    </rh-code-block>

## Development Servers

1. Start the development servers `npm run start`.

    <rh-code-block>
      <script type="text/x-shellscript">npm run start</script>
    </rh-code-block>

    Two servers will start, if no other processes are using port `:8000` or `:8080` the element development server will load on `:8000` and the documentation server will load on `:8080`. The element server will auto open a browser window, the documentation server however will not.  
2. To run these servers independently you can use the commands `npm run dev` and `npm run serve`.

    <rh-code-block>
      <script type="text/x-shellscript">npm run dev</script>
    </rh-code-block>


    <rh-code-block>
      <script type="text/x-shellscript">npm run serve</script>
    </rh-code-block>

## Creating a new element

1. Run the new element generator command `npm run new`

    <rh-code-block>
      <script type="text/x-shellscript">npm run new</script>
    </rh-code-block>

2. You will be prompted for a element name.  For Red Hat Design System elements use prefix `rh-` followed by the elements name e.g: `rh-element-name`.
3. A new folder will be created in the `./elements/rh-element-name` directory with the name of the element you chose.

    The following files will also be created for you:

    - `./elements/rh-element-name/demo/rh-element-name.html`
    - `./elements/rh-element-name/demo/rh-element-name.js` <rh-tag color="red" variant="outline">Deprecated</rh-tag>
    - `./elements/rh-element-name/demo/demo.css` <rh-tag color="red" variant="outline">Deprecated</rh-tag>
    - `./elements/rh-element-name/docs/rh-element.html` <rh-tag color="red" variant="outline">Deprecated</rh-tag>
      - Rename this file to `00-overview.md`
    - `./elements/rh-element-name/test/rh-element-name.spec.ts`
    - `./elements/rh-element-name/test/rh-element-name.e2e.ts`
    - `./elements/rh-element-name/rh-element-name.ts`
    - `./elements/rh-element-name/rh-element-name.css`
    - `./elements/rh-element-name/README.md`

4. For more information please read our [Wiki](https://github.com/RedHat-UX/red-hat-design-system/wiki) page on [adding new components](https://github.com/RedHat-UX/red-hat-design-system/wiki/Adding-New-Components) 

## Testing

1. To run all unit tests use command `npm run test`

    <rh-code-block>
      <script type="text/x-shellscript">npm run test</script>
    </rh-code-block>

2. To run individual element unit tests use the test command with element test path flag

    <rh-code-block>
      <script type="text/x-shellscript">npm run test -- -- ./elements/rh-element-name/test/rh-element-name.spec.ts</script>
    </rh-code-block>

3. The project uses [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) and are run via [Web Test Runner](https://modern-web.dev/docs/test-runner/overview/)
4. For more detailed information about testing and how we write tests please see our [Testing](https://github.com/RedHat-UX/red-hat-design-system/wiki/Testing) page on the Wiki and our [introduction to testing RHDS components](/accessibility/qa-testing/#accessibility-tools-for-ci%2Fcd-pipelines) with Chai A11y aXe and a11ySnapshot.
## Writing Code

1.  Please read our Developer Guidelines section of our [Wiki](https://github.com/RedHat-UX/red-hat-design-system/wiki)
    - [Custom Element API Style Guide](https://github.com/RedHat-UX/red-hat-design-system/wiki/Custom-Elements-API-Style-Guide)
    - [Shadow DOM](https://github.com/RedHat-UX/red-hat-design-system/wiki/Shadow-DOM-Style-Guide)
    - [HTML Formatting](https://github.com/RedHat-UX/red-hat-design-system/wiki/HTML-Formatting)
    - [CSS](https://github.com/RedHat-UX/red-hat-design-system/wiki/CSS-Styles)
    - [JSDoc](https://github.com/RedHat-UX/red-hat-design-system/wiki/JSDoc)

## Contributing 

1. When your code is ready to push to our repository, please open a Pull Request/Merge Request. You may first need to request access.  Please reach out to us on Slack `#red-hat-design-system` <rh-tag color="red" variant="outline">Internal Red Hat only</rh-tag> or [open an issue](https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose).
2. Before pushing your code please read our [Pull Request Review Guide](https://github.com/RedHat-UX/red-hat-design-system/wiki/Pull-Request-Review-Guide) on our [Wiki](https://github.com/RedHat-UX/red-hat-design-system/wiki)

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>
