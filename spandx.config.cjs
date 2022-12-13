const fs = require('node:fs/promises');
const path = require('node:path');

const element = [...process.argv].pop();

if (!element.match(/^rh-/)) {
  // eslint-disable-next-line no-console
  console.log('Please specify a component e.g.', '\n\tnpm run proxy rh-footer');
  process.exit(1);
}

/**
 * @param {import('node:http').ClientRequest} _req
 * @param {import('node:http').ServerResponse} res
 * @param {() => void} next
 */
async function injectLocalSources(_req, res, next) {
  try {
    const elementsPath = path.join(__dirname, 'elements');
    const elements = await fs.readdir(elementsPath);
    const proxyContents = await fs.readFile(path.join(elementsPath, element, 'demo', 'proxy.html'));

    const importMapJson = JSON.stringify({
      imports: {
        '@rhds/elements': 'http://localhost:8000/rhds.min.js',
        ...Object.fromEntries(elements.map(dir => [
          `@rhds/elements/${dir}/${dir}.js`,
          `http://localhost:8000/elements/${dir}/${dir}.ts`
        ])),
      },
    });

    const { write: origWrite } = res;

    res.write = function(chunk, ...rest) {
      if (res.getHeader('Content-Type').includes('text/html')) {
        if (chunk instanceof Buffer) {
          chunk = chunk.toString();
        }

        chunk = chunk
          .replace('</head>', `<script type="importmap">${importMapJson}</script><script async src="https://ga.jspm.io/npm:es-module-shims@1.5.1/dist/es-module-shims.js" crossorigin="anonymous"></script>\n</head>`)
          .replace('</body>', `${proxyContents}\n\n</body>`);

        // res.setHeader('Content-Length', chunk.length);
      }
      origWrite.apply(this, [chunk, ...rest]);
    };
  } catch (e) {
    // eslint-disable-next-line no-console
    console.error(e);
  } finally {
    next();
  }
}

module.exports = {
  host: {
    local: 'localhost',
  },
  port: 'auto',
  open: !true,
  startPath: '/',
  verbose: false,
  routes: {
    // shut off web components bundle
    // '/sites/all/libraries/webrh/dist/js/webrh.webcomponents.min.js': '',

    '/node_modules/': {
      host: 'http://localhost:8000',
      path: '/node_modules/'
    },
    '/en/node_modules/': {
      host: 'http://localhost:8000',
      path: '/node_modules/'
    },

    '@rhds/elements/': {
      host: 'http://localhost:8000',
      path: '/elements/',
      watch: './elements/'
    },
    '/en/elements/': {
      host: 'http://localhost:8000',
      path: '/elements/',
      watch: './elements/'
    },
    '/elements/': {
      host: 'http://localhost:8000',
      path: '/elements/',
      watch: './elements/'
    },
    '/lib/': {
      host: 'http://localhost:8000',
      path: '/lib/',
    },
    '/en/lib/': {
      host: 'http://localhost:8000',
      path: '/lib/',
    },
    '/': {
      host: 'https://www.redhat.com',
      watch: './'
    },
  },
  bs: {
    proxy: {
      target: 'https://www.redhat.com',
      middleware: [
        injectLocalSources,
      ],
    },
  },
};
