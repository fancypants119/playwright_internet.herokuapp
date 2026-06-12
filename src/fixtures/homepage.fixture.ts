import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';

type Fixtures = {
  homePage: HomePage;
  authHomePage: HomePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await homePage.goHome();
    await use(homePage);
  },

  authHomePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'admin', password: 'admin' },
    });
    const page = await context.newPage();
    const homePage = new HomePage(page);
    await homePage.goHome();
    await use(homePage);
    await context.close();
  },
});