import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopApparelShoesProductSelectionPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get blueJeans() {
    return this.page.getByRole('link', { name: 'Blue Jeans' });
  }

  // ── Action / assertion methods ──
  async navigateToBlueJeansAndClickOnBlueJeans(): Promise<void> {
    // TODO: 'Blue Jeans' Input on <A> is not a text field - verify intended action
    await this.assertVisible(this.blueJeans);
  }
}
