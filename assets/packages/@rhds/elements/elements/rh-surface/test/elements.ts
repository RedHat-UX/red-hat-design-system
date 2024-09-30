import { ReactiveElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import {
  colorContextConsumer,
  type ColorTheme,
} from '@rhds/elements/lib/context/color/consumer.js';
import {
  colorContextProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';

@customElement('test-context-consumer')
export class ContextConsumer extends ReactiveElement {
  @colorContextConsumer()
  @property({ reflect: true })
  on?: ColorTheme;
}

@customElement('test-context-consumer-provider')
export class ContextConsumerProvider extends ReactiveElement {
  @colorContextConsumer()
  @property({ reflect: true })
  on?: ColorTheme;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

@customElement('test-context-provider-consumer')
export class ContextProviderConsumer extends ReactiveElement {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer()
  @property({ reflect: true })
  on?: ColorTheme;
}

