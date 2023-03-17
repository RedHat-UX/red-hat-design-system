module.exports = {
  pagination: {
    data: 'demos',
    alias: 'demo',
    size: 1,
    before: (paginationData, fullData) =>
      paginationData
      .filter(x => !x.tagName.startsWith('rh-footer'))
      .filter(x => !!x.permalink)
  }
}
