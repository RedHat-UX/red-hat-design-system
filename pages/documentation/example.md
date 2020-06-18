---
layout: _templates/layout-basic.njk
title: Pages and 11ty documentation
---

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
