import { join } from 'node:path';
import { readdir } from 'node:fs/promises';

let iconSetsMap;

/**
 * create a javascript map containing icon names
 */
export async function getIconSetsMap() {
  if (!iconSetsMap) {
  // because the icon package exports DOM nodes, but this file runs in nodejs
    await import('@patternfly/pfe-core/ssr-shims.js');
    const { standard, social, ui, microns } = await import('@rhds/icons');
    iconSetsMap = new Map([
      ['social', [...social.keys()]],
      ['standard', [...standard.keys()]],
      ['ui', [...ui.keys()]],
      ['microns', [...microns.keys()]],
    ]);
  }
  return iconSetsMap;
}

/**
 * create a javascript module containing element and icon names
 */
export async function makeDemoEnv() {
  iconSetsMap ??= await getIconSetsMap();
  const javascript = String.raw; // for editor highlighting
  const allElements = (await readdir(join(process.cwd(), 'elements')))
      .filter(path => !path.includes('.'));
  return javascript`
export const elements = ${JSON.stringify(allElements)};
export const iconSets = new Map(${JSON.stringify(Object.fromEntries(iconSetsMap.entries()))});`;
}
