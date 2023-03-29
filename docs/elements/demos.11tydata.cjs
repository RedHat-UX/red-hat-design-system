module.exports = {
  pagination: {
    data: 'demos',
    alias: 'demo',
    size: 1,
    before: (paginationData, fullData) =>
      paginationData
        .map(demo => ({ ...demo, permalink: demo.permalink.replace('/components/', '/elements/') }))
  }
};
