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

module.exports = async function(data) {
  const demoManifests = groupBy('primaryElementName', data.demos);

  const playgroundConfigs = {};

  for (const [primaryElementName, demos] of Object.entries(demoManifests)) {
    const { parseHTML } = await import('linkedom');

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

      for (const module of document.querySelectorAll('script[type=module][src]')) {
        if (!module.src.startsWith('http')) {
          const fileUrl = new URL(module.src, url.pathToFileURL(demoDir));
          const content = await fs.readFile(fileUrl, 'utf8');
          const moduleName =
            path.normalize(`${demoDir}/${module.src}`).split('/elements/').pop().split(`${primaryElementName}/`).pop();
          files[moduleName] = { content, hidden: true };
        }
      }

      for (const link of document.querySelectorAll('link[rel=stylesheet][href]')) {
        if (!link.href.startsWith('http')) {
          const content = await fs.readFile(new URL(link.href, url.pathToFileURL(demoDir)), 'utf8');
          files[path.normalize(`demo/${link.href}`)] = { content, hidden: true };
        }
      }

      playgroundConfigs[primaryElementName] = { files };
    }
  }
  return playgroundConfigs;
};
