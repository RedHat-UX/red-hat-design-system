import { test } from '@playwright/test';
import { PfeDemoPage } from '@patternfly/pfe-tools/test/playwright/PfeDemoPage.js';
const tagName = 'pf-code-block';
test.describe(tagName, () => {
    test('snapshot', async ({ page }) => {
        const componentPage = new PfeDemoPage(page, tagName);
        await componentPage.navigate();
        await componentPage.snapshot();
    });
});
//# sourceMappingURL=pf-code-block.e2e.js.map