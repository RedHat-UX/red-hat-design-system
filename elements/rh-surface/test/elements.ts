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
@colorContextConsumer
export class ContextConsumer extends ReactiveElement {
  @property({ reflect: true }) on?: ColorTheme;
}

@customElement('test-context-consumer-provider')
@colorContextConsumer
export class ContextConsumerProvider extends ReactiveElement {
  @property({ reflect: true })
  on?: ColorTheme;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

@customElement('test-context-provider-consumer')
@colorContextConsumer
export class ContextProviderConsumer extends ReactiveElement {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @property({ reflect: true }) on?: ColorTheme;
}
