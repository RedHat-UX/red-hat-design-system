import { test } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';
const tagName = 'pf-badge';
test.describe(tagName, () => {
    test('snapshot', async ({ page }) => {
        const componentPage = new PfeDemoPage(page, tagName);
        await componentPage.navigate();
        await componentPage.snapshot();
    });
});
//# sourceMappingURL=pf-badge.e2e.js.map