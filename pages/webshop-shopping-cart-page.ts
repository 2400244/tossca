import { Page, expect } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopShoppingCartPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get enterDiscountCode() {
    return this.page.locator('[name="discountcouponcode"]');
  }

  get applyCoupon() {
    return this.page.locator('[name="applydiscountcouponcode"]');
  }

  get giftCardCouponCode() {
    return this.page.locator('[name="giftcardcouponcode"]');
  }

  get termsOfService() {
    return this.page.locator('#termsofservice');
  }

  get checkout() {
    return this.page.locator('#checkout');
  }

  // ── Action / assertion methods ──
  async enterTheDiscountCodeClickOnApplyCouponCheckTheTermsAndConditionsCheckboxAndThenClickOnTheCheckoutButton(discountname: string): Promise<void> {
    await this.enterDiscountCode.fill(discountname);
    await this.applyCoupon.fill("x");
    await this.giftCardCouponCode.fill("True");
    await this.termsOfService.fill("True");
    // TODO: 'Checkout' Input on <BUTTON> is not a text field - verify intended action
    await this.assertVisible(this.checkout);
  }
}
