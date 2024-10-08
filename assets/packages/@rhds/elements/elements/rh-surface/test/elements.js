import { __decorate } from "tslib";
import { ReactiveElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { colorContextConsumer, } from '@rhds/elements/lib/context/color/consumer.js';
import { colorContextProvider, } from '@rhds/elements/lib/context/color/provider.js';
let ContextConsumer = class ContextConsumer extends ReactiveElement {
};
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], ContextConsumer.prototype, "on", void 0);
ContextConsumer = __decorate([
    customElement('test-context-consumer')
], ContextConsumer);
export { ContextConsumer };
let ContextConsumerProvider = class ContextConsumerProvider extends ReactiveElement {
};
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], ContextConsumerProvider.prototype, "on", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], ContextConsumerProvider.prototype, "colorPalette", void 0);
ContextConsumerProvider = __decorate([
    customElement('test-context-consumer-provider')
], ContextConsumerProvider);
export { ContextConsumerProvider };
let ContextProviderConsumer = class ContextProviderConsumer extends ReactiveElement {
};
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], ContextProviderConsumer.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer(),
    property({ reflect: true })
], ContextProviderConsumer.prototype, "on", void 0);
ContextProviderConsumer = __decorate([
    customElement('test-context-provider-consumer')
], ContextProviderConsumer);
export { ContextProviderConsumer };
//# sourceMappingURL=elements.js.map