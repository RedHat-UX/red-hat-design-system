import { context } from './provider.js';
import { html } from 'lit';
import { ContextConsumer } from '@lit/context';
import { ifDefined } from 'lit-html/directives/if-defined.js';
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextConsumer extends ContextConsumer {
    constructor(host) {
        super(host, { context });
        this.offset = 0;
    }
    get level() {
        return this.value?.level ?? 2;
    }
    /**
     * Wraps any renderable content in a heading, based on heading level
     * @param content DOM content to wrap in a header
     * @param options id, hidden
     */
    wrap(content, options) {
        const level = this.value?.level ?? 0;
        const offset = this.value?.offset ?? 0;
        const offsetLevel = Math.max(1, level + offset);
        const id = options?.id;
        const hidden = options?.hidden ?? false;
        switch (offsetLevel) {
            case 1: return html `<h1 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h1>`;
            case 2: return html `<h2 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h2>`;
            case 3: return html `<h3 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h3>`;
            case 4: return html `<h4 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h4>`;
            case 5: return html `<h5 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h5>`;
            default: return html `<h6 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h6>`;
        }
    }
}
//# sourceMappingURL=consumer.js.map