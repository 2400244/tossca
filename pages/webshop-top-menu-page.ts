import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopTopMenuPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // ── Locator getters ──
  get loginLink() {
    return this.page.locator('a:has-text("Log in")');
  }

  // ── Action methods ──
  async clickLoginLink(): Promise<void> {
    await this.loginLink.click();
  }
}