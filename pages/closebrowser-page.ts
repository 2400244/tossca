import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class ClosebrowserPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get title() {
    return this.page.locator('title');
  }

  // ── Action / assertion methods ──
  async closeWebShop(): Promise<void> {
    await this.title.fill("Demo*");
  }
}
