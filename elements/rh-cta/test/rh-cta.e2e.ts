import { test } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';

const tagName = 'rh-cta';

test.describe(tagName, () => {
  test('snapshot', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await componentPage.navigate('/components/cta/demo/');
    await componentPage.snapshot();

    async function elementSuite(selector: string, variant: string) {
      const element = await componentPage.page.$(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 0` });

      // hover
      await element.hover();
      await componentPage.updateComplete(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 1 hover` });
      await page.mouse.click(0, 0);
      // focus
      await page.focus(`${selector} *`);
      await componentPage.updateComplete(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 2 focus` });
      await page.mouse.click(0, 0);
      // active
      const { x, width, y, height } = await element.boundingBox();
      await page.mouse.move(x + width / 2, y + height / 2);
      await page.mouse.down();
      await componentPage.updateComplete(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 3 active` });
      await page.mouse.up();
      await page.mouse.click(0, 0);
    }

    for (const selector of Array.from({ length: 7 }, (_, i) => `rh-cta:nth-of-type(${i + 1})`)) {
      const [, nth] = selector.match(/nth-of-type\((\d)\)/);
      await elementSuite(selector, [
        'default',
        'default video',
        'primary',
        'primary video',
        'secondary',
        'brick',
        'brick video',
      ][parseInt(nth) - 1]);
    }
    for (const selector of Array.from({ length: 7 }, (_, i) => `shadow-root rh-cta:nth-of-type(${i + 1})`)) {
      const [, nth] = selector.match(/nth-of-type\((\d)\)/);
      await elementSuite(selector, [
        'shadow rtl default',
        'shadow rtl default video',
        'shadow rtl primary',
        'shadow rtl primary video',
        'shadow rtl secondary',
        'shadow rtl brick',
        'shadow rtl brick video',
      ][parseInt(nth) - 1]);
    }
  });
});
