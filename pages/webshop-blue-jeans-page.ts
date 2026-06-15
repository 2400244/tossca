import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopBlueJeansPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get price() {
    return this.page.getByText('1.00');
  }

  get quantity() {
    return this.page.locator('#addtocart_36_EnteredQuantity');
  }

  get addToCart() {
    return this.page.locator('#add-to-cart-button-36');
  }

  // ── Action / assertion methods ──
  async enterTheQuantityForBlueJeansAndClickOnAddToCart(quantity: string): Promise<void> {
    // TODO: 'Price' Input on <DIV> is not a text field - verify intended action
    await this.assertVisible(this.price);
    await this.quantity.fill(quantity);
    await this.addToCart.fill("x");
  }
}
