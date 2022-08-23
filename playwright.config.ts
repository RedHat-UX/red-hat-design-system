import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: '**/*.e2e.ts',
  testIgnore: /node_modules|_site/,
  timeout: 120 * 1000,
  workers: process.env.CI ? 2 : 8,
  webServer: process.env.CI ? undefined : {
    command: 'npx @web/dev-server --port 8080',
    port: 8080,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },

  use: {
    viewport: { width: 1920, height: 1080 },
  },

  expect: {
    toMatchSnapshot: { threshold: 0.7 },
    toHaveScreenshot: {
      animations: 'disabled',
      scale: 'device',
      threshold: 0.5,
    }
  },
};

export default config;
