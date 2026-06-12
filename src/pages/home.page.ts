import { env } from "../config/config";
import { BasePage } from "./base.page";


export class HomePage extends BasePage {

  async goHome() {
    await this.page.goto(env.baseUrl);
  }

  async openScenario(name: string) {
    await this.page.getByRole('link', { name }).click();
  }
}