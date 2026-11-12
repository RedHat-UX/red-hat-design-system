import { expect } from '@open-wc/testing';
import { executeServerCommand } from '@web/test-runner-commands';

describe('<rh-icon> server-side rendering', function() {
  it('renders icon content from the server-side icon registry', async function() {
    const markup = await executeServerCommand('render-ssr-fixture', {
      html: '<rh-icon icon="alert"></rh-icon>',
      importSpecifiers: ['@rhds/elements/rh-icon/rh-icon.js'],
    });

    // declarative shadow root with rendered icon content
    expect(markup).to.include('shadowrootmode="open"');
    expect(markup).to.include('<div id="container"');
    expect(markup).to.include('<svg');
  });

  it('renders slotted fallback content when no icon is set', async function() {
    const markup = await executeServerCommand('render-ssr-fixture', {
      html: '<rh-icon>fallback</rh-icon>',
      importSpecifiers: ['@rhds/elements/rh-icon/rh-icon.js'],
    });

    // slotted light-DOM content
    expect(markup).to.include('fallback');
    // the declarative shadow root and its fallback span/slot
    expect(markup).to.include('shadowrootmode="open"');
    expect(markup).to.include('<span part="fallback"');
    expect(markup).to.include('<slot');
  });
});
