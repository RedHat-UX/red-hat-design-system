import { expect } from '@open-wc/testing';
import { executeServerCommand } from '@web/test-runner-commands';

describe('<rh-icon> server-side rendering', function() {
  it('renders icon content from the server-side icon registry', async function() {
    const markup = await executeServerCommand('render-ssr-fixture', {
      html: '<rh-icon icon="alert"></rh-icon>',
      importSpecifiers: ['@rhds/elements/rh-icon/rh-icon.js'],
    });

    expect(markup).to.include('<svg');
  });

  it('renders slotted fallback content when no icon is set', async function() {
    const markup = await executeServerCommand('render-ssr-fixture', {
      html: '<rh-icon>fallback</rh-icon>',
      importSpecifiers: ['@rhds/elements/rh-icon/rh-icon.js'],
    });

    expect(markup).to.include('fallback');
  });
});
