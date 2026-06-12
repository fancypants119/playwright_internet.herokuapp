import { test as base } from '@playwright/test';
import { HomePage } from '../pages/home.page';

type Fixtures = {
  homePage: HomePage;
};

export const test = base.extend<Fixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);

    await homePage.goHome();

    await use(homePage);
  },
});