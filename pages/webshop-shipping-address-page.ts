import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopShippingAddressPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get continue() {
    return this.page.getByTitle('Continue');
  }

  // ── Action / assertion methods ──
  async clickOnContinueButtonInShippingAddressPage(): Promise<void> {
    await this.continue.fill("x");
  }
}
