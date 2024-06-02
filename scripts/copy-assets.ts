import { cp, mkdir } from 'node:fs/promises';
import { dirname } from 'node:path';
import { glob } from 'glob';
import chalk from 'chalk'

for (const srcFile of await glob([
  'elements/*/*-lightdom.css',
  'elements/*/*-shim.css',
])) {
  const destFile = srcFile.replace('elements/', '');
  await mkdir(dirname(destFile));
  await cp(srcFile, destFile);
  console.log(`${chalk.blue`Copied`} ${srcFile} to ${destFile}`);
}
