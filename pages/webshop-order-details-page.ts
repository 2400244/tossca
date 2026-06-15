import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopOrderDetailsPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get orderNumber() {
    return this.page.getByText('Order Number:', { exact: false });
  }

  // ── Action / assertion methods ──
  async checkTheOrderDetails(): Promise<void> {
    // TODO: '#1' Input on <DIV> is not a text field - verify intended action
    await this.assertVisible(this.orderNumber);
  }
}
