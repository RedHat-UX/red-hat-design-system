import('https://unpkg.com/playground-elements?module');
{
  const project = document.currentScript.closest('playground-project');
  const tabBar = project.querySelector('playground-tab-bar');
  const fileEditor = project.querySelector('playground-file-editor');
  const preview = project.querySelector('playground-preview');
  const onChange = filename => {
    if (filename) {
      preview.htmlFile = filename;
      fileEditor.filename = filename;
    }
  };

  tabBar.project = project;
  fileEditor.project = project;
  preview.project = project;
  tabBar.addEventListener('click', e => onChange(e.target._activeFileName));
  fileEditor.addEventListener('click', e => onChange(e.target.fileName));
  fileEditor.addEventListener('keydown', e => onChange(e.target.fileName));
  onChange('demo/index.html');
}
