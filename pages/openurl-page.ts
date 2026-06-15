import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class OpenurlPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get url() {
    return this.page.goto('https://demowebshop.tricentis.com/');
  }

  // ── Action / assertion methods ──
  async openurl(url: string): Promise<void> {
    await this.page.goto(url);
  }
}