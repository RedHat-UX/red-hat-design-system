module.exports = class Playground {
  data() {
    return {
      permalink({ pagination }) {
        const [{ tagName }] = pagination.items ?? [];
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
    return `export const configure = project => project.config = ${JSON.stringify(playgrounds[tagName], null, 2)};`;
  }
};
