import { defineConfig } from '@playwright/test';

export default defineConfig({

  reporter: [
    ['list'],
    ['html', { open: 'never' }]
  ],

  projects: [
    {
      name: 'UI',
      testDir: './tests/ui',
      use: {
        baseURL: 'https://www.saucedemo.com',
        headless: true,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'retain-on-failure'
      }
    },

    {
      name: 'API',
      testDir: './tests/api',
      use: {
        baseURL: 'https://fakestoreapi.com'
      }
    }
  ]
});