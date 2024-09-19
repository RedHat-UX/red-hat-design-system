// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server/config.js';
import { glob } from 'node:fs/promises';
import { makeDemoEnv } from './scripts/environment.js';
import { parse, serialize } from 'parse5';
import {
  createElement,
  getAttribute,
  getTextContent,
  isElementNode,
  query,
  setAttribute,
  setTextContent,
  spliceChildren,
} from '@parse5/tools';

/**
 * Find all modules in a glob pattern, relative to the repo root, and resolve them as package paths
 * @param {string} pattern
 * @param {([spec, path]: [string, string]) => [string, string]} fn
 */
async function resolveLocal(pattern, fn) {
  const TEST_RE = /\/test\/|(\.d\.ts$)/;
  // eslint-disable-next-line jsdoc/check-tag-names
  /** @type [string, string][] */
  const files = [];
  for await (const file of glob(pattern)) {
    if (!TEST_RE.test(file)) {
      files.push([file.replace('.ts', '.js'), file]);
    }
  }
  return Object.fromEntries(files.map(fn));
}

/**
 * manually inject icon import map with trailing slash.
 * jspm generator doesn't yet support trailing slash
 * @param {import('@parse5/tools').Document} document
 */
function injectManuallyResolvedIconsToImportMap(document) {
  const importMapNode = query(document, node =>
    isElementNode(node)
      && node.tagName === 'script'
      && node.attrs.some(attr =>
        attr.name === 'type'
          && attr.value === 'importmap'));
  if (importMapNode && isElementNode(importMapNode)) {
    const json = JSON.parse(getTextContent(importMapNode));
    json.imports['@rhds/icons/'] = '/node_modules/@rhds/icons/';
    json.imports['@rhds/tokens/'] = '/node_modules/@rhds/tokens/js/';
    json.imports['@rhds/tokens/css/'] = '/node_modules/@rhds/tokens/css/';
    json.imports['@floating-ui/dom'] =
      '/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs';
    json.imports['@floating-ui/core'] =
      '/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs';
    setTextContent(importMapNode, JSON.stringify(json, null, 2));
  }
}

/**
 * add context picker to dev sserver chrome
 * @param {import('@parse5/tools').Document} document
 */
function transformDevServerHTML(document) {
  const surfaceId = 'rhds-dev-server-main';
  // replace the <main> element with a surface
  const main = query(document, x =>
    isElementNode(x)
    && x.tagName === 'main');
  if (main && isElementNode(main)) {
    main.tagName = 'rh-surface';
    setAttribute(main, 'color-palette', 'lightest');
    setAttribute(main, 'id', surfaceId);
    setAttribute(main, 'role', 'main');
  }
  // add a context picker to header, targeting main
  const header = query(document, x =>
    isElementNode(x)
      && getAttribute(x, 'id') === 'main-header');
  if (header && isElementNode(header)) {
    const picker = createElement('rh-context-picker');
    setAttribute(picker, 'target', surfaceId);
    setAttribute(picker, 'value', 'lightest');
    const logoBar = query(header, node =>
      isElementNode(node)
        && getAttribute(node, 'class') === 'logo-bar');
    if (logoBar) {
      spliceChildren(logoBar, 4, 0, picker);
    }
  }
  // import surface and picker
  const module = query(document, x =>
    isElementNode(x)
      && x.tagName === 'script'
      && getAttribute(x, 'type') === 'module');
  if (module) {
    setTextContent(module, /* js */`${getTextContent(module)}
    import '@rhds/elements/rh-surface/rh-surface.js';
    import '@rhds/elements/rh-tooltip/rh-tooltip.js';
    import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';`);
  }
}

const imports = {
  ...await resolveLocal('./lib/**/*.ts', ([spec, path]) =>
    [`@rhds/elements/${spec}`, `./${path}`]),
  ...await resolveLocal('./elements/**/*.ts', ([x, path]) =>
    [`@rhds/elements/${x.replace('elements/', '')}`, `./${path}`]),
};

export default pfeDevServerConfig({
  tsconfig: 'tsconfig.json',
  litcssOptions: {
    exclude: /(lightdom)|node_modules\/@rhds\/tokens\/css\/global\.css/,
    include: [
      /elements\/rh-[\w-]+\/[\w-]+\.css$/,
      /@rhds\/tokens\/css\/.*\.css$/,
      /lib\/.*\.css$/,
    ],
  },
  importMapOptions: {
    typeScript: true,
    inputMap: { imports },
    resolutions: {
      'lit': 'lit',
      '@rhds/tokens': '@rhds/tokens',
    },
  },
  middleware: [
    async function(ctx, next) {
      if (ctx.path === '/lib/environment.ts') {
        ctx.type = 'text/javascript';
        ctx.body = await makeDemoEnv();
      } else {
        return next();
      }
    },
    /**
     * redirect requests for /assets/ css to /docs/assets/
     * @param ctx koa context
     * @param next next koa middleware
     */
    function(ctx, next) {
      if (ctx.path.startsWith('/styles/')) {
        ctx.redirect(`/docs${ctx.path}`);
      } else {
        return next();
      }
    },
    /**
     * redirect requests for /(lib|elements)/*.js to *.ts
     * @param ctx koa context
     * @param next next koa middleware
     */
    function(ctx, next) {
      if (!ctx.path.includes('node_modules') && ctx.path.match(/.*\/(lib|elements)\/.*\.js/)) {
        ctx.redirect(ctx.path.replace('.js', '.ts'));
      } else {
        return next();
      }
    },
    /**
     * @param ctx koa context
     * @param next next koa middleware
     */
    async function(ctx, next) {
      if (ctx.path.endsWith('/') && !ctx.path.includes('.')) {
        await next();
        const document = parse(ctx.body);
        injectManuallyResolvedIconsToImportMap(document);
        transformDevServerHTML(document);
        ctx.body = serialize(document);
      } else {
        return next();
      }
    },
  ],
  plugins: [
    {
      name: 'watch-demos',
      serverStart(args) {
        const fsDemoFilesGlob = new URL('./elements/*/demo/**/*.html', import.meta.url).pathname;
        args.fileWatcher.add(fsDemoFilesGlob);
        args.app.use(function(ctx, next) {
          if (ctx.path.match(/\/|\.css|\.html|\.js$/)) {
            ctx.etag = `e${Math.random() * Date.now()}`;
          }
          return next();
        });
      },
    },
  ],
});


