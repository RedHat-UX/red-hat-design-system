// this file generates single-page "fullscreen" demos
// e.g. ux.redhat.com/elements/tile/demo/compact/index.html
export default {
  templateEngineOverride: 'njk',
  permalink: '{{ demo.permalink }}',
  pagination: {
    data: 'demos',
    alias: 'demo',
    size: 1,
    // because cem generate includes *all* demos that use a given tag name,
    // even if it doesn't live in that tag's directory
    before: demos =>
      demos.filter(demo =>
        demo.filePath?.split('/').includes(demo.tagName)),
  },
  tags: [
    'demo',
  ],
};
