import { Page } from '@playwright/test';
import { BasePage } from './base-page';
import { faker } from '@faker-js/faker';
import { format, addMonths } from 'date-fns';

export class WebshopPaymentInformationCreditCardPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get selectCreditCard() {
    return this.page.locator('#CreditCardType');
  }

  get cardholderName() {
    return this.page.locator('#CardholderName');
  }

  get cardNumber() {
    return this.page.locator('#CardNumber');
  }

  get expirationDateMonth() {
    return this.page.locator('#ExpireMonth');
  }

  get expirationDateYear() {
    return this.page.locator('#ExpireYear');
  }

  get cardCode() {
    return this.page.locator('#CardCode');
  }

  get continue() {
    return this.page.locator('input[value="Continue"]');
  }

  // ── Action / assertion methods ──
  async enterTheCreditCardDeatailsAndAndClickOnContinueButton(): Promise<void> {
    await this.selectCreditCard.selectOption("Visa");
    await this.cardholderName.fill(faker.string.alpha(10));
    await this.cardNumber.fill("4485564059489345");
    await this.expirationDateMonth.selectOption(format(addMonths(new Date(), 4), 'MM'));
    await this.expirationDateYear.selectOption(format(addMonths(new Date(), 0), 'yyyy'));
    await this.cardCode.fill(faker.number.int({ min: 100, max: 999 }).toString());
    await this.continue.fill("x");
  }
}
