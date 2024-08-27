import '@patternfly/pfe-core/ssr-shims.js';

import type { IconNameFor } from '@rhds/icons';

import { standard, social, ui, microns } from '@rhds/icons';

import { RhIcon as Base } from './rh-icon.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

@customElement('rh-icon')
export class RhIcon extends Base {
  override render() {
    const { set = 'standard', icon } = this;
    let content = '';
    switch (set) {
      case 'standard':
        content = standard.get(icon as IconNameFor<'standard'>) as unknown as string;
        break;
      case 'social':
        content = social.get(icon as IconNameFor<'social'>) as unknown as string;
        break;
      case 'microns':
        content = microns.get(icon as IconNameFor<'microns'>) as unknown as string;
        break;
      case 'ui':
        content = ui.get(icon as IconNameFor<'ui'>) as unknown as string;
        break;
    }
    this.content = unsafeHTML(content);
    return super.render();
  }
}


// import { readFileSync } from 'node:fs';
// import { createRequire } from 'node:module';
// const require = createRequire(import.meta.url);
//
/// **
// * Load an icon, server side
// * @param set icon set
// * @param icon icon name
// * @returns icon string
// */
// export function load(set: string, icon: string) {
//  const svg = readFileSync(require.resolve(`@rhds/icons/${set}/${icon}.svg`), 'utf-8');
//  return svg;
// }
