import { LitElement, html } from 'lit';
import { css } from "lit";
const style = css `:host{position:relative;white-space:nowrap;text-align:center;display:inline-block}`;
class BaseBadge extends LitElement {
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
export { BaseBadge };
//# sourceMappingURL=BaseBadge.js.map