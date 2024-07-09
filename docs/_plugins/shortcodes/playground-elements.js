import 'playground-elements';
for (const preview of document.querySelectorAll('playground-preview')) {
  preview.htmlFile = preview.getAttribute('htmlfile');
}

