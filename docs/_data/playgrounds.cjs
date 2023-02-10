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
  const { parseHTML } = await import('linkedom');

  const demoManifests = groupBy('primaryElementName', data.demos);

  const playgroundConfigs = {};

  for (const [primaryElementName, demos] of Object.entries(demoManifests)) {
    const files = { };

    for (const demo of demos) {
      if (demo.filePath.endsWith('proxy.html')) {
        continue;
      }

      const demoSource = await fs.readFile(demo.filePath, 'utf8');

      const { document } = parseHTML(demoSource);

      const filename = getDemoFilename(demo);
      files[filename] = {
        contentType: 'text/html',
        selected: filename === 'demo/index.html',
        content: document.toString(),
        label: demo.title,
      };

      // awful hacks: manually resolve js and css demo assets
      const demoDir = path.join(
        process.cwd(),
        demo.url.replace(
          `https://ux.redhat.com/components/${demo.slug}/`,
          `/elements/${primaryElementName}/`
        )
      );

      /** @see docs/_plugins/rhds.cjs demoPaths transform */
      const base = url.pathToFileURL(path.join(process.cwd(), 'elements', primaryElementName, 'demo/'));

      // register demo script resources
      for (const el of document.querySelectorAll('script[type=module][src]')) {
        if (!el.src.startsWith('http')) {
          const fileUrl = new URL(el.src, base);

          try {
            const content = demoPaths(await fs.readFile(fileUrl, 'utf8'), fileUrl.pathname);
            const moduleName =
              path.normalize(`${demoDir}/${el.src}`).split('/elements/').pop().split(`${primaryElementName}/`).pop();
            files[moduleName] = { content, hidden: true };
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log(`Error generating playground for ${demo.slug}.\nCould not find subresource ${el.src} at ${fileUrl.href}`);
            throw e;
          }
        }
      }

      // register demo css resources
      for (const el of document.querySelectorAll('link[rel=stylesheet][href]')) {
        if (!el.href.startsWith('http')) {
          const fileUrl = new URL(el.href, base);
          try {
            const content = demoPaths(await fs.readFile(fileUrl, 'utf8'), fileUrl.pathname);
            files[path.normalize(`demo/${el.href}`)] = { content, hidden: true };
          } catch (e) {
            // eslint-disable-next-line no-console
            console.log(`Error generating playground for ${demo.slug}.\nCould not find subresource ${el.src} at ${fileUrl.href}`);
            throw e;
          }
        }
      }

      playgroundConfigs[primaryElementName] = { files };
    }
  }
  return playgroundConfigs;
};
