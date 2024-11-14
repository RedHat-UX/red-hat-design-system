export const ssrControllerMap = new WeakMap;
/** This is experimental and may change at any time without warning */
export class RHDSSSRController {
    constructor(host) {
        this.host = host;
        this.isRHDSSSRController = true;
        host.addController(this);
        ssrControllerMap.set(host, [...ssrControllerMap.get(host) ?? [], this]);
    }
}
//# sourceMappingURL=ssr-controller.js.map