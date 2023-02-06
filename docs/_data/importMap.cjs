/* eslint-disable no-console */
// @ts-check

const crypto = require('node:crypto');
const { tmpdir } = require('node:os');
const { writeFile, rm } = require('node:fs/promises');
const { join } = require('node:path');
const { pathToFileURL } = require('node:url');
const { promisify } = require('node:util');
const glob = promisify(require('glob'));

module.exports = async function(configData) {
  const { Generator } = await import('@jspm/generator');

  const entryPoints = await glob('./*/*.ts', {
    cwd: join(__dirname, '..', '..', 'elements'),
    ignore: './*/*.d.ts',
  }).then(tsfiles => tsfiles.map(x => x.replace('.ts', '.js')));

  const generator = new Generator({
    env: ['production', 'browser', 'module'],
    ignore: ['@rhds/elements'],
    inputMap: { imports: {
      ['@rhds/elements']: '/assets/rhds.min.js',
      ...Object.fromEntries(entryPoints.map(x =>
        [join('@rhds/elements', x), pathToFileURL(join(__dirname, '..', '..', 'elements', x)).href]
      ))
    } },
  });

  const tmpfile = join(tmpdir(), `rhds-${crypto.randomUUID()}.js`);
  const tmpcontent = entryPoints.map(x => `import '${pathToFileURL(join(__dirname, '..', '..', 'elements', x)).href}';`).join('\n');
  console.log(tmpcontent);
  await writeFile(tmpfile, tmpcontent);
  await generator.traceInstall(tmpfile);
  await rm(tmpfile);

  await generator.install([
    // these are pfe-dependencies which aren't direct dependencies
    // tl;dr: we need these because some demos still use them.
    // remove when those demos are updated
    '@patternfly/pfe-band@next',
    '@patternfly/pfe-button@next',
    '@patternfly/pfe-card@next',
    'tslib',
    'lit',
  ]);

  const map = generator.importMap.flatten().combineSubpaths().toJSON();

  map.imports ??= {};

  for (const [specifier, path] of Object.entries(map.imports)) {
    if (specifier.startsWith('@rhds/elements/')) {
      map.imports[specifier] = path.replace('./elements', '/assets/elements');
    }
  }
  return map;
};
