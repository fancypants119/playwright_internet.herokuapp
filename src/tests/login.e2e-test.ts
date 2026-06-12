import { test } from '../fixtures/homepage.fixture';
import { expect } from '@playwright/test';

test.describe('Login Tests', () => {

test('Basic Auth', async ({ homePage, page }) => {
  await homePage.openScenario('Basic Auth');
  await page.waitForTimeout(3_000)
  
});

test('Digest Authentication', async ({ homePage, page }) => {
  await homePage.openScenario('Digest Authentication');
    await page.waitForTimeout(3_000)

  
});


});