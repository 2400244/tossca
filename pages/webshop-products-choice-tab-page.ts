import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopProductsChoiceTabPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickApparelShoesLink() {
    await this.page.click('a[href="/apparel-shoes"]');
  }
}