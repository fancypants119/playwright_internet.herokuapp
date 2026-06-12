import { Page } from "@playwright/test";

export class BasePage {
  constructor(protected page: Page) {}

  get currentPage() {
    return this.page;
  }

  async navigate(path: string) {
    await this.page.goto(path);
  }

  async getHeading() {
    return this.page.locator('h3');
  }
}