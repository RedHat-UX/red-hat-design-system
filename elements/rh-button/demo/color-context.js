for (const provider of document.querySelectorAll('rh-context-provider')) {
  provider.append(document.getElementById('template').content.cloneNode(true));
}
