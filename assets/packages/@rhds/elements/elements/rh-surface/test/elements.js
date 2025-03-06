import { ReactiveElement } from 'lit';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { colorContextProvider, } from '@rhds/elements/lib/context/color/provider.js';
export class ContextConsumer extends ReactiveElement {
}
ContextConsumer.properties = {
    on: { reflect: true }
};
customElements.define("test-context-consumer", ContextConsumer);
export class ContextConsumerProvider extends ReactiveElement {
}
ContextConsumerProvider.properties = {
    on: { reflect: true },
    colorPalette: { reflect: true, attribute: 'color-palette' }
};
customElements.define("test-context-consumer-provider", ContextConsumerProvider);
export class ContextProviderConsumer extends ReactiveElement {
}
ContextProviderConsumer.properties = {
    colorPalette: { reflect: true, attribute: 'color-palette' },
    on: { reflect: true }
};
customElements.define("test-context-provider-consumer", ContextProviderConsumer);
//# sourceMappingURL=elements.js.map