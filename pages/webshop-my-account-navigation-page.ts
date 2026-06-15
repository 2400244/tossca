import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopMyAccountNavigationPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get myAccountMenu() {
    return this.page.getByText('My account');
  }

  // ── Action / assertion methods ──
  async clickOnOrdersTabInMyAccountNavigationPage(): Promise<void> {
    // TODO: 'My Account Menu' Input on <DIV> is not a text field - verify intended action
    await this.assertVisible(this.myAccountMenu);
  }
}
