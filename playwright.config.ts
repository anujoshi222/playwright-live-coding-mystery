import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'never' }]],
  use: {
    browserName: 'chromium',
    headless: true,
    trace: 'on-first-retry'
  }
});
