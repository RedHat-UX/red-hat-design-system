# Red Hat Design System Site℠
Built with [Eleventy](https://www.11ty.io/), Gulp, Sass, and Babel.

## Installation
Make sure you have at lealst Node 10.x.x and run:

```shell
npm install
```

## Running Local Server
```
npm start
```

This will start eleventy and a watch process that will reload the site if `*.njk`, `*.md`, `*.scss`, or `*.js` files are updated.

## Folders

### `pages/`
The pages dir contains files that will be turned into web pages, in an identical folder structure. These files can be `.njk` or `.md`.

See the [PAGES-11ty-documentation.md](PAGES-11ty-documentation.md) for more information.

### `scss/` and `js/`

This is where our CSS and JS source files live, they're compiled by gulp with source maps if compiling for dev and minified if we're compiling for production.

### `webroot/`

Directory to be hosted as webroot. All `*.html`, `*.css`, `*.js` files are ignored; anything else added to that directory is not.