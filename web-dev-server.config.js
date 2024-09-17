// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server/config.js';
import { readdir, stat, glob } from 'node:fs/promises';
import { makeDemoEnv } from './scripts/environment.js';
import { parse, serialize } from 'parse5';
import { query, isElementNode, getTextContent, setTextContent } from '@parse5/tools';

/**
 * Find all modules in a glob pattern, relative to the repo root, and resolve them as package paths
 * @param {string} pattern
 * @param {(spec: string) => [string, string]} fn
 */
async function resolveLocal(pattern, fn) {
  const TEST_RE = /\/test\//;
  const files = [];
  for await (const file of glob(pattern, { exclude: x => !TEST_RE.test(x) })) {
    files.push(file);
  }
  return Object.fromEntries(files.map(fn));
}

export const litcssOptions = {
  include: (/** @type{string[]}*/(/** @type{unknown}*/([
    /elements\/rh-[\w-]+\/[\w-]+\.css$/,
    /@rhds\/tokens\/css\/.*\.css$/,
    /lib\/.*\.css$/,
  ]))),
  exclude: [/lightdom/, /node_modules\/@rhds\/tokens\/css\/global\.css/],
};

export default pfeDevServerConfig({
  tsconfig: 'tsconfig.json',
  litcssOptions,
  importMapOptions: {
    inputMap: {
      imports: {
        '@rhds/icons': './node_modules/@rhds/icons/icons.js',
        ...await resolveLocal('./lib/**/*.js', spec => [`@rhds/elements/${spec}`, `./${spec}`]),
        ...await resolveLocal('./elements/**/*.js', x => [`@rhds/elements/${x.replace('elements/', '')}`, `./${x}`]),
        // ...await getRhdsIconNodemodulesImports(import.meta.url),
      },
    },
    resolutions: {
      '@rhds/icons': './node_modules/@rhds/icons',
      '@rhds/tokens': './node_modules/@rhds/tokens',
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
    /** redirect requests for /assets/ css to /docs/assets/ */
    function(ctx, next) {
      if (ctx.path.startsWith('/styles/')) {
        ctx.redirect(`/docs${ctx.path}`);
      } else {
        return next();
      }
    },
    /** redirect requests for /(lib|elements)/*.js to *.ts */
    function(ctx, next) {
      if (!ctx.path.includes('node_modules') && ctx.path.match(/.*\/(lib|elements)\/.*\.js/)) {
        ctx.redirect(ctx.path.replace('.js', '.ts'));
      } else {
        return next();
      }
    },
    /** manually inject icon import map with trailing slash - jspm generator doesn't yet support trailing slash */
    async function(ctx, next) {
      if (ctx.path.endsWith('/') && !ctx.path.includes('.')) {
        await next();
        const document = parse(ctx.body);
        const importMapNode = query(document, node =>
          isElementNode(node)
            && node.tagName === 'script'
            && node.attrs.some(attr =>
              attr.name === 'type'
                && attr.value === 'importmap'));
        if (importMapNode && isElementNode(importMapNode)) {
          const json = JSON.parse(getTextContent(importMapNode));
          json.imports['@rhds/icons/'] = '/node_modules/@rhds/icons/';
          setTextContent(importMapNode, JSON.stringify(json, null, 2));
        }
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

// eslint-disable-next-line jsdoc/require-jsdoc
export async function getRhdsIconNodemodulesImports(
  rootUrl,
) {
  const files = await readdir(new URL('./node_modules/@rhds/icons/', rootUrl));
  const dirs = [];

  for (const dir of files) {
    if (!dir.startsWith('.') && (await stat(new URL(`./node_modules/@rhds/icons/${dir}`, rootUrl))).isDirectory()) {
      dirs.push(dir);
    }
  }

  const specs = await Promise.all(dirs.flatMap(dir =>
    readdir(new URL(`./node_modules/@rhds/icons/${dir}`, rootUrl))
        .then(files => files.filter(x => x.endsWith('.js')))
        .then(icons => icons.flatMap(icon => `@rhds/icons/${dir}/${icon}`))
  ));

  return Object.fromEntries(specs.flat().map(spec => [spec, `./node_modules/${spec}`]));
}

