import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopLogInPagePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ── Locator getters ──
  get email() {
    return this.page.locator('#Email');
  }

  get password() {
    return this.page.locator('#Password');
  }

  get loginButton() {
    return this.page.locator('input[value="Log in"]');
  }

  // ── Action methods ──
  async enterEmail(email: string): Promise<void> {
    await this.email.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.password.fill(password);
  }

  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
  }
}