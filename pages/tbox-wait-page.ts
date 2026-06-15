import { Page } from '@playwright/test';
import { BasePage } from './base-page';

export class TboxWaitPage extends BasePage {
  constructor(page: Page) { super(page); }

  // ── Locator getters ──
  get duration() {
    return this.page.getByLabel('Duration');
  }

  // ── Action / assertion methods ──
  async tboxWait(): Promise<void> {
    await this.duration.fill("15000");
  }
}