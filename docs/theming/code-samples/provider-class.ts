import { LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';

import {
  colorContextProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

@customElement('rh-provider')
export class RhProvider extends LitElement {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' })
  colorPalette?: ColorPalette;
}
