# `/pages` & 11ty documentation

11ty is an unopinionated static site generator. It gives us a lot of basic features that are handy when templating, organizing, and building a site, but mostly tries to stay out of our way.

This site is configured to use [Nunjucks](https://mozilla.github.io/nunjucks/) and Markdown as languages to build pages.

Each page should have 'front-matter'. Front-matter should be at the top of the document, it helps define page templates, tags, and other variables we may use to help display or organize our pages.

Here's a two simple examples:
```
---
layout: _templates/layout-basic.njk
title: Example page
---
```

```
---
layout: _templates/layout-home.njk
title: Home
---
```

This tells 11ty what the page template should be (relative to the `pages` folder), and what the page title is. Which may be used as part of the page template as an h1, but is also used as part of the `<title>` attribute in the `<head>`.l

Here's an example including tags, which is a multi-value piece of data.
```
---
layout: _includes/layout-basic.njk
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
layout: _templates/layout-basic.njk
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

See a simple example at `pages/_templates/component/documentation.njk`.

To use it in another file, first [`import`](https://mozilla.github.io/nunjucks/templating.html#import) it in the file containing the mixin:

```njk
{% import "_templates/component/documentation.njk" as documentation %}
```

The first param is the file location relative to `pages/` (11ty root), the second parameter is a reference to the exports (e.g. macros) of the file. We can call the 'output' macro in the file with dot notation.

So to print it in a page we'd use:

```njk
  {{ documentation.output() }}
```

If the macro took parameters we can include them in the parentheses.

Files with macros can have all sorts of other content, which won't print if it's pulled in with `import`. This means the file with a macro can detail a component in our library and show multiple variations of the component, and if we want to include it in another file we can call the file and only pull in the macro with params of our choosing if we want.

If you would like to pull in an entire file's display, use [`include`](https://mozilla.github.io/nunjucks/templating.html#include).
