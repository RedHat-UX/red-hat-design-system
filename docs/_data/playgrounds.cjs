const fs = require('node:fs/promises');
const path = require('node:path');
const url = require('node:url');

function groupBy(prop, xs) {
  return xs.reduce((acc, x) => Object.assign(acc, { [x[prop]]: [...acc[x[prop]] ?? [], x] }), {});
}

function getDemoFilename(x) {
  return `demo/${(x.url.split('/demo/').pop() || `${x.primaryElementName}.html`).replace(/\/$/, '.html')}`
    .replace('.html', '/index.html')
    .replace(`${x.primaryElementName}/index.html`, 'index.html');
}

/**
 * Replace paths in demo files from the dev SPA's format to 11ty's format
 * @param {string} content
 */
function demoPaths(content, pathname) {
  if (pathname.match(/components\/.*\/demo\/index\.html$/)) {
    return content.replace(/(?<attr>href|src)="\/elements\/rh-(?<unprefixed>.*)\/(?<filename>.*)\.(?<extension>[.\w]+)"/g, (...args) => {
      const [{ attr, unprefixed, filename, extension }] = args.reverse();
      return `${attr}="/components/${unprefixed}/${filename}.${extension}"`;
    });
  } else {
    return content;
  }
}

module.exports = async function(data) {
  performance.mark('playgrounds-start');
  const { parseHTML } = await import('linkedom');

  const demoManifests = groupBy('primaryElementName', data.demos);

  const playgroundConfigsMap = new Map();

  for (const [primaryElementName, demos] of Object.entries(demoManifests)) {
    const fileMap = new Map();

    for (const demo of demos) {
      if (demo.filePath.endsWith('proxy.html')) {
        continue;
      }

      const demoSource = await fs.readFile(demo.filePath, 'utf8');

      const { document } = parseHTML(demoSource);

      const filename = getDemoFilename(demo);

      /** @see docs/_plugins/rhds.cjs demoPaths transform */
      const base = url.pathToFileURL(path.join(process.cwd(), 'elements', primaryElementName, 'demo/'));
      const docsDir = url.pathToFileURL(path.join(process.cwd(), 'docs/'));
      const isMainDemo = filename === 'demo/index.html';
      const demoSlug = filename.split('/').at(1);

      fileMap.set(filename, {
        contentType: 'text/html',
        selected: isMainDemo,
        content: demoPaths(document.toString(), demo.filePath),
        label: demo.title,
      });

      // register demo script and css resources
      for (const el of document.querySelectorAll('script[type=module][src], link[rel=stylesheet][href]')) {
        const isLink = el.localName === 'link';
        const subresourceURL = isLink ? el.href : el.src;
        if (!subresourceURL.startsWith('http')) {
          const subresourceFileURL = !subresourceURL.startsWith('/')
            // non-tabular tern
            // eslint-disable-next-line operator-linebreak
            ? new URL(subresourceURL, base)
            : new URL(subresourceURL.replace('/', './'), docsDir);
          try {
            const content = demoPaths(await fs.readFile(subresourceFileURL, 'utf8'), subresourceFileURL.pathname);
            const resourceName = path.normalize(`demo${isMainDemo ? '' : `/${demoSlug}`}/${subresourceURL}`);
            fileMap.set(resourceName, { content, hidden: true });
          } catch (e) {
            // In order to surface the error to the user, let's enable console logging
            // eslint-disable-next-line no-console
            console.log(`Error generating playground for ${demo.slug}.\nCould not find subresource ${subresourceURL} at ${subresourceFileURL?.href ?? 'unknown'}`);
            throw e;
          }
        }
      }

      const files = Object.fromEntries(fileMap.entries());
      playgroundConfigsMap.set(primaryElementName, { files });
    }
  }
  const config = Object.fromEntries(playgroundConfigsMap.entries());

  performance.mark('playgrounds-end');

  logPerf();

  return config;
};

function logPerf() {
  // We should log performance regressions
  /* eslint-disable no-console */
  const chalk = require('chalk');
  const TOTAL = performance.measure('playgrounds-total', 'playgrounds-start', 'playgrounds-end');
  if (TOTAL.duration > 2000) {
    console.log(
      `🦥 Playgrounds config generator done in ${chalk.red(TOTAL.duration)}ms\n`,
    );
  } else if (TOTAL.duration > 1000) {
    console.log(
      `🐢 Playgrounds config generator done in ${chalk.yellow(TOTAL.duration)}ms\n`,
    );
  } else {
    console.log(
      `⚡ Playgrounds config generator done in ${chalk.blue(TOTAL.duration)}ms\n`,
    );
  }
  /* eslint-enable no-console */
}
