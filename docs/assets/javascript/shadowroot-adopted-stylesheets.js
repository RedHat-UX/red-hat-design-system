(function() {
  if ('shadowRootAdoptedStyleSheets' in HTMLTemplateElement.prototype) {
    return;
  }
  const SHEET_ATTR = 'shadowRootAdoptedStyleSheets';
  const HOST_SEL = `[${SHEET_ATTR}]:not([${SHEET_ATTR}=""])`;
  const sheets = new Map();
  const applied = new WeakSet();
  function collectStyles() {
    document.querySelectorAll(
      'style[type="module"][specifier]:not([specifier=""])'
    ).forEach(function(el) {
      const spec = el.getAttribute('specifier').trim();
      if (!sheets.has(spec)) {
        const s = new CSSStyleSheet();
        s.replaceSync(el.textContent);
        sheets.set(spec, s);
      }
    });
  }
  function applyToHost(el) {
    if (applied.has(el) || !el.shadowRoot) {
      return;
    }
    applied.add(el);
    el.shadowRoot.adoptedStyleSheets.push(
      ...el.getAttribute(SHEET_ATTR).trim().split(/\s+/)
          .flatMap(function(n) {
            return sheets.has(n) ? [sheets.get(n)] : [];
          })
    );
    el.shadowRoot.querySelectorAll(HOST_SEL).forEach(applyToHost);
  }
  new MutationObserver(function(mutations) {
    collectStyles();
    for (const mutation of mutations) {
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) {
          continue;
        }
        if (node.hasAttribute && node.hasAttribute(SHEET_ATTR)) {
          applyToHost(node);
        }
        if (node.querySelectorAll) {
          node.querySelectorAll(HOST_SEL).forEach(applyToHost);
        }
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
