import { autoUpdate, computePosition, offset as offsetMiddleware, shift as shiftMiddleware, flip as flipMiddleware, arrow as arrowMiddleware } from '@floating-ui/dom';
/**
 * Controls floating DOM within a web component, e.g. tooltips and popovers
 */
export class FloatingDOMController {
    #open = false;
    #opening = false;
    #cleanup;
    #anchor;
    #alignment;
    #styles;
    #placement;
    #options;
    get #invoker() {
        const { invoker } = this.#options;
        return typeof invoker === 'function' ? invoker() : invoker;
    }
    get #content() {
        const { content } = this.#options;
        return typeof content === 'function' ? content() : content;
    }
    get #arrow() {
        const { arrow } = this.#options;
        return typeof arrow === 'function' ? arrow() : arrow;
    }
    /** The crosswise alignment of the invoker on which to display the floating DOM */
    get alignment() {
        return this.#alignment ?? 'center';
    }
    /** The side of the invoker on which to display the floating DOM */
    get anchor() {
        return this.#anchor ?? '';
    }
    /**
     * When true, the floating DOM is visible
     */
    get open() {
        return this.#open;
    }
    /** The computed placement of the floating DOM */
    get placement() {
        return this.#placement ?? 'top';
    }
    /**
     * Styles to apply to your element's container
     *
     * - `--_floating-content-translate`: translate to apply to floating content.
     */
    get styles() {
        return this.#styles ?? {};
    }
    constructor(host, options) {
        this.host = host;
        host.addController(this);
        this.#options = options;
        this.#options.invoker ??= host;
        this.#options.shift ??= true;
    }
    hostDisconnected() {
        this.#cleanup?.();
    }
    async #update(placement = 'top', offset, flip = true, fallbackPlacements) {
        const { padding, shift } = this.#options;
        const invoker = this.#invoker;
        const content = this.#content;
        const arrow = this.#arrow;
        if (!invoker || !content) {
            return;
        }
        const { x, y, placement: _placement, middlewareData } = await computePosition(invoker, content, {
            strategy: 'absolute',
            placement,
            middleware: [
                offsetMiddleware(offset),
                shift && shiftMiddleware({ padding }),
                arrow && arrowMiddleware({ element: arrow, padding: arrow.offsetHeight / 2 }),
                flip && flipMiddleware({ padding, fallbackPlacements }),
            ].filter(Boolean)
        });
        if (arrow) {
            const { x: arrowX, y: arrowY } = middlewareData.arrow || {};
            const staticSide = {
                top: 'bottom',
                right: 'left',
                bottom: 'top',
                left: 'right',
            }[_placement.split('-')[0]] || '';
            Object.assign(arrow.style, {
                left: arrowX != null ? `${arrowX}px` : '',
                top: arrowY != null && !['top'].includes(_placement) ? `${arrowY}px` : '',
                right: '',
                bottom: '',
                [staticSide]: `-${arrow.offsetHeight / 2}px`,
            });
        }
        this.#placement = _placement;
        [this.#anchor, this.#alignment] = (this.#placement.split('-') ?? []);
        this.#styles = {
            '--_floating-content-translate': `${x}px ${y}px`,
        };
        this.host.requestUpdate();
    }
    /** Show the floating DOM */
    async show({ offset, placement, flip, fallbackPlacements } = {}) {
        const invoker = this.#invoker;
        const content = this.#content;
        if (!invoker || !content) {
            return;
        }
        if (!this.#opening) {
            this.#opening = true;
            const p = this.#update(placement, offset, flip, fallbackPlacements);
            this.#cleanup ??= autoUpdate(invoker, content, () => this.#update(placement, offset, flip, fallbackPlacements));
            await p;
            this.#opening = false;
        }
        this.#open = true;
        this.host.requestUpdate();
    }
    /** Hide the floating DOM */
    async hide() {
        await this.host.updateComplete;
        while (this.#opening && !this.open) {
            await new Promise(requestAnimationFrame);
        }
        this.#open = false;
        this.#cleanup?.();
        this.host.requestUpdate();
        await this.host.updateComplete;
    }
}
//# sourceMappingURL=floating-dom-controller.js.map