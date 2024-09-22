import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  colorContextProvider,                                    // 1
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

@customElement('rh-provider')
export class RhProvider extends LitElement {
  @colorContextProvider()                                  // 2
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;
}
