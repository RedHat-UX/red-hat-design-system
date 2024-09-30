/* eslint-disable no-console */
import { cp, mkdir, glob } from 'node:fs/promises';
import { dirname } from 'node:path';
import chalk from 'chalk';

for await (const srcFile of glob([
  'elements/*/*-lightdom.css',
  'elements/*/*-shim.css',
])) {
  const destFile = srcFile.replace('elements/', '');
  await mkdir(dirname(destFile), { recursive: true });
  await cp(srcFile, destFile);
  console.log(`${chalk.blue`Copied`} ${srcFile} to ${destFile}`);
}
