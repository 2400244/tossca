import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopOrderSuccessfulPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get messageOrderSuccessful() {
    return this.page.getByText('Your order has been successfully processed!');
  }

  get orderNumber() {
    return this.page.locator('li').filter({ hasText: /Order number:/ });
  }

  // ── Action / assertion methods ──
  async checkForTheOrderSuccessfulMessageAndOrderNumber(): Promise<void> {
    // TODO: 'Message Order Successful' Input on <DIV> is not a text field - verify intended action
    await this.assertVisible(this.messageOrderSuccessful);
    // TODO: 'Order Number' Input on <LI> is not a text field - verify intended action
    await this.assertVisible(this.orderNumber);
  }
}