if (!('shadowRootAdoptedStyleSheets' in HTMLTemplateElement.prototype)) {
  const SHEET_ATTR = 'shadowRootAdoptedStyleSheets';
  const STYLE_SEL = 'style[type="module"][specifier]:not([specifier=""])';
  const HOST_SEL = `[${SHEET_ATTR}]:not([${SHEET_ATTR}=""])`;
  const sheets = new Map();

  function deepQuery(sel, root) {
    const results = [...root.querySelectorAll(sel)];
    for (const el of root.querySelectorAll('*')) {
      if (el.localName.includes('-') && el.shadowRoot) {
        results.push(...deepQuery(sel, el.shadowRoot));
      }
    }
    return results;
  }

  for (const el of deepQuery(`${STYLE_SEL}, ${HOST_SEL}`, document)) {
    if (el.localName === 'style') {
      const sheet = new CSSStyleSheet();
      sheet.replaceSync(el.textContent);
      sheets.set(el.getAttribute('specifier').trim(), sheet);
    } else if (el.shadowRoot) {
      el.shadowRoot.adoptedStyleSheets.push(
        ...el.getAttribute(SHEET_ATTR).trim().split(/\s+/)
            .flatMap(n => sheets.has(n) ? [sheets.get(n)] : [])
      );
    }
  }
}
