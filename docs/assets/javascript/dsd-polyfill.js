if (!('shadowRootMode' in HTMLTemplateElement.prototype)) {
  (function attachShadowRoots(root) {
    // find all templates with a shadowrootmode attribute
    root.querySelectorAll('template[shadowrootmode]').forEach(template => {
      // get the mode: open or closed
      const mode = template.getAttribute('shadowrootmode');
      // attach a shadow to the component
      const shadowRoot = template.parentNode.attachShadow({ mode });
      // append the content in the template
      shadowRoot.appendChild(template.content);
      // remove the template
      template.remove();
      attachShadowRoots(shadowRoot);
    });
  })(document);
}
