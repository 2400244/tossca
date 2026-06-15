import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopPaymentMethodsPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get paymentMethods() {
    return this.page.getByLabel('Payment Methods');
  }

  get continue() {
    return this.page.locator('input[value="Continue"]');
  }

  // ── Action / assertion methods ──
  async choosePaymentMethodAsCreditCardAndClickOnContinueButton(paymentmethod: string): Promise<void> {
    await this.paymentMethods.fill(paymentmethod);
    await this.continue.fill("x");
  }
}
