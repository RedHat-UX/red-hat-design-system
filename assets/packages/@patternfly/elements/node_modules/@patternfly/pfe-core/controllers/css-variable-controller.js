export class CssVariableController {
    constructor(host) {
        this.host = host;
        if (this.host.isConnected) {
            this.hostConnected();
        }
    }
    parseProperty(name) {
        return name.substring(0, 2) !== '--' ? `--${name}` : name;
    }
    getVariable(name) {
        return this.style?.getPropertyValue(this.parseProperty(name)).trim() || null;
    }
    hostConnected() {
        this.style = window.getComputedStyle(this.host);
    }
    ;
}
//# sourceMappingURL=css-variable-controller.js.map