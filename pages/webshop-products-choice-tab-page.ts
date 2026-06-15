import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopProductsChoiceTabPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get selectProductName() {
    return this.page.getByRole('button', { name: 'APPAREL & SHOES' });
  }

  // ── Action / assertion methods ──
  async navigateToProductsChoiceTabAndClickOnApparelShoes(productlinkname: string): Promise<void> {
    await this.selectProductName.fill(productlinkname);
  }
}
