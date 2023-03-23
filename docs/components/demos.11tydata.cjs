module.exports = {
  pagination: {
    data: 'demos',
    alias: 'demo',
    size: 1,
    before: (paginationData, fullData) =>
      paginationData
      .filter(x => ![...fullData.migratedElements].some(y => x.tagName.startsWith(y)))
      .filter(x => !!x.permalink)
  }
}
