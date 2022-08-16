module.exports = class Playground {
  data() {
    return {
      permalink(data) {
        const [{ tagName }] = data.pagination.items;
        return `/assets/playgrounds/${tagName}-playground.js`;
      },
      pagination: {
        data: 'elements',
        size: 1,
      }
    };
  }

  render({ pagination, playgrounds }) {
    const [{ tagName }] = pagination.items;
    return `document.currentScript.closest('playground-project').config = ${JSON.stringify(playgrounds[tagName], null, 2)}`;
  }
};
