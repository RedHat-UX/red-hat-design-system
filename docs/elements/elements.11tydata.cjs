module.exports = {
  templateEngineOverride: 'njk',
  hasToc: true,
  layout: 'layouts/pages/elements.njk',
  permalink: '{{ doc.permalink }}',
  pagination: {
    data: 'collections.elementDocs',
    alias: 'doc',
    size: 1,
  },
  eleventyComputed: {
    context(data) {
      return data;
    },
  },
};
