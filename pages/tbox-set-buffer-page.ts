import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class TboxSetBufferPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get quantityno() {
    return this.page.getByLabel('Quantity');
  }

  // ── Action / assertion methods ──
  async tboxSetBuffer(): Promise<void> {
    await this.quantityno.fill("23");
  }
}
