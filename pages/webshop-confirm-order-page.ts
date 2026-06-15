import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopConfirmOrderPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get cartTotal() {
    return this.page.locator('.cart-total');
  }

  get confirm() {
    return this.page.locator('input[value="Confirm"]');
  }

  // ── Action / assertion methods ──
  async verificationThePricesInConfirmOrderPage(): Promise<void> {
    await this.cartTotal.fill('');
  }

  async clickOnConfirmButtonInConfirmOrderPage(): Promise<void> {
    await this.confirm.fill("x");
  }
}
