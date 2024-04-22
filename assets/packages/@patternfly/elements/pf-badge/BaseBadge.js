import { LitElement, html } from 'lit';
import { css } from "lit";
const style = css `:host {\n  position: relative;\n  white-space: nowrap;\n  text-align: center;\n  display: inline-block;\n}`;
export class BaseBadge extends LitElement {
    render() {
        const { threshold, number, textContent } = this;
        const displayText = (threshold && number && (threshold < number)) ? `${threshold.toString()}+`
            : (number != null) ? number.toString()
                : textContent ?? '';
        return html `
      <span>${displayText}</span>
    `;
    }
}
BaseBadge.styles = [style];
//# sourceMappingURL=BaseBadge.js.map