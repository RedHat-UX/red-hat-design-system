import { test, expect } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';

const tagName = 'rh-cta';

test.describe(tagName, () => {
  test('snapshot', async ({ page }) => {
    const componentPage = new PfeDemoPage(page, tagName);
    await componentPage.navigate('/components/cta/demo/');
    await expect(page).toHaveScreenshot();

    async function elementSuite(selector: string, variant: string) {
      const element = await componentPage.page.$(selector);
      const locator = page.locator(selector);
      test.expect(await element.screenshot()).toMatchSnapshot({ name: `${variant} 0.png` });

      // hover
      await element.hover();
      await element.evaluate(e => Promise.all(e.getAnimations({ subtree: true }).map(animation => animation.finished)));
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 1 hover.png`);
      await page.mouse.click(0, 0);
      // focus
      await page.focus(`${selector} *`);
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 2 focus.png` );
      await page.mouse.click(0, 0);
      // active
      const { x, width, y, height } = await element.boundingBox();
      await page.mouse.move(x + width / 2, y + height / 2);
      await page.mouse.down();
      await componentPage.updateComplete(selector);
      await expect(locator).toHaveScreenshot(`${variant} 3 active.png` );
      await page.mouse.up();
      await page.mouse.click(0, 0);
    }

    for (const selector of Array.from({ length: 7 }, (_, i) => `#variants rh-cta:nth-of-type(${i + 1})`)) {
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
    for (const selector of Array.from({ length: 7 }, (_, i) => `#dark rh-cta:nth-of-type(${i + 1})`)) {
      const [, nth] = selector.match(/nth-of-type\((\d)\)/);
      await elementSuite(selector, [
        'dark default',
        'dark default video',
        'dark primary',
        'dark primary video',
        'dark secondary',
        'dark brick',
        'dark brick video',
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
