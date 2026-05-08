if (!("shadowRootAdoptedStyleSheets" in HTMLTemplateElement.prototype)) {
  (function applyAdoptedStyleSheets(root) {
    const ATTR = "shadowrootadoptedstylesheets";
    const sheets = new Map();
    root
      .querySelectorAll("style[type=module][specifier]")
      .forEach(function (style) {
        const sheet = new CSSStyleSheet();
        sheet.replaceSync(style.textContent);
        sheets.set(style.getAttribute("specifier"), sheet);
      });
    (function apply(node) {
      node.querySelectorAll("[" + ATTR + "]").forEach(function (el) {
        if (el.shadowRoot) {
          el.shadowRoot.adoptedStyleSheets.push(
            ...el
              .getAttribute(ATTR)
              .trim()
              .split(/\s+/)
              .flatMap(function (n) {
                return sheets.get(n) ? [sheets.get(n)] : [];
              })
          );
        }
      });
      node.querySelectorAll("*").forEach(function (el) {
        if (el.shadowRoot) apply(el.shadowRoot);
      });
    })(root);
  })(document);
}
