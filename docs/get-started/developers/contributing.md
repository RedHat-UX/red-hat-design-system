---
title: Contributing
heading: Developers
layout: layouts/pages/has-toc.njk
tags:
  - developers
subnav:
  collection: sortedDevelopers
  order: 40
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-tag/rh-tag.js';
</script>


<style data-helmet>
  rh-code-block + rh-code-block {
    margin-block-start: var(--rh-spacer-2xl, 32px);
  }
</style>

## Install Project

A quick start guide for installing the local development tools needed for 
contributing to the Red Hat Design System.

1. [Install Git][installgit] for your system.
2. [Install Node Version Manager][installnodeversionmanager] for your system.  
3. Clone the Red Hat Design System repository from Github.

```shell rhcodeblock
git clone git@github.com:RedHat-UX/red-hat-design-system.git
```

4. Navigate into your project folder

```shell rhcodeblock
cd red-hat-design-system
```

5. Run [Node Version Manager's][nodeversionmanagers] `use` command to switch to 
    the projects [Node][node] version.

    ```shell rhcodeblock
    nvm use
    ```

    If prompted, follow the instructions for installing specific version of Node 
    [used by this project][usedbythisproject] on your system, which will look 
    similar to the following:

    > `You need to run "nvm install v20.10.0" to install it before using it.`

6. Install project dependencies, run `npm ci`

    ```shell rhcodeblock
    npm ci
    ```

## Development Servers

1. Start the development servers `npm start`.

    ```shell rhcodeblock
    npm start
    ```

    Two servers will start, if no other processes are using port `:8000` or 
    `:8080` the element development server will load on `:8000` and the 
    documentation server will load on `:8080`. The element server will auto open 
    a browser window, the documentation server however will not.  

2. To run these servers independently you can use the commands `npm run dev` and 
   `npm run serve`.

    ```shell rhcodeblock
    npm run dev
    ```

    ```shell rhcodeblock
    npm run serve
    ```

## Creating a new element

1. Run the new element generator command `npm run new`

    ```shell rhcodeblock
    npm run new
    ```

2. You will be prompted for a element name.  For Red Hat Design System elements 
   use prefix `rh-` followed by the elements name e.g: `rh-element-name`.

3. A new folder will be created in the `./elements/rh-element-name` directory 
   with the name of the element you chose.

   The following files will also be created for you:

    - `./elements/rh-element-name/demo/rh-element-name.html`
    - `./elements/rh-element-name/demo/rh-element-name.js`
      <rh-tag color="red" variant="outline">Deprecated</rh-tag>
    - `./elements/rh-element-name/demo/demo.css`
      <rh-tag color="red" variant="outline">Deprecated</rh-tag>
    - `./elements/rh-element-name/docs/rh-element.html`
      <rh-tag color="red" variant="outline">Deprecated</rh-tag>
    - Rename this file to `00-overview.md`
    - `./elements/rh-element-name/test/rh-element-name.spec.ts`
    - `./elements/rh-element-name/test/rh-element-name.e2e.ts`
    - `./elements/rh-element-name/rh-element-name.ts`
    - `./elements/rh-element-name/rh-element-name.css`
    - `./elements/rh-element-name/README.md`

4. For more information please read our [Wiki][wiki] page on
   [adding new components][addingnewcomponents] 

## Testing

1. To run all unit tests use command `npm test`

    ```shell rhcodeblock
    npm test
    ```

2. To run individual element unit tests use the test command with element test path flag

    ```shell rhcodeblock
    npm run test -- -- ./elements/rh-element-name/test/rh-element-name.spec.ts
    ```

3. The project uses [Mocha][mocha] and [Chai][chai] and are run via
   [Web Test Runner][webtestrunner]
4. For more detailed information about testing and how we write tests please see 
   our [Testing][testing] page on the Wiki and our [introduction to testing RHDS 
   components][introductiontotestingrhdscomponents] with Chai A11y aXe and
   `a11ySnapshot`.

## Writing Code

1.  Please read our Developer Guidelines section of our [Wiki][wiki]
    - [Custom Element API Style Guide][customelementapistyleguide]
    - [Shadow DOM][shadowdom]
    - [HTML Formatting][htmlformatting]
    - [CSS][css]
    - [JSDoc][jsdoc]

## Contributing 

1. When your code is ready to push to our repository, please open a Pull 
   Request/Merge Request. You may first need to request access. Please reach out 
   to us on Slack `#red-hat-design-system`
   <rh-tag color="red" variant="outline">Internal Red Hat only</rh-tag> or
   [open an issue][openanissue].
2. Before pushing your code please read our
   [Pull Request Review Guide][pullrequestreviewguide] on our [Wiki][wiki]

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[addingnewcomponents]: https://github.com/RedHat-UX/red-hat-design-system/wiki/Adding-New-Components
[chai]: https://www.chaijs.com/
[css]: https://github.com/RedHat-UX/red-hat-design-system/wiki/CSS-Styles
[customelementapistyleguide]: https://github.com/RedHat-UX/red-hat-design-system/wiki/Custom-Elements-API-Style-Guide
[htmlformatting]: https://github.com/RedHat-UX/red-hat-design-system/wiki/HTML-Formatting
[installgit]: https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
[installnodeversionmanager]: https://github.com/nvm-sh/nvm
[introductiontotestingrhdscomponents]: /accessibility/qa-testing/#accessibility-tools-for-ci%2Fcd-pipelines
[jsdoc]: https://github.com/RedHat-UX/red-hat-design-system/wiki/JSDoc
[mocha]: https://mochajs.org/
[node]: https://nodejs.org/en
[nodeversionmanagers]: https://github.com/nvm-sh/nvm
[openanissue]: https://github.com/RedHat-UX/red-hat-design-system/issues/new/choose
[pullrequestreviewguide]: https://github.com/RedHat-UX/red-hat-design-system/wiki/Pull-Request-Review-Guide
[shadowdom]: https://github.com/RedHat-UX/red-hat-design-system/wiki/Shadow-DOM-Style-Guide
[testing]: https://github.com/RedHat-UX/red-hat-design-system/wiki/Testing
[usedbythisproject]: https://github.com/RedHat-UX/red-hat-design-system/blob/main/.nvmrc
[webtestrunner]: https://modern-web.dev/docs/test-runner/overview/
[wiki]: https://github.com/RedHat-UX/red-hat-design-system/wiki
