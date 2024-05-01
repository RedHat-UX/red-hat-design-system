import { test } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';
const tagName = 'pf-jump-links';
test.describe(tagName, () => {
    test('snapshot', async ({ page }) => {
        const componentPage = new PfeDemoPage(page, tagName);
        await componentPage.navigate({ selector: 'pf-jump-links-nav' });
        await componentPage.snapshot();
    });
});
//# sourceMappingURL=pf-jump-links.e2e.js.map