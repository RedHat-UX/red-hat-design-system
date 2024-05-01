import { LitElement } from 'lit';
import { css } from "lit";
const styles = css `:host {\n  display: block;\n}\n\n[hidden] {\n  display: none !important;\n}\n`;
export class BaseCodeBlock extends LitElement {
    get content() {
        const script = this.querySelector('script[type]');
        if (script?.type !== 'text/javascript-sample'
            && !!script?.type.match(/(j(ava)?|ecma|live)script/)) {
            return '';
        }
        else {
            return script?.textContent ?? '';
        }
    }
    dedent(str) {
        const stripped = str.replace(/^\n/, '');
        const match = stripped.match(/^\s+/);
        return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
    }
}
BaseCodeBlock.styles = [styles];
//# sourceMappingURL=BaseCodeBlock.js.map