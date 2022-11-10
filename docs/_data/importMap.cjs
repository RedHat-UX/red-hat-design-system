/* eslint-disable no-console */
// @ts-check

const crypto = require('crypto');
const { tmpdir } = require('os');
const { join } = require('node:path');
const { readdir, writeFile } = require('node:fs/promises');

module.exports = async function(configData) {
  const { Generator } = await import('@jspm/generator');

  const elements = await readdir(join(__dirname, '..', '..', 'elements'));

  const generator = new Generator({
    env: ['production', 'browser', 'module'],
    inputMap: {
      // In order for JSPM generator to find the files we need, we have to pass them as relative
      // paths to the project root, but this won't work for the final site build,
      // so we'll modify the import map manually afterward
      imports: {
        '@rhds/elements': './rhds.min.js',
        ...Object.fromEntries(elements.map(x => [
          `@rhds/elements/${x}/${x}.js`,
          `./elements/${x}/${x}.js`
        ])),
      }
    },
  });

  const tmpfile = join(tmpdir(), `rhds-${crypto.randomUUID()}.js`);
  const tmpcontent = elements.map(x =>
    `import '@rhds/elements/${x}/${x}.js';`).join('\n');
  await writeFile(tmpfile, tmpcontent);

  await generator.traceInstall(tmpfile);

  await generator.traceInstall([
    // these are pfe-dependencies which aren't direct dependencies
    // tl;dr: we need these because some demos still use them.
    // remove when those demos are updated
    '@patternfly/pfe-band',
    '@patternfly/pfe-card',
  ]);

  const map = generator.importMap.flatten().combineSubpaths().toJSON();

  // Now we redirect the previously-resolved local imports to the `/assets` dir
  map.imports = Object.fromEntries(Object.entries(map.imports).map(([k, v]) => [
    k, k === '@rhds/elements' ? '/assets/rhds.min.js'
      : k.startsWith('@rhds/elements') ? v.replace('./elements', '/assets/elements')
      : v.replace('./node_modules', '/assets/node_modules')
  ]));

  // This is unfortunate, but for now I couldn't find a better way - @bennyp
  for (const scope in map.scopes) {
    if (scope !== './') {
      map.scopes['./'] = { ...map.scopes['./'], ...map.scopes[scope] };
    }
  }
  map.imports = { ...map.scopes['./'], ...map.imports };

  return map;
};
