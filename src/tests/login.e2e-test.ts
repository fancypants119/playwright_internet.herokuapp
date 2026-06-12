import { test } from '../fixtures/homepage.fixture';
import { expect } from '@playwright/test';

test.describe('Login Tests', () => {

  test('Basic Auth', async ({ authHomePage, }) => {
    await authHomePage.openScenario('Basic Auth');
    await authHomePage.currentPage.waitForLoadState('networkidle');
    await expect(authHomePage.currentPage.locator('text=Congratulations! You must have the proper credentials.')).toBeVisible();
});


test('Form Authentication', async ({ homePage, page }) => {
  await homePage.openScenario('Form Authentication');
  await expect(page.getByRole('heading', { name: 'Login Page' })).toBeVisible()
  await page.getByLabel('Username').fill("tomsmith");
  await page.getByLabel('Password').fill("SuperSecretPassword!");
  await page.getByRole('button', { name: ' Login' }).click()
  await expect(page.getByText('You logged into a secure area')).toBeVisible()

});

});