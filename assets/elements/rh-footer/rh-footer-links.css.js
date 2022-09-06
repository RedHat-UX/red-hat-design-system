import {css} from 'lit';
export const styles = css`:host {
  display: flex;
  flex-direction: column;
  gap: 0.625em;
}

[part] {
  display: contents;
}

::slotted(:is(h1, h2, h3, h4, h5)) {
  font-weight: 500;
  font-size: 0.875em;
  margin-top: 0;
  margin-bottom: 0;
}

:host([header-hidden]) .header ::slotted(*) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
`;
export default styles;
