/** This is experimental and may change at any time without warning */
export class RHDSSSRController {
    constructor(host) {
        this.host = host;
        this.isRHDSSSRController = true;
        host.addController(this);
    }
}
//# sourceMappingURL=ssr-controller.js.map