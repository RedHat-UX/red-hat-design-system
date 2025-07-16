import { test, expect } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';

const tagName = 'rh-cta';

test.describe(tagName, () => {
  test('snapshot', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await componentPage.navigate('/elements/call-to-action/demo/variants/');
    await expect(page).toHaveScreenshot();

    async function elementSuite(selector: string, variant: string) {
      const element = await componentPage.page.$(selector);
      const locator = page.locator(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 0.png` });

      // hover
      await element.hover();
      await element.evaluate(e =>
        Promise.all(e.getAnimations({ subtree: true }).map(animation => animation.finished))
      );
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 1 hover.png`);
      await page.mouse.click(0, 0);
      // focus
      await page.focus(`${selector} *`);
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 2 focus.png` );
      await page.mouse.click(0, 0);
      // active
      const defaultBounds = { x: 0, width: 0, y: 0, height: 0 };
      const { x, width, y, height } = await element.boundingBox() || defaultBounds;
      await page.mouse.move(x + width / 2, y + height / 2);
      await page.mouse.down();
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 3 active.png` );
      await page.mouse.up();
      await page.mouse.click(0, 0);
    }

    for (const selector of Array.from({ length: 5 }, (_, i) => `#cta-variants > rh-cta:nth-of-type(${i + 1})`)) {
      const [, nth] = selector.match(/nth-of-type\((\d)\)/)!;
      await elementSuite(selector, [
        'default',
        'default video',
        'primary',
        'video',
        'secondary',
      ][parseInt(nth) - 1]);
    }

    for (const selector of Array.from({ length: 2 }, (_, i) => `#cta-variants #brick rh-cta:nth-of-type(${i + 1})`)) {
      const [, nth] = selector.match(/nth-of-type\((\d)\)/)!;
      await elementSuite(selector, [
        'brick',
        'brick icon',
      ][parseInt(nth) - 1]);
    }
  });

  const variantsWithIcons = [
    { selector: '#cta-variants rh-cta:nth-of-type(1)', icon: 'arrow-right' }, // default
    { selector: '#cta-variants > rh-cta:nth-of-type(2)', icon: 'play-circle' }, // default with icon
    { selector: '#cta-variants rh-cta:nth-of-type(4)', icon: 'play-circle' }, // primary with icon
  ];

  for (const { selector, icon: iconName } of variantsWithIcons) {
    test(`cta with selector ${selector} should have a visible ${iconName} icon`, async ({ page }) => {
      const componentPage = new PfeDemoPage(page, tagName);
      await componentPage.navigate('/elements/call-to-action/demo/variants/');
      const cta = componentPage.page.locator(selector);
      const icon = cta.locator('rh-icon');
      await expect(icon).toBeVisible();
      await expect(icon).toHaveAttribute('icon', iconName);
    });
  }

  const variantsWithoutIcons = [
    '#cta-variants rh-cta:nth-of-type(3)', // primary
    '#cta-variants rh-cta:nth-of-type(5)', // secondary
    '#cta-variants #brick rh-cta:nth-of-type(6)', // brick
  ];

  for (const selector of variantsWithoutIcons) {
    test(`cta with selector ${selector} should not have an icon`, async ({ page }) => {
      const componentPage = new PfeDemoPage(page, tagName);
      await componentPage.navigate('/elements/call-to-action/demo/variants/');
      const cta = componentPage.page.locator(selector);
      const icon = cta.locator('rh-icon');
      await expect(icon).toHaveCount(0);
    });
  }
});
