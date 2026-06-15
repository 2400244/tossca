import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopShippingMethodPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get shippingMethods() {
    return this.page.getByLabel('Ground');
  }

  get continue() {
    return this.page.locator('input[value="Continue"]');
  }

  // ── Action / assertion methods ──
  async chooseShippingMethodAsAGroundAndClickOnContinueButton(shippingmethod: string): Promise<void> {
    await this.shippingMethods.fill(shippingmethod);
    await this.continue.fill("x");
  }
}