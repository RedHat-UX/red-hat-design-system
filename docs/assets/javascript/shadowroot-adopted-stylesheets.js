(function() {
  if ('shadowRootAdoptedStyleSheets' in HTMLTemplateElement.prototype) return;
  var SHEET_ATTR = 'shadowRootAdoptedStyleSheets';
  var HOST_SEL = '[' + SHEET_ATTR + ']:not([' + SHEET_ATTR + '=""])';
  var sheets = new Map();
  var applied = new WeakSet();
  function collectStyles() {
    document.querySelectorAll(
      'style[type="module"][specifier]:not([specifier=""])'
    ).forEach(function(el) {
      var spec = el.getAttribute('specifier').trim();
      if (!sheets.has(spec)) {
        var s = new CSSStyleSheet();
        s.replaceSync(el.textContent);
        sheets.set(spec, s);
      }
    });
  }
  function applyToHost(el) {
    if (applied.has(el) || !el.shadowRoot) return;
    applied.add(el);
    el.shadowRoot.adoptedStyleSheets.push(
      ...el.getAttribute(SHEET_ATTR).trim().split(/\s+/)
          .flatMap(function(n) { return sheets.has(n) ? [sheets.get(n)] : []; })
    );
    el.shadowRoot.querySelectorAll(HOST_SEL).forEach(applyToHost);
  }
  new MutationObserver(function(mutations) {
    collectStyles();
    for (var i = 0; i < mutations.length; i++) {
      for (var j = 0; j < mutations[i].addedNodes.length; j++) {
        var node = mutations[i].addedNodes[j];
        if (node.nodeType !== 1) continue;
        if (node.hasAttribute && node.hasAttribute(SHEET_ATTR)) applyToHost(node);
        if (node.querySelectorAll) node.querySelectorAll(HOST_SEL).forEach(applyToHost);
      }
    }
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
