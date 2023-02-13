export class CssVariableController {
    constructor(host) {
        this.host = host;
        this.style = window.getComputedStyle(host);
    }
    parseProperty(name) {
        return name.substr(0, 2) !== '--' ? `--${name}` : name;
    }
    getVariable(name) {
        return this.style.getPropertyValue(this.parseProperty(name)).trim() || null;
    }
}
//# sourceMappingURL=css-variable-controller.js.map