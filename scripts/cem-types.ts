/* eslint-disable no-console */
import type * as CEM from 'custom-elements-manifest';
import type { IconSetName } from '@rhds/icons';
import { icons } from '@rhds/icons/metadata.js';

import chalk from 'chalk';

function isCustomElementDeclaration(decl: unknown): decl is CEM.CustomElementDeclaration {
  return !!(decl as any)?.customElement;
}

function isMethod(decl: unknown): decl is CEM.ClassMethod {
  return (decl as CEM.ClassMember).kind === 'method';
}

function isField(decl: unknown): decl is CEM.ClassField {
  return (decl as CEM.ClassMember).kind === 'field';
}

function isIconNameType(type: string): type is `IconNameFor<${string}>` {
  return type.startsWith('IconNameFor');
}

const quote = (x: string) => `'${x}'`;

function computeIconUnion(type: `IconNameFor${string}`) {
  const { typeArg = '' } = type.match(/IconNameFor<(?<typeArg>[^>]+)>/)?.groups ?? {};
  const iconSetsTypes = typeArg === 'IconSetName' ?
    ['\'ui\'', '\'microns\'', '\'social\'', '\'standard\'']
    : typeArg.split('|').map(x => x.trim()) as IconSetName[];
  return iconSetsTypes.flatMap(x => {
    switch (x.replaceAll('\'', '')) {
      case 'ui': return [...icons.get('ui') ?? []].map(quote);
      case 'social': return [...icons.get('social') ?? []].map(quote);
      case 'standard': return [...icons.get('standard') ?? []].map(quote);
      case 'microns': return [...icons.get('microns') ?? []].map(quote);
    }
  }).join('|');
}

/**
 * Format and expand typescript types of CEM members
 * Resulting union types should not contain spaces between the members,
 * and should not contain other compound types.
 * e.g. `ColorPalette` => `'darkest'|'darker'|'dark'|'light'|'lighter'|'lightest'`
 * @param manifest
 */
export function analyze(manifest: CEM.Package) {
  performance.mark('cem-types-start');
  for (const mod of manifest.modules) {
    for (const decl of mod.declarations ?? []) {
      if (isCustomElementDeclaration(decl)) {
        for (const member of decl?.members ?? []) {
          if (isMethod(member)) {
            // todo
          } else if (isField(member) && member.type?.text) {
            if (member.type.text === 'ColorPalette') {
              member.type.text = `'darkest'|'darker'|'dark'|'light'|'lighter'|'lightest'`;
            } else if (isIconNameType(member.type.text)) {
              member.type.text = computeIconUnion(member.type.text);
            } else if (member.type.text === 'IconSetName') {
              member.type.text = `'ui'|'standard'|'social'|'microns'`;
            }
          }
        }
      }
    }
  }
  performance.mark('cem-types-end');
  console.log(`⏲️  Formatting CEM types took ${chalk.blue(performance.measure('cem-tokens-total', 'cem-tokens-start', 'cem-tokens-end').duration)}ms\n`);
}
