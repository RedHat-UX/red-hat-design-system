#!/usr/bin/env node
/* eslint-disable no-console */
// Called by changesets/action after the version command.
// Sets `since` on any element shipping for the first time.
import { glob, readFile, writeFile } from 'node:fs/promises';
import yaml from 'js-yaml';
import pkgjson from '../package.json' with { type: 'json' };

const since = `v${pkgjson.version}`;

for await (const dataPath of glob('elements/*/docs/data.yaml')) {
  const content = await readFile(dataPath, 'utf8');
  const data = yaml.load(content);

  if (data.since || data.libraries?.rhds === 'planned') {
    continue;
  }

  await writeFile(dataPath, `${content.trimEnd()}\nsince: ${since}\n`);
  console.log(`Set since: ${since} for ${data.tagName}`);
}
