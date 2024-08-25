import { join } from 'node:path';
import { readdir, stat } from 'node:fs/promises';

/**
 * create a javascript module containing element and icon names
 */
export async function makeDemoEnv() {
  const iconsDir = join(process.cwd(), 'node_modules', '@rhds', 'icons');
  const dirContents = await readdir(iconsDir);
  const dirNamesOrNulls = await Promise.all(dirContents.map(async x => {
    const stats = await stat(join(iconsDir, x));
    if (!x.startsWith('.') && stats.isDirectory()) {
      return x;
    } else {
      return null;
    }
  }));
  const iconSetNames = dirNamesOrNulls.filter(x => x != null);
  const iconSets = await Promise.all(iconSetNames.reverse().map(async set => {
    const files = await readdir(join(iconsDir, set));
    return [set, [...new Set(files.map(x => x.replace(/\..*$/, '')))]];
  }));
  const javascript = String.raw; // for editor highlighting
  const allElements = (await readdir(join(process.cwd(), 'elements')))
      .filter(path => !path.includes('.'));
  return javascript`
export const elements = ${JSON.stringify(allElements)};
export const iconSets = new Map(${JSON.stringify(iconSets)});`;
}
