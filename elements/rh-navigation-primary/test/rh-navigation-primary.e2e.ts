import { test } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';
import { SSRPage } from '@patternfly/pfe-tools/test/playwright/SSRPage.js';

const tagName = 'rh-navigation-primary';

test.describe(tagName, () => {
  test('snapshot', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await componentPage.navigate();
    await componentPage.snapshot();
  });

  for (const width of [320, 768, 992, 1440]) {
    test(`search at ${width}px`, async ({ page }) => {
      const componentPage = new PfeDemoPage(page, tagName);
      await page.setViewportSize({ width, height: 800 });
      await componentPage.navigate('/elements/navigation-primary/demo/search/');
      await componentPage.snapshot(`search-${width}`);
    });
  }

  test('search open at 768px', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await page.setViewportSize({ width: 768, height: 800 });
    await componentPage.navigate('/elements/navigation-primary/demo/search/');
    await page.locator('rh-navigation-primary rh-navigation-primary-item[slot="search"]')
        .locator('summary')
        .click();
    await componentPage.updateComplete();
    await componentPage.snapshot('search-open-768');
  });

  test('search with subdomain layout', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await page.setViewportSize({ width: 992, height: 800 });
    await componentPage.navigate('/elements/navigation-primary/demo/search/');
    await page.check('#subdomain');
    await componentPage.updateComplete();
    await componentPage.snapshot('search-subdomain-992');
  });

  test('ssr', async ({ browser }) => {
    const fixture = new SSRPage({
      tagName,
      browser,
      demoDir: new URL('../demo/', import.meta.url),
      importSpecifiers: [
        `@rhds/elements/${tagName}/${tagName}.js`,
      ],
    });
    await fixture.snapshots();
  });
});
