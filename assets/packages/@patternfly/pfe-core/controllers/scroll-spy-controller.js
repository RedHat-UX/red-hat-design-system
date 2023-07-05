export class ScrollSpyController {
    #tagNames;
    #activeAttribute;
    #io;
    /** Which link's targets have already scrolled past? */
    #passedLinks = new Set();
    /** Ignore intersections? */
    #force = false;
    /** Has the intersection observer found an element? */
    #intersected = false;
    #root;
    #rootMargin;
    #threshold;
    #rootNode;
    #getHash;
    get #linkChildren() {
        return Array.from(this.host.querySelectorAll(this.#tagNames.join(',')))
            .filter(this.#getHash);
    }
    get root() {
        return this.#root;
    }
    set root(v) {
        this.#root = v;
        this.#io?.disconnect();
        this.#initIo();
    }
    get rootMargin() {
        return this.#rootMargin;
    }
    set rootMargin(v) {
        this.#rootMargin = v;
        this.#io?.disconnect();
        this.#initIo();
    }
    get threshold() {
        return this.#threshold;
    }
    set threshold(v) {
        this.#threshold = v;
        this.#io?.disconnect();
        this.#initIo();
    }
    constructor(host, options) {
        this.host = host;
        host.addController(this);
        this.#tagNames = options.tagNames;
        this.#root = options.root;
        this.#rootMargin = options.rootMargin;
        this.#activeAttribute = options.activeAttribute ?? 'active';
        this.#threshold = options.threshold ?? 0.85;
        this.#rootNode = options.rootNode ?? host.getRootNode();
        this.#getHash = options?.getHash ?? ((el) => el.getAttribute('href'));
    }
    hostConnected() {
        this.#initIo();
    }
    #initIo() {
        const rootNode = this.#rootNode;
        if (rootNode instanceof Document || rootNode instanceof ShadowRoot) {
            const { rootMargin, threshold, root } = this;
            this.#io = new IntersectionObserver(r => this.#onIo(r), { root, rootMargin, threshold });
            this.#linkChildren
                .map(x => this.#getHash(x))
                .filter((x) => !!x)
                .map(x => rootNode.getElementById(x.replace('#', '')))
                .filter((x) => !!x)
                .forEach(target => this.#io?.observe(target));
        }
    }
    #markPassed(link, force) {
        if (force) {
            this.#passedLinks.add(link);
        }
        else {
            this.#passedLinks.delete(link);
        }
    }
    #setActive(link) {
        for (const child of this.#linkChildren) {
            child.toggleAttribute(this.#activeAttribute, child === link);
        }
    }
    async #nextIntersection() {
        this.#intersected = false;
        // safeguard the loop
        setTimeout(() => this.#intersected = false, 3000);
        while (!this.#intersected) {
            await new Promise(requestAnimationFrame);
        }
    }
    async #onIo(entries) {
        if (!this.#force) {
            for (const { target, boundingClientRect, intersectionRect } of entries) {
                const selector = `:is(${this.#tagNames.join(',')})[href="#${target.id}"]`;
                const link = this.host.querySelector(selector);
                if (link) {
                    this.#markPassed(link, boundingClientRect.top < intersectionRect.top);
                }
            }
            const link = [...this.#passedLinks];
            const last = link.at(-1);
            this.#setActive(last ?? this.#linkChildren.at(0));
        }
        this.#intersected = true;
    }
    /** Explicitly set the active item */
    async setActive(link) {
        this.#force = true;
        this.#setActive(link);
        let sawActive = false;
        for (const child of this.#linkChildren) {
            this.#markPassed(child, !sawActive);
            if (child === link) {
                sawActive = true;
            }
        }
        await this.#nextIntersection();
        this.#force = false;
    }
}
//# sourceMappingURL=scroll-spy-controller.js.map