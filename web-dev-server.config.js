// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server/config.js';
import { glob } from 'node:fs/promises';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { makeDemoEnv } from './scripts/environment.js';
import { parse, serialize } from 'parse5';
import {
  createElement,
  getAttribute,
  getTextContent,
  isElementNode,
  query,
  removeAttribute,
  setAttribute,
  setTextContent,
  spliceChildren,
} from '@parse5/tools';

/**
 * Find all modules in a glob pattern, relative to the repo root, and resolve them as package paths
 * @param {string} pattern
 * @param {string} [relativeTo='.']
 */
async function resolveLocal(pattern, relativeTo = './') {
  const TEST_RE = /\/test\/|(\.d\.ts$)/;
  // eslint-disable-next-line jsdoc/check-tag-names
  /** @type [string, string][] */
  const files = [];
  for await (const file of glob(pattern, { cwd: join(process.cwd(), relativeTo) })) {
    if (!TEST_RE.test(file)) {
      files.push([
        `@rhds/elements/${file.replace('.ts', '.js')}`,
        join(relativeTo, file).replace('./', '/'),
      ]);
    }
  }
  return Object.fromEntries(files);
}

/**
 * manually inject icon import map with trailing slash.
 * jspm generator doesn't yet support trailing slash
 * @param {import('@parse5/tools').Document} document
 */
function injectManuallyResolvedModulesToImportMap(document) {
  const importMapNode = query(document, node =>
    isElementNode(node)
      && node.tagName === 'script'
      && node.attrs.some(attr =>
        attr.name === 'type'
          && attr.value === 'importmap'));
  if (importMapNode && isElementNode(importMapNode)) {
    const json = JSON.parse(getTextContent(importMapNode));
    Object.assign(json.imports, {
      'lit': '/node_modules/lit/index.js',
      'lit/': '/node_modules/lit/',
      '@lit/context': '/node_modules/@lit/context/index.js',
      '@patternfly/pfe-core': '/node_modules/@patternfly/pfe-core/core.js',
      '@patternfly/pfe-core/': '/node_modules/@patternfly/pfe-core/',
      '@rhds/icons/': '/node_modules/@rhds/icons/',
      '@rhds/tokens/': '/node_modules/@rhds/tokens/js/',
      '@rhds/tokens/css/': '/node_modules/@rhds/tokens/css/',
      '@floating-ui/dom': '/node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs',
      '@floating-ui/core': '/node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs',
    });
    for (const key of Object.keys(json.scopes ?? {})) {
      json.scopes[key]['@patternfly/pfe-core'] = '/node_modules/@patternfly/pfe-core/core.js';
    }
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
    removeAttribute(main, 'color-palette');
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
    setAttribute(picker, 'value', '');
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
    import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
  `);
  }
}


export const litcssOptions = {
  exclude: [
    /node_modules\/@rhds\/tokens\/css\/.*\.css/,
  ],
  include: [
    /elements\/rh-[\w-]+\/[\w-]+\.css$/,
    /@rhds\/tokens\/css\/.*\.css$/,
    /lib\/.*\.css$/,
  ],
};

const imports = {
  ...await resolveLocal('./lib/**/*.ts'),
  ...await resolveLocal('./**/*.ts', './elements'),
};

export default pfeDevServerConfig({
  tsconfig: 'tsconfig.settings.json',
  litcssOptions,
  importMapOptions: {
    typeScript: true,
    ignore: [
      /^\./,
      /^@rhds\/icons/,
    ],
    inputMap: { imports },
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
     * serve lightdom CSS files directly from filesystem
     * Handles: /elements/rh-foo-lightdom.css or /rh-foo/rh-foo-lightdom-*.css
     * @param ctx koa context
     * @param next next koa middleware
     */
    async function(ctx, next) {
      if (!ctx.path.includes('-lightdom')) {
        return next();
      }

      const match = ctx.path.match(/\/(rh-[\w-]+)-(lightdom(?:-[\w-]*)?)\.css$/);
      if (!match) {
        return next();
      }

      const [, elementName, suffix] = match;
      const filePath = join(process.cwd(), 'elements', elementName, `${elementName}-${suffix}.css`);

      try {
        ctx.type = 'text/css';
        ctx.body = await readFile(filePath, 'utf-8');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(`Lightdom CSS not found: ${filePath}`);
        // eslint-disable-next-line no-console
        console.error(e);
      }
      return;
    },
    /**
     * @param ctx koa context
     * @param next next koa middleware
     */
    async function(ctx, next) {
      if (ctx.path.endsWith('/') && !ctx.path.includes('.')) {
        await next();
        const document = parse(ctx.body);
        injectManuallyResolvedModulesToImportMap(document);
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
