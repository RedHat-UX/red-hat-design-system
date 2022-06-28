# `/docs` & 11ty documentation

The Red Hat Digital Design System site is built with [Eleventy](https://www.11ty.io/).

## Installation
Make sure you have at least Node 16 and run:

```shell
npm ci
```

## Running Local Server
```
npm run watch:docs
```

This will start eleventy and a watch process that will reload the site if `*.njk`, `*.md`, `*.scss`, or `*.js` files are updated.

## Publishing

Publish to Github Pages
```
npm run publish
```

Publish to cpfed
```
npm run publish cpfed
```

## Folders

### `docs/`
The pages dir contains files that will be turned into web pages, in an identical folder structure. These files can be `.njk` or `.md`.

See the [PAGES-11ty-documentation.md](PAGES-11ty-documentation.md) for more information.

#### `docs/scss/` and `docs/js/`

This is where our CSS and JS source files live, they're compiled by gulp with source maps if compiling for dev and minified if we're compiling for production.

### `_site/`

Directory to be hosted as webroot. All files are ignored.

## Authoring

### Front matter, and you

Each content file has a bit at the top we call 'front matter'. This provides metadata that will be used as content, for sorting, in templating,etc.

Most pages should have front matter that looks like this:
```
---
layout: layout-basic.njk
title: Grid
order: -10
tags:
  - foundations
---
```

* `layout`: decides what the page template will be used
* `title`: What the page title is, this is used for the title that shows in the tab of the browser and the `h1` on most page templates.
* `order`: Helps effect how items are sorted. See Sorting below.
* `tags`: Tags can be used for all sorts of things, at time of writing, they are used to help build the navigation. `tags` is multivalue, so a page could have multiple tags if we wanted.

### Getting pages into the navigation

The navigation is an included template:
`pages/component/header.njk`

It is a mixture of hardcoding and dynamic listing so that it's _hopefully_ easy to understand.

The navigation is in a nested `ul`, the top level menu links and the second level 'Overview' links are all hardcoded and can be added by copying an existing `li` and it's contents as needed.

The `details` elements have a `for` statement that finds all pages with the listed tag, e.g. `{%- for foundation in collections.foundations -%}` is iterating over all of the pages with the tag `foundations`.

Tags and navigation sections can be added by copying a similar section and updating the content as needed.

### Adding new tags

New tags can be added by adding them to a pages front matter, there is nothing else that has to be done for it to exist and be used by `collections`.

If the new tag needs to be sorted in any special way it needs to be handled in: `.eleventy.js`.

#### Sorting
There is an existing sort function that we're using on tags that show up in the navigation. To add a new tag to the existing sort, add it to the `tagsToAlphabetize` array in `.eleventy.js`.

The sort logic we have is as follows:
* It sorts by `order`, and then alphabetically by `title`, those values both coming from the front matter of the pages.
* If `order` isn't in the frontmatter, it's assumed the `order` is `0`.
* `order` is sorted like weight: the larger the number, the more it sinks; the lower the number, the higher it floats.
* If all files have no `order` value, or the same `order` value, they will simply be listed alphabetically by `title`.

Let's say we have the following page title's and orders:
* `Dang that was a Great Title`
  * `order: 0`
* `A Cool Title`
  * No `order` set
* `Being a Witty Title`
  * `order: 10`
* `Can We Make a Better Title`
  * `order: -10`

The result would be:
* `Can We Make a Better Title`
* `A Cool Title`
* `Dang that was a Great Title`
* `Being a Witty Title`

Because:
* `Can We Make a Better Title` has the lowest `order`, and then floats to the top
* `Being a Witty Title` has the largest `order` and sinks to the bottom
* `A Cool Title` and `Dang that was a Great Title` both have the same `order` value of 0, so are ordered alphabetically, `A` coming before `D`

11ty is an unopinionated static site generator. It gives us a lot of basic features that are handy when templating, organizing, and building a site, but mostly tries to stay out of our way.

This site is configured to use [Nunjucks](https://mozilla.github.io/nunjucks/) and Markdown as languages to build pages.

Each page should have 'front-matter'. Front-matter should be at the top of the document, it helps define page templates, tags, and other variables we may use to help display or organize our pages.

Here's a two simple examples:
```
---
layout: layout-basic.njk
title: Example page
---
```

```
---
layout: layout-home.njk
title: Home
---
```

This tells 11ty what the page template should be (relative to the `pages` folder), and what the page title is. Which may be used as part of the page template as an h1, but is also used as part of the `<title>` attribute in the `<head>`.l

Here's an example including tags, which is a multi-value piece of data.
```
---
layout: layout-basic.njk
title: Accordion Element
tags:
  - javascript
  - container
---
```

Front-matter variables can be arbitrarily defined and used in templates or for custom javascript coding, although there are some values that are [predefined by 11ty](https://www.11ty.dev/docs/data-configuration/).

### Adding Component JS to a page
To add a Patternfly Element's JS, add an entry to the front-matter `includeComponent` and a list of the components to be used on the page:

```
---
layout: layout-basic.njk
title: Card
tags:
  - component
includeComponent:
  - pfe-card
  - pfe-tabs
---
```

To make sure it has been loaded, check the 'Network' tab in the dev tools of the web browser. Filter by the name of the component (e.g. `pfe-card`) and make sure it exists in the project.

If it does not, any new Patternfly elements can be added to the project by instaling them with npm, e.g.:

```
npm install @patternfly/pfe-foo-bar
```

## Nunjucks' Macros

Macros are essentially HTML Mixins. They don't print anything until they're called, they take parameters, and have self contained logic and markup to be printed.

See a simple example at `pages/component/documentation.njk`.

To use it in another file, first [`import`](https://mozilla.github.io/nunjucks/templating.html#import) it in the file containing the mixin:

```njk
{% import "component/documentation.njk" as documentation %}
```

The first param is the file location relative to `pages/` (11ty root), the second parameter is a reference to the exports (e.g. macros) of the file. We can call the 'output' macro in the file with dot notation.

So to print it in a page we'd use:

```njk
  {{ documentation.output() }}
```

If the macro took parameters we can include them in the parentheses.

Files with macros can have all sorts of other content, which won't print if it's pulled in with `import`. This means the file with a macro can detail a component in our library and show multiple variations of the component, and if we want to include it in another file we can call the file and only pull in the macro with params of our choosing if we want.

If you would like to pull in an entire file's display, use [`include`](https://mozilla.github.io/nunjucks/templating.html#include).
