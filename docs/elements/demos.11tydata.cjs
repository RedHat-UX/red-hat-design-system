module.exports = {
  pagination: {
    data: 'demos',
    alias: 'demo',
    size: 1,
    before: (paginationData, fullData) =>
      paginationData
        .filter(x => !!x?.permalink && fullData.migratedElements.has(x?.tagName))
        .map(demo => ({ ...demo, permalink: demo.permalink.replace('/components/', '/elements/') }))
  }
};
