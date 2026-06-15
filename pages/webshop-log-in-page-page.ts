import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class WebshopLogInPagePage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get email() {
    return this.page.locator('#Email');
  }

  get password() {
    return this.page.locator('#Password');
  }

  get logIn() {
    return this.page.locator('input[value="Log in"]');
  }

  // ── Action / assertion methods ──
  async enterValidEmailAndPasswordAndClickOnLogInButton(email: string): Promise<void> {
    await this.email.fill(email);
    await this.password.fill("21489a0b-c163-4a62-b61e-501090c9506aMgAxADQAOAA5AGEAMABiAC0AYwAxADYAMwAtADQAYQA2ADIALQBiADYAMQBlAC0ANQAwADEAMAA5ADAAYwA5ADUAMAA2AGEAKq6Wyx+LN7qBjyKzKfZFDr5S2LRCRkbsGHpN4o87sEk=");
    await this.logIn.fill("X");
  }
}
